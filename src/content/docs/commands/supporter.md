---
title: Supporter Commands
description: Tài liệu đầy đủ các lệnh dành cho Supporter - quản lý booking, bills, và hỗ trợ khách hàng
---

# 🎧 Supporter Commands

<span className="badge badge-supporter">Supporter</span> là role chuyên trách hỗ trợ khách hàng, quản lý booking và xử lý các giao dịch hàng ngày.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>supporter</code> để sử dụng các lệnh trong mục này.
</div>

<div className="callout callout-warning">
  <strong>💰 Hỗ trợ nhập nhanh:</strong> <code>10k = 10,000 VNĐ</code>, <code>1m = 1,000,000 VNĐ</code>
</div>

## 📋 Quản lý Booking & Bills

### Lệnh Booking cơ bản

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
      <td><code>/book</code></td>
      <td>Tạo bill booking cho khách và player</td>
      <td><code>/book</code></td>
    </tr>
    <tr>
      <td><code>/hoanbill</code></td>
      <td>Hoàn lại bill đã booking</td>
      <td><code>/hoanbill</code></td>
    </tr>
    <tr>
      <td><code>/donate</code></td>
      <td>Tạo bill donate</td>
      <td><code>/donate</code></td>
    </tr>
    <tr>
      <td><code>/hoandonate</code></td>
      <td>Hoàn lại bill donate</td>
      <td><code>/hoandonate</code></td>
    </tr>
  </tbody>
</table>

### Quản lý Bills nâng cao

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
      <td><code>/reset-bill server</code></td>
      <td>Xóa toàn bộ bill trên server</td>
      <td><code>/reset-bill server</code></td>
    </tr>
    <tr>
      <td><code>/reset-bill user</code></td>
      <td>Xóa bill của một người cụ thể</td>
      <td><code>/reset-bill user @user</code></td>
    </tr>
    <tr>
      <td><code>/reset-bill show</code></td>
      <td>Xem doanh thu theo ngày reset</td>
      <td><code>/reset-bill show 14/7/2025</code></td>
    </tr>
  </tbody>
</table>

### Workflow Booking chuẩn:

```bash
# Bước 1: Khách chọn player (qua react profile)
/react profile Chọn Player

# Bước 2: Tạo bill booking
/book
# Bot sẽ hỏi:
# - Khách hàng: @customer
# - Player: @player
# - Số giờ: 3
# - Ghi chú: Game rank

# Bước 3: Khách xác nhận bill
# Bot tự động trừ tiền và cộng giờ star

# Nếu cần hoàn bill:
/hoanbill
# Thao tác tương tự /book
```

## 📊 Thống kê và Tracking

### Lệnh thống kê

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
      <td><code>topno</code></td>
      <td>Hiển thị thành viên đang nợ tiền</td>
      <td><code>topno</code></td>
    </tr>
    <tr>
      <td><code>topcash</code></td>
      <td>Top thành viên theo số tiền hiện có</td>
      <td><code>topcash</code></td>
    </tr>
    <tr>
      <td><code>topbuy</code></td>
      <td>Thống kê tổng số món đã bán</td>
      <td><code>topbuy</code></td>
    </tr>
  </tbody>
</table>

### React Profile System

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
      <td><code>react</code></td>
      <td>Tạo bảng react cho player chọn bill</td>
      <td><code>react &lt;tiêu đề&gt;</code></td>
    </tr>
    <tr>
      <td><code>/react profile</code></td>
      <td>Tạo react profile cho khách chọn player</td>
      <td><code>/react profile &lt;tiêu đề&gt;</code></td>
    </tr>
  </tbody>
</table>

## 🎯 React Profile System - Chi tiết

### Cách hoạt động:

**React Profile** giúp khách dễ dàng chọn player bằng cách để các player bấm reaction. Khi player react, bot sẽ tự động hiển thị danh sách người đã react kèm theo **profile** tương ứng.

### Setup React Profile (Owner thực hiện):

#### Bước 1: Cấu hình kênh hiển thị react

```bash
/settings react_channel #⭐-player-react
```

#### Bước 2: Gán profile cho player

```bash
# Cú pháp: ar set <tên-profile> | <@user>
ar set Player1 | @john
ar set Player2 | @jane
ar set VIP-Player | @alice
ar set Newbie-Player | @bob
```

### Sử dụng React Profile (Supporter):

#### Trong ticket của khách:

```bash
/react profile Chọn Player để booking
```

