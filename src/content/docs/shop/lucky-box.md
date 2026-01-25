---
title: Lucky Box
description: Hệ thống hộp quà may mắn với tỷ lệ thưởng có thể tùy chỉnh và quản lý phần thưởng
---

### Định nghĩa
> Lucky Box là hệ thống hộp quà may mắn cho phép khách hàng mở quà để nhận phần thưởng ngẫu nhiên với các tỷ lệ có thể tùy chỉnh.

<div className="callout callout-info">
  <strong>🎲 Cơ chế:</strong> Lucky Box hoạt động theo hệ thống tỷ lệ (rate) với các tier khác nhau từ Common đến Legendary.
</div>


## Quản lý Lucky Box

### Thiết lập Lucky Box cơ bản

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
      <td><code>/item add lb</code></td>
      <td>Tạo Lucky Box item trong shop</td>
      <td><code>/item add lb</code></td>
    </tr>
    <tr>
      <td><code>/box rate</code></td>
      <td>Chỉnh sửa tỷ lệ phần thưởng</td>
      <td><code>/box rate</code></td>
    </tr>
    <tr>
      <td><code>/box add</code></td>
      <td>Gán Lucky Box cho user</td>
      <td><code>/box add @user &lt;amount&gt;</code></td>
    </tr>
    <tr>
      <td><code>/box take</code></td>
      <td>Lấy Lucky Box từ user</td>
      <td><code>/box take @user &lt;amount&gt;</code></td>
    </tr>
  </tbody>
</table>

### Setup Lucky Box từ đầu:

```bash
# Bước 1: Tạo Lucky Box item
/item add lb
# Bot sẽ hỏi:
# - Tên: Mystery Box
# - Giá: 50000  
# - Emoji: 🎁
# - Mô tả: Hộp quà bí ẩn với nhiều phần thưởng

# Bước 2: Cấu hình tỷ lệ thưởng
/box rate
# Thiết lập tỷ lệ cho từng tier
```

### Cấu hình rate chi tiết:

```bash
/box rate

Điều chỉnh tỉ lệ rơi ra các sản phẩm trong cửa hàng
```

## Lệnh người dùng

### Sử dụng Lucky Box

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
      <td><code>unbox</code></td>
      <td>Mở Lucky Box để nhận phần thưởng</td>
      <td><code>unbox</code></td>
    </tr>
    <tr>
      <td><code>inventory</code></td>
      <td>Xem số lượng Lucky Box sở hữu</td>
      <td><code>inv</code></td>
    </tr>
  </tbody>
</table>

#### Cân bằng tỉ lệ:
```bash
- Kiểm tra thông qua log-box channel
- Kiểm tra tỷ lệ thực tế vs cấu hình
- Điều chỉnh rate nếu cần
- Đảm bảo server không bị lỗ
```
