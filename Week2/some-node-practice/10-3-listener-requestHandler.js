var querystring = require("querystring")

function start(response){
    console.log("Request handler 'start' was called.")

    var body = '<html>' +
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>'

    response.writeHead(200, {"Content-Type": "text/html"})    
    response.write(body)
    response.end()
}

function upload(response, postData){ // receive response from server's callback function
    console.log("Request handler 'upload' was called.")
    response.writeHead(200, {"Content-Type": "text/plain"})
    //response.write("You've sent: " + postData) // the complete body of the POST request
    response.write("You've sent the text: " + querystring.parse(postData).text)
    response.end()
}

exports.start = start
exports.upload = upload
