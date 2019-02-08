const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;

async function getConfig() {
    let uri = process.env.DB_URI || 'mongodb://root:example@mongo:27017';
    let dbName = process.env.DB_NAME || 'agileassessment';

    if (process.env.NODE_ENV === 'test') {
        const mongod = new MongoMemoryServer();

        uri = await mongod.getConnectionString();
        dbName = await mongod.getDbName();
    }

    return {
        uri,
        dbName
    };
}

module.exports = {
    getConfig
};