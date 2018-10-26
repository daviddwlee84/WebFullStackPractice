# Homework 3

## 1. What are the meanings or the usages of the folders in the Root ( \ ) of the Linux directory

### Linux

* `/bin` & `/sbin`
    * `/bin`: holds many of binaries (executable).
    * `/sbin`: holds binaries reserved for system administrators.
    * Both of them are default setting in the PATH environment variable (i.e. When you type a command into the terminal, these are the folders you're searching through).
        * You can check your PATH environment variable by using `echo $PATH`
        * And you can check your setting in the configure file of your shell.
            * zsh -> `~/.zshrc`
            * bash -> `~/.bash_profile`
* `/boot`
    * These are the files that the computer needs to boot.
        * bootloader
        * Linux kernel
* `/dev`: abbreviation of device
    * Your **hardwares** are related to the *files*. (e.g. CPU, hard drives)
    * Unix system treat everything as a file, even when they aren't.
* `/etc`
    * Start-up scripts
    * Configurations files
    * Usually you will need administrator privilege to edit them
    * (This began as a place to dump files that didn't have a home)
* `/home`
    * Each user gets their own directory.
        * documents
        * music
        * videos
        * ...
    * `/home/[username]` = `~`
* `lib` & `/lib64`
    * This location holds library images that the computer needs to boot plus kernel modules.
    * The contents of this folder also enable you to run commands in a root environment.
* `/media`
    * Like `/dev`, this folder contains files corresponding to hardware.
    * Removable media
        * Flash drives
        * CD roms
* `/mnt`
    * Temporarily mounting drives.
    * (Older Linux systems put more demand on the `/mnt` directory)
    * (These days many temporary mounts, such as loading an external hard drive, use `/media`)
* `/opt`: abbreviation of optional
    * This is a space third-party software can use (e.g. Java, Google Chrome)
* `/proc`
    * Information about currently running processes
    * ("fake" files just like the contents of `/dev` and `/media`)
* `/root`
    * Root user's home directory
* `/run`
    * Some programs that run early during the boot process placed runtime data under `/dev` and other locations. This directory provides a dedicated space for this.
    * (This folder started to appear in 2011)
* `/srv`: abbreviation of service
    * The service that you serve through your machine (if you are a server)
* `/sys`
    * Virtual filesystem
    * It displays information related to kernel subsystems, hardware devices, and associated device drivers.
* `/tmp`
    * Temporary files
        * ZIP files from programs
        * crash logs
* `/usr`
    * User-facing applications and tools
        * `/usr/bin`: binaries
        * `/usr/src`: source code
        * ... (e.g. icons, documentations)
* `/var`
    * Variable data
        * system logs
        * printer spools
        * lock files
        * cached data and folders specific to games
    * (`/var` is spearate from `/usr` for times when the latter is read-only)

#### Cheetsheet

![Cheetsheet](https://static.makeuseof.com/wp-content/uploads/2016/06/LinuxFilesystem-Directory.jpeg)

### Mac OS X

* `/Applications`: Mac's applications
* `/Developer`: developer related tools, documentation and files
    * appears only if you have installed Apple's Developer Tools
* `/Library`: shared libraries, files necessary for the OS to function properly
    * settings
    * preferences
    * ...
    * Note: User also have a Libraries folder in the user home directory, which holds files specific to that user.
* `/Network`: network related devices, servers, libraries, etc.
* `/System`: system related files critical for the proper function of Mac OS X
    * libraries
    * preferences
* `/Users`: all user accounts on the machine and their accompanying unique files, settings, etc.
    * Much like `/home` in Linux
* `/Volumes`: mounted devices and volumes, either virtual or real
    * hard disks
    * CD & DVD
    * DMG mounts
    * ...
* Others same as Linux
    * `/bin`
    * `/etc`
    * `/dev`
    * `/usr`
    * `/sbin`
    * `/tmp`
    * `/var`

## 2. Text editor in command line (IT'S A BATTLEFIELD!!)

**!!!! MUST HAVE !!!!**

VSCode + [vim extension](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) (+ iTerm2 in Mac OS X)

**IF IN CLI THEN**

vim + oh-my-zsh + tmux + powerline theme!!

### For vim beginner

* type `vimtutor` on the command line and there is a interactive tutorial that you can learn the basis of vim.

### vim skills

There are too many things to list. I mean using vim is just a body language.

#### Change or delete something

> Change/Delete/Select, in/append/find/to, ()/[]/{}/""/''/word/front/end/...

* Example
    * d_
    * da"
    * viw
    * ct(

#### Select multiple line and insert same contents

1. Ctrl + v
2. Go through the file (using j, k)
3. I (Shift + i)
4. Type something
5. Esc

#### Move screen

* zt: To the top
* zz: Center the screen
* zb: To the bottom

#### Separate screen

* Open file
    * sp: filename
* Move cursor
    * Ctrl + w + h,j,k,l
* Move window
    * Ctrl + w + H,J,K,L

#### Tracing code

> Goto definition

* Ctrl + ]

> Back to the place

* Ctrl + t (working with tags stack)
* Ctrl + o (working with [jumplist](http://vim.wikia.com/wiki/Jumping_to_previously_visited_locations))
* (Both will work in this case)

#### Other skill

> Put vim to back ground

Ctrl + z

> Get it back

fg

### vim must have plugin

(all the configuration can be set in ~/.vimrc)

* Vundle: (must have first)
* YouCompleteMe
* NERDTree
* Taglist (co-work well with ctags)
* Doxygen (for C)
* FuzzyFinder
* surround.vim

PS. I've been use vim for about 2 and a half years. Here is a [article](https://link.medium.com/B7udQq8jhR) about I learned vim after a week.
(Ignore that I comment Sublime > VSCode then. I have to reaffirm that VSCode is the best text editor in GUI world and vim is the best in CLI world)

PS2. nano syntax highlighting ([Github - nanorc](https://github.com/scopatz/nanorc), [How do I enable syntax highlighting in nano](https://askubuntu.com/questions/90013/how-do-i-enable-syntax-highlighting-in-nano))

## 3. Internet related command

> If command support Mac OS X => 💻 ; Support Linux => 🖥

### 3.1 How to check your current IP address

* 🖥 💻 `ifconfig`
    * 🖥 💻 `ifconfig | grep "inet " | grep -v 127.0.0.1` (`grep -v`: select non-matching lines)
* 🖥  `hostname -i`
* 🖥 `ip addr`

### 3.2 How to check listening ports

* `netstat`
    * 🖥 `netstat -plnt`
    * 🖥 `netstat -tlpn | sort -t: -k2 -n`: Show TCP Listen ports sorted by number (bugs: IPv6 not supported)
    * 💻 `netstat -nat | grep LISTEN`
* `lsof`: You can get PID information
    * 💻 `lsof -n -P -i TCP -s TCP:LISTEN`
    * 🖥 💻 `lsof -i :port`
* `ss`
    * 🖥 `ss -l -p -n | grep LISTEN | grep tcp`
* List ports a process PID is listening on
    * 🖥 `ss -l -p -n | grep ",PID,"`

### 3.3 How to listening or testing network services on a port

> (If you have a network service that's not behaving like it should but you know it's listening to a network port.)

**netcat**

* Basic test
    * 🖥 💻  `nc -vz IP_Address Port`
        * succeeded!
        * failed: Connection refused
        * failed: Connection timed out
    * 🖥 💻 `netcat -vz IP_Address 1-1000`: Scan all ports up to 1000
* Further testing
    * Connection Refused
        * Is the service running?
        * Is the firewall reject the connection?
    * Connection Timed Out: often this happens when when your firewall is blocking the port
        * Temporarily add a rule that will accept connections on the required port: 🖥 `sudo iptables -I INPUT 1 -p tcp --dport http -j ACCEPT`
        * Remove the rule: 🖥 `sudo iptables -D INPUT 1`
        * Check your current firewall configuration: 🖥 `sudo iptables -L -v`
    * Connection Succeeded
        * See if service can respond to basic network queries: 🖥 💻 `nc -vt IP_Address Port`
        * Closing the connection: either press Ctrl + C or type the *service specific quit command* (e.g. FTP: QUIT)

* Communicate through Netcat
    * Listen to a specific port for connections: 🖥 💻 `nc -l Port` (You can't listen a port when your server is also listening a port)
    * Send message to another "Netcat": 🖥 💻 `nc IP_Address Port`
    * Send files
        * Receiving end: 🖥 💻 `nc -l Port > received_file`
        * Sending end: 🖥 💻 `nc IP_Address Port < original_file`

### 3.4 How to send a request to a port

**telnet**

* First connect to the server 🖥 💻 `telnet IP_Address Port`
* Send request (After finish type just press ENTER twice)
    * `GET /resources`
    * Or
        ```
        GET /resources HTTP/1.1
        Host: host.address
        ```
        * HEAD: Check HTTP response
        * GET: Get web page's content

## 4. Request simulation

### 4.1 Listen a port and sent a request to simulate a socket connection

Like I mentioned in 3.3 - Communicate through Netcat

![Picture4.1](Picture4.1.png)

### 4.2 Acting like a HTTP Client and visit baidu.com:80

* Fail:
    * Send the request directly
        * `telnet baidu.com 80`
        * `GET / HTTP/1.1`
        ![Picture4.2_badreq](Picture4.2_badreq.png)

* Success:
    * Send the request with Host
        ![Picture4.2_host](Picture4.2_host.png)
    * Google Chrome test 1
        1. Listen a port by Netcat
        2. Connect to the port using Google Chrome
        3. Copy the received request
        4. Modify the Host to www.baidu.com
        5. Send the request by telnet
    * Google Chrome test 2
        1. Use Google Chrome Developer Tools to see what information the browser have send for me in a request.
        2. `telnet baidu.com 80`
        3. Copy paste the request

Found that I don't have to pretend myself to be a browser to get the first response from baidu

### 4.3 Simulate a HTTP Server and visit it by curl

1. Listening a port using Netcat and connect to it using `curl localhost:port`
    ![Picture4.3_init](Picture4.3_init.png)
2. Send some shit back

(copy paste a fake response which from the response I got by sending a fake request to my week 2 project few minutes ago :D)

![Picture4.3_finish](Picture4.3_finish.png)

* POST: `curl --data "post1=value1&post2=value2" localhost:port/your/resources`

* RESTful API: `curl -X HTTP_VERBS localhost:port/your/resources`

## 5. Build a RESTful Web Server based on Koa and Postgres and containerize it using Dockerfile

> Follow the tutorial [Building a RESTful API with Koa and Postgres](https://mherman.org/blog/building-a-restful-api-with-koa-and-postgres/) ([Github](https://github.com/mjhea0/node-koa-api))

### Dependencies

* Web Framework
    * `Koa`
        * [Koa vs Express](https://github.com/koajs/koa/blob/master/docs/koa-vs-express.md)
    * [`koa-router`](https://github.com/alexmingoia/koa-router)
* Test Driven Development (TDD)
    * [`Mocha`](https://mochajs.org)
    * [`Chai`](https://github.com/chaijs/chai)
    * [`Chai HTTP`](https://github.com/chaijs/chai-http) - Test HTTP calls
* Postgres - [Official Download link](https://www.postgresql.org/download/), [Postgres.app](https://postgresapp.com/)
    * [`pg`](https://node-postgres.com/)
    * [`Knex`](https://knexjs.org/)

### Some notes about Postgres

#### Installation

* I tried [EnterpriseDB installer](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
* Open installer there will be a [README](EnterpriseDBPostgresREADME.txt) file
    * Follow the instructions (Some shared memory stuff)
    * Edit `sudo vim /etc/sysctl.conf`
        ```
        kern.sysv.shmmax=1610612736
        kern.sysv.shmall=393216
        kern.sysv.shmmin=1
        kern.sysv.shmmni=32
        kern.sysv.shmseg=8
        kern.maxprocperuid=512
        kern.maxproc=2048
        ```
    * Reboot and check it by `sysctl -a`
* Go to the installation directory (In my case is /Library/PostgreSQL/11)
* Open `pg_env.sh` and copy paste the environment setting in the shell configuration file (In my case is ~/.zshrc)
* And now should be able to use `psql` command (If only add the /bin directory, there will be problems)

#### knex

* Install knex globally as well so you can use the CLI tool `npm install knex -g`
* Create database `CREATE DATABASE database_name;`

* Initialize a new config file *knexfile.js* by run `knex init` in the project root
* Add a file called *connection.js* to the project/src/server/db folder. => Connect to the database using the appropriate knex configuation based on the environment (development, test, staging, production, etc.)

* Create migration to define the database schema `knex migrate:make table_name`
* Apply the migration to the development database `knex migrate:latest --env development`

* Create a seed file to populate the database with some initial data `knex seed:make seed_name`
* Apply the seed `knex seed:run --env development`

* Test file
    * process.env.NODE_ENV = 'test'
    * require *connection.js*
    * beforeEach() - is fired before any of test specs, applying the migrations to the test database
        * knex.migrate.latest()
        * knex.seed.run()
    * afterEach() - after the specs run, the database is rolled back to a pristine state
        * knex.migrate.rollback()

#### Others

* It's very convenient to use *pgAdmin 4* as a GUI tool. (Just like *phpMyAdmin* for MySQL)

## Docker

### Docker File

1. Indicate the image we based on (Node in this case)
2. Set the working directory
3. Copy all the stuff which is needed
4. Run install command to get all our dependencies
5. Set the CMD so it will run when we run the container

[My Dockerfile](KoaMovieAPI/Dockerfile)

* Build it `docker build -t koa-movie-api .`
* Test it `docker run -p 1337:1337 koa-movie-api` (or Run in background use `-d` (detached mode))
* Stop it `docker stop CONTAINER_ID` or `docker container stop CONTAINER_ID` (use `docker ps` or `docker container ls` to check the ID)

### Docker Compose

* [Overview of Docker Compose](https://docs.docker.com/compose/overview/)
* [Install Docker Compose](https://docs.docker.com/compose/install/)
* (Docker for Mac and Docker Toolbox already include Compose along with other Docker apps, so Mac users do not need to install Compose separately.)

* We can just create two docker file. One for our server and another for Postgres. And start up each and since individually.
* But by using docker-compose which allows you to compose multiple docker containers at once.

* Initial docker-compose.yml from Docker [Get Started, Part 3: Services](https://docs.docker.com/get-started/part3/)
* You can delete the *deploy* part just to make it more simple.

* [postgres DockerHub](https://hub.docker.com/_/postgres/)
* We need to change our database setting of our project.
    * Edit *knexfile.js* from
        ```js
        connection: 'postgres://postgres:postgres@localhost:5432/koa_api'
        ```
    * to
        ```js
            connection: {
                host: process.env.DB_HOST || 'localhost',
                user: 'postgres',
                password: 'postgres',
                database: 'koa_api'
            }
        ```
    * (If use [*sequelize*](https://github.com/sequelize/sequelize) should add `host: process.env.DB_HOST || 'localhost'`, because inside docker we need to change the host is (or it will use default - localhost))

* We will want our Postgres database runs up before our web server runs up => [Control startup order in Compose](https://docs.docker.com/compose/startup-order/)
* We will want our database is actual running not just the container => [wait-for-it script](https://github.com/vishnubob/wait-for-it) (don't forget to `chmod +x wait-for-it.sh` make it executable)
* We need to modify our previous Dockerfile to execute wait-for-it scipt (Just COPY that)

* Build it `docker-compose up`
* Stop it `docker-compose down`

#### Result

GET, PUT, POST, DELETE

![Picture5_Reqs.png](Picture5_Reqs.png)

## References

* Q1
    * [What are those folders in your linux root directory](https://www.makeuseof.com/tag/folders-linux-root-directory/)
        * recommand extra reading by the article
            * [9 Quirky Linux Commands You Need to Know (And Will Love)](https://www.makeuseof.com/tag/x-quirky-linux-commands-need-know-will-love/)
            * [The Linux Kernel: An Explanation In Layman’s Terms](https://www.makeuseof.com/tag/linux-kernel-explanation-laymans-terms/)
            * [How to Kill Programs and Check System Information in Linux](https://www.makeuseof.com/tag/kill-programs-check-system-information-linux/)
    * [Mac OS X Directory Structure explained](http://osxdaily.com/2007/03/30/mac-os-x-directory-structure-explained/)
* Q2
    * [What is the difference between CTRL-T and CTRL-O in Vim?](https://stackoverflow.com/questions/8381415/what-is-the-difference-between-ctrl-t-and-ctrl-o-in-vim)
    * [Youtube - Improving Vim Speed](https://youtu.be/OnUiHLYZgaA)
* Q3
    * Q3.1
        * [6 Ways to Find IP Information](https://www.wikihow.com/Find-IP-Information)
        * [Shell Command for Getting IP Address](https://serverfault.com/questions/46645/shell-command-for-getting-ip-address)
    * Q3.2
        * [Check listening ports with netstat](https://support.rackspace.com/how-to/checking-listening-ports-with-netstat/)
        * [List ports a process PID is listening on (preferably using iproute2 tools)?](https://unix.stackexchange.com/questions/157823/list-ports-a-process-pid-is-listening-on-preferably-using-iproute2-tools)
    * Q3.3
        * [**Testing network services with netcat**](https://support.rackspace.com/how-to/testing-network-services-with-netcat/)
        * [**How To Use Netcat to Establish and Test TCP and UDP Connections on a VPS**](https://www.digitalocean.com/community/tutorials/how-to-use-netcat-to-establish-and-test-tcp-and-udp-connections-on-a-vps)
    * Q3.4
        * [How to send an HTTP request using Telnet](https://stackoverflow.com/questions/15772355/how-to-send-an-http-request-using-telnet)
        * [Telnet – Send GET/HEAD HTTP Request](https://www.shellhacks.com/telnet-send-get-head-http-request/)
* Q5
    * [Youtube - Starting to Setup Docker](https://youtu.be/4W_NuaHVFbo) (start from 10:27)
    * [Youtube - Docker Compose Node.js, Redis, and PostgreSQL](https://youtu.be/aetqo2nkQcA)
    * [Stackoverflow - Setting up Docker with Knex.js and PostgreSQL](https://stackoverflow.com/questions/48751074/setting-up-docker-with-knex-js-and-postgresql)
