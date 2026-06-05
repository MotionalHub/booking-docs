---
title: Cash Management
description: Hướng dẫn quản lý hệ thống cash cho Discord Booking Bot - nạp tiền, trừ tiền và giao dịch
---
> <span className="badge badge-cash">Cash</span> role được thiết kế chuyên biệt để quản lý hệ thống tiền ảo của server. Đây là role quan trọng cho việc nạp tiền, trừ tiền và xử lý các giao dịch tài chính.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có role <code>cash</code> của bot để sử dụng các lệnh trong mục này.
</div>

## Lệnh quản lý Cash

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
      <td><code>addcash</code></td>
      <td>Cộng tiền VND cho khách hàng</td>
      <td><code>ac &lt;@user&gt; &lt;số tiền&gt;</code></td>
    </tr>
    <tr>
      <td><code>subcash</code></td>
      <td>Trừ tiền VND của khách hàng</td>
      <td><code>sc &lt;@user&gt; &lt;số tiền&gt;</code></td>
    </tr>
  </tbody>
</table>

### Ví dụ sử dụng:

```bash
# Nạp 100k cho khách hàng
ac @customer 100k

# Trừ 50k từ tài khoản khách
sc @customer 50k

# Nạp số tiền lớn
ac @customer 1m

# Nạp số tiền chính xác
ac @customer 150000
```
description: Tài liệu tiền ảo, coin và giao dịch theo source Booking Bot hiện tại

### Định dạng viết tắt
- 10k = 10,000 VNĐ
- 1m = 1,000,000 VNĐ

# Định dạng có dấu phẩy (không khuyến khích)
## Định dạng tiền
```
- Bot hiểu `k`, `m` và số nguyên.
- Với `transfer`, tỷ lệ trong source là `1k cash = 200 coin`.
- `baucua` yêu cầu cược từ `50 coin` đến `1,000,000 coin`.
</div>
