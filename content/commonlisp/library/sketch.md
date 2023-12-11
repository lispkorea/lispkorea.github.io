+++
title = "sketch"
+++

- [github: vydd/sketch](https://github.com/vydd/sketch)

``` lisp
(ql:quickload :sketch)

(ql:quickload :sketch-examples)
(make-instance 'sketch-examples:hello-world)
```

## Windows

- WSL(Windows Subsystem for Linux)을 사용 권장.
- WSL 미사용시 그에 맞는 64bit 라이브러리 설치 & gcc 설치 필요.
  - [github: libsdl-org/SDL](https://github.com/libsdl-org/SDL)
  - [github: libsdl-org/SDL_ttf](https://github.com/libsdl-org/SDL_ttf)
  - [github: libsdl-org/SDL_image](https://github.com/libsdl-org/SDL_image)
  - [github: libffi/libffi](https://github.com/libffi/libffi)
  - [homepage:msys2](https://www.msys2.org/)
    - <https://www.msys2.org/docs/environments/>
  - `pacman -S gcc libffi libffi-devel pkg-config`
  - env.PATH: C:\msys64\usr\bin