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

> scoop install gow
> scoop install sbcl

> curl -O https://beta.quicklisp.org/quicklisp.lisp
> sbcl --load quicklisp.lisp

* (quicklisp-quickstart:install)
* (ql:add-to-init-file)
* (ql:quickload "slynk")
* (quit)

```

# [Back](./)
