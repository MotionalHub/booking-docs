---
title: Booking / Bill / Donate
description: Tài liệu chuẩn cho quy trình book, donate, hoàn bill
---

Trang này tóm tắt các lệnh xử lý booking và giao dịch chính trong source hiện tại.

## Lệnh hỗ trợ

| Lệnh | Quyền | Mục đích | Ghi chú |
|---|---|---|---|
| `/book` | `supporter` | Tạo bill booking cho khách và player | Hỗ trợ đến 10 player, 3 loại thanh toán |
| `/donate` | `supporter` | Tạo bill donate | Có thể nhập `fees` riêng, nếu không thì lấy từ setting server |
| `/hoanbill` | `supporter` | Hoàn bill booking | Chạy flow hoàn lương/hoàn cọc theo bill đã có |
| `/hoandonate` | `supporter` | Hoàn bill donate | Tách riêng với hoàn bill booking |
| `/reset-bill` | `supporter` | Reset bill theo user hoặc toàn server | Có xác nhận trước khi thực hiện |

## `/book`

### Quyền và phạm vi
- Chỉ role `supporter`.
- Chỉ hoạt động ở slash command.
- Có thể dùng `parttime` một số bot.

### Options chính
- `khách`: người nhận bill.
- `player1`: player bắt buộc.
- `player2` đến `player10`: player bổ sung.
- `số-giờ`: số giờ booking, tối thiểu `1`.
- `thanh-toán`: `Bank`, `Trừ cọc`, `Trừ lương`.
- `book_đêm`: dùng giá book buổi đêm.
- `ẩn_danh`: ẩn danh trên bill và log.
- `về_server_riêng`: cộng phí dịch vụ server riêng.
- `thêm_người`: cộng phí thêm người.
- `note`: ghi chú riêng trên bill.

### Luồng xử lý
1. Bot kiểm tra khách có đủ tiền hoặc đủ điều kiện bill.
2. Bot gọi luồng booking nội bộ để cập nhật giờ, cọc hoặc lương.
3. Bot gửi embed bill và log vào kênh log booking / cash tương ứng.
4. Nếu loại bill là `Trừ cọc` hoặc `Trừ lương`, bot ghi thêm chênh lệch số dư cũ và mới.

### Lỗi thường gặp
- Khách không đủ tiền để booking.
- Khách không có role player khi source yêu cầu.
- Giao dịch không thành công.
- Lên bill bằng `Trừ lương` nhưng hoàn bill bằng `Trừ cọc`.

## `/donate`

### Options chính
- `khách`, `player1`, `player2` đến `player10`.
- `số-tiền`: bắt buộc.
- `thanh-toán`: `Bank`, `Trừ cọc`, `Trừ lương`.
- `parttime`: chỉ hỗ trợ trên `TheAtlantic`.
- `ẩn_danh`: ẩn danh trên bill.
- `note`: ghi chú.
- `fees`: phần trăm phí donate, nếu không nhập thì lấy từ setting server.

### Ghi chú quan trọng
- `fees` có thể được nhập riêng trong command.
- Nếu không có `fees`, bot ưu tiên `db.settings.phi_donate`, sau đó mới tới config mặc định.

## `/hoanbill` và `/hoandonate`

### Điểm khác nhau
- `/hoanbill` dùng cho bill booking.
- `/hoandonate` dùng cho bill donate.

### Options chung
- `khách`, `player1`, `player2` đến `player10`.
- `số-giờ` với booking.
- `số-tiền` với donate.
- `thanh-toán`.
- `ẩn_danh`.
- `parttime`.
- `note`.
- `fees` cho donate.
- `book_đêm`, `về_server_riêng`, `thêm_người` cho luồng booking hoàn bill.

### Khi nào dùng
- Dùng khi đã tạo bill nhầm và cần trả lại số liệu cho khách/player.
- Bot sẽ kiểm tra bill gốc trước khi hoàn.

## `/reset-bill`

### Subcommand
- `server`: reset toàn bộ bill của server.
- `user`: reset bill của một player.
- `show`: xem doanh thu theo mốc reset.

### Lưu ý
- Có bước xác nhận trước khi thực hiện.
- Khi reset server, bot cũng ghi lại snapshot dữ liệu để tra cứu bằng `show`.
- Reset sẽ xóa giờ, donate, debt, thưởng và phạt của player.
