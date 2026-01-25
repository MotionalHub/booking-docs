---
title: Anti-Raid System
description: Hệ thống bảo vệ server khỏi raid và spam với các biện pháp phòng ngừa tự động
---
> Anti-Raid bảo vệ server khỏi các cuộc tấn công raid, spam và hành vi độc hại thông qua hệ thống giám sát và phản ứng tự động.

<div className="callout callout-warning">
  <strong>🔬 BETA:</strong> Tính năng đang trong giai đoạn thử nghiệm và có thể có thay đổi.
</div>

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>owner</code> để cấu hình Anti-Raid System.
</div>

## Thiết lập Anti-Raid

### Lệnh cấu hình cơ bản

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
      <td>Hiển thị cấu hình hiện tại</td>
      <td><code>/antiraid config</code></td>
    </tr>
    <tr>
      <td><code>/antiraid setup</code></td>
      <td>Thiết lập nhanh cấu hình mặc định</td>
      <td><code>/antiraid setup</code></td>
    </tr>
  </tbody>
</table>

### Quick setup Quy trình:

```bash
# Bước 1: Thiết lập nhanh
/antiraid setup
# Bot sẽ cấu hình các settings mặc định

# Bước 2: Kiểm tra config
/antiraid config
# Xem lại các settings đã được thiết lập

# Bước 3: Fine-tune nếu cần
# Điều chỉnh các tham số theo nhu cầu server
```

## Các loại bảo vệ

### Member Join Protection

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
      <td><code>/antiraid member</code></td>
      <td>Giới hạn số thành viên join/thời gian</td>
      <td><code>/antiraid member rate:&lt;số&gt; second:&lt;giây&gt; enable:&lt;true/false&gt;</code></td>
    </tr>
  </tbody>
</table>

#### Cách hoạt động:
```bash
# Ví dụ: rate:5 second:10
Cho phép tối đa 5 members join trong 10 giây
Nếu vượt quá → Kích hoạt anti-raid mode

# Khi kích hoạt:
- Tạm thời lock server (invite paused)
- Thông báo về rủi ro raid member
- Ghi nhận các hoạt động nguy hiểm
```

### Message Spam Protection

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
      <td><code>/antiraid message</code></td>
      <td>Giới hạn số tin nhắn/thời gian</td>
      <td><code>/antiraid message rate:&lt;số&gt; second:&lt;giây&gt; enable:&lt;true/false&gt;</code></td>
    </tr>
  </tbody>
</table>

#### Protection mechanisms:
```bash
# Ví dụ: rate:10 second:5  
Cho phép tối đa 10 messages trong 5 giây từ 1 user
Vượt quá → Auto-mute

# Advanced detection:
- Chặn spam tin nhắn
```

### Channel & Webhook Protection

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
      <td><code>/antiraid channel_webhook</code></td>
      <td>Giới hạn tạo/xóa kênh & webhook</td>
      <td><code>/antiraid channel_webhook rate:&lt;số&gt; second:&lt;giây&gt; enable:&lt;true/false&gt;</code></td>
    </tr>
  </tbody>
</table>

#### Server structure protection:
```bash
# Ví dụ: rate:3 second:60
Cho phép tối đa 3 channel/webhook changes trong 60 giây

# Monitors:
- Tạo/xoá chnnale
- Tạo/xoá webhook  
```

### Role Management Protection

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
      <td><code>/antiraid role</code></td>
      <td>Giới hạn tạo/xóa role</td>
      <td><code>/antiraid role rate:&lt;số&gt; second:&lt;giây&gt; enable:&lt;true/false&gt;</code></td>
    </tr>
  </tbody>
</table>

#### Role security:
```bash
# Ví dụ: rate:2 second:30
Cho phép tối đa tạo/xoá 2 role trong 30 giây

# Protection against:
- Tạo, xoá nhiều role
- Chặn quyền role  
- Xoá role
```

## Cài đặt nâng cao

### Punishment Settings

<table className="command-table">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Lệnh</th>
      <th>Mô tả</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Punishment Type</td>
      <td><code>/antiraid advanced punishment_type</code></td>
      <td>Hình phạt: kick/ban/quarantine</td>
    </tr>
    <tr>
      <td>Quarantine Role</td>
      <td><code>/antiraid advanced quarantine_role</code></td>
      <td>Role cách ly cho vi phạm</td>
    </tr>
  </tbody>
</table>

#### Punishment options:

```bash
# Kick mode:
- Kick các thành viên tham gia khi không đủ điều kiện min_account_age.

# Ban mode:
- Ban các thành viên tham gia khi không đủ điều kiện min_account_age.

# Quarantine mode:
- Cách lý các thành viên
```

### Account Security

<table className="command-table">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Lệnh</th>
      <th>Mô tả</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Account Age</td>
      <td><code>/antiraid advanced min_account_age</code></td>
      <td>Tuổi tài khoản tối thiểu</td>
    </tr>
    <tr>
      <td>Ignore Bots</td>
      <td><code>/antiraid advanced ignore_bots</code></td>
      <td>Bỏ qua bot trong kiểm soát</td>
    </tr>
  </tbody>
</table>

#### Security measures:
```bash
# Lọc tuổi tài khoản (account age);
Đề xuất: tối thiếu 7 ngày
Mục dích: chặn các thành viên raid

# Bảo vệ bot:
Bỏ qua bot: true  
Mục đích: Ngăn chặn cảnh báo sai từ các bot hợp lệ
```

### Whitelist System

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
      <td><code>/antiraid whitelist_role</code></td>
      <td>Thêm role vào danh sách bỏ qua</td>
      <td><code>/antiraid whitelist_role role:&lt;@role&gt;</code></td>
    </tr>
  </tbody>
</table>

#### Trusted users:
```bash
# Whitelisted roles:
@Whitelist Role - Role được setting

# Trường hợp bị xử lí:
- Bỏ qua xử lí các member có role
```

### Notification System

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
      <td><code>/antiraid advanced notify_channel</code></td>
      <td>Kênh nhận cảnh báo</td>
      <td><code>/antiraid advanced notify_channel channel:&lt;#kênh&gt;</code></td>
    </tr>
  </tbody>
</table>
