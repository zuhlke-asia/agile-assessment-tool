const express = require('express');
const _app = express();
const path = require('path');
const bodyParser = require('body-parser');
const surveyReader = require('./surveys/surveyReader');

_app.use(bodyParser.json()); // support json encoded bodies
_app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
_app.use('/static', express.static(path.join(__dirname, '../../build/static')));

_app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../../build/index.html'));
});

function onGetSurveyConfig(req, res) {
    res.json(surveyReader.readSurveyConfig(process.env.NODE_ENV));
}

async function app(dbClient) {
    _app.post("/api/survey", (req, res) => onPostSurveyResult(dbClient, req, res));
    _app.get("/api/surveyconfig", (req, res) => onGetSurveyConfig(req, res));
    return _app;
}


async function onPostSurveyResult(db, req, res) {
    try {
        await db.collection("userscores").insertOne(req.body);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = app;