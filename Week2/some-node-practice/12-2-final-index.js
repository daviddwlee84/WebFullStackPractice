var server = require("./12-3-final-server")
var router = require("./12-4-final-router")
var requestHandler = require("./12-1-final-requestHandler")

var handle = {}
handle["/"] = requestHandler.start
handle["/start"] = requestHandler.start
handle["/upload"] = requestHandler.upload
handle["/show"] = requestHandler.show

server.start(router.route, handle)
