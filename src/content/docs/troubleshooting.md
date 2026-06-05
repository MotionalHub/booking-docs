---
title: Troubleshooting - Xử lý sự cố
description: Các lỗi thường gặp và cách kiểm tra theo source Booking Bot hiện tại
---
# Troubleshooting

## Bot không trả lời command

- Kiểm tra bot có online không.
- Kiểm tra user có đúng role whitelist không.
- Kiểm tra command đó là prefix hay slash trong source.
- Kiểm tra kênh hiện tại có bị giới hạn quyền gửi tin nhắn hay không.

## Lỗi quyền hạn

- `owner`, `admin`, `supporter`, `player`, `cash`, `parttime` là các whitelist chính trong source.
- Nếu command không hiện, có thể bot name đó không bật feature.
- Nếu dùng command quản trị, role bot phải nằm cao hơn role cần chỉnh.

## Lỗi tiền / số lượng

- Dùng định dạng `10k`, `1m`, hoặc số nguyên.
- Tránh dấu phẩy, khoảng trắng và ký tự thừa.
- `/book` cần `số-giờ` lớn hơn hoặc bằng `1`.
- `/donate` cần số tiền lớn hơn `0`.

## Lỗi booking / donate

- Không đủ tiền: khách không có đủ cash để tạo bill.
- Không có role player: source sẽ chặn một số luồng bill.
- `parttime` chỉ hoạt động trên bot có bật feature tương ứng.

## Lỗi shop / inventory

- `shop` chỉ hiển thị item có `price`.
- `buy` giới hạn tối đa 100 item mỗi lần.
- `gift` yêu cầu item có trong inventory của người gửi.

## Lỗi ticket / embed / react

- Ticket cần kênh text có quyền tạo private thread.
- Embed cần `Embed Links` và `Send Messages`.
- React profile cần `settings react_channel` trước khi dùng `react profile`.

## TODO

- TODO: cần xác nhận bot name nào được phép dùng `givecoin`, `transfer`, `topbook`, `topgift` và `store`.

2. **Liên hệ admin cấu hình box rate:**
   ```bash
   # Admin thực hiện
   /box rate item:"Item Name" rate:30
   /box rate cash:50000 rate:20
   ```

### 11. Ticket không tạo được

**Cách khắc phục:**

1. **Kiểm tra setup ticket:**
   ```bash
   # Owner thực hiện
   /ticket create
   /ticket add-button label:"Support" emoji:🎫
   ```

2. **Kiểm tra quyền bot:**
   ```
   Cần quyền:
   ✅ Manage Channels
   ✅ Manage Permissions
   ✅ Send Messages
   ```

## Khi nào cần liên hệ support?

### Liên hệ ngay lập tức:
- 🚨 Mất tiền không rõ lý do
- 🚨 Bot charge tiền sai
- 🚨 Hack tài khoản nghi ngờ
- 🚨 Lỗi ảnh hưởng nhiều người

### Có thể tự xử lý:
- ❓ Quên cách dùng lệnh
- ❓ Không hiểu tính năng
- ❓ Lỗi do nhập sai
- ❓ Vấn đề về quyền

### Thông tin cần cung cấp khi báo lỗi:
```bash
Mẫu báo lỗi (bug) của bot:
1. Lệnh đã sử dụng: <prefix>command
2. Lỗi xuất hiện: Mô tả chi tiết
3. Thời gian: Ngày/Tháng Giờ/Phút
4. Screenshot: (đính kèm nếu có)
5. Các bước tái hiện lỗi:
   - Bước 1: ...
   - Bước 2: ...
   - Bước 3: Lỗi xuất hiện
```

### Kiểm tra trạng thái hệ thống:

```bash
# Ping bot
@BotName ping
```

## FAQ

**Q: Bot đang bảo trì có báo trước không?**
A: Có, thường được thông báo trong kênh announcements.

**Q: Có thể rollback giao dịch không?**
A: Chỉ trong trường hợp lỗi hệ thống, cần admin xác nhận.

---

**Vẫn cần hỗ trợ?** Tạo ticket hoặc liên hệ trực tiếp team support. Chúng tôi luôn sẵn sàng giúp đỡ khi nhận được tin!
