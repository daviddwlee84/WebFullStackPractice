var http = require("http")
var url = require("url")

function start(route, handle){ // Add handle as new parameter
    function onRequest(req, res){
        var pathname = url.parse(req.url).pathname
        console.log("Request for " + pathname + " received.") 

        res.writeHead(200, {"Content-Type": "text/plain"})
        var content = route(handle, pathname) // Passing handler and pathname into router
        res.write(content)
        res.end()
    }
    http.createServer(onRequest).listen(8888)
    console.log("Server has started.")
}

exports.start = start
