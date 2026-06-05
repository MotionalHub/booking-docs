---
title: Cài đặt nhanh
description: Hướng dẫn cài đặt và cấu hình nhanh Booking Bot theo source hiện tại
---

## Checklist tối thiểu

- Có quyền tạo role, channel và slash command trên server.
- Bot có quyền `Manage Roles`, `Manage Channels`, `Send Messages`, `Embed Links`.
- Đã tạo trước các role sẽ dùng cho `owner`, `admin`, `supporter`, `cash`, `player`.

## Bước 1: Cấu hình role

Chạy:
```bash
/settings roles
```

Gán lần lượt các role:
- `player`
- `supporter`
- `admin`
- `owner`
- `cash`

## Thiết lập kênh Log

Tài liệu các lệnh dành cho Owner theo source Booking Bot hiện tại.

<div className="callout callout-warning">
  <strong>🔐 Lưu ý bảo mật: Các lệnh thiết lập kênh log yêu cầu quyền <span className="badge badge-owner">Owner</span> để sử dụng </strong>
</div>

### Command chính

| Command | Mô tả | Ghi chú |
|---|---|---|
| `/settings roles` | Gán role bot cho `player`/`supporter`/`admin`/`owner`/`cash` | Slash-only |
| `/settings parttime` | Cấu hình part-time role và thời gian | Chỉ bot `TheAtlantic` |
| `/settings log-all` | Tạo nhanh toàn bộ kênh log | Tạo category `Booking Logs` nếu chưa có |
| `/settings log-commands` | Đặt kênh log lệnh |  |
| `/settings log-bills` | Đặt kênh log bill |  |
| `/settings log-reset` | Đặt kênh log reset |  |
| `/settings log-cash` | Đặt kênh log cash |  |
| `/settings log-shop` | Đặt kênh log shop |  |
| `/settings log-star` | Đặt kênh log star |  |
| `/settings log-box` | Đặt kênh log box |  |
| `/settings log-parttime` | Đặt kênh log part-time |  |
| `/settings log-welcome` | Đặt kênh log welcome | Cần tên embed đã tạo |
| `/settings react_channel` | Cấu hình kênh react profile |  |
| `/settings server` | Cấu hình giá book/lương/phí | Dùng form nhập liệu |

### Thiết lập nhanh

Tạo toàn bộ kênh log tự động:
```bash
/settings log-all
/settings log-bills - Đặt lại kênh nếu cần thiết, mặc định sẽ tạo trong category theo log-all
```

## Bước 3: Cấu hình server

Chạy:
```bash
/settings server
```

**Bot sẽ lưu các giá trị:**
- `phí_donate`
- `phí_về_server`
- `phí_1_người`
- `giá_book`
- `lương_player`
- `giá_book_đêm`
- `lương_player_đêm`

## Bước 4: Cấu hình phần phụ

- ` /settings parttime` chỉ hoạt động trên bot trên một số bot nằm trong hệ thống.
- ` /settings react_channel` dùng cho luồng react profile.
- ` /payment-config set-channel` dùng riêng cho kênh thông báo thanh toán.

## Bước 5: Kiểm tra nhanh

1. Dùng [Booking / Bill / Donate](/booking-bill/) để test bill.
2. Dùng [Lương / Giờ / Star](/salary-time-star/) để test bảng lương.
3. Dùng [Shop / Economy](/shop/shop/) để test mua bán item.

## Ghi chú

- Nếu không chắc command nào đang bật trên bot name của bạn, xem `TODO: cần xác nhận` trong từng trang.
