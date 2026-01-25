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
  </ul>
</div>

## Hệ thống Marriage
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
      <td><code>marry &lt;@user&gt; &lt;ring_id&gt;</code></td>
    </tr>
    <tr>
      <td><code>marry divorce</code></td>
      <td>Chấm dứt hôn nhân</td>
      <td><code>marry divorce</code></td>
    </tr>
    <tr>
      <td><code>marry luv</code></td>
      <td>Gửi lời yêu thương</td>
      <td><code>marry luv</code></td>
    </tr>
    <tr>
      <td><code>marry profile</code></td>
      <td>Xem thông tin hôn nhân</td>
      <td><code>marry profile</code></td>
    </tr>
  </tbody>
</table>

### Tùy chỉnh Marriage profile

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
      <td><code>marry vague</code></td>
      <td>Đặt trạng thái "mập mờ"</td>
      <td><code>marry vague</code></td>
    </tr>
    <tr>
      <td><code>marry thumbnail</code></td>
      <td>Đặt ảnh nhỏ cho profile</td>
      <td><code>marry thumbnail &lt;url&gt;</code></td>
    </tr>
    <tr>
      <td><code>marry image</code></td>
      <td>Đặt ảnh lớn cho profile</td>
      <td><code>marry image &lt;url&gt;</code></td>
    </tr>
  </tbody>
</table>

### Quy trình kết hôn:

1. **Mua nhẫn cưới** từ shop (type: ring)
   ```bash
   shop
   buy <ring_id>
   ```

2. **Cầu hôn**
   ```bash
   marry @crush <ring_id>
   ```

3. **Đợi người kia chấp nhận** (họ reply Yes/No)

4. **Tận hưởng cuộc sống hôn nhân!**
   ```bash
   marry luv       # Gửi tình yêu
   marry profile   # Xem profile cặp đôi
   ```

<div className="callout callout-info">
  <strong>💡 Tips:</strong>
  <ul>
    <li>Tặng quà cho người yêu bằng lệnh <code>gift</code></li>
    <li>Tùy chỉnh ảnh couple đẹp cho profile profile</li>
    <li>Dùng <code>marry luv</code> thường xuyên để thể hiện tình cảm</li>
  </ul>
</div>

## Lệnh tiện ích hữu dụng

### Tính toán và tiện ích

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
      <td><code>math</code></td>
      <td>Tính toán biểu thức</td>
      <td><code>math 12 + 5 * (3 - 1)</code></td>
    </tr>
    <tr>
      <td><code>random</code></td>
      <td>Sinh số ngẫu nhiên từ 1-n</td>
      <td><code>random 100</code></td>
    </tr>
    <tr>
      <td><code>pick</code></td>
      <td>Chọn ngẫu nhiên từ danh sách</td>
      <td><code>pick Pizza, Phở, Bún bò</code></td>
    </tr>
  </tbody>
</table>

### Thông tin và tương tác

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
