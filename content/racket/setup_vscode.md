+++
title = "setup vscode"
+++


- Vscode: Visual Studio Code (VSCode)는 마이크로소프트에서 개발한 소스 코드 편집기이다.
  - <https://code.visualstudio.com/>

- Magic Racket: Racket 언어를 위한 VSCode 확장 프로그램
  - <https://marketplace.visualstudio.com/items?itemName=evzen-wybitul.magic-racket>


## racket 설치 (raco 도 같이 설치된다)

- brew: 프로그램 설치/삭제/업데이트를 쉽게 해주는 프로그램
- raco: racket 관리 도구(패키지, 문서, 빌드 등등). [ref](https://docs.racket-lang.org/raco/index.html)
- .rkt : racket 파일 확장자
- Language Server: 특정 프로그래밍 언어에 대한 구문 분석, 오류 검사, 코드 완성, 코드 내비게이션 등과 같은 기능을 제공

``` zsh
$ brew install --cask racket
$ raco pkg install racket-langserver
Would you like to install these dependencies? [Y/n/a/c/?]

$ raco pkg update racket-langserver
$ raco pkg install sicp
```
