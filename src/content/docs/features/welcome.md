---
title: Welcome System
description: Hệ thống chào mừng thành viên mới với embed tùy chỉnh và thiết lập kênh welcome
---

# 👋 Welcome System

Welcome System giúp tạo trải nghiệm chào mừng chuyên nghiệp cho thành viên mới tham gia server, với khả năng tùy chỉnh embed và thông điệp.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>owner</code> để thiết lập Welcome System.
</div>

## ⚙️ Thiết lập Welcome System

### Cấu hình kênh Welcome

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
      <td><code>/settings log-welcome</code></td>
      <td>Thiết lập kênh hiển thị welcome message</td>
      <td><code>/settings log-welcome #channel</code></td>
    </tr>
  </tbody>
</table>

### Workflow setup Welcome:

```bash
# Bước 1: Tạo kênh welcome
Create channel: #👋-welcome

# Bước 2: Cấu hình kênh welcome
/settings log-welcome #👋-welcome

# Bước 3: Tạo embed welcome (tùy chọn)
/embed create name:welcome-msg

# Bước 4: Test với member mới
```

## 🎨 Tùy chỉnh Welcome Message

### Sử dụng Embed Builder:

Welcome message có thể sử dụng embed để tạo giao diện đẹp và chuyên nghiệp:

```bash
# Tạo embed cho welcome
/embed create name:welcome-embed

# Thiết lập nội dung embed:
Title: 🎉 Chào mừng đến với [Server Name]!
Description: 
Xin chào {user}! Chúng tôi rất vui khi bạn tham gia cộng đồng.

📋 Để bắt đầu:
✅ Đọc #📜-rules 
✅ Ghé thăm #💰-nạp-tiền để nạp cash
✅ Tạo ticket trong #🎫-support nếu cần hỗ trợ

🎮 Dịch vụ của chúng tôi:
• Booking game với player chuyên nghiệp
• Hệ thống shop đa dạng
• Events và giveaway thường xuyên

Color: #00ff00 (green)
Thumbnail: Server logo
Footer: Chúc bạn có trải nghiệm tuyệt vời! 💖
```

### Variables có thể sử dụng:

- `{user}` - Mention thành viên mới
- `{user_display}` - Tên thành viên
- `{server}` - Tên server

## 🎯 Ví dụ cho Welcome

### Nội dung Welcome hiệu quả:

#### 1. **Thông tin cơ bản**
```markdown
🎉 Chào mừng {user} đến với [Server Name]!

📍 Bạn là thành viên thứ {membercount}
```

#### 2. **Hướng dẫn bắt đầu**
```markdown
📋 Những việc cần làm đầu tiên:
✅ Đọc quy định tại #rules
✅ Nạp tiền để sử dụng dịch vụ
```

#### 3. **Giới thiệu dịch vụ**
```markdown
🎮 Dịch vụ của chúng tôi:
• 🎯 Booking game với player pro
• 🛍️ Shop với nhiều items hấp dẫn
• 💍 Marriage system romantic
• 🎁 Lucky box với phần thưởng khủng
```

#### 4. **Kênh quan trọng**
```markdown
📱 Kênh quan trọng:
• #💰-nạp-tiền - Nạp cash
• #🎫-support - Tạo ticket hỗ trợ  
• #📋-booking - Đặt dịch vụ
• #🛍️-shop - Mua sắm
```

#### 5. **Kênh ticket**
```markdown
🚀 Bắt đầu ngay:
Tạo ticket trong #🎫-support để được hướng dẫn chi tiết!

💖 Chúc bạn có trải nghiệm tuyệt vời!
```
