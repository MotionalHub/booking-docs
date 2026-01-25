---
title: Owner Commands
description: Tài liệu đầy đủ các lệnh dành cho Owner - thiết lập hệ thống, cấu hình server và quản lý toàn diện
---
> <span className="badge badge-owner">Owner</span> là role có quyền cao nhất trong hệ thống, chịu trách nhiệm thiết lập và cấu hình toàn bộ bot cho server.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>owner</code> của bot để sử dụng các lệnh trong mục này.
</div>

## Setting Server - Cấu hình hệ thống

### Thiết lập kênh Log

<table className="command-table">
  <thead>
    <tr>
      <th>Lệnh</th>
      <th>Mô tả</th>
      <th>Cú pháp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/settings log-commands</code></td>
      <td>Set kênh log tất cả lệnh bot</td>
      <td><code>/settings log-commands #kênh</code></td>
    </tr>
    <tr>
      <td><code>/settings log-cash</code></td>
      <td>Set kênh log tiền cash</td>
      <td><code>/settings log-cash #kênh</code></td>
    </tr>
    <tr>
      <td><code>/settings log-bills</code></td>
      <td>Set kênh log tất cả bill</td>
      <td><code>/settings log-bills #kênh</code></td>
    </tr>
    <tr>
      <td><code>/settings log-box</code></td>
      <td>Set kênh log box</td>
      <td><code>/settings log-box #kênh</code></td>
    </tr>
    <tr>
      <td><code>/settings log-shop</code></td>
      <td>Set kênh log shop</td>
      <td><code>/settings log-shop #kênh</code></td>
    </tr>
    <tr>
      <td><code>/settings log-reset</code></td>
      <td>Set kênh log reset</td>
      <td><code>/settings log-reset #kênh</code></td>
    </tr>
    <tr>
      <td><code>/settings log-all</code></td>
      <td>Thiết lập nhanh tất cả log</td>
      <td><code>/settings log-all</code></td>
    </tr>
  </tbody>
</table>

### Cấu hình giá và lương

<table className="command-table">
  <thead>
    <tr>
      <th>Lệnh</th>
      <th>Mô tả</th>
      <th>Cú pháp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/settings server</code></td>
      <td>Cập nhật giá book, lương, phí server, phí donate</td>
      <td><code>/settings server</code></td>
    </tr>
    <tr>
      <td><code>/settings react_channel</code></td>
      <td>Cấu hình kênh hiển thị react profile</td>
      <td><code>/settings react_channel #kênh</code></td>
    </tr>
  </tbody>
</table>

### Ví dụ cấu hình:

```bash
# Thiết lập nhanh tất cả log
/settings log-all

# Hoặc từng cái một
/settings log-commands #log-commands
/settings log-cash #log-cash
/settings log-bills #log-bills
/settings log-shop #log-shop
/settings log-reset #log-reset

# Cấu hình giá và lương
/settings server

# Bot sẽ hỏi từng thông số:
# - Giá book ngày: 25k
# - Lương player ngày: 22k
# - Giá book đêm: 30k
# - Lương player đêm: 27k
# - Phí về server: 10k
# - Phí donate: 5%
```

<div className="callout callout-warning">
  <strong>📝 Lưu ý:</strong> <code>server</code> và <code>luong</code> chỉ thay đổi hiển thị; chi phí thực tế tính theo giá tại thời điểm sử dụng.
</div>

## Welcome

### Thiết lập hệ thống chào mừng

<table className="command-table">
  <thead>
    <tr>
      <th>Lệnh</th>
      <th>Mô tả</th>
      <th>Cú pháp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/settings log-welcome</code></td>
      <td>Set kênh chào mừng thành viên mới</td>
      <td><code>/settings log-welcome #kênh</code></td>
    </tr>
  </tbody>
</table>

### Placeholders có sẵn:

```bash
{user}           # Mention người dùng (@username)
{user_tag}       # Username#1234
{user_avatar}    # Link avatar người dùng
{user_display}   # Display name người dùng
{user_thumbnail} # Avatar nhỏ
{server_avatar}  # Avatar server
```

### Ví dụ setup welcome:

```bash
# 1. Cấu hình kênh welcome
/settings log-welcome #main-cat

# 2. Tạo embed welcome
/embed create name:welcome
title:Chào mừng {user_display}!
description:Cảm ơn bạn đã tham gia {server_name}!\n\nHãy đọc rules và bắt đầu trải nghiệm!
thumbnail:{user_avatar}
color:0x00ff00
```

