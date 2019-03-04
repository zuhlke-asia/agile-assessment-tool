const request = require('supertest');
const _app = require('./app');
const { connectToDb, closeDb } = require('./db');
const fs = require('fs');

let db;
let server;

beforeAll(async done => {
    process.env.NODE_ENV = 'test';

    db = await connectToDb();
    const app = await _app(db);

    server = app.listen(done);
});

describe('The root path', () => {
    test('It should response the GET method', done => {
        request(server).get('/')
            .expect(200)
            .end(done);
    });
});

describe('The /api/survey path', () => {
    test('It should save the survey result to the DB', done => {
        const payload = {
            someQuestion: 'someAnswer'
        };

        request(server)
            .post('/api/survey')
            .send(payload)
            .set('Accept', 'application/json')
            .expect(200)
            .end(() => {
                db.collection('userscores').findOne(payload).then(document => {
                    expect(document.someQuestion).toBe(payload.someQuestion);
                    expect(document.date).toBeDefined();
                    done();
                });
            });
    });
});

describe('The /api/surveyconfig path', () => {
    test('It should return the test config file if env is set to test', done => {

        const expectedResponse = JSON.parse(fs.readFileSync(__dirname + '/surveys/survey.test.json', 'utf8'));

        request(server).get('/api/surveyconfig')
            .expect(200)
            .expect(response => {
                expect(response.body).toEqual(expectedResponse);
            })
            .end(done);
    });

});

describe('The /api/feedback path', () => {
    test('Should save feedback to the DB', done => {

        const payload = {
            feedback: 'awesome stuff'
        };

        request(server)
            .post('/api/feedback')
            .send(payload)
            .set('Accept', 'application/json')
            .expect(200)
            .end(() => {
                db.collection('feedbacks').findOne(payload).then(document => {
                    expect(document.feedback).toBe(payload.feedback);
                    expect(document.date).toBeDefined();
                    done();
                });
            });
    });

});


afterAll(done => {
    server.close(() => {
        closeDb();
        done();
    });
});