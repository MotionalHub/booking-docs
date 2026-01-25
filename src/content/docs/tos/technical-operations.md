---
title: Vận hành & Kỹ thuật
description: Chính sách về vận hành hệ thống, restart và xử lý sự cố
---

### 1. Bot không phản hồi
:::note[Tự động restart]
Khi bot xử lý **quá nhiều yêu cầu**, hệ thống có thể quá tải và bot sẽ **tự động restart** để đảm bảo ổn định.
:::

#### Thời gian restart

| Yếu tố | Thời gian |
|--------|-----------|
| **Thời gian trung bình** | 1-3 phút |
| **Phụ thuộc vào** | Số lượng bots đang hoạt động |
| **Nhiều bots** | Có thể lâu hơn (2-3 phút) |
| **Ít bots** | Nhanh hơn (1-2 phút) |

#### Trạng thái trong lúc restart

- Bot sẽ **offline** tạm thời
- Không phản hồi lệnh
- Tự động online trở lại khi hoàn tất

:::tip[Khuyến nghị]
Nếu bot offline, hãy đợi **2-3 phút** trước khi báo cáo sự cố. Trong hầu hết trường hợp, bot sẽ tự động online trở lại.
:::

---

### 2. Dữ liệu sau khi restart

:::tip[An toàn tuyệt đối]
Bạn hoàn toàn yên tâm về dữ liệu của mình!
:::

#### Cam kết về dữ liệu

| ✅ Được đảm bảo | ❌ Không xảy ra |
|----------------|----------------|
| Toàn bộ dữ liệu được lưu an toàn | Mất dữ liệu |
| Backup tự động | Mất cấu hình |
| Giữ nguyên thống kê | Reset số liệu |
| Bảo toàn số dư cash | Mất tiền |
| Giữ nguyên thông tin user | Mất profile |

#### Dữ liệu được bảo vệ

- Thông tin người dùng (customer, player, supporter)
- Số dư cash và lịch sử giao dịch
- Cấu hình server và role
- Bill booking và lịch sử
- Dữ liệu shop, marriage, lucky box
- Thống kê và báo cáo

:::note[Lưu ý]
Restart **KHÔNG làm mất dữ liệu** của bot. Đây là quy trình bảo trì thông thường và an toàn.
:::

---

### 3. Xử lý sự cố khác

Nếu sau khi restart, bot vẫn hoạt động bất thường, hãy thực hiện các bước sau:

#### Bước 1: Kiểm tra cơ bản

```bash
✓ Bot có online không?
✓ Bot có quyền cần thiết không?
✓ Channel có bot được truy cập không?
✓ Lệnh có đúng cú pháp không?
```

#### Bước 2: Chờ và thử lại

:::tip[Đợi một chút]
1. Chờ thêm **5-10 phút**
2. Thử lại lệnh
3. Kiểm tra xem có thông báo lỗi không
:::

#### Bước 3: Báo cáo sự cố

Nếu vẫn gặp lỗi, liên hệ hỗ trợ với các thông tin sau:

| Thông tin cần cung cấp | Mô tả |
|------------------------|-------|
| **Mô tả lỗi** | Lỗi xảy ra như thế nào? |
| **Thời gian** | Lỗi bắt đầu lúc nào? |
| **Lệnh đã dùng** | Lệnh nào gây lỗi? |
| **Screenshot** | Ảnh chụp màn hình lỗi |
| **Server ID** | ID server gặp sự cố |

---

### Monitoring & Uptime

#### Thời gian hoạt động

| Chỉ số | Mục tiêu |
|--------|----------|
| **Uptime** | 99.5%+ |
| **Response time** | < 2 giây |
| **Restart frequency** | < 5 lần/ngày |
| **Data backup** | Mỗi 6 giờ |

#### Bảo trì định kỳ

:::note[Thông báo trước]
- Bảo trì lớn: Thông báo **24-48 giờ** trước
- Cập nhật nhỏ: Thông báo **2-4 giờ** trước
- Hotfix khẩn cấp: Có thể không thông báo
:::

---

### Bảo mật & Sao lưu

#### Chính sách backup

- **Backup tự động** mỗi 6 giờ
- **Lưu trữ** 30 ngày gần nhất
- **Mã hóa** dữ liệu nhạy cảm
- **Lưu trữ đám mây** an toàn

#### Khôi phục dữ liệu

:::caution[Điều kiện khôi phục]
Chỉ khôi phục dữ liệu khi:
- Lỗi từ phía hệ thống bot
- Sự cố kỹ thuật nghiêm trọng
- Có bằng chứng rõ ràng

**KHÔNG** khôi phục khi:
- Lỗi do người dùng
- Vi phạm điều khoản
- Can thiệp trái phép vào dữ liệu
:::

---

### Tips tối ưu hiệu suất

1. **Tránh spam lệnh**: Đợi bot phản hồi trước khi gửi lệnh tiếp theo
2. **Sử dụng đúng lệnh**: Tham khảo tài liệu để dùng lệnh phù hợp
3. **Phân quyền hợp lý**: Chỉ cấp quyền cần thiết để tránh lạm dụng
4. **Giới hạn channel**: Chỉ cho bot hoạt động ở channel cần thiết
5. **Báo cáo lỗi sớm**: Giúp phát hiện và sửa lỗi nhanh hơn
