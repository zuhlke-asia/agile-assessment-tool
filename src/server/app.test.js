const request = require('supertest');
const _app = require('./app');
const {connectToDb, closeDb } = require('./db');

let db;
let server;

beforeAll(async done => {
   process.env.NODE_ENV = 'test';

   db = await connectToDb();
   const app = await _app(db);

   server = app.listen(done);
});

describe('The root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('The /api/survey path', () => {
    test('It should save the survey result to the DB', async () => {
        const payload = {
            someQuestion: 'someAnswer'
        };

        const response = await request(server)
            .post('/api/survey')
            .send(payload)
            .set('Accept', 'application/json');

        const document = await db.collection("userscores").findOne(payload);

        expect(response.statusCode).toBe(200);
        expect(document.someQuestion).toBe(payload.someQuestion);
    });
});

afterAll(done => {
    server.close(done);
    closeDb();
});