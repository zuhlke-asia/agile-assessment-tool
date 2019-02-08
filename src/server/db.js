const dbConfig = require('./dbConfig');
const {MongoClient} = require('mongodb');

async function connectToDb() {
    try {
        const { uri, dbName } = await dbConfig.getConfig();
        const client = await MongoClient.connect(uri, {useNewUrlParser: true});
        return client.db(dbName);
    } catch (ex) {
        console.error(ex);
    }
}

module.exports = connectToDb;


