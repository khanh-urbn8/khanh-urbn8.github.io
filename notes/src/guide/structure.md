# Project structure

Cấu trúc code trong thư mục domain mình phân chia dạng thế này nhoé mọi người:

[Project](./img/project-structure.png)

- Cấu trúc folder giống vầy `domain/User/UserSignIn`
- File ở trong 1 folder, ví dụ `UserSignInPayload` sẽ có hàm ý là file chỉ dùng cho nội bộ folder. Tức trong trường hợp này, chỉ dùng cho `UserSignInInteractor`
- Khi file cần dùng shared chung cho nhiều nơi, mình bê nó lên cấp folder trên. Ví dụ, `UserResponse.ts` nằm trong `domain/User` tức có thể dùng cho cả `UserSignIn/`, `UserIdOrVanityNameGet/`...
- Tương tự vậy, ví dụ nếu UserResponse cần được shared chung cho cả Deck/, mình sẽ move nó lên 1 cấp folder nữa, thành `domain/UserResponse.ts`

Mục tiêu là mình sẽ minh bạch được những phần nào dùng riêng của nội bộ một tính năng và những phần nào dùng chung.
Không liên quan lắm mà cũng liên quan là khi code mình nên giữ mọi thứ local nhất có thể vì càng đem code global hơn, thì có nghĩa scope ảnh ưởng của đoạn code đó nhiều hơn.

Scope ảnh hưởng nhiều hơn sẽ khiến code readers/maintainers phải phán đoán, lo ngại nhiều hơn khi sửa code.

Bởi vậy nên mình nên giữ code local nhất có thể, để giảm cognitive load cho code reader/maintainer.
Sửa 1 local `variable/function/file/...` sẽ luôn an tâm hơn sửa 1 global `variable/function/file/...`

> DRY isn't always good. Sometimes being more verbose is easier to read than being clever so you don't have to type as much. Concentrate on readability first.

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler