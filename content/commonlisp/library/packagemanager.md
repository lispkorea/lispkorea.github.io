+++
title = "package manager"
+++

## quicklisp

Quicklisp 리포지토리는 매월 한 번 업데이트됩니다.

- [홈페이지](https://www.quicklisp.org/beta/)

``` zsh
$ curl -O https://beta.quicklisp.org/quicklisp.lisp
$ sbcl --load quicklisp.lisp
* (quicklisp-quickstart:install)
* (ql:add-to-init-file)
* (quit)
```

``` lisp
;;; 업데이트
(ql:update-all-dists)

;;; 찾기
(ql:system-apropos "검색어")

;;; 설치
(ql:quickload "패키지이름")
(ql:quickload "패키지이름" :latest t) ;; 최신버전 설치
(ql:quickload "패키지이름" :version "버전") ;; 특정버전 설치

;;; 삭제
(ql:uninstall "패키지이름")
```

## ultralisp

Quicklisp 리포지토리는 매월 한 번 업데이트됩니다.
 Ultralisp는 5분마다 업데이트되는 quicklisp 배포판입니다.

- [홈페이지](https://ultralisp.org/dists/ultralisp)
- [소스](https://github.com/ultralisp/ultralisp)

``` lisp
(ql-dist:install-dist "http://dist.ultralisp.org/ultralisp.txt" :prompt nil)
```

## Qlot

- <https://github.com/fukamachi/qlot>
- project-local library installer using Quicklisp facility

``` lisp
(ql:quickload :qlot)
```