function route(handle, pathname, response, request){
    console.log("About to route a request for " + pathname)
    if(typeof handle[pathname] === 'function'){
        return handle[pathname](response, request)
    } else {
        console.log("No request handler found for " + pathname)
        response.status = 404
        response.body = "404 Not found"
    }
}

exports.route = route
