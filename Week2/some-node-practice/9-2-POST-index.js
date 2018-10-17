var server = require("./8-1-responding-server")
var router = require("./8-2-responding-router")
var requestHandler = require("./9-1-POST-requestHandler")

var handle = {}
handle["/"] = requestHandler.start
handle["/start"] = requestHandler.start
handle["/upload"] = requestHandler.upload

server.start(router.route, handle)
