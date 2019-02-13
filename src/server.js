const _app = require('./server/app');
const {connectToDb} = require('./server/db');

(async () => {
    const db = await connectToDb();
    const port = process.env.PORT || 8080;
    const app = await _app(db);
    await app.listen(port, () => console.log(`listening on port ${port}`));
})();
