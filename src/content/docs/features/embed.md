---
title: Embed Builder
description: Hệ thống tạo và chỉnh sửa embed Discord đẹp mắt với giao diện trực quan
---
> Embed Builder cho phép tạo và chỉnh sửa các embed Discord đẹp mắt, chuyên nghiệp để sử dụng cho announcements, welcome messages, và các thông báo quan trọng.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>owner</code> để sử dụng Embed Builder.
</div>

## Tạo Embed mới

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
      <td><code>/embed create</code></td>
      <td>Tạo embed mới</td>
      <td><code>/embed create name:&lt;tên&gt;</code></td>
    </tr>
    <tr>
      <td><code>/embed edit</code></td>
      <td>Chỉnh sửa embed hiện có</td>
      <td><code>/embed edit name:&lt;tên&gt;</code></td>
    </tr>
    <tr>
      <td><code>/embed test</code></td>
      <td>Gửi thử embed đã tạo</td>
      <td><code>/embed send name:&lt;tên&gt;</code></td>
    </tr>
    <tr>
      <td><code>/embed delete</code></td>
      <td>Xóa embed</td>
      <td><code>/embed delete name:&lt;tên&gt;</code></td>
    </tr>
  </tbody>
</table>

### Quy trình tạo Embed:

```bash
# Bước 1: Tạo embed mới
/embed create name:welcome-message

# Bước 2: Bot sẽ mở interface chỉnh sửa
# Điền các thông tin:
- Title: 🎉 Chào mừng đến với server!
- Description: Nội dung chính của embed
- Color: #00ff00 (green)
- Footer: Server Management Team
- Thumbnail: Link ảnh nhỏ
- Image: Link ảnh lớn

# Bước 3: Lưu và test
/embed test name:welcome-message
```

## Các thành phần của Embed

### Cấu trúc Embed:

```bash
┌────────────────────────────────────┐
│  [Author] [Author Icon]            │
│  Title                 [Thumbnail] |
│  ──────────────────────────────────│
│  Description text here...          │
│                                    │
│                                    │
│  [Large Image]                     │
│                                    │
│  Footer text • Timestamp           │
└────────────────────────────────────┘
```

### Chi tiết từng thành phần:

#### **Title & Description**
```bash
Title: Tiêu đề chính (tối đa 256 ký tự)
Description: Nội dung chính (tối đa 4096 ký tự)

# Hỗ trợ markdown:
**Bold text**
*Italic text*  
~~Strikethrough~~
`Code text`
[Link text](https://example.com)
```

#### **Color**
```bash
# Hex codes:
#ff0000 - Red
#00ff00 - Green  
#0000ff - Blue
#ffff00 - Yellow
#ff69b4 - Pink
#9966cc - Purple

# RGB values:
255, 0, 0 - Red
0, 255, 0 - Green
0, 0, 255 - Blue
```

#### **Images**
```bash
# Thumbnail: Ảnh nhỏ góc phải (recommend 80x80px)
# Image: Ảnh lớn full width (recommend 1920x1080px)

# Formats supported: PNG, JPG, GIF, WEBP
# Max size: 8MB per image
```

### Vấn đề thường gặp:

**Q: Embed không hiển thị?**
A: Kiểm tra:
- Bot có permission Embed Links?
- Nội dung embed có đúng không?
- Vượt quá giới hạn nội dung?

**Q: Ảnh không load?**
A: Xác nhận:
- URL ảnh tồn tại?
- Ảnh có hỗ trợ trên Discord?

**Q: Color không đúng?**
A: Chắc chắn:
- Định dạng color (0xrrggbb)
- Không sai sót màu