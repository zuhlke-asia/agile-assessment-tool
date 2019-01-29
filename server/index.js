const express = require('express');
const app = express();

const config = require('./config');
const MongoClient = require('mongodb').MongoClient;

const url = config.db.uri;
const dbName = config.db.dbName;
const port = config.port;

const client = new MongoClient(url);

app.get('/', (req, res) => {
    res.send('successfully connected to mongo')
});


console.log('connecting to mongo...');
client.connect(function(err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Connected successfully to server");


    app.listen(port, () => console.log(`listening on port ${port}`));

    const db = client.db(dbName);

    client.close();
});
