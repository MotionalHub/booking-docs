---
title: Player Commands
description: Tài liệu các lệnh dành cho Player - xem lương, quản lý profile và tương tác với hệ thống booking
---

# ⭐ Player Commands

<span className="badge badge-player">Player</span> là những thành viên cung cấp dịch vụ booking cho khách hàng. Role này có các lệnh đặc biệt để quản lý thu nhập và profile cá nhân.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có role <code>player</code> của bot để sử dụng các lệnh trong mục này.
</div>

## 💰 Quản lý lương và thu nhập

### Lệnh xem lương

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
      <td><code>tinhluong</code></td>
      <td>Xem bảng lương của bạn trong kênh hiện tại</td>
      <td><code>tinhluong</code></td>
    </tr>
    <tr>
      <td><code>luong</code></td>
      <td>Gửi bảng lương của bạn riêng qua DM</td>
      <td><code>luong</code></td>
    </tr>
  </tbody>
</table>

### Sự khác biệt giữa hai lệnh:

#### `tinhluong` - Hiển thị công khai
- ✅ Hiển thị trong kênh hiện tại
- ✅ Mọi người có thể xem
- ✅ Dùng khi muốn chia sẻ performance
- ✅ Phù hợp cho kênh team/player

#### `luong` - Hiển thị riêng tư  
- 🔒 Gửi qua DM riêng
- 🔒 Chỉ bạn xem được
- 🔒 Bảo mật thông tin bills

### Ví dụ sử dụng:

```bash
# Xem lương trong kênh player
tinhluong

# Xem lương riêng qua DM
luong
```

### Cách tính lương:

```
Công thức: 
Tổng lương = (Star × Lương/giờ) + Thưởng - Phạt

Ví dụ:
45 giờ × 22,000 VNĐ/giờ = 990,000 VNĐ
+ Thưởng tích cực: 150,000 VNĐ
- Phạt vi phạm: 50,000 VNĐ  
= Tổng lương: 1,090,000 VNĐ
```

### Giờ ngày vs giờ đêm:

Ví du:
- **Giờ ngày** (06:00 - 22:00): Lương thường
- **Giờ đêm** (22:00 - 06:00): Lương cao hơn (~20% extra)

<div className="callout callout-info">
  <strong>💡 Mẹo:</strong> Làm việc giờ đêm sẽ có mức lương cao hơn tuỳ theo server của bạn.
</div>

## ⭐ Hệ thống Star (Giờ làm việc)

### Star là gì?

**Star** = Số giờ làm việc của player:
- ✅ Admin cộng thêm (thưởng hoặc điều chỉnh)
- ✅ Mặc định số star là số giờ player đã nhận bill

### Cách tích lũy Star:

1. **Từ booking tự động:**
   ```
   Khách book 3 giờ → Player nhận 3 star
   Khách book 5 giờ → Player nhận 5 star
   ```

2. **Từ admin thêm:**
   ```bash
   # Admin thực hiện
   as @player 2    # Cộng 2h star bonus
   ```

3. **Điều chỉnh (cộng/trừ):**
   ```bash
   # Cộng star cho player
   as @player 1

   # Trừ star cho vi phạm (admin thực hiện)
   ss @player 2
   ```

## 📈 Theo dõi năng suất

### Theo dõi thống kê cá nhân:

```bash
# Xem lương hàng ngày
luong

# So sánh với player khác (nếu muốn)
topstar  # Xem top ranking star
```

## 🔄 React Profile System

### Tham gia React Profile:

Khi supporter tạo react profile cho khách chọn player:

1. **Đợi thông báo** từ supporter về react profile
2. **Vào kênh react** (thường là #player-react)
3. **Bấm reaction** vào tin nhắn được mention
4. **Đợi khách chọn** từ danh sách
5. **Nhận bill** nếu được chọn

### Profile hiển thị:

```
🎮 PLAYER PROFILES

⭐ Moonu
⭐ ABC XYZ
⭐ Hình ảnh player

React 🎮 để tham gia booking!
```

### Xem bảng lương:

```bash
# Gửi bảng lương vào DMs của bạn
luong

# Gửi bảng lương của bạn vào kênh hiện tại
tinhluong 
```
### Hậu quả phạt:

```bash
# Admin có thể thực hiện:
sl @player 50k     # Phạt tiền
ss @player 2       # Trừ star
role @player @Player  # Gỡ role (nghiêm trọng)
```

---

**⭐ Chúc may mắn!** Với sự cống hiến và thái độ chuyên nghiệp!