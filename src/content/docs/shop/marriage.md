---
title: Marriage
description: Hệ thống marriage theo source Booking Bot hiện tại
---

# Marriage

<div className="callout callout-info">
  <strong>💍 Yêu cầu:</strong> Cần có nhẫn hợp lệ trong inventory để cầu hôn.
</div>

## Command chính

| Lệnh | Mục đích | Ghi chú |
|---|---|---|
| `marry` / `mry` | Cầu hôn / xử lý marriage | Prefix |
| `marry luv` | Gửi lời yêu thương | Prefix |
| `marry divorce` | Ly hôn | Có confirm |
| `marry profile` | Xem profile hôn nhân |  |
| `marry thumbnail` | Đặt ảnh thumbnail |  |
| `marry image` | Đặt ảnh lớn |  |
| `marry vague` / `docthan` / `single` / `mapmo` | Đổi trạng thái profile | TODO cần xác nhận alias đầy đủ |

## Ghi chú

- Source hiện tại kiểm tra partner, ring trong shop/inventory và trạng thái hôn nhân trước khi cầu hôn.
- `force-divorce` là command supporter riêng, không nằm trong luồng marriage thường.
