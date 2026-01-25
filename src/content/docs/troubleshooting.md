---
title: Troubleshooting - Xử lý sự cố
description: Hướng dẫn xử lý các lỗi thường gặp và troubleshooting Discord Booking Bot
---
> Trang này tổng hợp các lỗi thường gặp và cách khắc phục khi sử dụng Discord Booking Bot.

### 1. Bot không phản hồi lệnh

> **Dấu hiệu:** Gõ lệnh nhưng bot không có phản ứng gì

**Checklist chẩn đoán:**

| ✓ | Kiểm tra | Cách test |
|---|----------|----------|
| ⬜ | Prefix đúng? | `@BotName prefix` |
| ⬜ | Bot online? | `@BotName ping` |
| ⬜ | Quyền trong channel? | Test ở kênh khác |
| ⬜ | Cú pháp đúng? | Dùng lệnh đơn giản `cash` |

<details>
<summary>🔧 <strong>Hướng dẫn khắc phục từng bước</strong></summary>

**Bước 1:** Kiểm tra prefix
```bash
@BotName prefix
```

**Bước 2:** Test lệnh cơ bản
```bash
<prefix>cash
```

**Bước 3:** Kiểm tra bot status
```bash
@BotName ping
```

**Bước 4:** Thử kênh khác nếu vẫn lỗi

</details>

> 💡 **Pro tip:** Mention bot + "prefix" luôn hoạt động dù prefix là gì

### 2. Lỗi quyền hạn (Permission Error)

> **Dấu hiệu:** "Bạn không có quyền sử dụng lệnh này"

**🔍 Nguyên nhân thường gặp:**

| Vấn đề | Giải pháp |
|--------|----------|
| 🏷️ Thiếu role | Liên hệ admin gán role |
| 📊 Role hierarchy sai | Admin kiểm tra vị trí role |
| 🚫 Channel restricted | Dùng lệnh ở channel khác |

---

**🛠️ Các bước khắc phục:**

**1️⃣ Tự kiểm tra role**

Click chuột phải username → View Profile → Xem Roles

**2️⃣ Yêu cầu admin gán role**
```bash
role @user @RequiredRole
```

**3️⃣ Kiểm tra vị trí Role**

```mermaid
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

> ⚠️ Bot role **phải** cao hơn tất cả role user để quản lý

### 3. Lỗi số tiền/số liệu không hợp lệ

> **Dấu hiệu:** "Số tiền không hợp lệ" hoặc "Invalid amount"

**So sánh định dạng:**

| ✅ Đúng | ❌ Sai | Lý do sai |
|---------|--------|----------|
| `10k` | `10,000` | Có dấu phẩy |
| `100k` | `10k VND` | Có chữ thừa |
| `1m` | `10 k` | Có khoảng trắng |
| `2.5m` | `abc` | Không phải số |
| `10000` | `10_000` | Có dấu gạch dưới |

**💡 Quy tắc nhập số:**

- ✅ Viết liền, không khoảng trắng
- ✅ Dùng `k` (nghìn), `m` (triệu)
- ✅ Cho phép số thập phân: `2.5m`
- ❌ Không dùng dấu phẩy, chữ VND, đơn vị khác

**Ví dụ thực tế:**

```diff
- ac @user 10,000     ❌
+ ac @user 10k        ✅

- ac @user 100k VND   ❌  
+ ac @user 100k       ✅

- ac @user 1 000 000  ❌
+ ac @user 1m         ✅
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
   - Liên hệ staff/supporter
   - Cung cấp hình ảnh chuyển khoản
   - Đợi xác nhận

3. **Kiểm tra giá sản phẩm:**
   ```bash
   shop  # Xem giá các item
   ```

## Lỗi hệ thống và setup

### 6. Lỗi embed/message không hiển thị

> **Dấu hiệu:** Embed không xuất hiện hoặc chỉ thấy text thường

**🔐 Checklist quyền bot (cho Admin):**

| Quyền cần thiết | Mục đích | Status |
|----------------|----------|--------|
| 📝 Send Messages | Gửi tin nhắn cơ bản | ⬜ |
| 📊 Embed Links | Hiển thị embed đẹp | ⬜ |
| 😀 Use External Emojis | Dùng emoji custom | ⬜ |
| 👍 Add Reactions | Thêm reaction | ⬜ |
| 📖 Read Message History | Đọc tin nhắn cũ | ⬜ |
| 🔗 Attach Files | Đính kèm file | ⬜ |

---

<details>
<summary>🛠️ <strong>Hướng dẫn cấp quyền</strong></summary>

**Bước 1:** Vào Server Settings → Roles → Bot Role

**Bước 2:** Bật tất cả permissions ở trên

**Bước 3:** Check Override permissions trong channel cụ thể

**Bước 4:** Test lại:
```bash
<prefix>cash
```

</details>

> 💡 Nếu kênh đó không hoạt động, kiểm tra các channel khác để xác định là lỗi bot hay bị giới hạn trong kênh

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

## Lỗi tính năng cụ thể

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
