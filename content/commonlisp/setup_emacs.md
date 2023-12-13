+++
title = "Setup Emacs"
+++



## [emacs](https://www.gnu.org/software/emacs/download.html)
## [init.el](https://www.gnu.org/software/emacs/manual/html_node/emacs/Init-File.html)
## [sly](https://joaotavora.github.io/sly/)


- 자신의 홈디렉토리(TODO(pyoung): 설명필요.)에 `.emacs.d/`디렉토리를 만들고, `init.el`을 생성하여 다음을 입력한다.


``` emacs-lisp

;; basic setup
(setq make-backup-files nil)
(fset 'yes-or-no-p 'y-or-n-p)
(setq custom-file "~/.emacs.d/custom.el")
(load custom-file 'noerror)
(setq create-lockfiles nil)

;; package init.
(require 'package)
(add-to-list 'package-archives '("melpa" . "http://www.mirrorservice.org/sites/melpa.org/packages/"))
(add-to-list 'package-archives '("melpa-stable" . "http://www.mirrorservice.org/sites/stable.melpa.org/packages/"))
(package-initialize)

;; enable use-package.
(unless (package-installed-p 'use-package)
  (package-refresh-contents)
  (package-install 'use-package))
(eval-when-compile (require 'use-package))
(require 'bind-key)

;; use sly.
(use-package sly
  :requires subr-x
  :ensure t
  :config
  (setq inferior-lisp-program (string-trim (shell-command-to-string "which sbcl"))))

```

- 이제, 이멕스를 실행하고, 다음 명령어를 입력한다.

```

    M-x sly

```

## WSL에서 emacs 사용하기

Windows에서 몇몇(sdl, tk)등 몇몇 네이티브 라이브러리는 Windows에서 잘 안돌아 간다. 그래서 WSL2에서 emacs를 사용하는 것이 좋을 수 있다.

WSL2에서 emacs를 사용하기 위해서는 다음과 같은 설정이 필요하다.

[wsl 설정방법](/etc/wsl)

``` zsh
$ lsb_release  -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 22.04.3 LTS
Release:        22.04
Codename:       jammy

$ emacs --version
GNU Emacs 27.1

$ sudo apt autoremove --purge emacs


$ sudo add-apt-repository ppa:kelleyk/emacs
$ sudo apt update && sudo apt upgrade
$ sudo apt-get install emacs28
$ emacs --version
GNU Emacs 28.1


$ sudo apt autoremove --purge emacs28
$ sudo add-apt-repository --remove ppa:kelleyk/emacs
```



## 단축키

ref: <https://lisp-journey.gitlab.io/blog/slime-tips/>

| .lisp 버퍼  | 설명                                   |
| ----------- | -------------------------------------- |
| C-M-x       | 현재 폼(form) 평가                     |
| C-c C-l     | 파일 로드                              |
| M-.         | 함수 정의로 점프                       |
| M-,         | 점프했던 곳으로 되돌아가기             |
| C-M-i       | 자동완성                               |
| M-*         |                                        |
| C-c C-d C-d | describe symbol                        |
| C-c C-z     | REPL로 이동                            |
| C-c ~       | 패키지 이름/폴더 동기화 및 REPL로 이동 |

| Repl 버퍼 | 설명            |
| --------- | --------------- |
| C-c M-o   | REPL 깨끗이하기 |

| 일반    | 설명                  |
| ------- | --------------------- |
| C-c b   | 다른 버퍼로 이동      |
| C-c C-b | 열려있는 버퍼목록보기 |


# [Back](./)
