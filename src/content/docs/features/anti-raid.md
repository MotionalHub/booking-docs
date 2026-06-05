---
title: Anti-Raid System
description: Hệ thống anti-raid theo source Booking Bot hiện tại
---

# Anti-Raid System

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần whitelist <code>admin</code> để cấu hình anti-raid.
</div>

## Command chính

| Lệnh | Mục đích | Ghi chú |
|---|---|---|
| `/antiraid setup` | Tạo cấu hình mặc định | Tạo category, channel và role nếu chưa có |
| `/antiraid config` | Xem cấu hình hiện tại |  |
| `/antiraid whitelist_role` | Đặt role bỏ qua kiểm tra |  |
| `/antiraid advanced notify_channel` | Đặt kênh thông báo raid | Guild text only |
| `/antiraid advanced quarantine_role` | Đặt role cách ly |  |
| `/antiraid advanced punishment_type` | Chọn `kick`, `ban`, `quarantine` |  |
| `/antiraid advanced min_account_age` | Đặt tuổi tài khoản tối thiểu | 0-90 ngày |
| `/antiraid advanced ignore_bots` | Bật/tắt bỏ qua bot | Boolean |
| `/antiraid channel_webhook` | Bảo vệ channel/webhook | rate + second + enable |
| `/antiraid role` | Bảo vệ tạo/xóa role | rate + second + enable |
| `/antiraid message` | Bảo vệ spam tin nhắn | rate + second + enable |
| `/antiraid member` | Bảo vệ join raid | rate + second + enable |

## Lưu ý

- `setup` tự tạo `Booking Logs`, `log-antiraid`, role whitelist và role quarantine nếu cần.
- Source hiện tại mặc định punish join raid bằng `quarantine` trong setup.
- Nếu chưa chắc control flow trên server của bạn, thêm `TODO: cần xác nhận`.
