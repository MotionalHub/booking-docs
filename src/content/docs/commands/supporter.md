---
title: Supporter Commands
description: Tài liệu đầy đủ các lệnh dành cho Supporter - quản lý booking, bills, và hỗ trợ khách hàng
---
<span className="badge badge-supporter">Supporter</span> là role chuyên trách hỗ trợ khách hàng, quản lý booking và xử lý các giao dịch hàng ngày.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>supporter</code> để sử dụng các lệnh trong mục này.
</div>

<div className="callout callout-warning">
  <strong>💰 Hỗ trợ nhập nhanh:</strong> <code>10k = 10,000 VNĐ</code>, <code>1m = 1,000,000 VNĐ</code>
</div>

## Quản lý Booking & Bills

### Lệnh Booking cơ bản

| Lệnh | Mô tả | Cú pháp |
|---|---|---|
| `/book` | Tạo bill booking cho khách và player | `/book` |
| `/hoanbill` | Hoàn lại bill đã booking | `/hoanbill` |
| `/donate` | Tạo bill donate | `/donate` |
| `/hoandonate` | Hoàn lại bill donate | `/hoandonate` |

### Reset Bills

| Lệnh | Mô tả | Cú pháp |
|---|---|---|
| `/reset-bill server` | Xóa toàn bộ bill trên server | `/reset-bill server` |
| `/reset-bill user` | Xóa bill của một người cụ thể | `/reset-bill user @user` |
| `/reset-bill show` | Xem doanh thu theo ngày reset | `/reset-bill show 14/7/2025` |

## Thống kê và Theo dõi

### Lệnh thống kê

| Lệnh | Mô tả | Cú pháp |
|---|---|---|
| `topno` / `topdebt` | Hiển thị thành viên đang nợ tiền | `topno` |
| `topcash` | Top thành viên theo số tiền hiện có | `topcash` |
| `topbuy` | Top item đã bán | `topbuy` |

## Command chính

| Lệnh | Mục đích | Ghi chú |
|---|---|---|
| `/book` | Tạo bill booking | Hỗ trợ nhiều player, book đêm, ẩn danh, parttime |
| `/donate` | Tạo bill donate | Có `fees` riêng |
| `/hoanbill` | Hoàn bill booking |  |
| `/hoandonate` | Hoàn bill donate |  |
| `/reset-bill` | Reset bill server hoặc user | Có confirm |
| `/ticket` | Tạo và quản lý ticket panel | Có create/show/edit/delete/button |
| `/embed` | Tạo và quản lý embed | Có create/list/edit/delete/test |
| `ar ...` | Autoresponder prefix | `add`, `edit`, `delete`, `show`, `list`, `stats`, `view` |
| `/react profile` | Tạo react profile chọn player | Cần `settings react_channel` |
| `/parttime` | Quản lý part-time | Chỉ bot `TheAtlantic` |

## Cách thường dùng

1. Supporter nhận ticket từ khách.
2. Dùng `/react profile` hoặc chọn player thủ công.
3. Tạo bill bằng `/book` hoặc `/donate`.
4. Nếu tạo nhầm, dùng `/hoanbill` hoặc `/hoandonate`.

## Lưu ý

- `parttime` chỉ hoạt động trên một số bot riêng biệt.
- `topcash`, `topbuy`, `topdebt` là prefix command.
- `ar` là prefix-only và có nhiều subcommand hơn docs cũ.

## Autoresponder (ar)

### Tùy chỉnh Autoresponder

| Lệnh | Mô tả | Cú pháp |
|---|---|---|
| `ar turl` | Set ảnh thumbnail nhỏ | `ar turl <tên> | <link ảnh>` |
| `ar iurl` | Set ảnh lớn | `ar iurl <tên> | <link ảnh>` |
| `ar color` | Set màu embed | `ar color <tên> | 0x<hexcode>` |
| `ar line` | Bật/tắt line break | `ar line <tên> | true/false` |
| `ar include` | Include original message | `ar include <tên> | true/false` |

### Quản lý Autoresponder

| Lệnh | Mô tả | Cú pháp |
|---|---|---|
| `ar edit` | Chỉnh sửa autoresponder | `ar edit <tên>` |
| `ar delete` | Xóa autoresponder | `ar delete <tên>` |
| `ar show` | Xem thông tin autoresponder | `ar show <tên>` |

### Ví dụ tạo Autoresponder

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

> **Mẹo:**
> - Dùng `ar content` để bot reply dạng text thuần
> - Các lệnh khác tạo embed response
> - Có thể nhập link ảnh để gửi ảnh không kèm embed

## Giveaway

| Lệnh | Mô tả | Cú pháp ví dụ |
|---|---|---|
| `ga start` | Khởi tạo giveaway cho server | `ga start 1h 3w GiftCard` |
| `ga end` | Kết thúc giveaway đã tạo | `ga end <message_id>` |
| `ga reroll` | Chọn lại người thắng (reroll) | `ga reroll <message_id>` |

### Cú pháp giveaway chi tiết

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

> **Lưu ý Giveaway:**
> - Message ID có thể lấy bằng cách reply tin nhắn giveaway
> - Chỉ member thật (không bot) mới tham gia được
> - Winner được thông báo qua DM và ping trong channel