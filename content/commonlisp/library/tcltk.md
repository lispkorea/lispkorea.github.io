+++
title = "tcl/tk"
+++

- [홈페이지](https://www.tcl.tk/)
- Tcl (`T`ool `C`ommand `L`anguage)은 스크립트 언어로, 크로스플랫폼 GUI기반 프로그램을 간편하게 만들기에 좋다.
- Tk(graphical user interface `t`ool`k`it)는 Tcl용으로 개발된 매우 간단한 코드로 GUI를 작성할 수 있는 툴킷

nodgui/ltk라이브러리는 wish(Simple `wi`ndowing `sh`ell)를 이용하여 tcl/tk를 사용할 수 있게 해준다.

- [tcl/tk: wish](https://www.tcl.tk/man/tcl/UserCmd/wish.html)


## ltk

- ltk
  - [소스](https://github.com/herth/ltk)
  - [홈페이지](http://www.peter-herth.de/ltk/)
- [tkdocs: 튜토리얼](https://tkdocs.com/tutorial/index.html)
  - [ltk: 예제 1](https://peterlane.codeberg.page/ltk-examples/)
  - [ltk: 예제 2](https://peterlane.codeberg.page/ltk-plotchart/)


``` zsh
$ sudo apt-get install -y tk tcl
$ sbcl
> (ql:quickload :ltk)
> (in-package :ltk)
> (ltktest)
```

## nodgui

- [소스](https://codeberg.org/cage/nodgui)
- [nodgui에서 지원하는 테마 목록](https://codeberg.org/cage/nodgui/src/branch/master/themes)
  - [python ttkthemes에서 지원하는 테마 목록](https://ttkthemes.readthedocs.io/en/latest/themes.html)

- https://lisp-journey.gitlab.io/blog/nodgui-now-has-a-nice-looking-theme-by-default/

``` lisp
(nodgui.demo:demo :theme "yaru")
```