## Ticket

### Tạo hệ thống ticket

<table className="command-table">
  <thead>
    <tr>
      <th>Bước</th>
      <th>Lệnh</th>
      <th>Mô tả</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><code>/ticket create</code></td>
      <td>Tạo tin nhắn ticket (kèm embed hoặc text)</td>
    </tr>
    <tr>
      <td>2</td>
      <td><code>/ticket add-button</code></td>
      <td>Thêm nút cho ticket</td>
    </tr>
    <tr>
      <td>3</td>
      <td><code>/ticket edit-button</code></td>
      <td>Chỉnh sửa lại các nút (nếu cần)</td>
    </tr>
    <tr>
      <td>4</td>
      <td><code>/ticket clear-button</code></td>
      <td>Xóa tất cả nút (nếu cần)</td>
    </tr>
  </tbody>
</table>

### Quy trình tạo ticket hoàn chỉnh:

```bash
# Bước 1: Tạo embed cho ticket
/embed create name:ticket-support
title:Hỗ trợ khách hàng
description:Bấm nút bên dưới để tạo ticket và được hỗ trợ nhanh chóng!
color:0x7c3aed

# Bước 2: Tạo tin nhắn ticket
/ticket create #ticket

# Bước 3: Thêm nút
/ticket add-button
# Các trường:
# - label:Booking
# - embed: ticbooking

# Bước 4: Thêm nút khác (nếu cần)
/ticket add-button
# Các trường:
# - label:Support
# - embed: ticsupport
```

### Các tham số cho add-button:

- **label:** Tên hiển thị trên nút
- **emoji:** Biểu tượng emoji 
- **embed:** Tên embed nếu custom nội dung trong ticket khi đã tạo

## Embed Builder

### Quản lý embed

<table className="command-table">
  <thead>
    <tr>
      <th>Lệnh</th>
      <th>Mô tả</th>
      <th>Cú pháp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/embed create</code></td>
      <td>Tạo embed mới</td>
      <td><code>/embed create</code></td>
    </tr>
    <tr>
      <td><code>/embed edit</code></td>
      <td>Chỉnh sửa embed đã tạo</td>
      <td><code>/embed edit</code></td>
    </tr>
    <tr>
      <td><code>/embed delete</code></td>
      <td>Xóa embed</td>
      <td><code>/embed delete</code></td>
    </tr>
    <tr>
      <td><code>/embed list</code></td>
      <td>Xem danh sách embed</td>
      <td><code>/embed list</code></td>
    </tr>
  </tbody>
</table>

### Tham số embed chi tiết:

| Tham số | Mô tả | Ví dụ |
|---------|-------|-------|
| `name:` | Tên embed (để quản lý) | `name: welcomeEmbed` |
| `content:` | Nội dung ngoài embed | `content: Xin chào mọi người!` |
| `title:` | Tiêu đề embed | `title: Chào mừng {user}` |
| `author_name:` | Tên tác giả | `author_name: Bot Booking` |
| `author_url:` | Link tác giả | `author_url: {user_avatar}` |
| `footer_text:` | Text footer | `footer_text: Cảm ơn đã tham gia` |
| `footer_icon:` | Icon footer | `footer_icon: https://example.com/icon.png` |
| `description:` | Mô tả chính | `description: Đây là server booking.` |
| `thumbnail:` | Ảnh nhỏ (góc phải) | `thumbnail: {server_avatar}` |
| `image:` | Ảnh lớn (cuối embed) | `image: https://example.com/banner.png` |
| `color:` | Màu viền (hex với 0x) | `color: 0x00FF00` |
| `timestamp:` | Hiển thị thời gian | `timestamp: true` |

### Ví dụ embed hoàn chỉnh:

```bash
/embed edit name:welcome 
content: Xin chào 
title: Hello {user_display} 
author_name: Bot Booking 
author_url: https://discord.com 
footer_text: Welcome footer 
footer_icon: https://img.png 
description: Chúc mừng bạn đến server 
thumbnail: {user_avatar} 
image: https://banner.png 
color: 0xFF9900 
timestamp: true
```

## Anti-Raid System [BETA]

### Cấu hình cơ bản

