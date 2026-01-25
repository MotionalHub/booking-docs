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

## Hỗ trợ định dạng nhập nhanh

Hệ thống hỗ trợ nhiều cách nhập số tiền để thuận tiện:

```bash
# Định dạng viết tắt
10k = 10,000 VNĐ
100k = 100,000 VNĐ
1m = 1,000,000 VNĐ
500k = 500,000 VNĐ

# Định dạng đầy đủ
10000 = 10,000 VNĐ
1000000 = 1,000,000 VNĐ

# Định dạng có dấu phẩy (không khuyến khích)
1,000,000 = 1,000,000 VNĐ
```

<div className="callout callout-warning">
  <strong>⚠️ Lưu ý:</strong> Tránh sử dụng dấu phẩy trong số tiền vì có thể gây lỗi. Ưu tiên dùng định dạng <code>k</code> và <code>m</code>.
</div>

## Tracking và Logging

### Hệ thống log tự động

Mọi giao dịch cash đều được ghi log tự động tại kênh đã cấu hình:

```bash
# Setup kênh log cash (Owner/Admin)
/settings log-cash #log-cash
```

**Thông tin được ghi log:**
- ✅ Người thực hiện giao dịch
- ✅ Người nhận/bị trừ tiền  
- ✅ Số tiền giao dịch
- ✅ Thời gian thực hiện

### Ví dụ log message:

```
Staff đã thêm 300.000 VNĐ cho Khách
```

## Thống kê và báo cáo

### Lệnh xem số dư:

```bash
# Khách tự xem số dư (không cần role Cash)
cash

# Xem top người có tiền nhiều nhất  
topcash

# Xem danh sách nợ tiền
topno
```

## Tips và thủ thuật

### Sử dụng hiệu quả:

1. **Nhập nhanh với alias:**
   ```bash
   # Thay vì gõ đầy đủ
   addcash @customer 100000
   
   # Dùng alias ngắn gọn
   ac @customer 100k
   ```

2. **Kiểm tra số dư trước khi trừ:**
   ```bash
   # Xem số dư hiện tại
   cash @customer
   
   # Sau đó mới trừ tiền
   sc @customer 50k
   ```

## Hỗ trợ và chuẩn đoán

### Khi gặp vấn đề:

1. **Kiểm tra log** tại kênh cash log
2. **Xem [Troubleshooting](/troubleshooting/)** 
3. **Liên hệ Administrator** nếu cần hỗ trợ
4. **Report bug** nếu phát hiện lỗi hệ thống

---

**💡 Lưu ý:** Role Cash chỉ quản lý tiền ảo trong Discord. Không liên quan đến tiền thật của người dùng. Luôn tuân thủ quy định của server và pháp luật hiện hành.
