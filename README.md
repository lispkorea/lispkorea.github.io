# lispkorea.github.io

## quick start

``` sh
zola serve --open
```

## bigfile

- pdf같이 파일 크기가 큰것은 이쪽에 푸시
  - [lispkorea/lispkorea.github.io-resource](https://github.com/lispkorea/lispkorea.github.io-resource)

## resource

| library     | version |
| ----------- | ------- |
| bulma       | 0.9.4   |
| fontawesome | 6.5.2   |
| flag-icons  | 7.0.2   |
| mermaid     | 10.6.1  |

| font            |
| --------------- |
| Droid+Sans+Mono |
| Noto+Sans+KR    |

## Mermaid

- [doc](https://mermaid.js.org/intro/)

```
{% mermaiddiagram() %}
flowchart TB
    A --> C
    A --> D
    B --> C
    B --> D
{% end %}
```

## zola를 선택한 이유

- 쉽고 빠르게 편집하기 위해.
- clojure로 작성된 [cryogen](https://github.com/cryogen-project/cryogen)이 있다는걸 알고 있음
  - 다만, clojure설치하고 의존성 다운받고, 사용법 익히는데 시간이 많이 잡아먹음. 렌더링 시간 역시 zola보다 느림.

## ref

- <https://www.getzola.org/>
- <https://keats.github.io/tera/>
