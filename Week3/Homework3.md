# Homework 3

## 1. What are the meanings or the usages of the folders in the Root (\) of the Linux directory

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

## References

* Q1
    * [What are those folders in your linux root directory](https://www.makeuseof.com/tag/folders-linux-root-directory/)
        * recommand extra reading
            * [9 Quirky Linux Commands You Need to Know (And Will Love)](https://www.makeuseof.com/tag/x-quirky-linux-commands-need-know-will-love/)
            * [The Linux Kernel: An Explanation In Layman’s Terms](https://www.makeuseof.com/tag/linux-kernel-explanation-laymans-terms/)
            * [How to Kill Programs and Check System Information in Linux](https://www.makeuseof.com/tag/kill-programs-check-system-information-linux/)
    * [Mac OS X Directory Structure explained](http://osxdaily.com/2007/03/30/mac-os-x-directory-structure-explained/)