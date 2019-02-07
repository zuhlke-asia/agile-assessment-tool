module.exports = {
    db: {
        uri: process.env.DB_URI || 'mongodb://root:example@mongo:27017',
        dbName: process.env.DB_NAME || 'agileassessment'
    },
    port: process.env.PORT || 8080
};