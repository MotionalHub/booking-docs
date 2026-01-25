---
title: Giveaway System  
description: Hệ thống tổ chức giveaway và events với quản lý entries, winners và phần thưởng
---
> Giveaway cho phép tổ chức các cuộc thi, sự kiện tặng quà để tăng engagement và thu hút thành viên mới tham gia server.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>supporter</code> để tạo và quản lý giveaway.
</div>

## Tạo Giveaway

### Lệnh cơ bản

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
      <td><code>giveaway start</code></td>
      <td>Tạo giveaway mới</td>
      <td><code>ga s</code></td>
    </tr>
    <tr>
      <td><code>giveaway end</code></td>
      <td>Kết thúc giveaway sớm</td>
      <td><code>ga e &lt;id&gt;</code></td>
    </tr>
    <tr>
      <td><code>giveaway reroll</code></td>
      <td>Quay lại winners mới</td>
      <td><code>ga rr &lt;id&gt;</code></td>
    </tr>
  </tbody>
</table>

### Quy trình tạo Giveaway:

```bash
# Bước 1: Tạo giveaway
ga start 30s 1w 100k VNĐ
ga start <thời gian> <số người tháng>w <giải thưởng>

# Bước 2: Bot sẽ hỏi thông tin:
# - Prize: Phần thưởng (VD: 1M VNĐ cash)
# - Duration: Thời gian (VD: 24h)
# - Winners: Số người thắng (VD: 3)
# - Requirements: Yêu cầu tham gia
# - Channel: Kênh đăng giveaway

# Bước 3: Bot đăng embed với reactions
# Users react 🎉 để join

# Bước 4: Tự động pick winners khi hết hạn
```