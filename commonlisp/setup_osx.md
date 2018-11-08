---
layout: default
---

* [brew](https://brew.sh/index_ko)


```

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

# [Back](./)
