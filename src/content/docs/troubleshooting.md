---
title: Troubleshooting - Xử lý sự cố
description: Hướng dẫn xử lý các lỗi thường gặp và troubleshooting Discord Booking Bot
---

# 🛠️ Troubleshooting - Xử lý sự cố

Trang này tổng hợp các lỗi thường gặp và cách khắc phục khi sử dụng Discord Booking Bot.

## 🚨 Lỗi thường gặp

### 1. Bot không phản hồi lệnh

<div className="callout callout-danger">
  <strong>❌ Nguyên nhân:</strong> Gõ lệnh nhưng bot không có phản ứng gì
</div>

**Nguyên nhân có thể:**
- ❌ Prefix sai
- ❌ Bot offline hoặc lag
- ❌ Không có quyền trong channel
- ❌ Lệnh gõ sai cú pháp

**Cách khắc phục:**

```bash
# 1. Kiểm tra prefix hiện tại
@BotName prefix

# 2. Thử lệnh đơn giản  
<prefix>cash

# 3. Kiểm tra bot online
@BotName ping

# 4. Thử trong kênh khác
```

<div className="callout callout-info">
  <strong>💡 Mẹo:</strong> Nếu không nhớ prefix, hãy @mention bot và gõ "prefix" để kiểm tra.
</div>

### 2. Lỗi quyền hạn (Permission Error)

<div className="callout callout-danger">
  <strong>❌ Nguyên nhân:</strong> Bot báo "Bạn không có quyền sử dụng lệnh này"
</div>

**Nguyên nhân:**
- Role không đúng hoặc chưa được gán
- Bot role thấp hơn role user
- Kênh không có quyền sử dụng bot

**Cách khắc phục:**

1. **Kiểm tra role của bạn:**
   ```bash
   # Xem role hiện tại trong Discord
   Right click > View Profile
   ```

2. **Yêu cầu admin gán role:**
   ```bash
   # Admin sử dụng lệnh
   role @user @RequiredRole
   ```

3. **Kiểm tra hierarchy role:**
   ```
   Bot Role (phải cao nhất)
   ↓
   @Owner
   ↓  
   @Administrator
   ↓
   @Supporter
   ↓
   @Cash
   ↓
   @Player
   ```

### 3. Lỗi số tiền/số liệu không hợp lệ

<div className="callout callout-danger">
  <strong>❌ Nguyên nhân:</strong> "Số tiền không hợp lệ" hoặc "Invalid amount"
</div>

**Định dạng đúng:**
```bash
✅ Đúng:
10k, 100k, 1m, 2.5m
10000, 100000, 1000000

❌ Sai:  
10,000 (có dấu phẩy)
10k VND (có chữ thừa)
10 k (có khoảng trắng)
abc (không phải số)
```

**Cách khắc phục:**
```bash
# Thay vì
ac @user 10,000

# Hãy dùng
ac @user 10k
# hoặc
ac @user 10000
```

### 4. Lỗi không tìm thấy user

<div className="callout callout-danger">
  <strong>❌ Nguyên nhân:</strong> "Không tìm thấy người dùng" hoặc "User not found"
</div>

**Nguyên nhân:**
- @ mention sai
- User không có trong server
- User đã block bot

**Cách khắc phục:**

**Dùng @ mention đúng:**
   ```bash
   # Đúng
   ac @username 10k
   
   # Sai
   ac 123456789012345678 10k
   ```

### 5. Lỗi số dư không đủ

<div className="callout callout-danger">
  <strong>❌ Nguyên nhân:</strong> "Số dư không đủ" khi mua đồ/booking
</div>

**Cách khắc phục:**

1. **Kiểm tra số dư:**
   ```bash
   cash
   ```

2. **Nạp thêm tiền:**
   - Liên hệ staff có role Cash
   - Cung cấp proof chuyển khoản
   - Đợi xác nhận

3. **Kiểm tra giá sản phẩm:**
   ```bash
   shop  # Xem giá các item
   ```

## 🔧 Lỗi hệ thống và setup

### 6. Lỗi embed/message không hiển thị

**Nguyên nhân:**
- Bot không có quyền embed links
- Kênh không cho phép bot gửi tin nhắn
- Message quá dài

**Cách khắc phục:**

1. **Kiểm tra permissions bot:**
   ```
   Required permissions:
   ✅ Send Messages
   ✅ Embed Links  
   ✅ Use External Emojis
   ✅ Add Reactions
   ✅ Read Message History
   ```

2. **Test trong kênh khác:**
   ```bash
   <prefix>cash  # Test lệnh đơn giản
   ```

### 7. Lỗi log không hoạt động

**Nguyên nhân:** Giao dịch không được ghi vào kênh log

**Cách khắc phục:**

1. **Setup lại kênh log:**
   ```bash
   /settings log-cash #log-channel
   /settings log-bills #log-channel
   ```

2. **Kiểm tra quyền bot trong kênh log:**
   ```
   Bot cần quyền:
   ✅ View Channel
   ✅ Send Messages  
   ✅ Embed Links
   ```

### 8. Lỗi commands slash (/) không hoạt động

**Cách khắc phục:**

1. **Re-invite bot với quyền applications.commands**
2. **Đợi Discord sync commands** (có thể mất vài phút)
3. **Thử lệnh prefix thay vì slash**

## 🎯 Lỗi tính năng cụ thể

### 9. Marriage không hoạt động

**Lỗi:** Không thể kết hôn dù có nhẫn

**Cách khắc phục:**

1. **Kiểm tra type của nhẫn:**
   ```bash
   inventory  # Xem nhẫn có type: ring không
   ```

2. **Kiểm tra người được cầu hôn:**
   - Phải ở trong server
   - Không đang kết hôn với ai khác
   - Không block bot

### 10. Lucky Box không mở được

**Nguyên nhân:**
- Không có Lucky Box trong inventory
- Box chưa được cấu hình rate
- Lỗi hệ thống

**Cách khắc phục:**

1. **Kiểm tra inventory:**
   ```bash
   inventory
   ```

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

## 🚑 Khắc phục khẩn cấp

### Khi mất tiền không rõ lý do:

1. **Ngừng sử dụng bot ngay lập tức**
2. **Screenshot số dư hiện tại**
3. **Kiểm tra kênh log giao dịch**
4. **Tạo ticket báo cáo chi tiết:**
   ```
   - Số tiền bị mất
   - Thời gian phát hiện
   - Hành động cuối cùng trước khi mất tiền
   - Screenshot (nếu có)
   ```

### Khi bot hoạt động bất thường:

1. **Kiểm tra thông báo từ admin**
2. **Test với lệnh đơn giản**
3. **Báo cáo trong kênh support**
4. **Đợi admin khắc phục**

<div className="callout callout-warning">
  <strong>⚠️ Quan trọng:</strong> Không spam lệnh khi bot lag. Điều này có thể làm tình hình tệ hơn.
</div>

## 📞 Khi nào cần liên hệ support?

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

```
📋 Mẫu báo lỗi (bug) của bot:
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

## 📚 FAQ nhanh

**Q: Bot đang bảo trì có báo trước không?**
A: Có, thường được thông báo trong kênh announcements.

**Q: Có thể rollback giao dịch không?**
A: Chỉ trong trường hợp lỗi hệ thống, cần admin xác nhận.

---

**🆘 Vẫn cần hỗ trợ?** Tạo ticket hoặc liên hệ trực tiếp team support. Chúng tôi luôn sẵn sàng giúp đỡ khi nhận được tin!
