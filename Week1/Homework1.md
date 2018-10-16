# Homework 1

## 1. What is TCP/IP Protocol? What is HTTP Protocol?

What is Protocol?

* Human protocol: there are specific messages we send, and specific actions we take in response to the received reply messages or other events.
* Internet protocol: A protocol defines the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or recipt of a message or other event.

### TCP/IP

* TCP: Transmission Control Protocol
* IP: Internet Protocol
    * specifies the format of the packets that are sent and received among routers and end system
* TCP/IP: The collectively known internet principlal protocols

### HTTP

* HTTP: HyperText Transfer Protocol
    * the Web's application layer protocol
    * the heart of the Web
    * implement in two programs
        * a client program (e.g. Web browsers)
        * a server program (e.g. Web servers)
        * (executing on different end system, talk to each other by exchanging HTTP messages)
    * HTTP defines the structure of the messages and how the client and server exchanges the messages
    * HTTP defines how Web clients request Web pages from Web servers and how servers transfer Web pages to clients

### Others

#### Internet Standatds

* Internet standatd are developed by the **Internet Engineering Task Force (IETF)**
* The ITEF standard documents are called **Requests for comments (RFCs)**
* They define protocols such as TCP, IP, HTTP, SMTP (for e-mail)...

* The **IEEE 802 LAN/MAN Standards Committee** specifies the Ethernet and wireless WiFi standards

### Web Terminology

* Web page (document): consists of *objects*
    * Base HTML file + several referenced object
* Object: simply a file (e.g. HTML file, JPEG, video...) that is addressable by a single URL

## 2. The understanding of the relationship of URL, domain name, IP and port

* URL: Uniform Resource Locator (web address)
    * hostname: the hostname of the server that houses the object
    * path name: the object's path name

![URL syntax diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/URI_syntax_diagram.png/800px-URI_syntax_diagram.png)

> scheme(protocol)://hostname/path/to/file

* IP Address: An IP address consists of four bytes and has arigid hierarchical structure
    * in decimal notation from 0 to 255
    * we obtain more and more specific information about where the host is located in the Internet (scan the address from left to right)

* Domain name: the part of a network address which identifies it as belonging to a particular domain
    * Two ways to indentify a host - by a hostname and by an IP address
        * hostname: people prefer the more mnemonic hostname identifier
        * IP address: routers prefer fixed-length, hierarchically structured IP address
    * DNS (Domain Name System): translates hostnames to IP address
        * a distributed database implemented in a hierarchy of DNS servers
        * an application-layer protocol that allows host to query the distributed database
        * the DNS protocol runs over UDP and uses port 53
        * Other import services
            * Host aliasing
            * Mail server aliasing
            * Load distribution

* Port number (Transport layer)
    * In general a host could be running many network applications => Each on a specific port
    * Source and destination port numbers are used for multiplexing/demultiplexing data from/to upper-layer applications
    * The port numbers allow the destination host to pass the application data to the correct process running on the destination end system.
    * Ports are indicated in TCP and UDP's header
    * Popular applications have been assigned specific port numbers
        * Web server: 80
        * Mail server: 25
        * ...

## 3. Basic manipulation of Git and common commands

### Get a repository

* `git init`: initialize a repository
* `git clone`: clone a remote repository

### Update status

* `git fetch`: fetch from remote
* `git pull`: pull from remote

### Upload status

* `git add`: add files in to track
    * `git add -A`: add all
* `git commit`: commit the changes
    * `git commit -m <message>`: with message
    * `git commit --amend`: replace the result of the last commit
* `git push`: push to remote
    * `git push <remote name> <branch name>`
    * `git push origin master`: push the master branch to the origin server

### Check status

* `git status`
* `git diff`

### Other

* `git reset`: literarily
* `git checkout`: go through other branch or version

## 4. What's the difference and connection between Git and Github?

### Difference

* Git is a version control software
* Github is just a remote server to store the repositories (so it doesn't have to be Github e.g. GitLab, Bitbucket)

### Connection

* Github is a web-based hosting service for version control using Git
* Github offers all of the distributed version control and source code management functionality of Git as well as adding its own features

## 5. What is prototype in JavaScript?

* Types in JavaScript
    * Object
    * Arrays
    * Functions
    * ... everything else is an object
* Primitives vs. Objects
    * Primitives
        * e.g. null, undefined, number, boolean, string, symbol
        * Primitives are immutable: if you want to change them you're actually replacing them with a new value rather that actually changing them themselves
    * Objects
        * Object are mutable and stored by reference

## 6. Where is this in JavaScript pointing at?

* this
    * Refers to an object that's set at the creation of a new execution context (function invocation)
    * In the global execution (e.g. window console, Node REPL) context, refers to global object
    * If the function is called as a method of an object, 'this' is bound to the object the method is called on
* Setting 'this' manually
    * bind(), call, apply()
        * bind(): will return a new function
        * call(), apply(): will immediate invoke that function
    * ES6 arrow notation: bind 'this' to be whatever 'this' is at the time that we declare the function rather than at the time that we invoke the function

## 7. How to interpret asynchronous in JavaScript?

* JavaScript property
    * JavaScript is a sigle-threaded, synchronous language
    * JavaScript has function that 'act asynchronously'
* Asynchronous JavaScript
    * Execution stack
        * Functions invoked by other functions get added to the call stack
        * When functions complete, they are removed from the stack and the frame below continues executing
    * Browser APIs
    * Function queue
    * Event loop
* Asynchronous Functions: Using at the siatuation that you're not sure when will the funciton return
    * setTimeout()
    * XMLHttpRequest(), jQuery.ajax(), fetch()
    * Database calls

## 8. Relationship between ES6 and JavaScript

* ECMAScript
    * ECMA (European Computer Manufacturers Association)
    * To standardize JavaScript
* ES6: ECMAScript 2015 (the 6th edition)
    * There is a lot of new syntax and features appear in this new standard
    * This update adds significant new syntax for writing complex applications, including classes and modules, but defines them semantically in the same terms as ECMAScript 5 strict mode. Other new features include iterators and for/of loops, Python-style generators, arrow functions, binary data, typed arrays, collections (maps, sets and weak maps), promises, number and math enhancements, reflection, and proxies (metaprogramming for virtual objects and wrappers). The complete list is extensive.

## References

* Books
    * Computer Networking - A TopDown Approach 6ed.
    * Pro Git 2ed.
* Online Resources
    * [Ops School Curriculum - Networking 101](http://www.opsschool.org/en/latest/networking_101.html)

### Questions

* Q1
    * Ch 1.1.3 What is a protocol
    * Ch 2.2 The Web and HTTP
* Q2
    * Ch 2.5 DNS - The internet's directory service
    * [Wiki- URL](https://en.wikipedia.org/wiki/URL)
    * Ch 2.1.2 Processes Communicating
    * Ch 3.2 Multiplexing and Demultiplexing
    * Ch 3.3.1 UDP Segment Structure
    * Ch 3.5.2 TCP Segment Structure
* Q5
    * Harvard CS50 Mobile App Develpment with React Native - Lecture 0
* Q6, Q7
    * Harvard CS50 Mobile App Develpment with React Native - Lecture 1
* Q8
    * [Wiki - ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)

## Author

Name: David Lee

Email: dwlee@pku.edu.cn

Github: [https://github.com/daviddwlee84](https://github.com/daviddwlee84)