**Kết quả:**
1. Bot gửi tin nhắn react tại kênh đã cấu hình
2. Player bấm reaction vào tin nhắn đó
3. Bot hiển thị danh sách player đã react + profile
4. Khách chọn player từ danh sách
5. Supporter tạo bill với player đã chọn

### Ví dụ hoàn chỉnh:

```bash
# 1. Khách tạo ticket cần book
# 2. Supporter vào ticket

# 3. Tạo react profile
/react profile 🎮 Chọn Player cho booking 3 giờ

# 4. Đợi player react (tại kênh react_channel)

# 5. Xem danh sách đã react
# Bot tự động update: "3 players đã sẵn sàng: Player1, VIP-Player, Player2"

# 6. Tạo bill với player khách chọn
/book
```

## 🛠️ Autoresponder Management

### Quản lý Autoresponder

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
      <td><code>ar add</code></td>
      <td>Thêm autoresponder mới</td>
      <td><code>ar add &lt;tên&gt; | &lt;tin nhắn&gt;</code></td>
    </tr>
    <tr>
      <td><code>ar content</code></td>
      <td>Set nội dung text (không embed)</td>
      <td><code>ar content &lt;tên&gt; | &lt;tin nhắn&gt;</code></td>
    </tr>
    <tr>
      <td><code>ar title</code></td>
      <td>Set tiêu đề embed</td>
      <td><code>ar title &lt;tên&gt; | &lt;tiêu đề&gt;</code></td>
    </tr>
    <tr>
      <td><code>ar description</code></td>
      <td>Set mô tả embed</td>
      <td><code>ar description &lt;tên&gt; | &lt;mô tả&gt;</code></td>
    </tr>
  </tbody>
</table>

### Tùy chỉnh Autoresponder

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
      <td><code>ar turl</code></td>
      <td>Set ảnh thumbnail nhỏ</td>
      <td><code>ar turl &lt;tên&gt; | &lt;link ảnh&gt;</code></td>
    </tr>
    <tr>
      <td><code>ar iurl</code></td>
      <td>Set ảnh lớn</td>
      <td><code>ar iurl &lt;tên&gt; | &lt;link ảnh&gt;</code></td>
    </tr>
    <tr>
      <td><code>ar color</code></td>
      <td>Set màu embed</td>
      <td><code>ar color &lt;tên&gt; | 0x&lt;hexcode&gt;</code></td>
    </tr>
    <tr>
      <td><code>ar line</code></td>
      <td>Bật/tắt line break</td>
      <td><code>ar line &lt;tên&gt; | true/false</code></td>
    </tr>
    <tr>
      <td><code>ar include</code></td>
      <td>Include original message</td>
      <td><code>ar include &lt;tên&gt; | true/false</code></td>
    </tr>
  </tbody>
</table>

### Quản lý Autoresponder

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
      <td><code>ar edit</code></td>
      <td>Chỉnh sửa autoresponder</td>
      <td><code>ar edit &lt;tên&gt;</code></td>
    </tr>
    <tr>
      <td><code>ar delete</code></td>
      <td>Xóa autoresponder</td>
      <td><code>ar delete &lt;tên&gt;</code></td>
    </tr>
    <tr>
      <td><code>ar show</code></td>
      <td>Xem thông tin autoresponder</td>
      <td><code>ar show &lt;tên&gt;</code></td>
    </tr>
  </tbody>
</table>

### Ví dụ tạo Autoresponder:

```bash
# Tạo autoresponder cơ bản
ar add welcome | Chào mừng bạn đến server!

# Tạo autoresponder với embed
ar add support | 
ar title support | 🎧 Hỗ trợ khách hàng
ar description support | Cảm ơn bạn đã liên hệ! Team sẽ hỗ trợ trong thời gian sớm nhất.
ar color support | 0x7c3aed
ar turl support | https://example.com/support-icon.png

# Autoresponder chỉ text (không embed)
ar content faq | FAQ: Xem tại #faq-channel để biết thêm thông tin!

# Autoresponder với ảnh
ar add promo | Khuyến mãi đặc biệt!
ar iurl promo | https://example.com/promo-banner.png
```

<div className="callout callout-info">
  <strong>💡 Mẹo:</strong> 
  <ul>
    <li>Dùng <code>ar content</code> để bot reply dạng text thuần</li>
    <li>Các lệnh khác tạo embed response</li>
    <li>Có thể nhập link ảnh để gửi ảnh không kèm embed</li>
  </ul>
