+++
title = "Setup SBCL"
template = "page-with-toc.t.html"
+++

## Windows

- [scoop](https://scoop.sh/)
- [sbcl](http://www.sbcl.org/)

- Win + R : powershell

``` powershell

    Set-ExecutionPolicy RemoteSigned -scope CurrentUser
    iex (new-object net.webclient).downloadstring('https://get.scoop.sh')

```

- Win + R : cmd

``` cmd

> scoop install gow
> scoop install sbcl

> curl -O https://beta.quicklisp.org/quicklisp.lisp
> sbcl --load quicklisp.lisp

* (quicklisp-quickstart:install)
* (ql:add-to-init-file)
* (ql:quickload "slynk")
* (quit)

```

## Ubuntu


``` zsh

$ sudo apt-get install curl -y
$ sudo apt-get install sbcl -y

$ curl -O https://beta.quicklisp.org/quicklisp.lisp
$ sbcl --load quicklisp.lisp

* (quicklisp-quickstart:install)
* (ql:add-to-init-file)
* (ql:quickload "slynk")
* (quit)

```

## macOs


- [brew](https://brew.sh/index_ko)

``` zsh
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew update
$ brew upgrade
$ brew doctor
$ brew install sbcl

$ curl -O https://beta.quicklisp.org/quicklisp.lisp
$ sbcl --load quicklisp.lisp

* (quicklisp-quickstart:install)
* (ql:add-to-init-file)
* (ql:quickload "slynk")
* (quit)
```