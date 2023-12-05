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

## ref

- <https://www.getzola.org/>
- <https://keats.github.io/tera/>