<table className="command-table">
  <thead>
    <tr>
      <th>Lệnh</th>
      <th>Mô tả</th>
      <th>Cú pháp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/antiraid config</code></td>
      <td>Hiển thị cấu hình Anti-Raid hiện tại</td>
      <td><code>/antiraid config</code></td>
    </tr>
    <tr>
      <td><code>/antiraid setup</code></td>
      <td>Thiết lập nhanh cấu hình mặc định</td>
      <td><code>/antiraid setup</code></td>
    </tr>
  </tbody>
</table>

### Cấu hình chống Raid

<table className="command-table">
  <thead>
    <tr>
      <th>Loại</th>
      <th>Lệnh</th>
      <th>Mô tả</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Join Raid</td>
      <td><code>/antiraid member</code></td>
      <td>Giới hạn số thành viên tham gia/thời gian</td>
    </tr>
    <tr>
      <td>Message Spam</td>
      <td><code>/antiraid message</code></td>
      <td>Giới hạn số tin nhắn/thời gian</td>
    </tr>
    <tr>
      <td>Channel/Webhook</td>
      <td><code>/antiraid channel_webhook</code></td>
      <td>Giới hạn tạo/xóa kênh & webhook</td>
    </tr>
    <tr>
      <td>Role Management</td>
      <td><code>/antiraid role</code></td>
      <td>Giới hạn tạo/xóa role</td>
    </tr>
  </tbody>
</table>

### Cấu hình nâng cao

<table className="command-table">
  <thead>
    <tr>
      <th>Tính năng</th>
      <th>Lệnh</th>
      <th>Mô tả</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Punishment</td>
      <td><code>/antiraid advanced punishment_type</code></td>
      <td>Hình phạt: kick/ban/quarantine</td>
    </tr>
    <tr>
      <td>Quarantine Role</td>
      <td><code>/antiraid advanced quarantine_role</code></td>
      <td>Role cách ly cho vi phạm</td>
    </tr>
    <tr>
      <td>Account Age</td>
      <td><code>/antiraid advanced min_account_age</code></td>
      <td>Tuổi tài khoản tối thiểu</td>
    </tr>
    <tr>
      <td>Whitelist</td>
      <td><code>/antiraid whitelist_role</code></td>
      <td>Role được bỏ qua kiểm soát</td>
    </tr>
    <tr>
      <td>Notification</td>
      <td><code>/antiraid advanced notify_channel</code></td>
      <td>Kênh nhận cảnh báo</td>
    </tr>
    <tr>
      <td>Ignore Bots</td>
      <td><code>/antiraid advanced ignore_bots</code></td>
      <td>Bỏ qua bot trong kiểm soát</td>
    </tr>
  </tbody>
</table>

### Ví dụ cấu hình Anti-Raid:

```bash
# Setup nhanh
/antiraid setup

# Cấu hình chi tiết
/antiraid member rate:5 second:10 enable:true
/antiraid message rate:10 second:5 enable:true
/antiraid channel_webhook rate:3 second:60 enable:true
/antiraid role rate:2 second:30 enable:true

# Cấu hình nâng cao
/antiraid advanced punishment_type type:quarantine
/antiraid advanced quarantine_role role:@Quarantine
/antiraid advanced min_account_age days:7
/antiraid whitelist_role role:@Supporter
/antiraid advanced notify_channel channel:#log-antiraid
/antiraid advanced ignore_bots enabled:true
```

### Security checklist:

- ✅ Bot role cao hơn tất cả role khác
- ✅ Chỉ gán Owner role cho người tin cậy
- ✅ Thiết lập anti-raid để chống tấn công
- ✅ Test tất cả tính năng trước khi tiến hành hoạt động

<div className="callout callout-warning">
  <strong>⚠️ Quan trọng:</strong> Owner có toàn quyền trong hệ thống. Hãy cẩn thận khi thực hiện các thay đổi và luôn backup trước khi update lớn.
</div>

## Hỗ trợ Owner

Nếu gặp khó khăn trong việc setup:

1. **[Xem Quick Start](/quick-start/)** - Hướng dẫn setup 5 phút
2. **[Basic Setup](/basic-setup/)** - Cấu hình chi tiết
3. **[Troubleshooting](/troubleshooting/)** - Xử lý lỗi thường gặp
4. **Liên hệ support** - Để được hỗ trợ trực tiếp
