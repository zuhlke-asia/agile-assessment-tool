const dbConfig = require('./dbConfig');
const {MongoClient} = require('mongodb');

let client;

async function connectToDb() {
    try {
        const { uri, dbName } = await dbConfig.getConfig();
        client = await MongoClient.connect(uri, {useNewUrlParser: true});
        return client.db(dbName);
    } catch (ex) {
        console.error(ex);
    }
}

function closeDb() {
    if (!client) {
        return;
    }

    client.close();
}

module.exports = {
    connectToDb,
    closeDb
};


