---
title: FAQ - Câu hỏi thường gặp
description: Tổng hợp các câu hỏi thường gặp về Discord Booking Bot và câu trả lời chi tiết
---

# ❓ FAQ - Câu hỏi thường gặp

Tổng hợp các câu hỏi được đặt nhiều nhất về Discord Booking Bot.

## 🔰 Câu hỏi cơ bản

### 1. Bot này hoạt động như thế nào?

**A:** Discord Booking Bot là hệ thống quản lý hoàn chỉnh cho server booking, bao gồm:
- Quản lý tài chính với tiền ảo (cash)
- Tự động tạo bill và tính lương
- Hệ thống shop với lucky box
- Marriage system và nhiều tính năng khác

Bot sử dụng hệ thống phân quyền để đảm bảo bảo mật và tổ chức rõ ràng.

### 2. Làm sao để có tiền trong bot?

**A:** Có 3 cách chính:
1. **Nạp tiền thật:** Chuyển khoản theo hướng dẫn server → staff nạp vào bot
2. **Nhận từ người khác:** Dùng lệnh `give` để chuyển tiền
3. **Thưởng từ admin:** Tham gia events, hoạt động tích cực

### 3. Prefix của bot là gì?

**A:** Prefix mặc định thường là chữ cái đầu của tên bot, Ví dụ: "Booking bot" -> prefix b. Bạn cũng có thể ping bot để xem prefix.

Cách kiểm tra:
```bash
@BotName
```

### 4. Tôi có thể đổi tiền ảo ra tiền thật không?

**A:** Tùy thuộc vào chính sách của từng server. Một số server cho phép rút tiền, số khác thì không. Hãy đọc rules của server hoặc hỏi admin.

## 💰 Về hệ thống tài chính

### 5. Tại sao số dư của tôi bị trừ?

**A:** Số dư có thể bị trừ do:
- ✅ Mua đồ trong shop
- ✅ Booking dịch vụ
- ✅ Chuyển tiền cho người khác (`give`)
- ✅ Phí dịch vụ đặc biệt
- ❌ Lỗi hệ thống (hiếm, cần báo admin)

Kiểm tra log giao dịch trong kênh cash-log của server.

### 6. Có giới hạn số tiền tối đa không?

**A:** Thường không có giới hạn cứng, nhưng server có thể đặt rules về:
- Số tiền nạp tối đa/ngày
- Số tiền chuyển tối đa/lần  
- Số dư tối đa được phép

### 7. Tôi chuyển nhầm tiền cho người khác, có lấy lại được không?

**A:** **Không thể tự động lấy lại.** Bạn cần:
1. Liên hệ người nhận để họ chuyển lại
2. Nếu họ không hợp tác, tạo ticket báo admin
3. Admin sẽ xem xét từng trường hợp cụ thể

<div className="callout callout-warning">
  <strong>⚠️ Lưu ý:</strong> Luôn kiểm tra kỹ @ mention trước khi chuyển tiền!
</div>

## 🛍️ Về Shop và Items

### 8. Lucky Box hoạt động như thế nào?

**A:** Lucky Box là hộp quà ngẫu nhiên với các phần thưởng theo tỷ lệ:
- **Tiền cash:** 25,000 - 100,000 VNĐ (tỷ lệ cao)
- **Items thường:** Quà tặng, decorations (tỷ lệ trung bình)  
- **Items hiếm:** Nhẫn cưới, items đặc biệt (tỷ lệ thấp)

Tỷ lệ cụ thể do admin server cấu hình.

### 9. Tôi có thể bán lại đồ đã mua không?

**A:** Hiện tại bot chưa hỗ trợ bán lại đồ. Bạn chỉ có thể:
- Giữ trong inventory
- Tặng cho người khác (`gift`)
- Sử dụng (với items có chức năng đặc biệt)

### 10. Items có thời hạn sử dụng không?

**A:** Đa số items không có thời hạn, trừ một số items event đặc biệt. Thông tin chi tiết được ghi trong description của item.

## 💕 Về Marriage System

### 11. Làm sao để kết hôn?

**A:** Quy trình kết hôn:
1. Mua nhẫn cưới (type: ring) từ shop
2. Dùng lệnh `marry @partner <ring_id>`
3. Đợi đối phương chấp nhận
4. Thành công! Có thể dùng `marry profile` để xem

### 12. Có thể kết hôn với nhiều người không?

