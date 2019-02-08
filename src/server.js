const app = require('./server/app');
const {connectToDb} = require('./server/db');

(async () => {
    const db = await connectToDb();
    const port = process.env.PORT || 8080;
    const _app = await app(db);
    _app.listen(port, () => console.log(`listening on port ${port}`));
})();
