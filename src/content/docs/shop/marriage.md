---
title: Marriage System
description: Hệ thống kết hôn trong Discord với nhẫn cưới, profile và các tính năng romantic
---

# 💕 Marriage System

Hệ thống Marriage cho phép thành viên server kết hôn với nhau thông qua nhẫn cưới, tạo profile couple và tương tác romantic.

<div className="callout callout-info">
  <strong>💍 Yêu cầu:</strong> Cần sở hữu nhẫn cưới (item có type=ring) để có thể cầu hôn.
</div>

## 💒 Lệnh Marriage

### Quản lý hôn nhân

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
      <td><code>marry</code></td>
      <td>Cầu hôn với nhẫn cưới</td>
      <td><code>marry @user &lt;ring_id&gt;</code></td>
    </tr>
    <tr>
      <td><code>marry divorce</code></td>
      <td>Chấm dứt hôn nhân</td>
      <td><code>marry divorce</code></td>
    </tr>
    <tr>
      <td><code>marry profile</code></td>
      <td>Xem thông tin chi tiết về mối quan hệ</td>
      <td><code>marry profile</code></td>
    </tr>
  </tbody>
</table>

### Tương tác romantic

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
      <td><code>marry luv</code></td>
      <td>Gửi lời yêu thương đến người bạn đời</td>
      <td><code>marry luv</code></td>
    </tr>
    <tr>
      <td><code>marry vague</code></td>
      <td>Đặt trạng thái quan hệ thành "mập mờ"</td>
      <td><code>marry vague</code></td>
    </tr>
    <tr>
      <td><code>marry mapmo</code></td>
      <td>Đặt trạng thái quan hệ thành "mập mờ" (alias)</td>
      <td><code>marry mapmo</code></td>
    </tr>
  </tbody>
</table>

## 🎨 Tùy chỉnh Profile

### Chỉnh sửa giao diện

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
      <td><code>marry thumbnail</code></td>
      <td>Đặt ảnh thumbnail cho embed profile</td>
      <td><code>marry thumbnail &lt;url/file&gt;</code></td>
    </tr>
    <tr>
      <td><code>marry image</code></td>
      <td>Đặt ảnh lớn cho embed profile</td>
      <td><code>marry image &lt;url/file&gt;</code></td>
    </tr>
  </tbody>
</table>

## 🏃‍♀️ Quy trình kết hôn

### Bước 1: Chuẩn bị nhẫn cưới

```bash
# Admin tạo nhẫn trong shop
/item add
# Tên: Diamond Ring
# Type: ring  ← Bắt buộc
# Giá: 1000000
# Emoji: 💍

# Khách mua nhẫn
buy 1  # ID của nhẫn
```

### Bước 2: Cầu hôn

```bash
# Người cầu hôn thực hiện
marry @crush 1  # @người_muốn_cưới + ID_nhẫn

# Bot sẽ gửi thông báo cho người được cầu hôn
# Họ có thể accept hoặc decline
```

### Bước 3: Quản lý hôn nhân

```bash
# Xem profile couple
marry profile

# Gửi lời yêu thương
marry luv
# Bot sẽ mention partner với tin nhắn romantic

# Nếu muốn kết thúc
marry divorce
```

## 💝 Tính năng đặc biệt

### Romantic Commands:

```bash
# Gửi lời yêu thương ngẫu nhiên
marry luv
# "💕 @partner, you mean the world to me!"

# Đặt trạng thái mập mờ  
marry vague
# Chuyển từ "Married" thành "It's complicated"
```

## 🎨 Tùy chỉnh visual

### Thiết lập ảnh couple:

```bash
# Ảnh nhỏ (thumbnail) - góc phải embed
marry thumbnail https://i.imgur.com/couple1.jpg

# Ảnh lớn (image) - hiển thị full width
marry image https://i.imgur.com/couple2.jpg

# Upload file trực tiếp
marry thumbnail [attach file]
```

### Tips tạo profile đẹp:

- **Thumbnail**: Ảnh avatar couple (nhỏ, vuông)
- **Image**: Ảnh landscape romantic (to, ngang)
- **Chất lượng**: HD, không blur
- **Theme**: Consistent color scheme

## 🛡️ Quy tắc Marriage

### Giới hạn hệ thống:

<div className="callout callout-warning">
  <strong>⚠️ Lưu ý:</strong>
  <ul>
    <li>Mỗi người chỉ được kết hôn với 1 người</li>
    <li>Phải có nhẫn để cầu hôn</li>
    <li>Nhẫn sẽ bị tiêu thụ khi cầu hôn thành công</li>
    <li>Divorce sẽ xóa tất cả dữ liệu couple</li>
  </ul>
</div>

## 💡 Tips cho Admin

### Quản lý Marriage system:

1. **Monitor ring economy**: Giá hợp lý, không inflate
2. **Create variety**: Nhiều loại nhẫn khác nhau
3. **Handle drama**: Có policy về marriage conflicts
4. **Encourage positivity**: Marriage để build community
5. **Regular events**: Tạo excitement cho feature

### Config suggestions:

```bash
# Ring tiers
Basic Ring: 100k (simple couples)
Silver Ring: 500k (committed couples)  
Gold Ring: 1M (serious couples)
Diamond Ring: 2M (premium couples)
Legendary Ring: 5M (special occasions)
```
