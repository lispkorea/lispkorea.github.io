+++
title = "Setup Windows"
+++

## [scoop](https://scoop.sh/)

## [boot](http://boot-clj.com/)

* Win + R : powershell

``` powershell
    Set-ExecutionPolicy RemoteSigned -scope CurrentUser
    iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```


* Win + R : cmd

``` cmd
> scoop install git
> scoop bucket  add java
> scoop bucket  add extras
> scoop bucket  add scoop-clojure https://github.com/littleli/scoop-clojure
> scoop install temurin-lts-jdk
> scoop install clj-deps
> scoop update  clj-deps
```

# [Back](./)
