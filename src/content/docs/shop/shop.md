---
title: Quản lí Shop
description: Hướng dẫn quản lý hệ thống Shop - tạo sản phẩm, quản lý inventory và Lucky Box
---
> Hệ thống Shop tích hợp cho phép server tạo và quản lý cửa hàng với các sản phẩm đa dạng, Lucky Box và hệ thống inventory hoàn chỉnh.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>owner</code> hoặc <code>administrator</code> để quản lý shop.
</div>

## Quản lý sản phẩm

### Thêm sản phẩm mới

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
      <td><code>/item add</code></td>
      <td>Thêm sản phẩm mới vào cửa hàng</td>
      <td><code>/item add</code></td>
    </tr>
    <tr>
      <td><code>/item edit</code></td>
      <td>Chỉnh sửa thông tin sản phẩm</td>
      <td><code>/item &lt;id&gt;</code></td>
    </tr>
    <tr>
      <td><code>/item delete</code></td>
      <td>Xóa sản phẩm khỏi cửa hàng</td>
      <td><code>/item delete &lt;id&gt;</code></td>
    </tr>
  </tbody>
</table>

### Quy trình tạo sản phẩm:

```bash
# Bước 1: Tạo sản phẩm mới
/item add
# Bot sẽ hỏi:
# - Tên sản phẩm: VIP Package
# - Mô tả: Gói VIP 30 ngày
# - Giá: 500000
# - Emoji: 💎
# - Type: normal (hoặc ring cho marriage)

# Bước 2: Sản phẩm được tự động gán ID
# ID = 1: 💎 VIP Package - 500,000 VNĐ
```

## Lucky Box
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
      <td><code>/box add</code></td>
      <td>Gán Lucky Box cho người dùng</td>
      <td><code>/box add @user &lt;amount&gt;</code></td>
    </tr>
    <tr>
      <td><code>/box take</code></td>
      <td>Lấy Lucky Box từ inventory</td>
      <td><code>/box take @user &lt;amount&gt;</code></td>
    </tr>
    <tr>
      <td><code>/box rate</code></td>
      <td>Chỉnh sửa tỷ lệ phần thưởng</td>
      <td><code>/box rate</code></td>
    </tr>
  </tbody>
</table>

### Cấu hình Lucky Box:

```bash
# Cấu hình tỷ lệ thưởng
/box rate
# Common (70%): 10k-50k cash
# Rare (25%): Items thường
# Epic (4%): Items quý hiếm  
# Legendary (1%): Jackpot 1M cash
```

## Quản lý Inventory

### Lệnh inventory cơ bản

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
      <td><code>/give take</code></td>
      <td>Add item vào inventory của user</td>
      <td><code>/item give @user &lt;item_id&gt;</code></td>
    </tr>
    <tr>
      <td><code>/item take</code></td>
      <td>Lấy item từ inventory của user</td>
      <td><code>/item take @user &lt;item_id&gt;</code></td>
    </tr>
    <tr>
      <td><code>inventory</code></td>
      <td>Xem kho đồ của bạn</td>
      <td><code>inventory</code></td>
    </tr>
    <tr>
      <td><code>shop</code></td>
      <td>Xem danh sách sản phẩm</td>
      <td><code>shop</code></td>
    </tr>
  </tbody>
</table>

## Marriage Ring

### Thiết lập nhẫn cưới:

```bash
# Tạo nhẫn cưới
/item add
# Tên: Diamond Ring
# Mô tả: Nhẫn kim cương dành cho marriage
# Giá: 1000000
# Emoji: 💍
# Type: ring  ← Quan trọng!

# Nhẫn này sẽ có thể sử dụng trong lệnh marry
```

## Lệnh khách hàng

### Lệnh dành cho khách:

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
      <td><code>buy</code></td>
      <td>Mua sản phẩm theo ID</td>
      <td><code>buy &lt;id&gt;</code></td>
    </tr>
    <tr>
      <td><code>gift</code></td>
      <td>Tặng item cho người khác</td>
      <td><code>gift @user &lt;id&gt;</code></td>
    </tr>
    <tr>
      <td><code>unbox</code></td>
      <td>Mở Lucky Box</td>
      <td><code>unbox</code></td>
    </tr>
  </tbody>
</table>

### Quy trình mua sắm:

```bash
# Bước 1: Xem shop
shop
# Hiển thị: ID | Emoji | Tên | Giá

# Bước 2: Mua sản phẩm
buy 1
# Bot tự động trừ tiền và thêm vào inventory

# Bước 3: Xem kho đồ
inventory
# Hiển thị items sở hữu
```

## Lưu ý quan trọng

<div className="callout callout-warning">
  <strong>🔔 ID System:</strong>
  <ul>
    <li>ID sản phẩm được đánh số tự động</li>
    <li>Nếu ID bị xóa, hệ thống sẽ tái sử dụng</li>
    <li>Xóa sản phẩm sẽ xóa tất cả bản sao trong inventory</li>
  </ul>
</div>

<div className="callout callout-info">
  <strong>💡 Tips quản lý Shop:</strong>
  <ul>
    <li>Tạo categories bằng emoji để dễ phân loại</li>
    <li>Giá hợp lý để khuyến khích mua sắm</li>
    <li>Lucky Box rate cân bằng để không bị lỗ</li>
    <li>Ring items phải set type=ring để marry được</li>
  </ul>
</div>


### Vấn đề thường gặp:

**Q: Item không hiển thị trong shop?**
A: Kiểm tra lại cú pháp `/item add` và đảm bảo đã save đúng.

**Q: Lucky Box không hoạt động?**
A: Kiểm tra `/box rate` đã cấu hình chưa và tổng tỷ lệ = 100%.

**Q: Khách không mua được item?**
A: Kiểm tra số dư cash và ID sản phẩm có đúng không.

**Q: Marriage ring không hoạt động?**
A: Đảm bảo item có `type: ring` khi tạo.
