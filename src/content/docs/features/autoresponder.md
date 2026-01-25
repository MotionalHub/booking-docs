---
title: Autoresponder System
description: Hệ thống tự động trả lời tin nhắn theo từ khóa với khả năng tùy chỉnh linh hoạt
---
> Autoresponder System cho phép bot tự động trả lời tin nhắn khi phát hiện từ khóa hoặc cụm từ cụ thể, giúp hỗ trợ khách hàng 24/7 và giảm tải cho staff.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có quyền <code>supporter</code> để quản lý Autoresponder.
</div>

## Quản lý Autoresponder
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
      <td><code>ar create</code></td>
      <td>Tạo autoresponder mới</td>
      <td><code>ar create &lt;tên&gt;</code></td>
    </tr>
    <tr>
      <td><code>ar edit</code></td>
      <td>Chỉnh sửa autoresponder</td>
      <td><code>ar edit &lt;tên&gt;</code></td>
    </tr>
    <tr>
      <td><code>ar delete</code></td>
      <td>Xóa autoresponder</td>
      <td><code>ar delete &lt;tên&gt;</code></td>
    </tr>
    <tr>
      <td><code>ar show</code></td>
      <td>Xem thông tin autoresponder</td>
      <td><code>ar show &lt;tên&gt;</code></td>
    </tr>
    <tr>
      <td><code>ar list</code></td>
      <td>Liệt kê tất cả autoresponders</td>
      <td><code>ar list</code></td>
    </tr>
  </tbody>
</table>

### Cách hoạt động của Autoresponder:

```bash
# Bước 1: Tạo autoresponder mới
ar create wlc | Hello {user}

# Bước 3: Test autoresponder
# Gõ "wlc" trong kênh → Bot tự động reply
```
