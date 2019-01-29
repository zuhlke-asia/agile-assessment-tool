const express = require('express');
const app = express();

const config = require('./config');
const { MongoClient } = require('mongodb');

const dbUri = config.db.uri;
const dbName = config.db.dbName;
const port = config.port;

app.get('/', (req, res) => {
    res.send('successfully connected to mongo')
});

console.log('connecting to mongo...');
connectToDb();

async function connectToDb() {
    try {
        const client = await MongoClient.connect(dbUri, { useNewUrlParser: true });

        console.log("Connected successfully to server");

        app.listen(port, () => console.log(`listening on port ${port}`));

        const db = client.db(dbName);

        client.close();
    } catch (ex) {
        console.error(ex);
    }
}