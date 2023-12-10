+++
title = "Setup OSX"
+++

- [brew](https://brew.sh/index_ko)
- [rlwrap](https://github.com/hanslub42/rlwrap)
  - readline wrapper로 repl에서 키보드 바인딩을 사용할 수 있게 된다.


```

$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew update
$ brew upgrade
$ brew doctor
$ brew install rlwrap
$ brew install sbcl

$ curl -O https://beta.quicklisp.org/quicklisp.lisp
$ rlwrap sbcl --load quicklisp.lisp

* (quicklisp-quickstart:install)
* (ql:add-to-init-file)
* (ql:quickload "slynk")
* (quit)

```

# [Back](./)
