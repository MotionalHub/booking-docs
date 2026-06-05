---
title: Lương / Giờ / Star
description: Tài liệu tổng hợp lương, giờ làm, star và thống kê theo source hiện tại của Booking Bot
---
Trang này gom các lệnh liên quan đến giờ làm, star, lương và thống kê player.

## Lệnh cho Player

| Lệnh | Quyền | Mục đích |
|---|---|---|
| `star` | `player` | Xem tổng số giờ đã book |
| `luong` | `player` | Gửi bảng lương qua DM |
| `tinhluong` | `player` | Xem bảng lương trong kênh hiện tại |
| `profile` | không whitelist riêng | Xem profile của player/khách |

### Hành vi chính
- `star` và `tinhluong` là prefix command.
- Nếu truyền user khác, bot chỉ cho admin/supporter theo kiểm tra quyền đã thiết lập.
- `luong` gửi kết quả riêng qua DM.

## Lệnh cho Admin

| Lệnh | Quyền | Mục đích |
|---|---|---|
| `addstar` | `admin` | Cộng star cho player |
| `substar` | `admin` | Trừ star cho player |
| `addluong` | `admin` | Cộng thưởng lương |
| `subluong` | `admin` | Trừ lương/phạt |
| `addtime` | `admin` | Cộng giờ |
| `subtime` | `admin` | Trừ giờ |
| `tongluong` | `admin` | Xem tổng lương toàn server |
| `topstar` | `admin` | Xem top star |

## Thống kê phổ biến

| Lệnh | Quyền | Mục đích |
|---|---|---|
| `topbook` | tùy bot | Xem top book |
| `topgift` | prefix | Xem top tặng item |

## Cách tính lương

Source hiện tại tính theo dữ liệu player và setting server:
- Giờ book ngày dùng `gia_book`.
- Giờ book đêm dùng `gia_book_dem`.
- Lương player ngày dùng `luong_player`.
- Lương player đêm dùng `luong_player_dem`.
- Thưởng, phạt, debt và donate được cộng/trừ riêng trong bảng lương.

### Lưu ý
- `tongluong` là trang tổng hợp dữ liệu server, không phải chỉ của một player.
