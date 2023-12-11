+++
title = "rlwrap"
+++

`R`ead`l`ine `Wrap`per

- [rlwrap](https://github.com/hanslub42/rlwrap)
  - readline wrapper로 repl에서 키보드 바인딩을 사용할 수 있게 된다.

|                        |                                   |
| ---------------------- | --------------------------------- |
| -r                     | --remember                        |
| -f  {completion list}  | --file={completion list}          |
| -m[newline substitute] | --multi-line{=newline substitute} |
| -c                     | --complete-filenames              |
| -b  {chars}            | --break-chars={chars}             |
| -q  {chars}            | --quote-characters={chars}        |
| -i                     | --case-insensitive                |


- <https://www.cliki.net/rlwrap>
- <https://github.com/vindarel/common-lisp-course-in-videos/blob/master/exercises/chapter%201%20-%20getting%20started/rlwrap-enhanced.md>

``` zsh
$ rlwrap -i -b '()' -f completions.txt [all options here] sbcl $*
```
