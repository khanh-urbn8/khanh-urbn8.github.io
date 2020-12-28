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

*Elegant code is not clever code, elegant code is code that is so simple to read it is clever. Strive for elegance."*
và

*Developer spends most of the time reading and understanding code, than actually writing it. Coding activity is 75% of time understanding code, 20% of time modifying existing code and only 5% writing new*
và

Internal implementation vs External interfaces, về dài hạn, External interfaces quan trọng hơn so với Internal implementation. Vì good External interfaces sẽ giúp React component trở nên meaningful.
Abstraction là một khái niệm rất quan trọng và rất có liên quan đến những thứ trên nếu mọi người nhớ (ko nhớ thì cũng vẫn quan trọng):

https://thevaluable.dev/abstraction-type-software-example/

Quote trong bài chút:

abstraction:

- Hiding useless information.
- Generalizing a concept.
- Dealing with an idea representing the reality.

Các mục rất mang tính giới thiệu là:

- That’s Nice and All, But Gimme Some Examples!
- Control Abstraction
- Classes and Objects
- The Interface Construct