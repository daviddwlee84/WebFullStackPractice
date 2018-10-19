const Koa = require('koa');
const app = new Koa()

function start(route, handle){
  app.use(async ctx => {
    const pathname = ctx.request.path
    console.log("Request for " + pathname + " received.")
    if(pathname === '/upload'){
        console.log(ctx)
        console.log(ctx.request)
    }
    route(handle, pathname, ctx.response, ctx.request)
  })
  app.listen(3000)
  console.log("Server has started.")
}

exports.start = start
