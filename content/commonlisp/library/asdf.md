+++
title = "asdf"
+++

- [asdf](https://asdf.common-lisp.dev/)


ASDF(`A`nother `S`ystem `D`efinition `F`acility)는 빌드 시스템 입니다 
Common Lisp 소프트웨어 시스템이 구성 요소(하위 시스템 및 파일)로 구성되는 방식과 이러한 구성 요소를 올바른 순서로 작동하는 방법을 지정하는 도구입니다. 컴파일, 로드, 테스트 등이 가능합니다.


| 버전 |                                                         |
| ---- | ------------------------------------------------------- |
| 1    | Daniel Barlow's ASDF (created on August 1st 2001)       |
| 2    | François-René Rideau's ASDF 2 (released May 31st 2010). |
| 3    |                                                         |

| 경로                               | 설명                                        |
| ---------------------------------- | ------------------------------------------- |
| ~/common-lisp/                     | Common Lisp 소프트웨어 설치 기본 위치(권장) |
| ~/.local/share/common-lisp/source/ |                                             |

- 크게 다음 2파트로 나뉩니다.
  - `asdf/defsystem`: 패키지정의
  - `uiop`: 유틸리티

## asdf/defsystem

- <https://asdf.common-lisp.dev/asdf.html>
- <https://qiita.com/MYAO/items/874aafcc531862c5f7c7>
- <https://github.com/fare/asdf/blob/master/doc/best_practices.md>

## uiop

UIOP(`U`tilities for `I`mplementation and `O`S-`P`ortability)

- <https://asdf.common-lisp.dev/uiop.html>
- <https://quickdocs.org/uiop>
- <https://zenn.dev/hyotang666/articles/3f7abcec6f8270>

``` lisp
;; example

(uiop:getenv "USER")

(uiop:run-program "firefox") ; 동기
(uiop:launch-program "firefox") ; 비동기

(uiop:run-program (list "git" "--help") :output t)
(uiop:run-program "htop" :output :interactive :input :interactive)

;;; pipe: ls | sort
(uiop:run-program "sort"
                   :input
                   (uiop:process-info-output
                    (uiop:launch-program "ls"
                                         :output :stream))
                   :output :string)
(uiop:with-temporary-file (:stream s :pathname p :keep t)
  (format t "path is ~a~%" p)
  (format s "hello, temporary file!"))

(uiop:quit 0)
```