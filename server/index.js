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

console.log('dirname: ' + __dirname);

app.use('/static', express.static(path.join(__dirname, '../client/build/static')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

console.log('connecting to mongo...');
connectToDb();

async function connectToDb() {
    try {
        const client = await MongoClient.connect(dbUri, {useNewUrlParser: true});

        console.log("Connected successfully to server");

        app.listen(port, () => console.log(`listening on port ${port}`));

        const db = client.db(dbName);

        app.post("/api/questions", (req, res) => {
            db.collection("questions").insertOne(JSON.parse(req.body.data))
                .then(result => {
                    console.log(result);
                    console.log("Inserted 1 document into the collection");
                    res.send(result);
                })
                .catch(err => {
                    console.log(err);
                });
            db.collection("questions").find({}).toArray((err, docs) => {
                console.log(docs);
            })
        });


    } catch (ex) {
        console.error(ex);
    }
}



