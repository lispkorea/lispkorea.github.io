---
layout: default
title: "lispkorea.github.io"
---


# windows package manager
## [scoop](https://scoop.sh/)

* Win + R : powershell

``` powershell
    set-executionpolicy remotesigned -s currentuser
    iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```

* Win + R : cmd

``` cmd
    scoop install aria2
    scoop install gow
```



# Common Lisp
## [sbcl](http://www.sbcl.org/)

* Win + R : cmd

``` cmd
    scoop install sbcl
```


## [quicklisp](https://www.quicklisp.org/)

* Win + R : cmd

``` cmd
C:\Users\pyoung> cd /
C:\> mkdir sbcl

C:\sbcl> cd sbcl
C:\sbcl> curl -O https://beta.quicklisp.org/quicklisp.lisp
C:\sbcl> sbcl --load quicklisp.lisp

* (quicklisp-quickstart:install)
* (ql:add-to-init-file)
* (quit)

C:\sbcl> sbcl

* (print "Helloworld")

"Helloworld"
"Helloworld"

* (quit)
```

# [Back](./)
