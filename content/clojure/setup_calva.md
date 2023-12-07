+++
title = "Setup Calva"
+++

- [Visual Studio Code](https://code.visualstudio.com/download) 설치
- [Calva: Clojure & ClojureScript Interactive Programming](https://marketplace.visualstudio.com/items?itemName=betterthantomorrow.calva) 설치
  - <https://calva.io/>
  - [paredit help](https://calva.io/paredit/)

- 폴더를 만들고
- deps.edn을 생성

``` edn
{}
```

- Jack-in을 시도한다
  - `Ctrl + Shift + P` > Calva: Start a Project REPL and Connect (aka Jack-In) > deps.edn

- 단축키
  - `Ctrl + K, Ctrl + S` > Keyboard Shortcuts

|                                                       |                                |
| ----------------------------------------------------- | ------------------------------ |
| Calva: Start a Project REPL and Connect (aka Jack-In) | Ctrl + Alt + C, Ctrl + Alt + J |
| Calva: Evaluate Current Form  (or selection, if any)  | Ctrl + Enter                   |
| Go To Definition                                      | F12                            |
| Go Back                                               | Alt + Left                     |


- Top Level Evaluate
  - 파일의 최상위 형식이 아님(구조적 의미에서 최상위 수준을 의미)
  - def로 시작하는 구문들이 Top Level Evaluate에 해당.
  - 다만, Calva에서는 다른 form으로 묶이지 않는, 모든 form들이 top level form으로 간주
  - 또, Calva에서는 (comment ...) 안에 있는 form들도 top level form으로 간주 ([Rich Comments](https://calva.io/rich-comments/)지원)


