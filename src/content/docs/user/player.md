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
- 🔒 Bảo mật thông tin cá nhân
- 🔒 Phù hợp khi muốn check nhanh

### Ví dụ sử dụng:

```bash
# Xem lương trong kênh player
tinhluong

# Xem lương riêng qua DM
luong
```

## 📊 Thông tin trong bảng lương

### Dữ liệu hiển thị:

```
📋 BẢNG LƯƠNG PLAYER
👤 Player: @your_name
⭐ Tổng Star: 45.5 giờ
💰 Lương cơ bản: 1,365,000 VNĐ
🎁 Thưởng: +150,000 VNĐ  
💸 Phạt: -50,000 VNĐ
💎 Tổng lương: 1,465,000 VNĐ
📅 Cập nhật: 16/07/2025 14:30
```

### Cách tính lương:

```
Công thức: 
Tổng lương = (Star × Lương/giờ) + Thưởng - Phạt

Ví dụ:
45.5 giờ × 30,000 VNĐ/giờ = 1,365,000 VNĐ
+ Thưởng tích cực: 150,000 VNĐ
- Phạt vi phạm: 50,000 VNĐ  
= Tổng lương: 1,465,000 VNĐ
```

### Giờ ngày vs giờ đêm:

- **Giờ ngày** (06:00 - 22:00): Lương thường
- **Giờ đêm** (22:00 - 06:00): Lương cao hơn (~20% extra)

<div className="callout callout-info">
  <strong>💡 Mẹo:</strong> Làm việc giờ đêm sẽ có mức lương cao hơn. Check với admin về mức lương đêm cụ thể.
</div>

## ⭐ Hệ thống Star (Giờ làm việc)

### Star là gì?

**Star** = Số giờ làm việc của player, được tính tự động khi:
- ✅ Nhận bill booking từ khách
- ✅ Hoàn thành service
- ✅ Admin cộng thêm (bonus hoặc adjustment)

### Cách tích lũy Star:

1. **Từ booking tự động:**
   ```
   Khách book 3 giờ → Player nhận 3 star
   Khách book 5.5 giờ → Player nhận 5.5 star
   ```

2. **Từ admin thêm:**
   ```bash
   # Admin thực hiện
   as @player 2    # Cộng 2 star bonus
   as @player 0.5  # Cộng 30 phút làm thêm
   ```

3. **Adjustment (cộng/trừ):**
   ```bash
   # Cộng star cho performance tốt
   as @player 1

   # Trừ star cho vi phạm (admin thực hiện)
   ss @player 0.5
   ```

## 🎯 Làm thế nào để tăng thu nhập?

### 1. **Tăng số giờ làm việc**
- ✅ Online nhiều hơn để nhận booking
- ✅ Chấp nhận booking giờ đêm (lương cao hơn)
- ✅ Hoàn thành tốt để khách book lại

### 2. **Cải thiện chất lượng dịch vụ**
- ✅ Professional attitude
- ✅ Đúng giờ và reliable
- ✅ Skill tốt trong game/service
- ✅ Communication tốt với khách

### 3. **Nhận thưởng từ admin**
- ✅ Performance xuất sắc
- ✅ Feedback tốt từ khách
- ✅ Hỗ trợ training player mới
- ✅ Tham gia events server

### 4. **Tránh bị phạt**
- ❌ Không vi phạm quy định
- ❌ Không late/cancel booking
- ❌ Không conflict với khách
- ❌ Không toxic behavior

## 📈 Tracking Performance

### Theo dõi thống kê cá nhân:

```bash
# Xem lương hàng ngày
luong

# So sánh với player khác (nếu muốn)
topstar  # Xem top ranking star
```

### Metrics quan trọng:

- **⭐ Star/tháng**: Mục tiêu ít nhất 100+ giờ
- **💰 Lương ổn định**: Không có phạt lớn
- **📈 Growth trend**: Star tăng đều theo thời gian
- **🎯 Customer satisfaction**: Feedback tích cực

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

⭐ Player1 (@john) - 89.5 star
⭐ Player2 (@jane) - 156.2 star  
⭐ VIP-Player (@alice) - 203.8 star
⭐ Newbie (@bob) - 12.5 star

React 🎮 để tham gia booking!
```

### Tips tăng cơ hội được chọn:

- ✅ **Profile name hấp dẫn**: VIP-Player, Pro-Gamer, etc.
- ✅ **Star cao**: Thể hiện kinh nghiệm
- ✅ **Online status**: Hiển thị active
- ✅ **Reputation tốt**: Từ booking trước

## 💡 Tips cho Player thành công

### Professional behavior:

1. **Đúng giờ**: Luôn có mặt đúng giờ hẹn
2. **Communication**: Friendly, helpful, respectful
3. **Skill**: Continuously improve game/service skills
4. **Reliability**: Consistent performance, no last-minute cancel
5. **Flexibility**: Sẵn sàng giờ đêm, weekend

### Time management:

```bash
# Check lương thường xuyên
luong

# Monitor performance trends
tinhluong  # Weekly trong team meeting

# Plan working hours
# Giờ đêm = higher rate
# Weekend = more demand
```

### Career progression:

```
Newbie Player (0-50 star)
    ↓
Regular Player (50-150 star)
    ↓  
Experienced Player (150-300 star)
    ↓
VIP Player (300+ star)
    ↓
Team Leader / Trainer
```

## 🚫 Những điều cần tránh

### Hành vi có thể bị phạt:

- ❌ **No-show**: Không xuất hiện khi đã nhận booking
- ❌ **Late consistently**: Thường xuyên muộn giờ
- ❌ **Poor attitude**: Thái độ không professional
- ❌ **Rule violation**: Vi phạm quy định server
- ❌ **Conflict**: Tranh cãi với khách hoặc team
- ❌ **Inactive**: Không hoạt động dài ngày

### Hậu quả phạt:

```bash
# Admin có thể thực hiện:
sl @player 50k     # Phạt tiền
ss @player 2       # Trừ star
role @player @Player  # Gỡ role (nghiêm trọng)
```

## 📞 Hỗ trợ và feedback

### Khi cần hỗ trợ:

1. **Vấn đề kỹ thuật**: Liên hệ supporter
2. **Dispute với khách**: Báo admin ngay
3. **Không hiểu lương**: Hỏi trong player channel
4. **Suggestions**: Feedback cho team leadership

### Cách báo feedback:

```
📝 PLAYER FEEDBACK TEMPLATE:
👤 Player: @your_name
📅 Date: DD/MM/YYYY
🎯 Issue/Suggestion: [Chi tiết]
💡 Proposed solution: [Đề xuất]
⭐ Priority: High/Medium/Low
```

<div className="callout callout-warning">
  <strong>📋 Lưu ý quan trọng:</strong> Player role đi kèm với trách nhiệm cung cấp service chất lượng. Luôn maintain professional attitude và deliver excellent customer experience!
</div>

## 🎉 Thành công với role Player

### Mindset đúng:

- 🎯 **Customer-first**: Khách hàng là ưu tiên số 1
- 💪 **Growth mindset**: Luôn học hỏi và cải thiện
- 🤝 **Team player**: Hỗ trợ đồng nghiệp
- 📈 **Result-oriented**: Focus vào performance metrics
- 🌟 **Professional**: Maintain high standards

### Long-term goals:

- Tăng star đều đặn mỗi tháng
- Build loyal customer base
- Trở thành top performer
- Mentoring player mới
- Advance lên leadership roles

---

**⭐ Good luck!** Với dedication và professional attitude, bạn sẽ thành công trong role Player và build được career ổn định trong community!
