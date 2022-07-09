const Koa = require('koa');
const Router = require('koa-router');
const db = require('./db.js');
const dbo = db.client.db('listdb');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

app.use(cors());

const postItem = async (ctx) => {
  console.log(ctx.body);
  await dbo.collection('list').insertOne(ctx.body);
  return;
};
// Router
router.post('/postitem', postItem);
// router.get();

app.use(router.routes());

app.listen(5020, () => {
  db.mongoConnection();
  console.log('http://localhost:5020');
});
