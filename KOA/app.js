const Koa = require('koa');

const router = require('koa-router')();

const app = new Koa();

app.use(async (ctx,next)=>{
    console.log('Process ${ctx.request.method}&{ctx.request.url}...');
    await next();
});



app.listen(8888);
console.log('app started at port 8888....');
