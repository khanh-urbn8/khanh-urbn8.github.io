(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{371:function(t,e,n){"use strict";n.r(e);var a=n(22),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("h2",{attrs:{id:"quy-trinh-check-in-code-vao-nhanh-chinh-master"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#quy-trinh-check-in-code-vao-nhanh-chinh-master"}},[t._v("#")]),t._v(" Quy trình check-in code vào nhánh chính master:")]),t._v(" "),n("ol",[n("li",[t._v("Dev code complete, tạo pull request, rebase, chạy tests, tự review...")]),t._v(" "),n("li",[t._v("Dev đưa merge request qua cho code reviewer trên slack")]),t._v(" "),n("li",[t._v("Code reviewer review, feedback, thảo luyện...")]),t._v(" "),n("li",[t._v("Review ok, reviewer approve, đánh dấu approved trên slack bằng icon :good_job2:")]),t._v(" "),n("li",[t._v('Dev tự canh merge code vào "thời điểm thích hợp nhất".')]),t._v(" "),n("li",[t._v("Dev đánh dấu merged bằng icon :merged:")]),t._v(" "),n("li",[t._v("Lúc này CI chạy, nếu fail thì dev sẽ là người đầu tiên investigate để khiến CI green lại sớm nhất có thể để ko block team.")])]),t._v(" "),n("h2",{attrs:{id:"good-article-collection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#good-article-collection"}},[t._v("#")]),t._v(" Good article collection")]),t._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://anonystick.com/blog-developer/vi-sao-foreach-khong-support-async-await-2020052381240532#t-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vì sao foreach không support async await"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://thevaluable.dev/abstraction-type-software-example/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Abstraction in Software with Examples"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://begriffs.com/posts/2018-03-20-user-defined-order.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("User-defined Order in SQL"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://stackoverflow.com/questions/23303463/dealing-with-concurrency-issues-when-caching-for-high-traffic-sites",target:"_blank",rel:"noopener noreferrer"}},[t._v('"Cache miss-storm"'),n("OutboundLink")],1)])])]),t._v(" "),n("h2",{attrs:{id:"technical-notice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#technical-notice"}},[t._v("#")]),t._v(" Technical notice")]),t._v(" "),n("h3",{attrs:{id:"hi-channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hi-channel"}},[t._v("#")]),t._v(" Hi @channel,")]),t._v(" "),n("p",[n("em",[t._v("Bổn cũ")]),t._v(":")]),t._v(" "),n("ul",[n("li",[t._v("Stateful component không chứa styling")]),t._v(" "),n("li",[t._v("Và Stateless component không chọt thẳng vào store\nexample: (lạt bỏ)\nNói cách khác là:")]),t._v(" "),n("li",[t._v("Stateless component tập trung vào render UI theo props/driver mà nó nhận được.")]),t._v(" "),n("li",[t._v("Store tập trung các business logics.")]),t._v(" "),n("li",[t._v("Stateful component là cầu nối gắn stores và stateless components lại với nhau.\nLý do trực tiếp là vì mình muốn có thể test visual regression tất cả các styles, mà stateful component thì không dựng thành storybook scenario để chụp hình được\nLý do sâu xa là vì mình muốn tách bạch giữa stateful vs stateless, data flow vs styling vì mục đích ease of maintanance cho người code vào phần đó sau này (cũng có khi chính là người code ban đầu 6 tháng sau quay lại update code)\nDeveloper spends most of the time reading and understanding code, than actually writing it. Coding activity is 75% of time understanding code, 20% of time modifying existing code and only 5% writing new.")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("em",[t._v("Bổn mới")]),t._v(":\nBài trên lúc trước mềnh có gửi mọi người rồi. Giờ soạn lại vì giờ có thứ liên quan:")]),t._v(" "),n("h2",{attrs:{id:"loi-ngo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#loi-ngo"}},[t._v("#")]),t._v(" Lời ngỏ")]),t._v(" "),n("p",[t._v("Một thời gian qua chúng ta dùng ui interaction test bằng cypress có vẻ không ngon: một phần vì thời gian chạy test quá lâu, tests cũng khá flaky, và cơ chế mock api cũng ko có độ tin cậy cao nên khó bảo trì và bắt lỗi.\nNhưng nếu không có interaction tests thì có một lỗ trống trong FE testing đó là business logics ko được test. Mà code không test được thì dễ bug, nhất là khi cập nhật, refactor.\nStateless components thì đã được test bởi visual regression test khá là ngon. Vậy còn business logics thì giờ sao?\nĐấy chính là sự sinh ra đời của unit test cho stores của chúng ta.")]),t._v(" "),n("h2",{attrs:{id:"vi-du"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vi-du"}},[t._v("#")]),t._v(" Ví dụ")]),t._v(" "),n("p",[t._v("https://github.com/EarthToday/earthtoday-ui-react/blob/unit_test/src/stores/CreateCardStore.test.ts")]),t._v(" "),n("h2",{attrs:{id:"vai-luu-y"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vai-luu-y"}},[t._v("#")]),t._v(" Vài lưu ý:")]),t._v(" "),n("ul",[n("li",[t._v("Dependencies của một store sẽ thông qua interfaces (external interfacings/contracts với dependencies bên ngoài)\nhttps://github.com/EarthToday/earthtoday-ui-react/blob/unit_test/src/stores/CreateCardStore.ts#L98-L104\nCái này có dính líu tí tới chữ I trong SOLID principle. Ai muốn có thể tìm hiểu thêm.")]),t._v(" "),n("li",[t._v("Khi test, mình sẽ mock những dependencies của store đang test để tập trung test internal implementations của store đang test.\nVí dụ: https://github.com/EarthToday/earthtoday-ui-react/blob/unit_test/src/stores/CreateCardStore.test.ts#L985-L1034")])]),t._v(" "),n("h2",{attrs:{id:"tum-lai-la"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tum-lai-la"}},[t._v("#")]),t._v(" Túm lại là:")]),t._v(" "),n("ol",[n("li",[t._v("UI elements gồm element stylings, bố cục layouts, trạng thái UI khi thay đổi như hover... là ở lớp Stateless Component.")]),t._v(" "),n("li",[t._v("FE business logics gom hết vào stores.")]),t._v(" "),n("li",[t._v("Stateful components là lớp mỏng nối Store với Stateless Component.")])]),t._v(" "),n("h2",{attrs:{id:"muc-tieu-cua-chung-ta-la"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#muc-tieu-cua-chung-ta-la"}},[t._v("#")]),t._v(" Mục tiêu của chúng ta là:")]),t._v(" "),n("ul",[n("li",[t._v("(1) sẽ được cover bởi automated visual regression tests.")]),t._v(" "),n("li",[t._v("(2) sẽ dược cover bởi automated unit tests như trên")]),t._v(" "),n("li",[t._v("cái (3) là cái mà mình sẽ hở, nên mình giữ nó càng mỏng, càng ít code càng tốt, và tuyệt đối ko chứa những thứ thuộc về (1) và (2)\nCái (3) hãy để anh chị em ở thế giới QA chăm sóc nó thông qua e2e dùng cypress. Anh em FE devs chúng ta hãy về với vùng đất visual regression và unit tests.")])])])}),[],!1,null,null,null);e.default=i.exports}}]);