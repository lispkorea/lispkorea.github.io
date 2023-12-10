+++
template = "index.html"
page_template = "page-without-comment.t.html"
title = "lispkorea.github.io"
+++

 `Lisp`(`LIS`t `P`rocessing)에 관련된 정보를 한데 모아서 공유하고자 사이트를 개설하였습니다.
 

``` clojure
(let [[lisper non-lisper] (split-with know-lisp? people)]
  (->> lisper
       (collect-informations)
       (map documentation)
       (share-with non-lisper)))
```

![how-to-save-the-princess-on-lisp.png](/comic/how-to-save-the-princess-on-lisp.png)