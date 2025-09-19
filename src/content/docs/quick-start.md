---
title: Cài đặt nhanh - Quick Start
description: Hướng dẫn cài đặt và cấu hình Discord Booking Bot nhanh chóng trong 5 phút
---

# 🚀 Cài đặt nhanh - Quick Start

Hướng dẫn này sẽ giúp bạn thiết lập Discord Booking Bot và sẵn sàng sử dụng trong vòng 5 phút!

## ✅ Checklist chuẩn bị

Trước khi bắt đầu, hãy đảm bảo bạn có:

```
- [ ] Quyền **Administrator** trên Discord Server
- [ ] Bot đã được invite vào server với quyền **Administrator**
- [ ] Hiểu biết cơ bản về Discord và cách tạo role/channel
```

## 🎯 Bước 1: Thiết lập Role cơ bản

### Tạo các role quan trọng:

```
@Owner          - Màu đỏ (#dc2626)    - Quyền Owner
@Administrator  - Màu cam (#ea580c)   - Quyền Admin
@Supporter      - Màu tím (#7c3aed)   - Quyền Support
@Cash           - Màu vàng (#ca8a04)  - Quyền quản lý cash
@Player         - Màu xanh lá (#059669) - Quyền xem bảng lương
```

<div className="callout callout-info">
  <strong>💡 Mẹo:</strong> Có thể thiết lập nhiều role cho một quyền của bot.
</div>

## 📋 Bước 2: Cấu hình kênh Log

### Tạo các kênh log (khuyến nghị):

```
#💰-log-cash      - Ghi lại giao dịch tiền
#📋-log-bills     - Ghi lại tất cả bill
#⭐-log-commands  - Ghi lại commands sử dụng
#🛍️-log-shop      - Ghi lại hoạt động trong shop
#🔄-log-reset     - Ghi lại reset bill server
```

### Thiết lập nhanh tất cả log:
```
/settings log-all
```

Hoặc thiết lập từng cái một:
```
/settings log-commands #💰-log-commands
/settings log-cash #💰-log-cash  
/settings log-bills #📋-log-bills
/settings log-shop #🛍️-log-shop
/settings log-reset #🔄-log-reset
```

## ⚙️ Bước 3: Cấu hình server cơ bản

### Thiết lập giá và lương:

```
/settings server
```

Bot sẽ yêu cầu bạn nhập:
- **Giá book ngày**: Ví dụ `25k` (25k/giờ)
- **Lương player ngày**: Ví dụ `22k` (22k/giờ) 
- **Giá book đêm**: Ví dụ `30k` (30k/giờ)
- **Lương player đêm**: Ví dụ `27k` (27k/giờ)
- **Phí về server**: Ví dụ `5k` (5k/bill)
- **Phí % donate**: Ví dụ `5` (5%/donate)

### Thay đổi prefix (tùy chọn):
```
prefix !
```

<div className="callout callout-info">
  <strong>💡 Lưu ý:</strong> Prefix mặc định là ping bot, (@BookingBot)
</div>

## 🎫 Bước 4: Thiết lập Ticket System

### Tạo kênh ticket:
```
#🎫-ticket-create  - Nơi khách tạo ticket
```

### Tạo embed ticket:
```
/embed create name:ticket-welcome
title:🎫 Tạo Ticket Hỗ Trợ
description:Click vào nút bên dưới để tạo ticket và được hỗ trợ!
color:0x7c3aed
```

### Tạo nút ticket:
```
/ticket create #🎫-ticket-create
/ticket add-button label:📞 Cần Hỗ Trợ emoji:🎫 embed:ticket-welcome
```

## 👋 Bước 5: Thiết lập Welcome System

### Tạo kênh welcome:
```
#👋-welcome  - Chào mừng thành viên mới
```

### Cấu hình welcome:
```
/settings log-welcome #👋-welcome
```

### Tạo embed welcome:
```
/embed create name:welcome-msg
title:Chào mừng {user_display}! 
description:Cảm ơn bạn đã tham gia server của chúng tôi!\n\nHãy đọc rules và bắt đầu trải nghiệm!
thumbnail:{user_avatar}
color:0x00ff00
```

## 🛍️ Bước 6: Cấu hình Shop cơ bản

### Thêm một số items mẫu:

```
/item add name:"Lucky Box" price:10000 description:"Hộp quà may mắn" emoji:🎁 type:lb

/item add name:"Nhẫn Cưới" price:100000 description:"Nhẫn để kết hôn" emoji:💍 type:ring

/item add name:"Gift Card 50k" price:50000 description:"Thẻ quà 50k" emoji:🎫 type:normal
```

### Cấu hình tỷ lệ Lucky Box:
```
/box rate item:"Gift Card 50k" rate:30
/box rate item:"Nhẫn Cưới" rate:5  
/box rate cash:25000 rate:50
/box rate cash:50000 rate:15
```

## 🎮 Bước 7: Test hệ thống

### Thử các lệnh cơ bản:

1. **Test cash system:**
   ```
   ac @member 100000
   ```

2. **Test booking:**
   ```
   /book guest:@khách player:@player số-giờ:3 thanh-toán:bank
   ```

3. **Test shop:**
   ```
   shop
   buy 1
   ```

4. **Test player time:**
   ```
   as @player 5
   ```

<div className="callout callout-warning">
  <strong>⚠️ Quan trọng:</strong> Hãy test với tài khoản phụ trước khi áp dụng cho toàn bộ server!
</div>

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
