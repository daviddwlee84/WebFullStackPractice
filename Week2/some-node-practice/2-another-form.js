var http = require("http")

// Asynchronous Callback
function onRequest(req, res){
    console.log("Request received.") // Callback function will call only when receive a request
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.write("Hello World")
    res.end()
}

http.createServer(onRequest).listen(8888)

// It will immediately output
console.log("Server has started.")