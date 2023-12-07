+++
title = "Setup SLT"
+++

- [IntelliJ IDEA 커뮤니티 버전 다운로드](https://www.jetbrains.com/idea/download/)
  - 사이트 상단에는 Ultimate버전이
  - 아래쪽에 IntelliJ IDEA Community Edition 이 있다.
- IntelliJ에서 플러그인 검색 `SLT` 후 설치.
  - 메뉴바에서 File > Settings > Languages & Frameworks > Common Lisp SDKs > 추가
    - SBCL
      - name: "SBCL"
      - executable: `sbcl` 실행파일 위치
      - core: `sbcl.core` 위치
      - quicklisp path: `quicklisp/setup.lisp` 위치
  - [설치방법(영문)](https://github.com/Enerccio/SLT/wiki/User-Guide#manual-installation)

- <https://github.com/Enerccio/SLT/wiki/User-Guide>

## 단축키

| Shortcut         | 평가                  |
| ---------------- | --------------------- |
| Ctrl + Alt + `T` | **현재 파일**         |
| Ctrl + Alt + `F` | **현재 S-Expression** |
| Ctrl + Alt + `A` | Top Level             |
| Ctrl + Alt + `R` | 선택영역              |
| Ctrl + Alt + `E` | 이전 S-Expression     |
| Ctrl + Alt + `Q` | 다음 S-Expression     |

| Shortcut                 | 매크로 확장     |
| ------------------------ | --------------- |
| Ctrl + Alt + Shift + `F` | **Macroexpand** |
| Ctrl + Alt + Shift + `R` | Macroexpand 1   |
| Ctrl + Alt + Shift + `E` | Macroexpand All |

| Keymap: Windows   | Keymap: Visual Studio | 기타               |
| ----------------- | --------------------- | ------------------ |
| Ctrl + Alt + `H`  |                       | CLHS               |
| Ctrl + B          | F12                   | 정의로 이동        |
| Ctrl + Alt + Left | Ctrl + -              | navigate backwards |

## 기타

영문으로 되돌릴려면: Menubar File > Settings > Plugin > `Korean Language Pack / 한국어 언어 팩` > 체크 해제
