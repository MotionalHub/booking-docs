---
title: Xử lý vi phạm
description: Hình thức xử lý khi phát hiện vi phạm điều khoản sử dụng
---
> Khi phát hiện bên mua vi phạm các điều khoản sử dụng, người bán có quyền áp dụng các biện pháp xử lý phù hợp với mức độ vi phạm.

| Mức độ | Hình thức xử lý | Mô tả |
|--------|----------------|-------|
| 1️⃣ | **Cảnh báo** | Nhắc nhở và yêu cầu khắc phục |
| 2️⃣ | **Từ chối hỗ trợ** | Tạm ngưng hỗ trợ kỹ thuật |
| 3️⃣ | **Ngưng dịch vụ** | Tạm thời hoặc vĩnh viễn |
| 4️⃣ | **Thu hồi bot** | Ngưng cung cấp, không hoàn tiền |
| 5️⃣ | **Chấm dứt hợp tác** | Từ chối hợp tác trong tương lai |

---

## Mức 1: Cảnh báo hoặc yêu cầu khắc phục

:::note[Vi phạm nhẹ]
Áp dụng cho các trường hợp vi phạm lần đầu hoặc không nghiêm trọng
:::

### Khi nào áp dụng?

- Vi phạm nhẹ, lần đầu tiên
- Sử dụng chưa đúng cách do chưa nắm rõ
- Cấu hình server chưa phù hợp
- Có dấu hiệu có thể vi phạm trong tương lai

### Hành động

- Gửi thông báo cảnh báo
- Yêu cầu khắc phục trong thời gian cụ thể
- Cung cấp hướng dẫn chi tiết
- Theo dõi việc thực hiện

---

## Mức 2: Từ chối hỗ trợ kỹ thuật

:::caution[Vi phạm trung bình]
Áp dụng khi vi phạm lặp lại hoặc không hợp tác khắc phục
:::

### Khi nào áp dụng?

- Vi phạm lặp lại sau cảnh báo
- Không hợp tác khắc phục
- Sử dụng bot không đúng mục đích
- Không tuân thủ hướng dẫn

### Hành động

- Ngưng cung cấp hỗ trợ kỹ thuật
- Không giải đáp thắc mắc
- Không hỗ trợ fix lỗi do người dùng gây ra
- Có thể khôi phục sau khi khắc phục vi phạm

---

## Mức 3: Ngưng cung cấp dịch vụ bot

:::caution[Vi phạm nghiêm trọng]
Áp dụng cho vi phạm nghiêm trọng hoặc lặp lại nhiều lần
:::

### Khi nào áp dụng?

- Vi phạm nghiêm trọng
- Lặp lại nhiều lần sau cảnh báo
- Ảnh hưởng đến hệ thống chung
- Sử dụng cho mục đích bất hợp pháp

### Hành động

| Tạm thời | Vĩnh viễn |
|----------|-----------|
| ⏸Tạm dừng 7-30 ngày | Ngưng hoàn toàn |
| Yêu cầu cam kết | Không khôi phục |
| Có thể khôi phục | Không hoàn tiền |

---

## Mức 4: Thu hồi bot / Không hoàn tiền

:::danger[Vi phạm rất nghiêm trọng]
Áp dụng cho các vi phạm đặc biệt nghiêm trọng
:::

### Khi nào áp dụng?

- Cờ bạc, cá độ
- Khai thác lỗ hỏng có chủ đích
- Lừa đảo, trục lợi bất chính
- Ảnh hưởng nghiêm trọng đến hệ thống
- Vi phạm pháp luật

### Hành động

- Thu hồi bot ngay lập tức
- **KHÔNG hoàn lại tiền** đã thanh toán
- Có thể xóa dữ liệu
- Có thể báo cơ quan chức năng (nếu vi phạm pháp luật)

:::caution[Lưu ý]
Đây là biện pháp nghiêm khắc nhất và **không thể đảo ngược**. Mọi chi phí đã thanh toán sẽ **không được hoàn trả**.
:::

---

## Mức 5: Từ chối hợp tác trong tương lai

:::danger[Blacklist vĩnh viễn]
Cấm vĩnh viễn sử dụng dịch vụ
:::

### Khi nào áp dụng?

- Vi phạm đặc biệt nghiêm trọng
- Tái phạm sau khi thu hồi bot
- Gây thiệt hại lớn
- Hành vi ác ý, cố tình

### Hành động

- Đưa vào danh sách đen
- Từ chối mọi giao dịch trong tương lai
- Có thể thông báo công khai (nếu cần)
- Bảo lưu quyền khởi kiện

---

## Quyền khiếu nại

:::tip[Bạn có quyền]
Nếu cho rằng việc xử lý chưa chính xác, bạn có quyền:

1. Giải trình và cung cấp bằng chứng
2. Đề xuất phương án khắc phục
3. Liên hệ bộ phận hỗ trợ để làm rõ
:::

---

## Nguyên tắc xử lý

1. **Công bằng**: Xử lý dựa trên mức độ vi phạm thực tế
2. **Minh bạch**: Thông báo rõ lý do và căn cứ
3. **Cơ hội sửa sai**: Cho cơ hội khắc phục (trừ vi phạm rất nghiêm trọng)
4. **Nhất quán**: Áp dụng thống nhất cho mọi trường hợp

:::note[Lưu ý cuối]
Mục đích của chính sách xử lý là đảm bảo môi trường sử dụng dịch vụ công bằng, minh bạch và bảo vệ quyền lợi chung. Hãy tuân thủ điều khoản để tránh rủi ro không đáng có.
:::
