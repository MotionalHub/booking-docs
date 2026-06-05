---
title: Player Commands
description: Tài liệu các lệnh dành cho Player - xem lương, quản lý profile và tương tác với hệ thống booking
---

> **Player:** là những thành viên cung cấp dịch vụ booking cho khách hàng. Role này có các lệnh đặc biệt để quản lý thu nhập và profile cá nhân.

> **🔐 Yêu cầu:** Cần có role `player` của bot để sử dụng các lệnh trong mục này.

## Quản lý lương và thu nhập

| Lệnh | Mô tả | Cú pháp |
|---|---|---|
| `tinhluong` | Xem bảng lương của bạn trong kênh hiện tại | `tinhluong` |
| `luong` | Gửi bảng lương của bạn riêng qua DMs | `luong` |

## Command chính

| Lệnh | Mục đích | Ghi chú |
|---|---|---|
| `star` | Xem tổng số giờ đã book | Prefix |
| `luong` | Xem bảng lương qua DM | Prefix, riêng tư |
| `tinhluong` | Xem bảng lương trong kênh hiện tại | Prefix |
| `profile` | Xem profile player/khách | Có thể xem user khác nếu đủ quyền |
| `topbook` | Xem top booking | Prefix, tùy bot name |
| `topgift` | Xem top tặng item | Prefix |

## Ghi chú về lương

- Dữ liệu lương lấy từ player model và setting server.
- Giờ ngày và giờ đêm có thể dùng mức giá khác nhau.
- `luong` gửi kết quả qua DM, còn `tinhluong` hiển thị ngay trong kênh.

## TODO

- TODO: cần xác nhận bot name nào đang bật `topbook` và `topgift` trên server của bạn.
