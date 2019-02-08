const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const dbConfig = require('./dbConfig');
const {MongoClient} = require('mongodb');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
app.use('/static', express.static(path.join(__dirname, '../build/static')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

(async () => {
    const db = await connectToDb();

    const port = process.env.PORT || 8080;

    app.listen(port, () => console.log(`listening on port ${port}`));

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
        const { uri, dbName } = await dbConfig.getConfig();
        const client = await MongoClient.connect(uri, {useNewUrlParser: true});
        return client.db(dbName);
    } catch (ex) {
        console.error(ex);
    }
}



