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

## Technical notice
### Hi @channel,
*Bổn cũ*:
- Stateful component không chứa styling
- Và Stateless component không chọt thẳng vào store
example: (lạt bỏ)
Nói cách khác là:
- Stateless component tập trung vào render UI theo props/driver mà nó nhận được.
- Store tập trung các business logics.
- Stateful component là cầu nối gắn stores và stateless components lại với nhau.
Lý do trực tiếp là vì mình muốn có thể test visual regression tất cả các styles, mà stateful component thì không dựng thành storybook scenario để chụp hình được
Lý do sâu xa là vì mình muốn tách bạch giữa stateful vs stateless, data flow vs styling vì mục đích ease of maintanance cho người code vào phần đó sau này (cũng có khi chính là người code ban đầu 6 tháng sau quay lại update code)
Developer spends most of the time reading and understanding code, than actually writing it. Coding activity is 75% of time understanding code, 20% of time modifying existing code and only 5% writing new.
---
*Bổn mới*:
Bài trên lúc trước mềnh có gửi mọi người rồi. Giờ soạn lại vì giờ có thứ liên quan:
## Lời ngỏ
Một thời gian qua chúng ta dùng ui interaction test bằng cypress có vẻ không ngon: một phần vì thời gian chạy test quá lâu, tests cũng khá flaky, và cơ chế mock api cũng ko có độ tin cậy cao nên khó bảo trì và bắt lỗi.
Nhưng nếu không có interaction tests thì có một lỗ trống trong FE testing đó là business logics ko được test. Mà code không test được thì dễ bug, nhất là khi cập nhật, refactor.
Stateless components thì đã được test bởi visual regression test khá là ngon. Vậy còn business logics thì giờ sao?
Đấy chính là sự sinh ra đời của unit test cho stores của chúng ta.
## Ví dụ
https://github.com/EarthToday/earthtoday-ui-react/blob/unit_test/src/stores/CreateCardStore.test.ts
## Vài lưu ý:
- Dependencies của một store sẽ thông qua interfaces (external interfacings/contracts với dependencies bên ngoài)
https://github.com/EarthToday/earthtoday-ui-react/blob/unit_test/src/stores/CreateCardStore.ts#L98-L104
Cái này có dính líu tí tới chữ I trong SOLID principle. Ai muốn có thể tìm hiểu thêm.
- Khi test, mình sẽ mock những dependencies của store đang test để tập trung test internal implementations của store đang test.
Ví dụ: https://github.com/EarthToday/earthtoday-ui-react/blob/unit_test/src/stores/CreateCardStore.test.ts#L985-L1034
## Túm lại là:
1) UI elements gồm element stylings, bố cục layouts, trạng thái UI khi thay đổi như hover... là ở lớp Stateless Component.
2) FE business logics gom hết vào stores.
3) Stateful components là lớp mỏng nối Store với Stateless Component.
## Mục tiêu của chúng ta là:
- (1) sẽ được cover bởi automated visual regression tests.
- (2) sẽ dược cover bởi automated unit tests như trên
- cái (3) là cái mà mình sẽ hở, nên mình giữ nó càng mỏng, càng ít code càng tốt, và tuyệt đối ko chứa những thứ thuộc về (1) và (2)
Cái (3) hãy để anh chị em ở thế giới QA chăm sóc nó thông qua e2e dùng cypress. Anh em FE devs chúng ta hãy về với vùng đất visual regression và unit tests.