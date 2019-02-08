const request = require('supertest');
const _app = require('./app');
const {connectToDb, closeDb } = require('./db');

let app;
let db;

beforeAll(async () => {
   process.env.NODE_ENV = 'test';

   db = await connectToDb();
   app = await _app(db, 8080);
});

afterAll(() => closeDb());


describe('The root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('The /api/survey path', () => {
    test('It should save the survey result to the DB', async () => {
        const payload = {
            someQuestion: 'someAnswer'
        };

        const response = await request(app)
            .post('/api/survey')
            .send(payload)
            .set('Accept', 'application/json');

        const document = await db.collection("userscores").findOne(payload);

        expect(response.statusCode).toBe(200);
        expect(document.someQuestion).toBe(payload.someQuestion);
    });
});