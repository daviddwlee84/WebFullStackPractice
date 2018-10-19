# Homework 2

## 1. Koa.js

Use Koa to implement the web application of the example of *The Node Beginner Book*. Upload to Github repository, and summary the problem and solution during developing process.

* [Koa.js](https://koajs.com/)

> Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. By leveraging async functions, Koa allows you to ditch callbacks and greatly increase error-handling. Koa does not bundle any middleware within its core, and it provides an elegant suite of methods that make writing servers fast and enjoyable.

* Files
    * [index.js](KoaVersion/index.js)
    * [requestHandler.js](KoaVersion/requestHandler.js)

### Cascading

* Handling callbacks by using `async`, `await` and `next`.
* Simply passes control (`next`) through series of functions until one returns, Koa invoke "downstream", then control flows back "upstream"

### Context

A Context is created per request, and is referenced in middleware as the receiver, or the ctx identifier

```javascript
app.use(async ctx => {
  ctx; // is the Context
  ctx.request; // is a Koa Request
  ctx.response; // is a Koa Response
});
```

### Koa Middlewares

* [`koa-router`](https://github.com/alexmingoia/koa-router): for router and work with koa-multer
* `koa-multer`: for upload file ([Express.js multer](https://github.com/expressjs/multer))

* `koa-bodyparser`: for parse jason and form
* `koa-send`: for download file
* `koa-session`: for session
* `koa-sslify`: forced change to https
* `koa-favicon`
* `koa-logger`
* `koa-static`

## 2. RESTful API

### Overview

RESTful is a design fasion or style. Or can be considered as a standard.

* Pros and Cons of RESTful API
    * Advantages
        * Clear and Short URI: Very easy to read and understand
        * Show resource in an elegant way

            Use different method to manipulate the same resource can be represented in the same URI (same interface, same endpoint) by using different HTTP verbs (e.g. a page, a file)

    * Disadvantages
        * Security problem
            
            If other people get to well know your URL structure it will be dangerous. (e.g. Operate CRUD to your database)

        * Privacy problem

            If URL is designed in sequence. (e.g. /api/users/1/ ... /api/users/100/), then a user is able to see other user's page.

### Detail

* API = Application Programming Interface
* REST = (Resource) Respresentational State Transfer
    * Resource: decide by [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) (URL is a sort of URI)
    * Representational: JSON, XML, YAML
    * State Transfer: use HTTP verbs (GET, POST, PUT, DELETE)
* CRUD: Database operations (state of resources)
    * Create
    * Read
    * Update
    * Delete
* HTTP Verbs (HTTP Request Methods): The HTTP verbs comprise a major portion of our “uniform interface” constraint and provide us the action counterpart to the noun-based resource.
    * POST
    * GET
    * PUT
    * PATCH
    * DELETE
* Method Idempotent: No matter how many times you request. The response will be the same.
    * If a method won't modify the server, it is considered a safe method
* Endpoints: The URI/URL where api/service can be accessed by a client application
* Authentication: Some API's require authentication to use the service (e.g. `?acces_token=OAUTH-TOKEN`)

#### The CRUD operations correspond to the HTTP Verbs

HTTP Verb|CRUD          |Method Idempotent|Modify Server
---------|--------------|-----------------|-------------
POST     |Create        |No               |Yes
GET      |Read          |Yes              |No
PUT      |Update/Replace|Yes              |Yes
PATCH    |Update/Modify |No               |Yes
DELETE   |Delete        |Yes              |Yes
OPTIONS  |-             |Yes              |-
HEAD     |-             |Yes              |-

* HTTP Status Code (Response Code)
    * **2xx Success**
        * **200 OK**: General success status code. This is the most common code. Used to indicate success.
        * **201 CREATED**: Successful creation occurred (via either POST or PUT). Set the Location header to contain a link to the newly-created resource (on POST). Response body content may or may not be present.
        * **204 NO CONTENT**: Indicates success but nothing is in the response body, often used for DELETE and PUT operations.
    * **4xx Client Error**
        * **400 BAD REQUEST**: General error for when fulfilling the request would cause an invalid state. Domain validation errors, missing data, etc. are some examples.
        * **401 UNAUTHORIZED**: Error code response for missing or invalid authentication token.
        * **403 FORBIDDEN**: Error code for when the user is not authorized to perform the operation or the resource is unavailable for some reason (e.g. time constraints, etc.).
        * **404 NOT FOUND**: Used when the requested resource is not found, whether it doesn't exist or if there was a 401 or 403 that, for security reasons, the service wants to mask.
        * **405 METHOD NOT ALLOWED**: Used to indicate that the requested URL exists, but the requested HTTP method is not applicable. For example, POST /users/12345 where the API doesn't support creation of resources this way (with a provided ID). The Allow HTTP header must be set when returning a 405 to indicate the HTTP methods that are supported. In the previous case, the header would look like "Allow: GET, PUT, DELETE"
        * **409 CONFLICT**: Whenever a resource conflict would be caused by fulfilling the request. Duplicate entries, such as trying to create two customers with the same information, and deleting root objects when cascade-delete is not supported are a couple of examples.
    * **5xx Server Error**
        * **500 INTERNAL SERVER ERROR**: Never return this intentionally. The general catch-all error when the server-side throws an exception. Use this only for errors that the consumer cannot address from their end.

### Others

* To create an API document
    * [Aglio](https://github.com/danielgtaylor/aglio)
        * [Tutorial](https://github.com/twtrubiks/aglio_tutorial)
    * [Swagger](http://swagger.io)
        * [Tutorial](https://github.com/twtrubiks/django_rest_framework_swagger_tutorial)

### References

* [Learn REST: A RESTful Tutorial](https://www.restapitutorial.com/)
    * [HTTP Status Codes](https://www.restapitutorial.com/httpstatuscodes.html)
* [認識 RESTful API](https://github.com/twtrubiks/django-rest-framework-tutorial/tree/master/RESTful-API-Tutorial)
    * [Youtube Tutorial](https://youtu.be/gHCB0sd47Is)
* [Youtube - REST API concepts and examples](https://youtu.be/7YcW25PHnAA)
* [Youtube - What is a RESTful API? Explanation of REST & HTTP](https://youtu.be/Q-BpqyOT3a8)

* [Wiki - HTTP Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

---

> Additional Notes

---

## Notes about Node.js (and JavaScript)

Follow the example of **The Node Beginner Book**

### Quick view

* Node.js runs on Google's V8 VM (the same runtime environment for JavaScript that Google Chrome uses)
* Node.js is really two things:
    * a runtime environment
    * a library
* With Node.js, we not only implement our application, we also implemet the whole HTTP server. (basically the same)
* Node.js has only one single process
* Node.js use event loop as a model to implement single-threaded, event-driven, asynchronous callbacks

### An example: A image upload webpage

Goal: A web application that can upload image and show it on the browser.

* Welcome page: http://localhost:8888/start
* Image page: http://localhost:8888/upload

#### Materials

* HTTP Server: to serve web pages
    * Router: to map requests to request handlers
        * Request Handlers: to fullfill the requests
            * Request Data Handling: to handle any incoming data and give it to request handlers in a convenient form
            * View Logic: use to send content to the user's browers
            * Upload Handling: Handling the upload images

### Passing functions

* Function can be pass as an variable.
* Anonymous function: define and pass a function as aparameter to another function in-place

(see the difference between two version of writting style ([Anonymous Function](some-node-practice/1-basic-http-server.js))([Passing Function](some-node-practice/2-another-form.js)))

### Event-driven asynchronous callbacks

* Event Loop: After Node.js execute current function, it will enter the event loop. Node.js will continuously cycles throught this loop again and again whenever there is nothing else to do, waiting for events.
* Usage of callbacks
    * Usually using when something need "times" to execute. (since Node.js is single-threaded, you cannot wait until something return)
    * The program will continous executing.
    * When "something" is done, it will execute the callback function asynchronously

[Understanding Node.js](http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb)

### Module

* Share module to different file
    1. Export a function
        `exports.func = func`
    2. Requiring its file
    3. Assigning it to a variable
        `var module = require("./path/to/module")

### Route Requests

We extract the requested URL as well as the GET/POST parameters. Distinguish requests based on the URL path requested.

All the information we need is available through the `req` object which is passed as the first parameter to the callback function

* Example: http://localhost:8888/start?foo=bar&hello=world
    * module *url*: extract the different parts of a URL
        * url.parse(string).pathname => /start
        * url.parse(string).query => foo=bar&hello=world
    * module *querystring*: parse the query string for request parameters
        * querystirng.parse(string)["foo"] => bar
        * querystirng.parse(string)["hello"] => world

(favicon.ico (request): an icon associated with a URL that is variously displayed, as in a browser's address bar or next to the site name in a bookmark list)

[Dependency Injection](https://martinfowler.com/articles/injection.html)

### Functional Programming and verbs

Passing function is not only a technical consideration. With regard to software design, it's almost philosophical.

* Pass an object A into another object B, and the object B can call object A's function.
* But object B doesn't need the thing (object A). It only need to get something done.
* To get something done, you don't need things at all, you need *actions*. i.e. *verbs*

[Execution in the Kingdom of Nouns](http://steve-yegge.blogspot.com/2006/03/execution-in-kingdom-of-nouns.html)

### Request Handler

Dependency Injection

* Shouldn't be used only for the sake of using it
* It make sense to loosely couple the router and its request handlers, and thus making the router really reusable
* It will get trouble when the request handlers increase and vary. (we sure don't want to fiddle around mapping requests to handlers in the router anytime a new URL/request handler is added)

Associative Object (~~Arrays~~)

* In JavaScript, objects are just collections of name/value pairs - think of a JavaScript object as a dictionary with string keys
    * values can be strings, numbers or functions! (like other OOPL's methods)

### Blocking and non-blocking

#### Blocking problem

Other lines code need to wait the blocking operation finish to execute. ([Example](some-node-practice/6-1-blocking-requestHandler.js))

* Expensive operations are ok, but we must take care to not block the Node.js process with them
* Whenever expensive operations must be executed, these must be put in the background, and their events must be handled by the event loop

#### Non-blocking

Program won't execute in the "sequence". ([Example](some-node-practice/7-1-nonblocking-requestHandler.js))

* The code is executed synchronous, but the non-blocking operation (the callback function) works asynchronously.

#### Summary

* Non-blocking is good for executing expensive operations
* Use a callback function to work asyncronously (i.e. non-blocking)
* You can pass a object into a callback function and access it when it returns back (if you need some information that have to wait until some operation finish)

### Handling POST requests

* To make the whole process non-blocking, Node.js serves our code the POST data in small chunks, callbacks that are called upon certain events.
    * These events are
        * data (a new chunk of POST data arrives)
        * end (all chunks have been received)

* Add *listeners* to the *request* object that is passed to the *onRequest* callback whenever an HTTP request is received: to tell Node.js which function to call back.

* Use `querystring.parse(data).text` to extract the text from the request object

### Handling file uploads

* Handling incoming files is "only" about handling POST data

* Use `node-formidable` module: abstracts away all the nasty details of parsing incoming file data
    * `npm install formidable`

* formidable
    * IncomingForm
        * an abstraction of this submitted form
        * used to parse the request object
    * *file* object (defined in the form.parse call)

* fs: read the contents of the file into Node.js server

## Notes about this project

Dependencies

* koa
* koa-router
* async-busyboy
* fs

### 404 page

* [Handle a 404 error](https://github.com/alexmingoia/koa-router/issues/371)

### Upload image

* [`async-busboy`](https://github.com/m4nuC/async-busboy)

### Show image

* [Koa issue #815](https://github.com/koajs/koa/issues/815)
    * image pipe to res: `ctx.body = image`
        * `ctx.body = fs.createReadStream('path/to/file')`

## Links

* [Node Koa2 實戰](https://github.com/ikcamp/koa2-tutorial)

* [Use ES6 import syntax in Node.js](https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import)

* [Postman](https://www.getpostman.com/): An API Development Environment

## Author

Name: David Lee

Email: dwlee@pku.edu.cn

Github: [https://github.com/daviddwlee84](https://github.com/daviddwlee84)