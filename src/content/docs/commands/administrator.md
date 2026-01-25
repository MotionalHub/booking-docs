---
title: Administrator Commands
description: Tài liệu đầy đủ các lệnh dành cho Administrator - quản lý cash, thời gian player và cấu hình server
---
  > <span className="badge badge-admin">Administrator</span> là role có quyền cao thứ hai trong hệ thống, chịu trách nhiệm quản lý tài chính, thời gian player và một số cấu hình server quan trọng.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có role <code>administrator</code> của bot để sử dụng các lệnh trong mục này.
</div>

## Quản lý tài chính khách hàng

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
      <td><code>addtime</code></td>
      <td>Cộng giờ cho khách hàng</td>
      <td><code>at &lt;@user&gt; &lt;số giờ&gt;</code></td>
    </tr>
    <tr>
      <td><code>subtime</code></td>
      <td>Trừ giờ của khách hàng</td>
      <td><code>st &lt;@user&gt; &lt;số giờ&gt;</code></td>
    </tr>
  </tbody>
</table>

### Ví dụ sử dụng:

```bash
# Cộng 5 giờ cho khách
at @customer 5

# Trừ 2 giờ của khách  
st @customer 2
```

## Quản lý Player

### Quản lý giờ Star

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
      <td><code>addstar</code></td>
      <td>Thêm giờ star cho player</td>
      <td><code>as &lt;@user&gt; &lt;số giờ&gt;</code></td>
    </tr>
    <tr>
      <td><code>substar</code></td>
      <td>Trừ giờ star của player</td>
      <td><code>ss &lt;@user&gt; &lt;số giờ&gt;</code></td>
    </tr>
    <tr>
      <td><code>topstar</code></td>
      <td>Hiển thị top star của tất cả player</td>
      <td><code>topstar</code></td>
    </tr>
  </tbody>
</table>

### Quản lý lương và thưởng phạt

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
      <td><code>addluong</code></td>
      <td>Cộng tiền thưởng cho player</td>
      <td><code>al &lt;@user&gt; &lt;số tiền&gt;</code></td>
    </tr>
    <tr>
      <td><code>subluong</code></td>
      <td>Trừ tiền phạt của player</td>
      <td><code>sl &lt;@user&gt; &lt;số tiền&gt;</code></td>
    </tr>
    <tr>
      <td><code>tongluong</code></td>
      <td>Hiển thị bảng lương tất cả player</td>
      <td><code>tl</code></td>
    </tr>
  </tbody>
</table>

### Ví dụ quản lý player:

```bash
# Thêm 8 giờ star cho player
as @player1 8

# Thưởng 50k cho player làm tốt
al @player1 50k

# Phạt 20k cho player vi phạm
sl @player2 20k

# Xem bảng lương tổng thể
tl

# Xem top star
topstar
```

## Cấu hình server nâng cao

### Thay đổi prefix

```bash
# Đổi prefix thành !
prefix !

# Đổi prefix thành từ
prefix booking

# Đổi prefix thành ký tự đặc biệt  
prefix $
```

### Cấu hình màu sắc

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
      <td><code>color embed</code></td>
      <td>Thay đổi màu embed chính</td>
      <td><code>color embed &lt;mã màu&gt;</code></td>
    </tr>
    <tr>
      <td><code>color success</code></td>
      <td>Thay đổi màu thành công</td>
      <td><code>color success &lt;mã màu&gt;</code></td>
    </tr>
    <tr>
      <td><code>color error</code></td>
      <td>Thay đổi màu lỗi</td>
      <td><code>color error &lt;mã màu&gt;</code></td>
    </tr>
  </tbody>
</table>

**Mã màu phổ biến:**
```bash
color all 0x7c3aed      # Tím Discord
color default 0x3b82f6  # Xanh dương  
color success 0x10b981  # Xanh lá
color error 0xef4444    # Đỏ
```

### Cấu hình emoji hệ thống

```bash
# Thay đổi emoji cho các chức năng
emoji success ✅       # Emoji thành công
emoji error ❌         # Emoji lỗi  
emoji cash 💰          # Emoji tiền
emoji star ⭐          # Emoji star
emoji shop 🛍️          # Emoji shop
emoji love 💝          # Emoji marriage
emoji box 🎁           # Emoji lucky box
```

## 💸 Hỗ trợ nhập nhanh số tiền

Bot hỗ trợ các định dạng nhập nhanh để tiện lợi:

```bash
# Các cách viết tương đương
10k = 10,000 VNĐ
100k = 100,000 VNĐ  
1m = 1,000,000 VNĐ
500k = 500,000 VNĐ

# Ví dụ sử dụng
al @player 50k        # Thưởng 50,000 VNĐ
ac @customer 1m       # Nạp 1,000,000 VNĐ
sl @player 25k        # Phạt 25,000 VNĐ
```

## Báo cáo và thống kê

### Xem thống kê tổng quan:

```bash
# Bảng lương tất cả player
tl

# Top player theo star  
topstar

# Hiển thị trong channel hiện tại
tongluong

# Gửi riêng qua DM (nếu là player)
luong
```

### Thông tin hiển thị trong bảng lương:

- **Tên Player**: Hiển thị nickname Discord
- **Tổng Star**: Tổng số giờ đã làm
- **Lương cơ bản**: Tính theo giờ star × lương/giờ
- **Thưởng/Phạt**: Số tiền được cộng/trừ thêm
- **Tổng lương**: Lương cơ bản + thưởng - phạt

## Commands hệ thống

### Kiểm tra cấu hình:

```bash
# Xem cấu hình hiện tại
/settings server

# Xem tất cả kênh log đã setup
/settings log-all

# Kiểm tra màu sắc hiện tại
color show

# Kiểm tra emoji hiện tại  
emoji list
```

## ⚠️ Lưu ý quan trọng

<div className="callout callout-warning">
  <strong>Những điều cần nhớ:</strong>
  <ul>
    <li><strong>Backup dữ liệu:</strong> Luôn kiểm tra trước khi thực hiện lệnh ảnh hưởng lớn</li>
    <li><strong>Log activity:</strong> Tất cả lệnh admin đều được ghi log tự động</li>
    <li><strong>Phân quyền:</strong> Chỉ gán role administrator cho người tin cậy</li>
    <li><strong>Test trước:</strong> Thử nghiệm với số tiền nhỏ trước khi áp dụng</li>
  </ul>
</div>

## 🚀 Lệnh nâng cao

Để sử dụng các tính năng nâng cao khác:

- **[Cash Management](/commands/cash/)** - Quản lý tiền chuyên sâu
- **[Owner Commands](/commands/owner/)** - Cấu hình hệ thống tổng thể  
- **[Supporter Commands](/commands/supporter/)** - Quản lý booking và hỗ trợ

---

**📞 Hỗ trợ:** Nếu gặp khó khăn với bất kỳ lệnh nào, hãy xem [Troubleshooting](/troubleshooting/) hoặc liên hệ team support!
