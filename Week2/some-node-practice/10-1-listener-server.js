var http = require("http")
var url = require("url")

function start(route, handle){
    function onRequest(req, res){
        var postData = ""
        var pathname = url.parse(req.url).pathname
        console.log("Request for " + pathname + " received.") 

        req.setEncoding("utf8") // expect the encoding of the received data to be UTF-8

        req.addListener("data", function(postDataChunk){
            // called when a new chunk of data was received
            postData += postDataChunk // step by step fills the postData variable
            console.log("Received POST data chunk '" + postDataChunk + "'.")
        })

        req.addListener("end", function(){
            // called when all chunks of data have been received
            route(handle, pathname, res, postData) // make sure only called when all POST data is gathered
        })
    }
    http.createServer(onRequest).listen(8888)
    console.log("Server has started.")
}

exports.start = start
