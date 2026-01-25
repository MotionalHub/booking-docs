---
title: Welcome System
description: Hệ thống chào mừng thành viên mới với embed tùy chỉnh và thiết lập kênh welcome
---
> Welcome là hệ thống giúp tạo trải nghiệm chào mừng chuyên nghiệp cho thành viên mới tham gia server, với khả năng tùy chỉnh embed và thông điệp.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>owner</code> để thiết lập Welcome System.
</div>

## Thiết lập Welcome System

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

### Quy trình setup Welcome:

```bash
# Bước 1: Tạo kênh welcome
Create channel: #main-chat

# Bước 2: Cấu hình kênh welcome
/settings log-welcome #main-chat

# Bước 3: Tạo embed welcome (tùy chọn)
/embed create name:welcome-msg

# Bước 4: Test với member mới
```

## Tùy chỉnh Welcome Message

### Sử dụng Embed Builder:

Welcome message có thể sử dụng embed để tạo giao diện đẹp và chuyên nghiệp:

```bash
# Tạo embed cho welcome
/embed create name:welcome-embed

# Thiết lập nội dung embed:
Title: 🎉 Chào mừng đến với Motional Hub!
Description: 
Xin chào {user}! Chúng tôi rất vui khi bạn tham gia cộng đồng.
Ghé qua kênh #rules để xem luất
Xem profile player #player-nam và #player-nữ
Color: 0x00ff00 (green)
Thumbnail:{server_avatar}
Footer: Chúc bạn có trải nghiệm tuyệt vời!
```

### Variables có thể sử dụng:

- `{user}` - Mention thành viên mới
- `{user_display}` - Tên thành viên
- `{server}` - Tên server