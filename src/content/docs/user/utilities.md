---
title: Lệnh Tiện Ích
description: Tổng hợp các lệnh tiện ích hữu dụng cho mọi thành viên - tính toán, random, avatar và nhiều hơn nữa
---

# 🛠️ Lệnh Tiện Ích

Các lệnh tiện ích giúp cuộc sống Discord trở nên thú vị và tiện lợi hơn. Tất cả thành viên đều có thể sử dụng!

## 🧮 Tính toán và Random

### Máy tính thông minh

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
      <td>Tính toán biểu thức phức tạp</td>
      <td><code>math 12 + 5 * (3 - 1)</code></td>
    </tr>
    <tr>
      <td><code>random</code></td>
      <td>Sinh số ngẫu nhiên từ 1 đến n</td>
      <td><code>random 100</code></td>
    </tr>
    <tr>
      <td><code>pick</code></td>
      <td>Chọn ngẫu nhiên từ danh sách</td>
      <td><code>pick Pizza, Phở, Bún bò</code></td>
    </tr>
  </tbody>
</table>

### Ví dụ chi tiết:

#### Math - Máy tính mạnh mẽ:
```bash
# Phép tính cơ bản
math 100 + 250
# Kết quả: 350

# Phép tính phức tạp
math (1500 + 2500) * 0.8 / 4
# Kết quả: 800

# Tính % discount
math 50000 * (100 - 15) / 100  
# Kết quả: 42500 (giảm 15%)

# Tính lương player
math 45.5 * 30000 + 150000 - 50000
# Kết quả: 1465000 VNĐ
```

#### Random - Số may mắn:
```bash
# Random từ 1-100
random 100
# Kết quả: 42

# Random từ 1-1000  
random 1000
# Kết quả: 756

# Random nhỏ
random 10
# Kết quả: 7
```

#### Pick - Lựa chọn ngẫu nhiên:
```bash
# Chọn món ăn
pick Pizza, Phở, Bún bò, Cơm tấm
# Kết quả: Mình sẽ chọn: Bún bò

# Chọn game
pick LOL, Valorant, CS2, PUBG
# Kết quả: Mình sẽ chọn: Valorant

# Chọn player (fun)
pick John, Jane, Alice, Bob
# Kết quả: Mình sẽ chọn: Alice
```

<div className="callout callout-info">
  <strong>💡 Lưu ý Pick:</strong> Các lựa chọn cách nhau bằng dấu phẩy, không có khoảng trắng thừa giữa các mục.
</div>

## 🎨 Thông tin và Media

### Lệnh thông tin người dùng

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
      <td>Hiển thị tin nhắn vừa bị xóa gần nhất</td>
      <td><code>snipe</code></td>
    </tr>
  </tbody>
</table>

### Voice và Audio

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
      <td><code>speak</code></td>
      <td>Bot đọc text trong voice channel</td>
      <td><code>speak Xin chào mọi người!</code></td>
    </tr>
  </tbody>
</table>

### Ví dụ sử dụng:

#### Avatar - Lấy ảnh đại diện:
```bash
# Avatar của bạn
avatar @yourself
# Hiển thị avatar size lớn với links download

# Avatar của người khác
avatar @friend
# Show avatar với multiple resolutions

# Avatar của crush 👀
avatar @crush
# Perfect for... research purposes
```

#### Snipe - Tin nhắn đã xóa:
```bash
# Xem tin nhắn vừa bị xóa
snipe
# Hiển thị: "User @someone đã xóa: 'Oops, typo!'"

# Chỉ hoạt động với:
# - Tin nhắn xóa trong 5 phút gần nhất
# - Không phải tin nhắn của bot
# - Kênh có quyền sử dụng snipe
```

#### Speak - Text to Speech:
```bash
# Thông báo đơn giản
speak Server sẽ maintenance trong 10 phút nữa

# Chúc mừng
speak Chúc mừng John đã lên level VIP!

# Hướng dẫn
speak Mọi người vào voice channel để bắt đầu event
```

<div className="callout callout-warning">
  <strong>🎤 Yêu cầu Speak:</strong> 
  <ul>
    <li>Bạn phải đang ở trong voice channel</li>
    <li>Bot cần quyền <code>CONNECT</code> và <code>SPEAK</code></li>
    <li>Voice channel không được đầy</li>
  </ul>
</div>

## 🎮 Ứng dụng thực tế

### Trong Booking:

```bash
# Tính lương nhanh
math 8 * 30000 + 50000
# 8 giờ × 30k + 50k bonus = 290k

# Random chọn game
pick LOL rank, Valorant duo, CS2 faceit, PUBG squad

# Tính giá booking có discount
math 150000 * (100 - 10) / 100
# 150k với 10% discount = 135k
```

## 🎉 Fun Commands

### Mini Games với utilities:

#### 1. **Guess the Number**:
```bash
# Host: Tôi nghĩ số từ 1-100
random 100
# Players: Đoán số cho đến khi trúng!
```

#### 2. **Random Dinner**:
```bash
pick Cơm tấm, Phở bò, Bún bò Huế, Pizza, Burger, Sushi, Lẩu
# Let fate decide your meal!
```

## 🔧 Advanced Tips

### Math Calculator Pro Tips:

```bash
# Sử dụng dấu ngoặc để ưu tiên
math (100 + 200) * 3
# Khác với: math 100 + 200 * 3

# Tính percentage
math 850000 * 15 / 100    # 15% của 850k
math 1200000 / 4          # Chia đều 4 người

# Tính compound
math 100000 * 1.05 * 1.05 # 100k với 5% lãi kép 2 kỳ
```
