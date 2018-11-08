---
layout: default
---


## [emacs](https://www.gnu.org/software/emacs/download.html)
## [init.el](https://www.gnu.org/software/emacs/manual/html_node/emacs/Init-File.html)
## [sly](https://joaotavora.github.io/sly/)


* 자신의 홈디렉토리(TODO(pyoung): 설명필요.)에 `.emacs.d/`디렉토리를 만들고, `init.el`을 생성하여 다음을 입력한다.


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

* 이제, 이멕스를 실행하고, 다음 명령어를 입력한다.

```

    M-x sly

```

# [Back](./)
