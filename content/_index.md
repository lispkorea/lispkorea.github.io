+++
template = "index.html"
page_template = "page-without-comment.t.html"
title = "lispkorea.github.io"
+++

 `Lisp`에 관련된 정보를 공유하고자 사이트를 개설하였습니다.

``` clojure
(let [[lisper non-lisper] (split-with know-lisp? people)]
  (->> lisper
       (filter has-idea?)
       (map documentation)
       (share-with non-lisper)))
```

![how-to-save-the-princess-on-lisp.png](/comic/how-to-save-the-princess-on-lisp.png)