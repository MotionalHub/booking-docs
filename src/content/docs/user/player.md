---
title: Player Commands
description: Tài liệu các lệnh dành cho Player - xem lương, quản lý profile và tương tác với hệ thống booking
---
> <span className="badge badge-player">Player</span> là những thành viên cung cấp dịch vụ booking cho khách hàng. Role này có các lệnh đặc biệt để quản lý thu nhập và profile cá nhân.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có role <code>player</code> của bot để sử dụng các lệnh trong mục này.
</div>

## Quản lý lương và thu nhập
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
      <td>Gửi bảng lương của bạn riêng qua DMs</td>
      <td><code>luong</code></td>
    </tr>
  </tbody>
</table>

#### `tinhluong` - Hiển thị công khai
- ✅ Hiển thị trong kênh hiện tại
- ✅ Mọi người có thể xem
- ✅ Dùng khi muốn chia sẻ bảng lương
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

## Hệ thống Star

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

**Chúc may mắn!** Với sự cống hiến và thái độ chuyên nghiệp!