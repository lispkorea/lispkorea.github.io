---
layout: default
---

## [scoop](https://scoop.sh/)
## [sbcl](http://www.sbcl.org/)
* Win + R : powershell

``` powershell
    Set-ExecutionPolicy RemoteSigned -scope CurrentUser
    iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```


* Win + R : cmd

``` cmd
C:\Users\lisper> cd /

C:\> mkdir sbcl

C:\sbcl> cd sbcl
C:\sbcl> scoop install aria2
C:\sbcl> scoop install gow
C:\sbcl> scoop install sbcl

C:\sbcl> curl -O https://beta.quicklisp.org/quicklisp.lisp
C:\sbcl> sbcl --load quicklisp.lisp

* (quicklisp-quickstart:install)
* (ql:add-to-init-file)
* (ql:quickload "slynk")
* (quit)
```

# [Back](./)
