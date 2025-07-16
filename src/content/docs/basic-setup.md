---
title: Cấu hình cơ bản
description: Hướng dẫn chi tiết về cấu hình ban đầu và các thiết lập quan trọng cho Discord Booking Bot
---

# ⚙️ Cấu hình cơ bản

Trang này cung cấp hướng dẫn chi tiết về việc cấu hình Discord Booking Bot từ đầu, bao gồm tất cả các thiết lập cần thiết để hệ thống hoạt động hiệu quả.

## 🔐 Hệ thống phân quyền

### Cấu trúc Role

Để bot hoạt động tối ưu, bạn cần thiết lập hệ thống role theo thứ tự ưu tiên:

```
1. Bot Role (cao nhất)
2. @Owner  
3. @Administrator
4. @Supporter  
5. @Cash
6. @Player
7. @everyone (khách)
```

### Chi tiết từng role:

#### <span className="badge badge-owner">Owner</span> - Chủ sở hữu
- **Permissions Discord**: Administrator
- **Quyền Bot**: Toàn quyền setup và cấu hình
- **Responsibilities**: Cài đặt hệ thống, cấu hình tổng thể

#### <span className="badge badge-admin">Administrator</span> - Quản trị viên  
- **Permissions Discord**: Manage Server, Manage Roles
- **Quyền Bot**: Quản lý cash, time, lương player
- **Responsibilities**: Vận hành hàng ngày, quản lý tài chính

#### <span className="badge badge-supporter">Supporter</span> - Nhân viên hỗ trợ
- **Permissions Discord**: Manage Messages, Kick Members
- **Quyền Bot**: Tạo bill, booking, moderation
- **Responsibilities**: Hỗ trợ khách hàng, xử lý booking

#### <span className="badge badge-cash">Cash</span> - Quản lý tài chính
- **Permissions Discord**: Không cần đặc biệt
- **Quyền Bot**: Chỉ nạp/trừ tiền cho khách
- **Responsibilities**: Xử lý giao dịch cash

#### <span className="badge badge-player">Player</span> - Người chơi
- **Permissions Discord**: Không cần đặc biệt  
- **Quyền Bot**: Xem lương, profile cá nhân
- **Responsibilities**: Nhận bill, cung cấp dịch vụ

## 🏗️ Thiết lập kênh (Channel Setup)

### Kênh log bắt buộc:

```bash
# Tạo category cho log
📊 BOT LOGS
├── 💰-log-cash      # Giao dịch tiền
├── 📋-log-bills     # Tất cả bill
├── ⭐-log-commands  # Commands được sử dụng  
├── 🛍️-log-shop      # Hoạt động shop
├── 🔄-log-reset     # Reset doanh thu
└── 👋-log-welcome   # Welcome messages
```

### Kênh hoạt động chính:

```bash  
# Main channels
🎫 SUPPORT
├── 🎫-ticket-create  # Tạo ticket
└── 📂-ticket-logs    # Ticket logs

💼 BOOKING  
├── 📋-booking-area   # Khu vực booking
├── ⭐-player-react   # Player react profile
└── 💰-payment-info   # Thông tin thanh toán

🛍️ SHOP
├── 🛒-shop-area      # Mua sắm
└── 🎁-inventory      # Kho đồ
```

### Lệnh thiết lập nhanh:

```bash
# Thiết lập tất cả log cùng lúc
/settings log-all

# Hoặc từng cái một
/settings log-commands #⭐-log-commands
/settings log-cash #💰-log-cash
/settings log-bills #📋-log-bills  
/settings log-shop #🛍️-log-shop
/settings log-reset #🔄-log-reset
/settings log-welcome #👋-log-welcome
```

## 💰 Cấu hình giá và lương

### Thiết lập server config:

```bash
/settings server
```

**Các thông số cần nhập:**

| Thông số | Mô tả | Ví dụ |
|----------|-------|-------|
| **Giá book ngày** | Giá/giờ trong giờ hành chính | `25k` |
| **Lương player ngày** | Lương/giờ cho player ban ngày | `22k` |
| **Giá book đêm** | Giá/giờ ngoài giờ hành chính | `30k` |
| **Lương player đêm** | Lương/giờ cho player ban đêm | `27k` |
| **Phí về server** | Phí  ề server mỗi bill booking | `5k` |
| **Phí donate** | Phí cho bill donate theo % | `5` (server nhận 5%) |

