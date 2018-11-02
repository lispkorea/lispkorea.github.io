```
$ sudo apt-get install curl -y
$ sudo apt-get install sbcl -y

$ curl -O https://beta.quicklisp.org/quicklisp.lisp
$ sbcl --load quicklisp.lisp

* (quicklisp-quickstart:install)
* (ql:add-to-init-file)
* (ql:quickload "slynk")
* (quit)
```
