---
title: Chính sách gia hạn Bot
description: Quy định về gia hạn, hết hạn và quá hạn sử dụng dịch vụ bot
---

### Timeline gia hạn

| Giai đoạn | Thời gian | Trạng thái | Hành động |
|-----------|-----------|------------|-----------|
| **Còn hạn** | Trước ngày hết hạn | `Active` | Bot hoạt động bình thường |
| **Đến hạn** | Ngày hết hạn | `Waiting` | Bot tạm ngừng hoạt động |
| **Quá hạn** | Sau 15 ngày | `Suspended` | Chuẩn bị ngưng hoàn toàn |
| **Hết hạn** | Sau 90 ngày | `Terminated` | Có thể xóa dữ liệu |

---

### Khi bot đến hạn
:::caution[Bot tạm ngừng]
Ngay khi **đến ngày hết hạn** mà chưa gia hạn:

- Bot chuyển sang trạng thái `Waiting`
- Bot **tạm ngừng hoạt động**
- Không phản hồi lệnh
- Dữ liệu vẫn được lưu trữ an toàn
:::

#### Thông báo nhắc nhở

```bash
Bot của bạn đã hết hạn vào ngày [Ngày/Tháng/Năm]!
```

:::tip[Lưu ý]
Khi sử dụng lệnh, bạn sẽ nhận được thông báo trước **1 ngày** trước khi hết hạn.
:::

---

### Sau 15 ngày quá hạn
:::danger[Nguy cơ mất dữ liệu]
Nếu sau **15 ngày** kể từ ngày hết hạn mà vẫn chưa gia hạn:
:::

- Bot bị đưa vào danh sách **ngưng hoạt động tiếp theo**
- Dữ liệu có thể bị xóa sau 90 ngày
- Có thể phải trả phí khôi phục

### Cách gia hạn Bot
:::tip[Gia hạn dễ dàng]
Sử dụng lệnh **`renew`** để gia hạn bot
:::

##### Thanh toán

- Quét mã QR để thanh toán
- Đợi khoảng 30 giây bot sẽ cập nhật thanh toán
- Hoàn tất thanh toán

##### Sau khi gia hạn thành công

:::tip[Bot hoạt động trở lại]
Sau khi gia hạn bằng lệnh `renew`:

- Bot chuyển về trạng thái `Active`
- Bot **hoạt động lại bình thường**
- Toàn bộ dữ liệu được giữ nguyên
- Ngày hết hạn được cập nhật
:::

---

:::note[Phí bổ sung]
- Gia hạn sau 15 ngày quá hạn: +20% phí xử lý
- Gia hạn sau 30 ngày quá hạn: +30% phí khôi phục
- Gia hạn sau 60 ngày quá hạn: +100% phí duy trì bot
- Phí khôi phục dữ liệu (tối đa 90 ngày): 200,000đ
:::

---
### Câu hỏi thường gặp

#### Bot hết hạn có mất dữ liệu không?

:::note[Trong vòng 30 ngày]
- **0-15 ngày**: Dữ liệu an toàn, gia hạn bình thường
- **15-60 ngày**: Dữ liệu còn, nhưng cần phí xử lý
- **Sau 90 ngày**: Có thể bị xóa dữ liệu vĩnh viễn
:::

#### Có thể gia hạn trước không?

:::tip[Gia hạn sớm]
Có thể gia hạn **bất kỳ lúc nào**, thời gian sẽ cộng dồn vào thời hạn hiện tại.
:::

#### Gia hạn rồi có hoàn tiền không?

:::caution[Không hoàn tiền]
Không hoàn lại tiền đã gia hạn, trừ trường hợp lỗi từ hệ thống.
:::
