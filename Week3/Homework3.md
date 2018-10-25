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
