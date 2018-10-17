# Homework 2

## 1. Koa.js

Use Koa to implement the web application of the example of *The Node Beginner Book*. Upload to Github repository, and summary the problem and solution during developing process.

## 2. RESTful API

Explain the pros and cons of RESTful API

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

(see the difference between two version of writting style ([Anonymous Function](some-node-practice/1-basic-http-server.js))(([Passing Function](some-node-practice/2-another-form.js)))

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

## Links

## Author

Name: David Lee

Email: dwlee@pku.edu.cn

Github: [https://github.com/daviddwlee84](https://github.com/daviddwlee84)