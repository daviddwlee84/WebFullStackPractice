const requestHandler = require('./requestHandler')

const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router
  .get('/', (ctx, next) => {
    requestHandler.start(ctx)
  })
  .get('/start', (ctx, next) => {
    requestHandler.start(ctx)
  })
  .post('/upload', async (ctx, next) => {
    await requestHandler.upload(ctx)
  })
  .get('/show', (ctx, next) => {
    requestHandler.show(ctx)
  })

app.use(router.routes())

app.use(async (ctx, next) => {
  try{
    await next()
    if(ctx.status === 404){
      ctx.response.body = "404 Not Found"
    }
  } catch (err) {
    console.log("No request handler found for " + ctx.path)
  }
})

app.listen(3000)
console.log("Server has started.")

