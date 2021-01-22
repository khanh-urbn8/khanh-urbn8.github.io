# Introduction

## Quy trình check-in code vào nhánh chính master:
1) Dev code complete, tạo pull request, rebase, chạy tests, tự review...
2) Dev đưa merge request qua cho code reviewer trên slack
3) Code reviewer review, feedback, thảo luyện...
4) Review ok, reviewer approve, đánh dấu approved trên slack bằng icon :good_job2:
5) Dev tự canh merge code vào "thời điểm thích hợp nhất".
6) Dev đánh dấu merged bằng icon :merged:
7) Lúc này CI chạy, nếu fail thì dev sẽ là người đầu tiên investigate để khiến CI green lại sớm nhất có thể để ko block team.

## Good article collection

- [Vì sao foreach không support async await](https://anonystick.com/blog-developer/vi-sao-foreach-khong-support-async-await-2020052381240532#t-1)

- [Abstraction in Software with Examples](https://thevaluable.dev/abstraction-type-software-example/)
- [User-defined Order in SQL](https://begriffs.com/posts/2018-03-20-user-defined-order.html)
- ["Cache miss-storm"](https://stackoverflow.com/questions/23303463/dealing-with-concurrency-issues-when-caching-for-high-traffic-sites)