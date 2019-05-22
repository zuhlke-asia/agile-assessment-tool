const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

let client;

async function connectToDb() {
  try {
    const isTestEnv = process.env.NODE_ENV === 'test';

    const { uri, dbName } = isTestEnv
      ? await getInMemoryDbConfig()
      : await getDefaultDbConfig();

    client = await MongoClient.connect(uri, { useNewUrlParser: true });
    return client.db(dbName);
  } catch (ex) {
    console.error(ex);
  }
}

function closeDb(cb) {
  if (client) {
    client.close(cb);
  }
}

async function getInMemoryDbConfig() {
  const mongod = new MongoMemoryServer();

  const uri = await mongod.getConnectionString();
  const dbName = await mongod.getDbName();

  return { uri, dbName };
}

async function getDefaultDbConfig() {
  const uri = process.env.DB_URI || 'mongodb://root:example@mongo:27017';
  const dbName = process.env.DB_NAME || 'agileassessment';
  return { uri, dbName };
}

module.exports = {
  connectToDb,
  closeDb,
};
