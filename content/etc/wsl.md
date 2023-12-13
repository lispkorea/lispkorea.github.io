+++
title = "WSL"
+++

WSL(`W`indows `S`ubsystem for `L`inux)

## WSL 설정

- [WSL 설치](https://learn.microsoft.com/ko-kr/windows/wsl/install)
- VcXsrv
  - Visual C++로 컴파일된 Xorg's X-Server
  - WSL은 터미널인데, GUI를 사용하려면 X-Server가 필요함
  - [다운로드](https://sourceforge.net/projects/vcxsrv/)

### [시작폴더 설정](https://learn.microsoft.com/en-us/windows/terminal/customize-settings/profile-general)

``` json
{
    "startingDirectory" : "//wsl$/Ubuntu/home/{유저명}",
}
```

## WSL의 포트를 Windows에 포트로 맵핑(포트 포워딩/맵핑)

- [wslconfig](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#wslconfig)
  - 파일 인코딩은: UTF-8 without BOM
  - ref
    - <https://qiita.com/_urusakuma/items/b8a14d4fcd925c4aebc2>
    - <https://qiita.com/snaka/items/a8eee4cfc8f7d733e6ab>

`C:\Users\{유저명}\.wslconfig`

``` ini
localhostForwarding=True
```


## 에디터

- emacs
  - <https://www.emacswiki.org/emacs/Emacs_and_the_Windows_Subsystem_for_Linux>
  - <https://shelper.github.io/posts/setup-emacs-in-wsl2/>
- vscode
  - <https://code.visualstudio.com/docs/remote/wsl-tutorial>
  - [vscode확장: wsl](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)
- intellij
  - <https://www.jetbrains.com/help/idea/how-to-use-wsl-development-environment-in-product.html#create_project_for_wsl>


### vscode를 wsl-ubuntu에 직접 설치하는 경우

비추천. 하지만 원하는 사람이 있을 수도 있어서 남겨둠.

``` zsh
# ref: https://code.visualstudio.com/docs/setup/linux
# ref: https://qiita.com/yoshiyasu1111/items/e21a77ed68b52cb5f7c8

$ curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
$ sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/
$ sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
$ sudo apt install apt-transport-https
$ sudo apt update
$ sudo apt list -a code
```

## ref

- <https://jakupsil.tistory.com/45>
- <https://learn.microsoft.com/ko-kr/windows/terminal/troubleshooting>

------

## 유료라서 deprecated

- GWSL - 유료
  - [소스](https://github.com/Opticos/GWSL-Source)
  - [홈페이지](https://opticos.github.io/gwsl/)
- OpenInWSL - 유료
  - [소스](https://github.com/Opticos/OpenInWSL-Source)
  - [홈페이지](https://opticos.github.io/openinwsl/)

