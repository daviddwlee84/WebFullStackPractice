const fs = require('fs')

const asyncBusboy = require('async-busboy')

function start(ctx){
    console.log("Request handler 'start' was called.")

    const body = '<html>' +
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="file" name="upload" multiple>'+
        '<input type="submit" value="Upload" />'+
        '</form>'+
        '</body>'+
        '</html>'
    
    ctx.response.status = 200
    ctx.response.type = 'text/html'
    ctx.response.body = body
}

async function upload(ctx){
    console.log("Request handler 'upload' was called.")

    console.log("about to parse")
    const {files, fields} = await asyncBusboy(ctx.req)
    console.log("parsing done")

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
}

function show(ctx) {
    console.log("Request handler 'show' was called.")
    ctx.response.status = 200
    ctx.response.type = 'image/png'
    ctx.body = fs.createReadStream("/tmp/test.png")
}

exports.start = start
exports.upload = upload
exports.show = show
