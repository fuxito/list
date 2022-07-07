const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.listen(5020, () => {
  console.log('http://localhost:5020');
});
