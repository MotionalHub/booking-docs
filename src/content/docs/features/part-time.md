---
title: Part-time System
description: Hệ thống part-time dành cho khách hàng đặc biệt với chính sách riêng về lương và quyền truy cập
---

# ⏰ Part-time System

Part-time System là tính năng đặc biệt cho phép quản lý một nhóm khách hàng với chính sách riêng về lương, giờ làm, và quyền truy cập khác với hệ thống thường.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>supporter</code> để quản lý danh sách part-time.
</div>

<div className="callout callout-warning">
  <strong>📋 Lưu ý:</strong> Tính năng này chỉ khả dụng ở một số server và cần được cấu hình riêng.
</div>

## 🎯 Mục đích Part-time System

### Dành cho ai?

Part-time System thường được sử dụng cho:

- **Staff bán thời gian**: Nhân viên không full-time
- **VIP customers**: Khách hàng đặc biệt có ưu đãi riêng
- **Testing group**: Nhóm thử nghiệm tính năng mới
- **Special contracts**: Hợp đồng đặc biệt với điều khoản riêng

### Lợi ích của Part-time:

- 🕐 **Flexible hours**: Giờ làm linh hoạt
- 💰 **Different rates**: Mức lương/giá khác biệt  
- 🎯 **Special access**: Quyền truy cập đặc biệt
- 📊 **Separate tracking**: Theo dõi riêng biệt

## 🛠️ Quản lý Part-time

### Lệnh cơ bản

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
      <td><code>/parttime add</code></td>
      <td>Thêm khách hàng vào danh sách part-time</td>
      <td><code>/parttime add @user</code></td>
    </tr>
    <tr>
      <td><code>/parttime remove</code></td>
      <td>Xóa khách hàng khỏi danh sách part-time</td>
      <td><code>/parttime remove @user</code></td>
    </tr>
  </tbody>
</table>

### Quy trình quản lý:

```bash
# Thêm user vào part-time
/parttime add @john
# ✅ John đã được thêm vào danh sách part-time

# Xóa user khỏi part-time  
/parttime remove @john
# ✅ John đã được xóa khỏi danh sách part-time
```

## 🔧 Cấu hình hệ thống

### Setup Part-time System:

Vì Part-time System cần cấu hình riêng cho từng server, admin cần:

#### Bước 1: Kích hoạt tính năng
```bash
# Liên hệ dev để enable part-time cho server
```

#### Bước 2: Thiết lập quy tắc
```bash
# Admin định nghĩa:
- Lương part-time
- Quyền lợi dành cho part-time
```

#### Bước 3: Training team
```bash
# Hướng dẫn supporter:
- Cách thêm/xóa part-time
- Xử lý booking cho part-time
- Báo cáo định kỳ
```
