+++
title = "SBCL"
+++

- [manual](https://www.sbcl.org/manual/)

## --script

``` lisp
;; filename.lisp
(print "hello world")
```

``` zsh
$ sbcl --script filename.lisp
"hello world"
$
```

## --load

``` lisp
;; filename.lisp
(defun sum (list)
  (if list (+ (car list) (sum (cdr list))) 0))
```

``` zsh
$ sbcl --load filename.lisp
#<some preamble about sbcl you can ignore>
* (sum '(1 2 3 4 5))
15
```