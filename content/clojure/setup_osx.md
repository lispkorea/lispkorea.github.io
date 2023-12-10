+++
title = "Setup OSX"
+++

- [brew](https://brew.sh/)
- [java](https://adoptium.net/)
- [deps-new](https://github.com/seancorfield/deps-new)

``` zsh
$ brew install clojure/tools/clojure # 설치시
$ brew update clojure/tools/clojure  # 업데이트시

$ clojure -Ttools install-latest :lib io.github.seancorfield/deps-new :as new
$ clojure -Tnew app :name myusername/mynewapp
$ cd mynewapp
$ clj -X:run-x
Hello, Clojure!
```
