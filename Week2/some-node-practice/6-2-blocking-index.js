var server = require("./5-3-requestHandler-server")
var router = require("./5-4-requestHandler-router")
var requestHandler = require("./6-1-blocking-requestHandler")

var handle = {}
handle["/"] = requestHandler.start
handle["/start"] = requestHandler.start
handle["/upload"] = requestHandler.upload

server.start(router.route, handle)
