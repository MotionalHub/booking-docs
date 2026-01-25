---
title: Marriage
description: Hệ thống kết hôn trong Discord với nhẫn cưới, profile và các tính năng romantic
---
> Hệ thống Marriage cho phép thành viên server kết hôn với nhau thông qua nhẫn cưới, tạo profile couple và tương tác romantic.

<div className="callout callout-info">
  <strong>💍 Yêu cầu:</strong> Cần sở hữu nhẫn cưới (item có type=ring) để có thể cầu hôn.
</div>

## Lệnh Marriage

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

## Tùy chỉnh Profile

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

## Tương tác

### Lệnh yêu thương:

```bash
# Gửi lời yêu thương ngẫu nhiên
marry luv
# "💕 @partner, you mean the world to me!"

# Đặt trạng thái mập mờ  
marry vague
# Chuyển từ Độc thân thành Mập mờ 
```

## Tùy chỉnh profile

### Thiết lập ảnh couple:

```bash
# Ảnh nhỏ (thumbnail) - góc phải embed
marry thumbnail https://i.imgur.com/couple1.jpg

# Ảnh lớn (image) - hiển thị full width
marry image https://i.imgur.com/couple2.jpg

# Upload file trực tiếp
marry thumbnail [attach-file]
```

### Tips tạo profile đẹp:

- **Thumbnail**: Ảnh nhỏ (nhỏ, vuông)
- **Image**: Ảnh to (to, ngang)
