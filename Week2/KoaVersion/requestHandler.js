const fs = require('fs')

//const uploadImg = multer({dist: 'tmp/'}).single('image')

function start(response){
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
    
    response.status = 200
    response.type = 'text/html'
    response.body = body
}

function upload(response, request){
    console.log("Request handler 'upload' was called.")

    console.log("about to parse")

    const file = request.file
    console.log(file)
    const reader = fs.createReadStream(file.path)
    console.log("parsing done")

    const stream = fs.createWriteStream("/tmp/test.png")
    reader.pipe(stream)

    response.status = 200
    response.type = 'text/html'
    response.body = "received image: <br/>"+
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
