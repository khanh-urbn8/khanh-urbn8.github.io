---
home: true
heroImage: https://v1.vuepress.vuejs.org/hero.png
tagline: 
actionText: Quick Start →
actionLink: /guide/
features:
- title: Hiphop never die
  details: Feature 1 Description
- title: RapViet
  details: Feature 2 Description
- title: Hiphop never die
  details: Feature 3 Description
footer: Made by  with ❤️
---

> Elegant code is not clever code, elegant code is code that is so simple to read it is clever. Strive for elegance.

**We want to write code that not only works but also maintainable, and efficient and we want all that while still being productive.**


## Continuous Delivery

Hi @channel,

Nhân dịp Thành release đoạn code mới, mềnh xin nói chút về chủ đề: CD không phải là CD-ROM :cd: mà CD là Continuous Delivery

CD là practice mà cty dùng cho quy trình release các tính năng/fix bugs lên môi trường production.
Để có được CD mục tiêu hướng tới của project earthtoday là chỉ có 1 nhánh chính là master:

**I)** master là protected branch nghĩa là commit history không bao giờ bị được edit (immutable), chỉ có thêm mới.
Ví dụ mình lỡ có commit A không mong muốn vào master, cách xử lý là tạo mới commit B revert thay đổi của commit A và đẩy vào master. Xóa commit A là chuyện không xảy ra.

**II)** Dev khi làm feature/fix bug tách branch dev ra từ nhánh master.

**III)** **Nhánh master luôn luôn nên ở trạng thái sẵn sàng release lên production**  (❤ production ready ❤ ).
_Tức: code merged vào master không đưa đưa master vào trạng thái broken hoặc tính năng hoàn thiện nửa vời user không dùng dược_

Số **(III)** quan trọng và khó. Nên mình implements những công cụ/ chiến thuật sau:

### 1) Automation Tests:
FE mình có Visual Regression Tests, UI Interaction Tests (Mặc dầu mềnh đang thinking về Unit Testing để thay thế dần UI Interaction Tests)
BE mình có Unit Tests, Integration Tests.
Và cuối cùng có E2E tests check full cây.
Devs khi viết Automation Tests thì nên "thà giết nhầm còn hơn bỏ sót". Viết tests để đảm bảo code không có bug(s), không phải chỉ cho bây giờ mà còn về lâu dài đảm bảo không có thay đổi nào từ bất cứ ai lỡ làm hư nó thành bugs mà không ai biết.
_Machines never lies_ và machines không bỏ sót. Một khi Automation Tests fail trên master thì tức là có gì đó không ổn ở đây và devs chúng ta sẽ tìm cách đưa Automation Tests green trở lại để đạt được (III)

### 2) Feature Flagging

Tức là mình sẽ dùng dịch vụ của split.io và thêm những điểu kiện if else vào code để ẩn hiện được feature chưa hoàn thiện tùy theo đó là tester hay user hay ai khác...
Feature Flagging dùng cho trường hợp US hoàn thành merge master nhưng Feature chỉ mới nửa vời, user chưa dùng được.
Mình sẽ thêm feature flag để nếu deploy master mới nhất vẫn có thể ẩn code mới này đi không ảnh hưởng đến users.

### 3) Code Freeze
Đời không như mơ nên có những lúc cần deploy nhưng master chưa production ready nên QAs có thể ban hành Code Freeze và control chỉ những code cho **mục tiêu (III)** tức đưa master về trạng thái sẵn sàng release mới được merge master thui.

### 4) QA Manual Testing
Machines never lies nhưng người viết test cases cho machines chạy thì có thể thiếu sót đặc biệt là khi kinh nghiệm còn chưa nhiều.

Nên cần những đôi mắt super soi xem có gì còn thiếu sót trước khi tới tay users không.
Theo một góc nhìn có thể xem QAs như những người bảo vệ cuối cùng để những đoạn code bugs của devs không lên gây tai họa trên production cho users. Nên mọi người be nice to QAs nhóe.
Ngoài ra còn có 1 CD khác đó là Continuous Deployment là bước tiến hóa kế tiếp của Continuous Delievery nhưng đó là 1 chủ đề khác cho một ngày khác.
