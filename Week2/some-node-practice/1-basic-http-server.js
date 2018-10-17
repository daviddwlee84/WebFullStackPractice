var http = require("http")

// In-place anonymous function
http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.write("Hello World")
    res.end()
}).listen(8888)