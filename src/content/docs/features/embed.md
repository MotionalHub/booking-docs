---
title: Embed Builder
description: Hệ thống tạo và chỉnh sửa embed Discord đẹp mắt với giao diện trực quan
---

> Embed Builder cho phép tạo và chỉnh sửa các embed Discord đẹp mắt, chuyên nghiệp để sử dụng cho announcements, welcome messages, và các thông báo quan trọng.

> **🔐 Yêu cầu:** Cần có quyền `owner` để sử dụng Embed Builder.

## Tạo Embed mới

### Lệnh cơ bản

| Lệnh | Mô tả |
|---|---|
| `/embed create name:<tên>` | Tạo embed mới với `name` |

## Command chính

| Lệnh | Mục đích | Ghi chú |
|---|---|---|
| `/embed create` | Tạo template embed | Name tối đa 10 ký tự |
| `/embed list` | Xem danh sách embed |  |
| `/embed edit` | Chỉnh sửa embed | Hỗ trợ `content`, `title`, `author_*`, `footer_*`, `description`, `thumbnail`, `image`, `color`, `timestamp` |
| `/embed delete` | Xoá embed | Autocomplete theo name |
| `/embed test` | Gửi thử embed | Dùng để preview |

## Ghi chú

- `name` có autocomplete.
- `color` cần nhập dạng `0x...`.
- `timestamp` là boolean.
- Embed được dùng lại bởi ticket, autoresponder và các luồng nội bộ khác.

### Lưu & test

Gửi thử embed đã tạo:

```bash
/embed test name:welcome-message
```

## Các thành phần của Embed

### Cấu trúc Embed

```text
┌────────────────────────────────────┐
│  [Author] [Author Icon]            │
│  Title                 [Thumbnail] │
│  ──────────────────────────────────│
│  Description text here...          │
│                                    │
│                                    │
│  [Large Image]                     │
│                                    │
│  Footer text • Timestamp           │
└────────────────────────────────────┘
```

### Chi tiết từng thành phần

#### Title & Description

- `Title`: Tiêu đề chính (tối đa 256 ký tự)
- `Description`: Nội dung chính (tối đa 4096 ký tự)

Hỗ trợ Markdown: bold, italic, strikethrough, inline code, links.

#### Color

- Hệ thống chấp nhận định dạng `0xrrggbb` hoặc mã hex thông thường.
- Ví dụ: `0xff0000` (red), `0x00ff00` (green).

#### Images

- `Thumbnail`: Ảnh nhỏ góc phải (recommended 80x80px)
- `Image`: Ảnh lớn full width (recommended 1920x1080px)
- Hỗ trợ: PNG, JPG, GIF, WEBP — tối đa 8MB.

## Vấn đề thường gặp

**Q: Embed không hiển thị?**

- Kiểm tra bot có permission `Embed Links`.
- Kiểm tra nội dung embed không vượt giới hạn.

**Q: Ảnh không load?**

- Kiểm tra URL ảnh tồn tại và truy cập được.
- Kiểm tra định dạng ảnh được hỗ trợ.

**Q: Color không đúng?**

- Đảm bảo định dạng `0xrrggbb`.

---

**Ghi chú:** Embed được dùng trong nhiều luồng như ticket, autoresponder và thông báo server. Nếu gặp lỗi hiển thị, tránh dùng thẻ HTML thô trong nội dung tài liệu và kiểm tra renderer của static site generator.