<div className="callout callout-info">
  <strong>📝 Lưu ý:</strong> Giá hiển thị sẽ thay đổi ngay lập tức, nhưng các bill đã tạo vẫn giữ giá cũ.
</div>

### Tính năng hỗ trợ nhập nhanh:

```bash
# Các cách nhập được hỗ trợ
10k = 10,000 VNĐ
1m = 1,000,000 VNĐ  
500k = 500,000 VNĐ
```

## 🎨 Tùy chỉnh giao diện

### Thay đổi prefix:

```bash
prefix !          # Thay prefix thành !
prefix $          # Thay prefix thành $
```

### Cấu hình màu sắc:

```bash
# Thay đổi màu embed chính
color all 0x7c3aed          # Tím
color success 0x10b981      # Xanh lá
color error 0xef4444        # Đỏ
color default 0x10b981      # Xanh lá
```


**Các loại màu có thể thay:**
- `success` - Màu thành công  
- `error` - Màu lỗi
- `default` - Màu mặc định
- `all` - Tất cả mục trên

### Tùy chỉnh emoji:

```bash
# Thay đổi emoji hệ thống
emoji success ✅
emoji error ❌  
emoji cash 💰
```

## 🎫 Thiết lập React Profile System

### Bước 1: Cấu hình kênh react

```bash
/settings react_channel #⭐-player-react
```

### Bước 2: Gán profile cho player

```bash
# Cú pháp: ar set <tên-profile> | <@user>
ar set Player1 | @john
ar set Player2 | @jane  
ar set VIP-Player | @alice
ar set Newbie | @bob
```

### Bước 3: Sử dụng react profile

Trong ticket của khách:
```bash
/react profile Tạo react và các Player nhận bill
```

Bot sẽ tạo reaction tại kênh đã cấu hình, khi player react sẽ hiện danh sách.

## 🛡️ Thiết lập bảo mật cơ bản

### Anti-Raid setup nhanh:

```bash
# Thiết lập mặc định
/antiraid setup

# Tùy chỉnh chi tiết
/antiraid member rate:5 second:10 enable:true
/antiraid message rate:10 second:5 enable:true  
/antiraid advanced punishment_type type:quarantine
/antiraid whitelist_role role:@Supporter
```

### Cấu hình Moderation:

```bash
# Tạo role quarantine cho anti-raid
@Quarantine - Không có quyền gì, chỉ xem 1 kênh

# Set kênh thông báo anti-raid
/antiraid advanced notify_channel #🔒-security-log
```

## 📋 Checklist hoàn thành

Sau khi cấu hình xong, hãy kiểm tra:

- [ ] ✅ Tất cả role được tạo và sắp xếp đúng thứ tự
- [ ] ✅ Bot có role cao hơn các role khác
- [ ] ✅ Tất cả kênh log được thiết lập
- [ ] ✅ Server config (giá, lương) đã cấu hình  
- [ ] ✅ Prefix và màu sắc theo ý muốn
- [ ] ✅ React profile channel được setup
- [ ] ✅ Anti-raid được bật
- [ ] ✅ Welcome system hoạt động
- [ ] ✅ Ticket system sẵn sàng

## 🧪 Test hệ thống

### Test commands cơ bản:

```bash
# Test cash
ac @testuser 50000
sc @testuser 10000

# Test player management  
as @testplayer 3
al @testplayer 15000

# Test booking
/book

# Test shop
/item add name:"Test Item" price:1000 description:"Test" emoji:🧪
shop
buy 1
```

<div className="callout callout-warning">
  <strong>⚠️ Quan trọng:</strong> Luôn test với tài khoản phụ trước khi áp dụng cho server thực tế!
</div>

## 📞 Hỗ trợ kỹ thuật

Nếu gặp vấn đề trong quá trình cấu hình:

1. **[Xem Troubleshooting](/troubleshooting/)** - Các lỗi thường gặp
2. **[FAQ](/faq/)** - Câu hỏi thường gặp  
3. **Liên hệ support** - Để được hỗ trợ trực tiếp

---

**🎉 Chúc mừng!** Bạn đã hoàn thành cấu hình cơ bản. Hệ thống giờ đã sẵn sàng để vận hành!
