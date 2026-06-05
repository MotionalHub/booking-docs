---
title: Quản lí Shop
description: Tổng quan shop theo source Booking Bot hiện tại
---

# Quản lí Shop

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Một số command shop cần whitelist <code>supporter</code> hoặc <code>admin</code> tùy chức năng.
</div>

## Command chính

| Lệnh | Mục đích | Ghi chú |
|---|---|---|
| `shop` | Xem danh sách item có giá | Prefix |
| `buy` | Mua item theo ID | Prefix, tối đa 100 item/lần |
| `inventory` / `inv` | Xem kho đồ | Prefix |
| `gift` | Tặng item cho người khác | Prefix |
| `unbox` | Mở Lucky Box | Prefix |
| `/item` | Quản lý item shop | Slash, admin/supporter tùy subcommand |
| `/box` | Quản lý Lucky Box rate và số lượng box | Slash, admin |
| `store` | Xem store item | Chỉ một số bot name |

## Ghi chú

- `shop` và `store` là hai danh sách khác nhau: `shop` lọc item thường, `store` lọc item `store`.
- `buy` chỉ cho phép item có `price` và không vượt quá 100 item/lần.
- `gift` chỉ tặng item đang sở hữu trong inventory.
- `box rate` tổng rate không được vượt quá 100%.
