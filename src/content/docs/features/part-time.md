---
title: Part-time System
description: Hệ thống part-time theo source Booking Bot hiện tại
---

# Part-time System

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần whitelist <code>supporter</code> để quản lý part-time.
</div>

<div className="callout callout-warning">
  <strong>📋 Lưu ý:</strong> Trong source hiện tại, feature này chỉ bật trên bot name <code>TheAtlantic</code>.
</div>

## Command chính

| Lệnh | Mục đích | Ghi chú |
|---|---|---|
| `/settings parttime` | Cấu hình role và thời gian part-time | Owner-only |
| `/parttime add` | Thêm user vào part-time | Supporter-only, chỉ TheAtlantic |
| `/parttime remove` | Gỡ user khỏi part-time | Supporter-only, chỉ TheAtlantic |

## Ghi chú

- `settings parttime` lưu `roleId` và `time` vào server data.
- `parttime add/remove` sẽ cập nhật cả role Discord và player record.
