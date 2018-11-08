---
layout: default
---

## [scoop](https://scoop.sh/)
## [boot](http://boot-clj.com/)

* Win + R : powershell

``` powershell
    Set-ExecutionPolicy RemoteSigned -scope CurrentUser
    iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```


* Win + R : cmd

``` cmd
> scoop add bucket extra && scoop install boot-clj
> exit
```

``` cmd
> boot
> boot -d boot/new new -t app -n myapp
> cd myapp
myapp> boot run
```

# [Back](./)
