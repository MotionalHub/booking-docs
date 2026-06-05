---
title: Hướng dẫn Khách hàng
description: Tài liệu đầy đủ dành cho khách hàng sử dụng Discord Booking Bot - từ booking cơ bản đến mua sắm và tương tác
---
> Chào mừng bạn đến với hệ thống Discord Booking Bot! Trang này sẽ hướng dẫn bạn cách sử dụng tất cả tính năng dành cho khách hàng.

## Quản lý tài chính cá nhân
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
      <td><code>cash</code></td>
      <td>Xem số tiền hiện có của bạn</td>
      <td><code>cash</code></td>
    </tr>
    <tr>
      <td><code>give</code></td>
      <td>Chuyển tiền cho người khác</td>
      <td><code>give &lt;@user&gt; &lt;số tiền&gt;</code></td>
    </tr>
  </tbody>
</table>

### Ví dụ sử dụng:

```bash
# Xem số dư của bạn
cash

# Chuyển 50.000 cho @moonu
give @moonu 50k
```

<div className="callout callout-info">
  <strong>💡 Mẹo:</strong> Bạn có thể dùng định dạng <code>k</code> (nghìn) và <code>m</code> (triệu) để nhập nhanh. Ví dụ: <code>50k = 50,000 VNĐ</code>
</div>

## Xem thống kê và top

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
      <td><code>topbook</code></td>
      <td>Top 10 người book nhiều nhất</td>
      <td><code>topbook</code></td>
    </tr>
    <tr>
      <td><code>topgift</code></td>
      <td>Top người tặng quà nhiều nhất</td>
      <td><code>topgift</code></td>
    </tr>
    <tr>
      <td><code>topcash</code></td>
      <td>Top người giàu nhất server</td>
      <td><code>topcash</code></td>
    </tr>
  </tbody>
</table>

## Mua sắm tại Shop
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
      <td><code>shop</code></td>
      <td>Xem danh sách sản phẩm có sẵn</td>
      <td><code>shop</code></td>
    </tr>
    <tr>
      <td><code>buy</code></td>
      <td>Mua sản phẩm theo ID</td>
      <td><code>buy &lt;id&gt;</code></td>
    </tr>
    <tr>
      <td><code>inventory</code></td>
      <td>Xem kho đồ của bạn</td>
      <td><code>inventory</code></td>
    </tr>
  </tbody>
</table>

### Tặng quà và mở Lucky Box

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
      <td><code>gift</code></td>
      <td>Tặng đồ trong kho cho người khác</td>
      <td><code>gift &lt;@user&gt; &lt;id&gt;</code></td>
    </tr>
    <tr>
      <td><code>unbox</code></td>
      <td>Mở Lucky Box để nhận quà ngẫu nhiên</td>
      <td><code>unbox</code></td>
    </tr>
  </tbody>
</table>

### Ví dụ mua sắm:

```bash
# Xem shop
shop

# Mua sản phẩm ID 1  
buy 1

# Xem kho đồ
inventory

# Tặng đồ ID 2 cho bạn
gift @moonu 2

# Mở Lucky Box (nếu có)
unbox
```

<div className="callout callout-warning">
  <strong>⚠️ Lưu ý:</strong> 
  <ul>
    <li>Phải có đủ tiền mới mua được đồ</li>
    <li>Chỉ tặng được đồ đang có trong kho</li>
    <li>Lucky Box cho phần thưởng ngẫu nhiên theo tỷ lệ</li>
    description: Tài liệu lệnh cho khách hàng theo source Booking Bot hiện tại
</div>

    # Hướng dẫn Khách hàng
## Hệ thống Marriage
    ## Command chính

    | Lệnh | Mục đích | Ghi chú |
    |---|---|---|
    | `cash` | Xem số dư cash | Có thể hiện thêm coin trên một số bot name |
    | `give` | Chuyển cash cho người khác | Tùy bot name có thể bị chặn quyền |
    | `shop` | Xem danh sách item | Prefix |
    | `buy` | Mua item theo ID | Prefix |
    | `inventory` / `inv` | Xem kho đồ | Prefix |
    | `gift` | Tặng item cho người khác | Prefix |
    | `unbox` | Mở Lucky Box | Prefix |
    | `marry` / `mry` | Hệ thống marriage | Prefix |

    ## Marriage

    - Nhẫn cưới phải là item hợp lệ trong shop/inventory.
    - `marry luv` gửi lời yêu thương.
    - `marry divorce` mở flow xác nhận trước khi ly hôn.
    - `marry profile` xem trạng thái hôn nhân.
    - `marry thumbnail` và `marry image` dùng để chỉnh profile.

    ## Lưu ý

    - `topcash`, `topbook`, `topgift` không thuộc nhóm khách chuẩn; một số bot name có thể bật riêng.
    - `force-divorce` là lệnh supporter, không phải lệnh khách.

<table className="command-table">
  <thead>
    <tr>
      <th>Lệnh</th>
      <th>Mô tả</th>
      <th>Ví dụ sử dụng</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>avatar</code></td>
      <td>Lấy avatar người dùng</td>
      <td><code>avatar @user</code></td>
    </tr>
    <tr>
      <td><code>snipe</code></td>
      <td>Xem tin nhắn vừa bị xóa</td>
      <td><code>snipe</code></td>
    </tr>
    <tr>
      <td><code>speak</code></td>
      <td>Bot nói trong voice channel</td>
      <td><code>speak Xin chào!</code></td>
    </tr>
  </tbody>
</table>

### Ví dụ lệnh tiện ích:

```bash
# Tính toán phức tạp
math (100 + 50) * 2 / 3

# Random số may mắn
random 1000

# Chọn ngẫu nhiên món ăn  
pick Pizza, Phở, Bún bò, Cơm tấm

# Lấy avatar đẹp
avatar @crush

# Bot đọc thông báo
speak Chào mừng mọi người đến server!
```

---

**Chúc bạn có trải nghiệm tuyệt vời!** Nếu cần hỗ trợ, đừng ngần ngại tạo ticket hoặc liên hệ staff. Chúng tôi luôn sẵn sàng giúp đỡ!
