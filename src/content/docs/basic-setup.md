---
title: Cấu hình cơ bản
description: Hướng dẫn chi tiết về cấu hình ban đầu và các thiết lập quan trọng cho Discord Booking Bot
---

Trang này cung cấp hướng dẫn chi tiết về việc cấu hình Discord Booking Bot từ đầu, bao gồm tất cả các thiết lập cần thiết để hệ thống hoạt động hiệu quả.

## Hệ thống phân quyền

### Cấu trúc Role

Để bot hoạt động tối ưu, bạn cần thiết lập hệ thống role theo thứ tự ưu tiên:

| Thứ tự | Role | Mô tả |
|--------|------|-------|
| 1 | @Owner | Chủ sở hữu |
| 2 | @Administrator | Quản trị viên |
| 3 | @Supporter | Nhân viên hỗ trợ |
| 4 | @Cash | Quản lý tài chính |
| 5 | @Player | Người chơi |
| 6 | @everyone | Khách |

### Chi tiết từng role:

#### <span className="badge badge-owner">Owner</span> Chủ sở hữu
- **Quyền Role**: Administrator
- **Quyền Bot**: Toàn quyền setup và cấu hình
- **Mô tả**: Cài đặt hệ thống, cấu hình tổng thể

#### <span className="badge badge-admin">Administrator</span> Quản trị viên  
- **Quyền Bot**: Quản lý cash, time, lương player
- **Mô tả**: Vận hành hàng ngày, quản lý tài chính

#### <span className="badge badge-supporter">Supporter</span> Nhân viên hỗ trợ
- **Quyền Role**: Manage Messages, Kick Members
- **Quyền Bot**: Tạo bill, booking, moderation
- **Mô tả**: Hỗ trợ khách hàng, xử lý booking

#### <span className="badge badge-cash">Cash</span> Quản lý tài chính
- **Quyền Role**: Không cần đặc biệt
- **Quyền Bot**: Chỉ nạp/trừ tiền cho khách
- **Mô tả**: Xử lý giao dịch cash

#### <span className="badge badge-player">Player</span> Người chơi
- **Quyền Role**: Không cần đặc biệt  
- **Quyền Bot**: Xem lương, profile cá nhân
- **Mô tả**: Nhận bill, cung cấp dịch vụ

## Thiết lập kênh Log & Welcome

### Kênh log bắt buộc:

```bash
# Tạo category cho log
Booking Logs
├── log-cash      # Giao dịch tiền
├── log-bills     # Tất cả bill
├── log-commands  # Commands được sử dụng  
├── log-shop      # Hoạt động shop
├── log-reset     # Reset doanh thu
└── log-welcome   # Welcome messages
```

### Kênh hoạt động chính:

```bash  
# Main channels
SUPPORT
├── ticket

BOOKING  
├── player-nam
├── player-nữ
├── react-bill

SHOP
├── shop
```

### Lệnh thiết lập nhanh:

```bash
# Thiết lập tất cả log cùng lúc
/settings log-all

# Thiết lập  welcome
/settings log-welcome

# Hoặc từng cái một
/settings log-commands
/settings log-cash
/settings log-bills
/settings log-shop
/settings log-reset
```

## Cấu hình giá và lương

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
  <strong>📝 Lưu ý:</strong> Giá hiển thị sẽ thay đổi ngay lập tức, nhưng các bill đã tạo sẽ thay đổi thành giá mới thiết lập. Reset bill trước khi thay đổi nếu bạn không muốn ảnh hưởng đến lương.
</div>

### Tính năng hỗ trợ nhập nhanh:

```bash
# Các cách nhập được hỗ trợ
10k = 10,000 VNĐ
1m = 1,000,000 VNĐ  
500k = 500,000 VNĐ
```

## Tùy chỉnh giao diện

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

## Thiết lập React Profile

### Bước 1: Cấu hình kênh react

```bash
/settings react_channel #react-bill
```

### Bước 2: Gán profile cho player

```bash
# Cú pháp: ar set <tên-profile> | <@user>
ar set Player1 | @moonu
```

### Bước 3: Sử dụng react profile

Trong ticket của khách:
```bash
/react profile Tạo react và các Player nhận bill
```

Bot sẽ tạo reaction tại kênh đã cấu hình, khi player react sẽ hiện danh sách.

## Thiết lập bảo mật cơ bản

### Anti-Raid setup nhanh:

```bash
# Thiết lập mặc định
/antiraid setup

# Tùy chỉnh nâng cao
/antiraid member rate:5 second:10 enable:true
/antiraid message rate:10 second:5 enable:true  
/antiraid advanced punishment_type type:quarantine
/antiraid whitelist_role role:@Supporter
```

### Cấu hình Moderation:

```bash
# Tạo role quarantine cho anti-raid
@Quarantine - Cách ly

# Set kênh thông báo anti-raid
/antiraid advanced notify_channel #log-antiraid
```

## Checklist hoàn thành

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

## Test hệ thống

### Test commands cơ bản:

```bash
# Test cash
ac @testuser 50000
sc @testuser 10000

# Test lương player  
as @testplayer 3
al @testplayer 15000

# Test booking
/book khách:@moonu player:@Player1 số-giờ:1 thanh-toán:Bank

# Test shop
buy 1
```

<div className="callout callout-warning">
  <strong>⚠️ Quan trọng:</strong> Luôn test với tài khoản phụ trước khi áp dụng cho server thực tế!
</div>

## Hỗ trợ kỹ thuật

Nếu gặp vấn đề trong quá trình cấu hình:

1. **[Xem Troubleshooting](/troubleshooting/)** - Các lỗi thường gặp
2. **[FAQ](/faq/)** - Câu hỏi thường gặp  
3. **Liên hệ support** - Để được hỗ trợ trực tiếp