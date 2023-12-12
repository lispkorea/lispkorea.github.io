+++
title = "SDL"
+++

SDL(`S`imple `D`irectMedia `L`ayer)

- [홈페이지](https://www.libsdl.org/)

## cl-sdl2

- [소스](https://github.com/lispgames/cl-sdl2)
- <https://github.com/rpav/cl-autowrap>
  - <https://github.com/rpav/c2ffi>
    - Clang을 이용하여 JSON형식의 FFI wrapper를 생성해주는 툴입니다.
  - <https://github.com/libffi/libffi>
    - autowrap을 이용하여 구조체를 전달하고 반환하는 함수를 호출할 수 있습니다.

``` zsh
# ubuntu
$ sudo apt-get install libsdl2-2.0

# macOs
$ brew install sdl2
# mac c2ffi problem
# https://github.com/lispgames/cl-sdl2/issues/154#issuecomment-1280030566

$ sbcl
> (ql:quickload :sdl2)

```
