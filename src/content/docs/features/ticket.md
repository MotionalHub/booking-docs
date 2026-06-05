---
title: Ticket System
description: Hệ thống ticket hỗ trợ khách hàng chuyên nghiệp với tạo ticket, quản lý và theo dõi
---
> Ticket là hệ thống cung cấp hệ thống hỗ trợ khách hàng chuyên nghiệp, cho phép tạo kênh riêng cho từng yêu cầu hỗ trợ và quản lý hiệu quả.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>owner</code> để thiết lập Ticket System.
</div>

## Thiết lập Ticket
description: Hệ thống ticket theo source Booking Bot hiện tại
  <thead>

# Ticket System
      <th>Lệnh</th>
      <th>Mô tả</th>
  <strong>🔐 Yêu cầu:</strong> Cần whitelist <code>owner</code> để cấu hình ticket panel.
    </tr>
  </thead>
## Command chính

| Lệnh | Mục đích | Ghi chú |
|---|---|---|
| `/ticket create` | Tạo ticket panel | Có `ticket-name`, `embed`, `ticket-msg`, `limit-ticket`, `ticket-channel`, `category`, `logs` |
| `/ticket show` | Hiển thị lại ticket panel | Có autocomplete `ticket-name` |
| `/ticket edit` | Chỉnh sửa panel ticket |  |
| `/ticket delete` | Xoá panel ticket |  |
| `/ticket add-button` | Thêm button mở ticket | Có `label`, `emoji`, `embed` |
| `/ticket edit-button` | Chỉnh sửa button ticket |  |
| `/ticket clear-button` | Xoá toàn bộ button |  |

## Cách hoạt động

1. Supporter hoặc owner tạo panel bằng `/ticket create`.
2. Người dùng bấm button để tạo private thread.
3. Bot kiểm tra giới hạn ticket mỗi user và quyền của bot trong channel.
4. Ticket đóng lại sẽ được archive và ghi log nếu có cấu hình logs.

## Lưu ý

- Bot cần quyền `SendMessages`, `ViewChannel`, `EmbedLinks`, `ReadMessageHistory`, `CreatePrivateThreads`.
- Nếu user đã bị blacklist toàn hệ thống, bot sẽ chặn hành động ticket.

Vui lòng mô tả chi tiết vấn đề để chúng tôi hỗ trợ hiệu quả!

```

### Vấn đề thường gặp

**Q: Button tạo ticket không hoạt động?**
A: Kiểm tra bot có đang online hay không và có bot quyền tạo kênh hay không.

**Q: Staff không thấy tickets?**
A: Kiểm tra content embed đã tag role các supporter hay chưa.
