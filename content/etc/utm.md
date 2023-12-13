+++
title = "UTM"
+++

Apple Silicon Mac에서 VM을 실행할 수 있게 해주는 UTM을 소개합니다.

- [소스](https://github.com/utmapp/UTM/releases)
- [홈페이지](https://mac.getutm.app/)


## Ubuntu 설치법

- 이미지 다운로드
  - [x86_64](https://ubuntu.com/download/server#downloads)
  - [arm64](https://ubuntu.com/download/server/arm)
  - Ubuntu server가 권장하는 용량을 25 GB입니다.

``` zsh
sudo apt update

# ssh 설치는 기본
sudo apt install openssh-server
sudo systemctl status ssh

# ssh 방화벽 설정
sudo ufw allow ssh
sudo ufw status

# ifconfig 명령어가 없는 경우
sudo apt install net-tools


# 공유폴더 설정
mkdir -p /media/helloworld
cd /media/helloworld
sudo chown -R $USER /media/helloworld
sudo mount -t 9p -o trans=virtio share /media/helloworld -oversion=9p2000.L

# 재부팅시에도 마운트되도록 설정
sudo vim /etc/fstab
share /media/helloworld 9p trans=virtio,version=9p2000.L,rw,_netdev,nofail 0 0
```

``` zsh
# 그래픽환경이 필요한경우
sudo apt-get install -y --no-install-recommends ubuntu-desktop
sudo add-apt-repository ppa:mozillateam/ppa

# desktop 모드로 전환
startx
```

## ref

- <https://blog.pocu.academy/ko/2023/10/09/how-to-build-and-debug-x86-program-on-apple-silicon-mac.html>
- <https://webnautes.tistory.com/2103>