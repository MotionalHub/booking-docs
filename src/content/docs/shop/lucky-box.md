---
title: Lucky Box
description: Hệ thống Lucky Box theo source Booking Bot hiện tại
---

# Lucky Box

<div className="callout callout-info">
  <strong>🎲 Cơ chế:</strong> Lucky Box là item có thể thêm/xoá bằng admin command và mở bằng <code>unbox</code>.
</div>

## Command chính

| Lệnh | Mục đích | Ghi chú |
|---|---|---|
| `/box add` | Thêm box cho user | Admin |
| `/box take` | Xoá box của user | Admin |
| `/box rate` | Gán rate cho item trong lucky box | Admin, tổng rate không quá 100% |
| `unbox` | Mở box | Prefix |
| `inventory` | Kiểm tra số lượng item trong kho | Prefix |

## Ghi chú

- `box rate` thao tác theo item ID trong shop.
- `box` command không tạo box mới, mà điều chỉnh số lượng box và tỷ lệ rơi.
- Khi cần kiểm tra lỗi, xem log ở kênh `log-box` nếu server đã cấu hình.
