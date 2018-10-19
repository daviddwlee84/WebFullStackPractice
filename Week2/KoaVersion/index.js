const requestHandler = require('./requestHandler')
const fs = require('fs')

const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const asyncBusboy = require('async-busboy')

const formidable = require("formidable")

// const multer = require('koa-multer')
// const multerConf = {
//   storage: multer.diskStorage({
//     destination: (req, file, next) => {
//       console.log("Request handler 'upload' was called.")
//       next(null, '/tmp')
//     },
//     filename: (req, file, next) => {
//       //console.log(file)
//       /*
//       { fieldname: 'http name',
//         originalname: 'file name',
//         encoding: '7bit',
//         mimetype: 'image/png' }
//       */
//       console.log("about to parse")
//       const ext = file.mimetype.split('/')[1] // extract file extension
//       console.log(file.fieldname + '-' + Date.now() + '.' + ext)
//       next(null, file.fieldname + '-' + Date.now() + '.' + ext)
//     }
//   }),
//   fileFilter: (req, file, next) => {
//     if(!file){
//       next()
//     }
//     const image = file.mimetype.startsWith('image/')
//     if(image){
//       next(null, true)
//     } else {
//       next({message: "File type not supported"}, false)
//     }
//   }
// }


router
  .get('/', (ctx, next) => {
    requestHandler.start(ctx.response)
  })
  .get('/start', (ctx, next) => {
    requestHandler.start(ctx.response)
  })
  // .post('/upload', multer(multerConf).single('upload'), (ctx, next) => {
  //   console.log(ctx)
  //   //requestHandler.upload(ctx.response, ctx.request)
  // })
  .post('/upload', async (ctx, next) => {
    const {files, fields} = await asyncBusboy(ctx.req)
    console.log(files)
    console.log(files[0])
    console.log(files[0].path)
    //files[0].pipe(fs.createWriteStream("/tmp/test.png"))
    fs.rename(files[0].path, "/tmp/test.png", function(error){
      if(error){
        fs.unlink("/tmp/test.png")
        fs.rename(files.upload.path, "/tmp/test.png")
      }
    })
    ctx.response.status = 200
    ctx.response.type = 'text/html'
    ctx.response.body = "received image: <br/>"+
                        "<img src='/show' />"
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

