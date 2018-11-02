---
layout: default
---



## [emacs](https://www.gnu.org/software/emacs/download.html)
## [init.el](https://www.gnu.org/software/emacs/manual/html_node/emacs/Init-File.html)
## [sly](https://joaotavora.github.io/sly/)


init.el


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
(eval-when-compile
  (require 'use-package))
(require 'bind-key)

;; use sly.
(use-package sly
  :ensure t
  :config
  (setq inferior-lisp-program (string-trim (shell-command-to-string "which sbcl"))))
```


    M-x sly


# [Back](./)
