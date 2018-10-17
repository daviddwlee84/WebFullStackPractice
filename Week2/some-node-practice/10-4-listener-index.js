var server = require("./10-1-listener-server")
var router = require("./10-2-listener-router")
var requestHandler = require("./10-3-listener-requestHandler")

var handle = {}
handle["/"] = requestHandler.start
handle["/start"] = requestHandler.start
handle["/upload"] = requestHandler.upload

server.start(router.route, handle)
