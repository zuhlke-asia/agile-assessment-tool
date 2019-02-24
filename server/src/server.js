const _app = require('./app');
const {connectToDb} = require('./db');

(async () => {
    const db = await connectToDb();
    const port = process.env.PORT || 8080;
    const app = await _app(db);
    await app.listen(port, () => console.log(`listening on port ${port}`));
})();
