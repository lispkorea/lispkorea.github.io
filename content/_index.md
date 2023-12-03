+++
template = "index.html"
page_template = "page-without-comment.t.html"
title = "lispkorea.github.io"
+++

<section class="hero">
 <div class="hero-body">
   <div class="container columns">
    <div class="column is-three-fifths">

<div markdown="1">

 `Lisp`에 관련된 체계적인 정보를 모으고, 나누고자 사이트를 개설하였습니다. `Lisp` 관련된 자료를 함께 체계적으로 정리해, 공유해봅시다.

 [Apple](https://apple.com), [Netflix](https://www.netflix.com), [Cisco](https://www.cisco.com), [KaKao](https://www.kakaocorp.com/) 등에서 쓰고 있는, `Clojure`를 배워보는 것은 어떨까요?

 * [Clojure 살펴보기](/clojure)
 * [K-Lisper 란?](/k-lisper)

--------------------------------------------------------

1. [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language))? Common lisp? Clojure?
* Lisp는 [존 매카시](https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist))가 개발한 프로그래밍 언어이며, 심볼과 괄호를 이용한 전위표기법을 사용하는 특징을 갖고 있습니다.
* 초기 Lisp를 기준으로 여러가지 파생 언어들이 나왔으며, Common Lisp, Clojure, Scheme도 그 파생 언어 중 하나입니다.


2. [Lisp-1, Lisp-2 ?](https://en.wikipedia.org/wiki/Common_Lisp#The_function_namespace)
* `함수`와 `데이터 변수`의 이름 공간을 분리했는지 안했는지를 특징으로 가지고 있습니다.
* Lisp-1 : 분리를 안함.
  - Clojure
* [Lisp-2](https://en.wikipedia.org/wiki/LISP_2) : 분리를 함.
  - Common Lisp

3. Common Lisp, Scheme, Clojure... 뭘 배워야 할 지 모르겠어요.
* Scheme
  - 명저 [SICP](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html)와 함께 순수 프로그래밍 언어를 배우고 싶으신 분께 추천드립니다.
* Common Lisp
  - C와 근접한 실행속도를 원하면서, 타입이 없는 언어를 원하시면 추천드립니다.
* Clojure
  - Java/Scala와 같이 JVM위에 돌아가는 언어를 배웠던 분들에게 추천드립니다.

4. [Lisp와 AI관계?](https://stackoverflow.com/questions/130475/why-is-lisp-used-for-ai)
* 옛날 AI에 대한 연구가 활발할때, 다른 프로그래밍 언어 보다 유연한 Lisp가 보편적으로 쓰였습니다.
* AI연구가 활발할 때에는 덩달아 Lisp역시 활발히 발전하였으나, AI 문제 자체가 어려운 것이므로 많은 AI 관련 회사들이 실패하였으며, Lisp역시 몰락하게 되었습니다.(https://en.wikipedia.org/wiki/AI_winter#The_collapse_of_the_Lisp_machine_market_in_1987)


</div>

     </div>
     <div class="column">

<div markdown="1">
``` clojure
(let [[lisper non-lisper]
      (split-with know-lisp? people)]

  (->> lisper
       (filter has-idea?)
       (map documentation)
       (share-with non-lisper)))
```
</div>

     </div>
   </div>
 </div>
</section>