**A:** Không, bot chỉ cho phép kết hôn 1-1 (monogamy). Muốn kết hôn với người khác phải ly hôn trước (`marry divorce`).

### 13. Ly hôn có mất nhẫn cưới không?

**A:** Có, nhẫn cưới sẽ biến mất khi ly hôn. Nếu muốn kết hôn lại, cần mua nhẫn mới.

## 🎮 Về Player và Booking

### 14. Giờ đêm và giờ ngày tính khác nhau không?

**A:** Có, thường giờ đêm có giá cao hơn:
- **Giờ ngày:** 06:00 - 22:00
- **Giờ đêm:** 22:00 - 06:00

Thời gian cụ thể do admin server cấu hình.

## 🎫 Về Ticket và Support

### 17. Khi nào nên tạo ticket?

**A:** Tạo ticket khi:
- ✅ Cần nạp tiền
- ✅ Gặp lỗi bot
- ✅ Khiếu nại dịch vụ  
- ✅ Báo cáo vi phạm
- ✅ Đề xuất tính năng

**Không** tạo ticket cho:
- ❌ Hỏi cách dùng lệnh cơ bản (đọc docs)
- ❌ Spam hoặc troll
- ❌ Vấn đề cá nhân không liên quan bot

### 18. Ticket có thể xóa được không?

**A:** Chỉ staff mới có thể đóng/xóa ticket. User có thể yêu cầu đóng ticket nếu vấn đề đã được giải quyết.

## 🛡️ Về bảo mật

### 19. Thông tin cá nhân có được bảo mật không?

**A:** Bot chỉ lưu trữ:
- Discord User ID
- Số dư cash trong bot
- Items trong inventory
- Lịch sử giao dịch cơ bản

**Không** lưu trữ thông tin nhạy cảm như password, email, số điện thoại.

### 20. Có thể hack bot để có tiền không?

**A:** Bot có nhiều lớp bảo vệ:
- Encryption dữ liệu
- Rate limiting
- Permission checking
- Activity logging

Mọi hoạt động đều được ghi log. Hack bot là vi phạm nghiêm trọng và sẽ bị ban vĩnh viễn.

## 🔧 Về kỹ thuật

### 21. Bot có hoạt động 24/7 không?

**A:** Bot được thiết kế hoạt động 24/7, nhưng có thể downtime do:
- Maintenance định kỳ
- Update tính năng mới
- Sự cố server hosting

Thông báo maintenance thường được đăng trước trong server.

### 22. Tại sao đôi khi bot phản hồi chậm?

**A:** Nguyên nhân có thể:
- Server bot quá tải
- Discord API lag
- Database đang xử lý nhiều request
- Mạng internet không ổn định

Thường tình trạng này tự khắc phục sau vài phút.

### 23. Bot có hỗ trợ mobile không?

**A:** Bot hoạt động hoàn toàn trên Discord, nên tương thích với mọi platform Discord hỗ trợ:
- Discord mobile app (iOS/Android)
- Discord web browser  
- Discord desktop app

## 💡 Tips và tricks

### 24. Có cách nào kiếm tiền nhanh không?

**A:** Một số cách hợp pháp:
- 🎯 Tham gia events server
- 🎲 Chơi Lucky Box (có risk)
- 💼 Trở thành Player (nếu đủ điều kiện)
- 🎁 Nhận quà từ người khác
- 🏆 Đạt top rankings để nhận thưởng

### 25. Lệnh nào hay dùng nhất?

**A:** Top 5 lệnh phổ biến:
1. `cash` - Xem số dư
2. `shop` - Xem shop  
3. `inventory` - Xem kho đồ
4. `topbook` - Xem rankings
5. `give` - Chuyển tiền

### 26. Có thể đặt nickname cho bot không?

**A:** Được, có thể:
- Thay đổi prefix (`prefix <new_prefix>`)
- Tùy chỉnh emoji hệ thống
- Thay màu embed
- Liên hệ với admin để đổi tên bot

---

<div className="callout callout-info">
  <strong>💬 Vẫn có câu hỏi?</strong> 
  <ul>
    <li>📖 Đọc thêm tài liệu chi tiết trong các mục khác</li>
    <li>🎫 Tạo ticket nếu cần hỗ trợ trực tiếp</li>
  </ul>
</div>

**🚀 Happy Booking!** Chúc bạn có trải nghiệm tuyệt vời với Discord Booking Bot!
