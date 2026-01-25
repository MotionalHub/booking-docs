---
title: Cài đặt nhanh
description: Hướng dẫn cài đặt và cấu hình Discord Booking Bot nhanh chóng trong 5 phút
---

## Checklist

Trước khi bắt đầu, hãy đảm bảo bạn có:

- [ ] Quyền **Administrator** trên Discord Server
- [ ] Bot đã được invite vào server với quyền **Administrator**
- [ ] Hiểu biết cơ bản về Discord và cách tạo role/channel

## Bước 1: Thiết lập Role cơ bản

### Tạo các role quan trọng:

| Role | Màu | Mã màu | Quyền |
|------|-----|---------|-------|
| @Owner | 🔴 Đỏ | `#dc2626` | Quyền Owner |
| @Administrator | 🟠 Cam | `#ea580c` | Quyền Admin |
| @Supporter | 🟣 Tím | `#7c3aed` | Quyền Support |
| @Cash | 🟡 Vàng | `#ca8a04` | Quyền quản lý cash |
| @Player | 🟢 Xanh lá | `#059669` | Quyền xem lương |

<div className="callout callout-info">
  <strong>💡 Mẹo:</strong> Có thể thiết lập nhiều role cho một quyền của bot.
</div>

## Bước 2: Cấu hình kênh Log

### Tạo các kênh log (khuyến nghị):

**#log-cash**
: Ghi lại tất cả giao dịch tiền, nạp/rút cash

**#log-bills**
: Ghi lại toàn bộ bill booking và thanh toán

**#log-commands**
: Ghi lại mọi lệnh được sử dụng trong server

**#log-shop**
: Ghi lại hoạt động mua bán trong shop

**#log-reset**
: Ghi lại các lần reset bill và dữ liệu

### Thiết lập nhanh:

**Cách 1:** Tự động tất cả log channels
```bash
/settings log-all
```

**Cách 2:** Thiết lập từng kênh riêng
```bash
/settings log-commands #log-commands
/settings log-cash #log-cash  
/settings log-bills #log-bills
/settings log-shop #log-shop
/settings log-reset #log-reset
```

## Bước 3: Cấu hình server cơ bản

### Thiết lập giá và lương:

Chạy lệnh sau để mở form cấu hình:
```bash
/settings server
```

Bot sẽ yêu cầu nhập các thông số:

| 📊 Loại | ☀️ Ca Ngày | 🌙 Ca Đêm |
|---------|-----------|----------|
| **Giá booking** | `25k` /giờ | `30k` /giờ |
| **Lương player** | `22k` /giờ | `27k` /giờ |

| ⚙️ Cài đặt khác | Giá trị | Mô tả |
|----------------|---------|-------|
| **Phí về server** | `5k` | Phí cố định mỗi bill |
| **Phí % donate** | `5%` | Phần trăm từ donate |

---

### Thay đổi prefix (tùy chọn):

```bash
@Bot prefix !
```

> 💡 **Mặc định:** Prefix là mention bot `@BookingBot`

## Bước 4: Thiết lập Ticket

### Quy trình 3 bước:

**1️⃣ Tạo kênh ticket**

Tạo channel `#ticket-create` - nơi khách hàng sẽ tạo ticket

**2️⃣ Tạo embed chào mừng**

```bash
/embed create name:ticket-welcome
  title:🎫 Tạo Ticket Hỗ Trợ
  description:Click vào nút bên dưới để tạo ticket và được hỗ trợ!
  color:0x7c3aed
```

**3️⃣ Gắn nút vào embed**

```bash
/ticket create #ticket-create
/ticket add-button label:📞 Booking emoji:🎫 embed:ticbooking
```

> ✅ **Kết quả:** Khách click nút → Tạo ticket riêng → Staff hỗ trợ

## Bước 5: Thiết lập Welcome System

### Tạo kênh welcome:
```python
#main-chat  - Chào mừng thành viên mới
```

### Cấu hình welcome:
```bash
/settings log-welcome #main-chat
```

### Tạo embed welcome:
```bash
/embed create name:welcome
title:Chào mừng {user_display}! 
description:Cảm ơn bạn đã tham gia server của chúng tôi!\n\nHãy đọc rules và bắt đầu trải nghiệm!
thumbnail:{user_avatar}
color:0x00ff00
```

## Bước 6: Cấu hình Shop cơ bản

### Thêm một số items mẫu:

```bash
/item add name:"Lucky Box" price:10000 description:"Hộp quà may mắn" emoji:🎁 type:lb

/item add name:"Nhẫn Cưới" price:100000 description:"Nhẫn để kết hôn" emoji:💍 type:ring

/item add name:"Gift Card 50k" price:50000 description:"Thẻ quà 50k" emoji:🎫 type:normal
```

### Cấu hình tỷ lệ Lucky Box:
```bash
/box rate item:"Gift Card 50k" rate:30
/box rate item:"Nhẫn Cưới" rate:5  
/box rate cash:25000 rate:50
/box rate cash:50000 rate:15
```

## Bước 7: Test hệ thống

### Kiểm tra từng tính năng:

<details>
<summary>📋 <strong>Checklist kiểm tra chi tiết</strong></summary>

- [ ] Log cash hiện đúng trong `#log-cash`
- [ ] Bill được ghi vào `#log-bills`
- [ ] Commands xuất hiện ở `#log-commands`
- [ ] Player nhận được lương đúng
- [ ] Shop items hiển thị đầy đủ
- [ ] Ticket tạo thành công khi click button

</details>

> ⚠️ **Quan trọng:** Test với tài khoản phụ trước khi deploy toàn server!

## 🎉 Hoàn thành!

Chúc mừng! Bạn đã thiết lập xong Discord Booking Bot. Bây giờ hệ thống đã sẵn sàng để:

- ✅ Quản lý booking và bill
- ✅ Tính tổng lương cho player  
- ✅ Hỗ trợ khách hàng qua ticket
- ✅ Vận hành shop và lucky box
- ✅ Ghi lại tất cả hoạt động

## 📚 Bước tiếp theo

1. **[Tìm hiểu commands Administrator](/commands/administrator/)** - Quản lý hàng ngày
2. **[Cấu hình Welcome nâng cao](/features/welcome/)** - Tùy chỉnh chào mừng
3. **[Thiết lập Anti-Raid](/features/anti-raid/)** - Bảo vệ server
4. **[Hướng dẫn cho Player](/user/player/)** - Các lệnh cho player

---

<div className="callout callout-info">
  <strong>🆘 Cần hỗ trợ?</strong> Nếu gặp vấn đề trong quá trình cài đặt, hãy xem <a href="/troubleshooting/">Troubleshooting</a> hoặc liên hệ support team.
</div>
