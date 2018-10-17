var server = require("./5-3-requestHandler-server")
var router = require("./5-4-requestHandler-router")
var requestHandler = require("./5-1-requestHandler-requestHandler")

var handle = {}
handle["/"] = requestHandler.start
handle["/start"] = requestHandler.start
handle["/upload"] = requestHandler.upload

server.start(router.route, handle)
