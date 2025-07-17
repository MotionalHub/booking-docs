---
title: Lucky Box System
description: Hệ thống hộp quà may mắn với tỷ lệ thưởng có thể tùy chỉnh và quản lý phần thưởng
---

# 🎁 Lucky Box System

Lucky Box là hệ thống hộp quà may mắn cho phép khách hàng mở quà để nhận phần thưởng ngẫu nhiên với các tỷ lệ có thể tùy chỉnh.

<div className="callout callout-info">
  <strong>🎲 Cơ chế:</strong> Lucky Box hoạt động theo hệ thống tỷ lệ (rate) với các tier khác nhau từ Common đến Legendary.
</div>


## ⚙️ Quản lý Lucky Box (Admin)

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

## 🎲 Hệ thống tỷ lệ (Rate System)

### Tier phần thưởng chuẩn:

<table className="command-table">
  <thead>
    <tr>
      <th>Tier</th>
      <th>Tỷ lệ</th>
      <th>Phần thưởng gợi ý</th>
      <th>Mô tả</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>🟢 Common</td>
      <td>70%</td>
      <td>10k-50k cash</td>
      <td>Phần thưởng cơ bản</td>
    </tr>
    <tr>
      <td>🔵 Rare</td>
      <td>25%</td>
      <td>Items thường, 100k cash</td>
      <td>Phần thưởng tốt</td>
    </tr>
    <tr>
      <td>🟣 Epic</td>
      <td>4%</td>
      <td>Items quý, 500k cash</td>
      <td>Phần thưởng hiếm</td>
    </tr>
    <tr>
      <td>🟡 Legendary</td>
      <td>1%</td>
      <td>Jackpot 1M+, items độc</td>
      <td>Phần thưởng cực hiếm</td>
    </tr>
  </tbody>
</table>

### Cấu hình rate chi tiết:

```bash
/box rate
# Bot hiển thị interface:

🎁 Lucky Box Rate Configuration
Current rates:
- Common (70%): 10,000-50,000 cash
- Rare (25%): Premium items + 100k cash  
- Epic (4%): Rare items + 500k cash
- Legendary (1%): Jackpot + exclusive items

Select tier to modify: [Common] [Rare] [Epic] [Legendary]
```

## 🎮 Lệnh người dùng

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
      <td><code>inventory</code></td>
    </tr>
    <tr>
      <td><code>buy</code></td>
      <td>Mua Lucky Box từ shop</td>
      <td><code>buy &lt;lucky_box_id&gt;</code></td>
    </tr>
  </tbody>
</table>

### Quy trình khách hàng:

```bash
# Bước 1: Mua Lucky Box
shop           # Xem shop
buy 5          # Mua Lucky Box (ID 5)

# Bước 2: Kiểm tra inventory  
inventory      # Xem có bao nhiêu box

# Bước 3: Mở box
unbox
# 🎁 Opening Lucky Box...
# ✨ Congratulations! You got: 💎 VIP Item (Epic tier)

# Phần thưởng tự động vào inventory
```

## 🎨 Tùy chỉnh phần thưởng

### Loại phần thưởng có thể cấu hình:

#### 💰 Cash Rewards
```bash
Common: 10,000 - 50,000 VNĐ
Rare: 75,000 - 150,000 VNĐ  
Epic: 300,000 - 800,000 VNĐ
Legendary: 1,000,000 - 3,000,000 VNĐ
```

#### 🎁 Item Rewards
```bash
Common: Basic items, consumables
Rare: Premium items, temporary boosts
Epic: Rare collectibles, permanent upgrades
Legendary: Exclusive items, one-of-a-kind
```

#### 🌟 Special Rewards
```bash
Legendary tier có thể bao gồm:
- Exclusive roles
- Custom titles  
- Special privileges
- Limited edition items
```

## 📊 Thống kê và phân tích

#### Cân bằng tỉ lệ:
```bash
# Monitor qua log-box channel
- Kiểm tra tỷ lệ thực tế vs cấu hình
- Điều chỉnh rate nếu cần
- Đảm bảo server không bị lỗ
```
