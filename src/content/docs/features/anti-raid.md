---
title: Anti-Raid System
description: Hệ thống bảo vệ server khỏi raid và spam với các biện pháp phòng ngừa tự động
---

# 🛡️ Anti-Raid System

Anti-Raid System bảo vệ server khỏi các cuộc tấn công raid, spam và hành vi độc hại thông qua hệ thống giám sát và phản ứng tự động.

<div className="callout callout-warning">
  <strong>🔬 BETA:</strong> Tính năng đang trong giai đoạn thử nghiệm và có thể có thay đổi.
</div>

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>owner</code> để cấu hình Anti-Raid System.
</div>

## ⚙️ Thiết lập Anti-Raid

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

### Quick setup workflow:

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

## 🎯 Các loại bảo vệ

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
- Alert staff về potential raid
- Log suspicious activities
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
Vượt quá → Auto-mute/kick/ban

# Advanced detection:
- Duplicate content spam
- Mass mention abuse  
- Rapid emoji spam
- Link flooding
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
- Channel creation/deletion
- Webhook creation/deletion  
- Permission modifications
- Mass structural changes
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
Cho phép tối đa 2 role changes trong 30 giây

# Protection against:
- Mass role creation
- Permission escalation  
- Role deletion attacks
- Hierarchy manipulation
```

## 🔧 Advanced Configuration

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
- Remove violators từ server
- Temporary measure
- Can rejoin if not banned

# Ban mode:  
- Permanent removal
- Strongest protection
- Prevents rejoin

# Quarantine mode:
- Restrict permissions
- Limited channel access
- Allow manual review
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
# Account age filter:
Min age: 7 days (recommended)
Purpose: Block newly created raid accounts

# Bot protection:
Ignore verified bots: true
Purpose: Prevent false positives from legitimate bots
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
@Owner - Full immunity
@Administrator - Full immunity  
@Supporter - Reduced restrictions
@VIP - Higher limits
@Verified - Basic protection bypass

# Use cases:
- Staff performing bulk operations
- VIP members with special privileges
- Verified users with higher trust
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
