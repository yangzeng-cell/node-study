const Koa = require("koa");
const app = new Koa();
const router = require("@koa/router")();
const koaBody = require("koa-body");
app.use(koaBody());
router.post("/users", (ctx) => {
  console.log(ctx.request.body);
  // => POST body
  ctx.body = JSON.stringify(ctx.request.body);
});

app.use(router.routes());

app.listen(3000);
