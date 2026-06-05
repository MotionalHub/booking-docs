---
title: Welcome System
description: Hệ thống welcome theo source Booking Bot hiện tại
---

# Welcome System

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần whitelist <code>owner</code> để cấu hình welcome.
</div>

## Cách cấu hình

1. Tạo embed welcome bằng `/embed create`.
2. Đặt kênh nhận welcome bằng `/settings log-welcome`.
3. Nếu muốn, gán thêm channel vào nội dung embed của bạn.

## Ghi chú

- `log-welcome` nhận thêm `embed` bắt buộc để autocomplete template.
- Đây là welcome log / welcome display, không phải feature tự viết tin nhắn riêng ngoài source.
