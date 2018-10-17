var http = require("http")
var url = require("url")

function start(route){ // Input route as a parameter
    function onRequest(req, res){
        var pathname = url.parse(req.url).pathname
        console.log("Request for " + pathname + " received.") 

        route(pathname) // Passing pathname into router

        res.writeHead(200, {"Content-Type": "text/plain"})
        res.write("Hello World")
        res.end()
    }
    http.createServer(onRequest).listen(8888)
    console.log("Server has started.")
}

exports.start = start
