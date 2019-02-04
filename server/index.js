const express = require('express');
const app = express();
const path = require('path');

const config = require('./config');
const {MongoClient} = require('mongodb');

const dbUri = config.db.uri;
const dbName = config.db.dbName;
const port = config.port;
const bodyParser = require('body-parser');


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
app.use('/static', express.static(path.join(__dirname, '../client/build/static')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

(async () => {
    const db = await connectToDb();

    app.post("/api/userscores", (req, res) => onPostSurveyResult(db, req, res));
})();

async function onPostSurveyResult(db, req, res) {
    try {
        const dbRes = await db.collection("userscores").insertOne(req.body);
        res.send(dbRes);
    } catch (err) {
        res.status(500).send(err);
    }
}


async function connectToDb() {
    try {
        const client = await MongoClient.connect(dbUri, {useNewUrlParser: true});
        console.log("Connected successfully to server");
        app.listen(port, () => console.log(`listening on port ${port}`));
        return client.db(dbName);
    } catch (ex) {
        console.error(ex);
    }
}



