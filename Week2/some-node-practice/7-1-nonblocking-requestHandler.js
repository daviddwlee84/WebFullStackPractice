var exec = require("child_process").exec

function start(){
    console.log("Request handler 'start' was called.")
    var content = "empty"

    exec("ls -lah", function (error, stdout, stderr){
        content = stdout
    })

    return content // Because exec is a non-blocking operation. content will return "empty"
}

function upload(){
    console.log("Request handler 'upload' was called.")
    return "Hello Upload"
}

exports.start = start
exports.upload = upload