</div>

## 🎉 Giveaway Management

### Lệnh Giveaway

<table className="command-table">
  <thead>
    <tr>
      <th>Lệnh</th>
      <th>Mô tả</th>
      <th>Cú pháp ví dụ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ga start</code></td>
      <td>Khởi tạo giveaway cho server</td>
      <td><code>ga start 1h 3w GiftCard</code></td>
    </tr>
    <tr>
      <td><code>ga end</code></td>
      <td>Kết thúc giveaway đã tạo</td>
      <td><code>ga end &lt;message_id&gt;</code></td>
    </tr>
    <tr>
      <td><code>ga reroll</code></td>
      <td>Chọn lại người thắng (reroll)</td>
      <td><code>ga reroll &lt;message_id&gt;</code></td>
    </tr>
  </tbody>
</table>

### Cú pháp giveaway chi tiết:

```bash
# Cú pháp: ga start <thời gian> <số winners> <giải thưởng>

# Ví dụ:
ga start 2h 1w iPhone 15 Pro Max
ga start 30m 5w 100k VNĐ
ga start 1d 3w Discord Nitro
ga start 12h 1w Lucky Box x10
```

**Thời gian hỗ trợ:**
- `m` = phút (minutes)
- `h` = giờ (hours)  
- `d` = ngày (days)
- `w` = winners (số người thắng)

### Workflow Giveaway:

```bash
# 1. Tạo giveaway
ga start 2h 3w Gift Card 500k

# 2. Bot tạo embed với reaction 🎉
# Member react để tham gia

# 3. Kết thúc giveaway (tự động sau 2h)
# Hoặc kết thúc sớm:
ga end 123456789012345678

# 4. Reroll nếu winner không phản hồi:
ga reroll 123456789012345678
```

<div className="callout callout-warning">
  <strong>🎉 Lưu ý Giveaway:</strong>
  <ul>
    <li>Message ID có thể lấy bằng cách reply tin nhắn giveaway</li>
    <li>Chỉ member thật (không bot) mới tham gia được</li>
    <li>Winner được thông báo qua DM và ping trong channel</li>
  </ul>
</div>

## 🔧 Best Practices cho Supporter

### Quy trình làm việc hàng ngày:

1. **Kiểm tra ticket mới**
   - Trả lời ticket trong vòng 15 phút
   - Phân loại: nạp tiền, booking, khiếu nại

2. **Xử lý booking**
   ```bash
   # Setup react profile
   /react profile Chọn Player
   # Chờ player react
   # Tạo bill
   /book
   ```

3. **Theo dõi thống kê**
   ```bash
   topno     # Xem ai đang nợ
   topcash   # Xem top giàu
   topbuy    # Xem bán chạy
   ```

4. **Quản lý autoresponder**
   - Update thông tin mới
   - Thêm FAQ thường gặp
   - Test hoạt động

### Tips hiệu quả:

- 🚀 **Phản hồi nhanh**: Reply ticket < 15 phút
- 📝 **Ghi chép rõ ràng**: Note lý do hoàn bill
- 🤝 **Thân thiện**: Luôn lịch sự với khách hàng
- 📊 **Theo dõi metrics**: Check daily stats
- 🎯 **Proactive**: Tạo react profile trước khi khách yêu cầu

### Xử lý tình huống khó:

- **Khách khiếu nại player**: Ghi chép chi tiết, báo admin
- **Bill sai**: Hoàn ngay và tạo lại đúng
- **Player không response**: Tìm player backup
- **Khách không đủ tiền**: Hướng dẫn nạp tiền
- **Conflict**: Escalate lên admin nếu cần

<div className="callout callout-info">
  <strong>🎯 Mục tiêu Supporter:</strong> Đảm bảo khách hàng có trải nghiệm booking mượt mà và hài lòng. Luôn đặt customer satisfaction lên hàng đầu!
</div>

## 📞 Hỗ trợ và báo cáo

Khi cần hỗ trợ:

1. **Lỗi kỹ thuật**: Báo admin hoặc owner
2. **Xung đột lớn**: Báo lên administrator  
3. **Vấn đề tài chính**: Liên hệ role Cash
4. **Bug report**: Ghi chép chi tiết và report

---

**💪 Keep it up!** Role Supporter là xương sống của server booking. Công việc của bạn trực tiếp ảnh hưởng đến trải nghiệm khách hàng!
