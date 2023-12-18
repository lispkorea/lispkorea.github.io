+++
title = "Setup Clojure"
template = "page-with-toc.t.html"
+++

## Windows

[scoop](https://scoop.sh/)

- Win + R : powershell

``` powershell
    Set-ExecutionPolicy RemoteSigned -scope CurrentUser
    iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```

- Win + R : cmd

``` cmd
> scoop install git
> scoop bucket  add java
> scoop bucket  add extras
> scoop bucket  add scoop-clojure https://github.com/littleli/scoop-clojure
> scoop install temurin-lts-jdk
> scoop install clj-deps
> scoop update  clj-deps
```

## Ubuntu

``` zsh
sudo apt install -y wget apt-transport-https
sudo mkdir -p /etc/apt/keyrings
sudo wget -O - https://packages.adoptium.net/artifactory/api/gpg/key/public | tee /etc/apt/keyrings/adoptium.asc
sudo echo "deb [signed-by=/etc/apt/keyrings/adoptium.asc] https://packages.adoptium.net/artifactory/deb $(awk -F= '/^VERSION_CODENAME/{print$2}' /etc/os-release) main" | sudo tee /etc/apt/sources.list.d/adoptium.list
sudo apt update # update if you haven't already
sudo apt search temurin

sudo apt install -y 원하는_버전_선택
```

|          | sources.list             |
| -------- | ------------------------ |
| 파일     | /etc/apt/sources.list    |
| 디렉토리 | /etc/apt/sources.list.d/ |

- Eclipse Temurin은 Adoptium에서 제공하는 OpenJDK 배포판의 이름
  - adoptium
    - Oracle OpenJDK와 호환되는 자바 개발 키트(Java Development Kit, JDK)를 제공
    - 이전에 AdoptOpenJDK로 알려져 있었음

|         | OpenJ9                           | HotSpot                                                                 |
| ------- | -------------------------------- | ----------------------------------------------------------------------- |
| JVM     | IBM에서 개발한 JVM               | JVM은 오랫동안 자바의 기본 JVM                                          |
| GC      | Eclipse OpenJ9                   | 주로 기본 메모리 관리 방식                                              |
| License | Eclipse Public License (EPL)     | Oracle Binary Code License (BCL)                                        |
|         | GNU General Public License (GPL) | GNU General Public License (GPL)                                        |
|         |                                  | GNU General Public License with Classpath Exception (GPL+CE) - JDK only |

``` zsh
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
$ (echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /home/iv/.bashrc
$ eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
$ sudo apt-get install build-essential
$ brew install gcc
$ brew install clojure/tools/clojure
$ clj
Clojure 1.11.1
user=>
```

## macOs

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
