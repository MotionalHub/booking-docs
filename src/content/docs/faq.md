---
title: FAQ - Câu hỏi thường gặp
description: Tổng hợp câu hỏi thường gặp theo source Booking Bot hiện tại
---

# FAQ

## 1. Bot này làm được gì?

Bot hiện tại tập trung vào:
- Booking / donate / hoàn bill.
- Lương, giờ, star và thống kê player.
- Shop / inventory / lucky box / marriage.
- Ticket, embed, autoresponder, anti-raid.
- Cấu hình log, role và payment channel.

## 2. Prefix là gì?

Source hiện tại dùng prefix nội bộ theo từng server. Một số command chỉ chạy prefix, một số chỉ chạy slash.

## 3. Tại sao một số command không thấy?

Trong source có whitelist theo role và theo bot name:
- `owner`
- `admin`
- `supporter`
- `player`
- `cash`
- `parttime`

Nếu command không hiện, thường là do bot name đó không bật feature, hoặc user chưa có role phù hợp.

## 4. Tôi dùng định dạng tiền như thế nào?

Bot hiểu các dạng:
- `10k`
- `1m`
- `500000`

Khi cần nhập số tiền trong bill hoặc shop, ưu tiên dùng dạng không có dấu phẩy.

## 5. Tại sao bill donate có phí khác nhau?

`/donate` và `/hoandonate` cho phép nhập `fees` riêng. Nếu không nhập, bot sẽ lấy phí từ setting server rồi mới tới config mặc định.

## 6. Part-time có dùng ở mọi bot không?

Không. Source hiện tại cho thấy `parttime` chỉ bật trên một số bot name, điển hình là `TheAtlantic`.

## 7. Có command thanh toán riêng không?

Có. Command `/payment-config` dùng để cấu hình kênh nhận thông báo thanh toán.

## TODO

- TODO: cần xác nhận các bot name nào đang bật đầy đủ `topbook`, `topgift`, `transfer` và `givecoin`.
- TODO: cần xác nhận chính sách sử dụng các trang legacy nếu bạn muốn giữ tài liệu song ngữ hoặc phiên bản cũ.
