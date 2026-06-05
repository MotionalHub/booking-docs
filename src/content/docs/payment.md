---
title: Thanh toán
description: Tài liệu cấu hình kênh thanh toán và điểm cần lưu ý trong bot hiện tại
---
<div class="callout callout-warning">
  <strong>📋 Lưu ý:</strong> Hiện tại, để setup kênh nhận thanh toán, bạn cần liên hệ hỗ trợ để thiết lập.
</div>

## `/payment-config`

| Subcommand | Quyền | Mục đích |
|---|---|---|
| `set-channel` | `admin` | Đặt kênh nhận thông báo thanh toán |
| `view` | `admin` | Xem cấu hình hiện tại |
| `remove` | `admin` | Xoá cấu hình thanh toán |

### Luồng xử lý
1. Admin chọn kênh text có thể gửi tin nhắn.
2. `view` sẽ kiểm tra kênh còn hoạt động được hay không.
3. `remove` xoá cấu hình kênh gửi thông báo.

## Ghi chú
- Command này là slash-only.
- Bot sẽ từ chối nếu kênh không gửi được.
- Cấu hình này tách riêng với `/settings`.
