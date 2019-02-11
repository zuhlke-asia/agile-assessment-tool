const express = require('express');
const _app = express();
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

_app.use(bodyParser.json()); // support json encoded bodies
_app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
_app.use('/static', express.static(path.join(__dirname, '../../build/static')));
_app.use(favicon(path.join(__dirname, '../../build/favicon.ico')));

_app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../../build/index.html'));
});

async function app(dbClient) {
    _app.post("/api/survey", (req, res) => onPostSurveyResult(dbClient, req, res));
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