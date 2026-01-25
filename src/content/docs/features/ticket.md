---
title: Ticket System
description: Hệ thống ticket hỗ trợ khách hàng chuyên nghiệp với tạo ticket, quản lý và theo dõi
---
> Ticket là hệ thống cung cấp hệ thống hỗ trợ khách hàng chuyên nghiệp, cho phép tạo kênh riêng cho từng yêu cầu hỗ trợ và quản lý hiệu quả.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>owner</code> để thiết lập Ticket System.
</div>

## Thiết lập Ticket
<table className="command-table">
  <thead>
    <tr>
      <th>Lệnh</th>
      <th>Mô tả</th>
      <th>Cú pháp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/ticket create</code></td>
      <td>Tạo hệ thống ticket cơ bản</td>
      <td><code>/ticket create</code></td>
    </tr>
    <tr>
      <td><code>/ticket add-button</code></td>
      <td>Thêm button tạo ticket</td>
      <td><code>/ticket add-button</code></td>
    </tr>
    <tr>
      <td><code>/ticket settings</code></td>
      <td>Cấu hình settings ticket</td>
      <td><code>/ticket settings</code></td>
    </tr>
  </tbody>
</table>

### Quy trình thiết lập Ticket:

```bash
# Bước 1: Tạo category cho tickets
Create Category: "Ticket"

# Bước 2: Tạo kênh ticket creation  
Create Channel: #create-ticket (trong category Support)

# Bước 3: Setup ticket system
/ticket create

# Bước 4: Thêm button để tạo ticket
/ticket add-button

# Bước 5: Cấu hình permissions và roles
/ticket settings
```

## Ví dụ thiết lập Ticket
```bash
# Welcome message khi tạo ticket
Title: Ticket được tạo thành công!
Color: 0x00ff00
Description: 
Xin chào {user}! 

Ticket của bạn đã được tạo
Staff sẽ hỗ trợ bạn sớm nhất có thể.

Vui lòng mô tả chi tiết vấn đề để chúng tôi hỗ trợ hiệu quả!

```

### Vấn đề thường gặp

**Q: Button tạo ticket không hoạt động?**
A: Kiểm tra bot có đang online hay không và có bot quyền tạo kênh hay không.

**Q: Staff không thấy tickets?**
A: Kiểm tra content embed đã tag role các supporter hay chưa.
