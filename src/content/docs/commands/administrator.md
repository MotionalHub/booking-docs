---
title: Administrator Commands
description: Tài liệu đầy đủ các lệnh dành cho Administrator - quản lý cash, thời gian player và cấu hình server
---
  > <span className="badge badge-admin">Administrator</span> là role có quyền cao thứ hai trong hệ thống, chịu trách nhiệm quản lý tài chính, thời gian player và một số cấu hình server quan trọng.

<div className="callout callout-info">
  <strong>🔐 Yêu cầu:</strong> Cần có role <code>administrator</code> của bot để sử dụng các lệnh trong mục này.
</div>

## Quản lý tài chính khách hàng

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
      <td><code>addtime</code></td>
      <td>Cộng giờ cho khách hàng</td>
      <td><code>at &lt;@user&gt; &lt;số giờ&gt;</code></td>
    </tr>
    <tr>
      <td><code>subtime</code></td>
      <td>Trừ giờ của khách hàng</td>
      <td><code>st &lt;@user&gt; &lt;số giờ&gt;</code></td>
    </tr>
  </tbody>
</table>

### Ví dụ sử dụng:

```bash
# Cộng 5 giờ cho khách
at @customer 5

# Trừ 2 giờ của khách  
st @customer 2
```

## Quản lý Player

### Quản lý giờ Star

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
      <td><code>addstar</code></td>
      <td>Thêm giờ star cho player</td>
      <td><code>as &lt;@user&gt; &lt;số giờ&gt;</code></td>
    </tr>
    <tr>
      <td><code>substar</code></td>
      <td>Trừ giờ star của player</td>
      <td><code>ss &lt;@user&gt; &lt;số giờ&gt;</code></td>
    </tr>
    <tr>
      <td><code>topstar</code></td>
      <td>Hiển thị top star của tất cả player</td>
      <td><code>topstar</code></td>
    </tr>
  </tbody>
</table>

### Quản lý lương và thưởng phạt

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
      <td><code>addluong</code></td>
      <td>Cộng tiền thưởng cho player</td>
      <td><code>al &lt;@user&gt; &lt;số tiền&gt;</code></td>
    </tr>
    <tr>
      <td><code>subluong</code></td>
      <td>Trừ tiền phạt của player</td>
      <td><code>sl &lt;@user&gt; &lt;số tiền&gt;</code></td>
    </tr>
    <tr>
      <td><code>tongluong</code></td>
      <td>Hiển thị bảng lương tất cả player</td>
      <td><code>tl</code></td>
    </tr>
  </tbody>
</table>

### Ví dụ quản lý player:

```bash
# Thêm 8 giờ star cho player
as @player1 8

# Thưởng 50k cho player làm tốt
al @player1 50k

# Phạt 20k cho player vi phạm
sl @player2 20k

# Xem bảng lương tổng thể
tl

# Xem top star
topstar
```

## Cấu hình server nâng cao

### Thay đổi prefix

```bash
# Đổi prefix thành !
prefix !

# Đổi prefix thành từ
prefix booking

# Đổi prefix thành ký tự đặc biệt  
prefix $
```

### Cấu hình màu sắc

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
      <td><code>color embed</code></td>
      <td>Thay đổi màu embed chính</td>
      <td><code>color embed &lt;mã màu&gt;</code></td>
    </tr>
    <tr>
      <td><code>color success</code></td>
      <td>Thay đổi màu thành công</td>
      <td><code>color success &lt;mã màu&gt;</code></td>
    </tr>
    <tr>
      <td><code>color error</code></td>
      <td>Thay đổi màu lỗi</td>
      <td><code>color error &lt;mã màu&gt;</code></td>
      description: Tài liệu các lệnh dành cho Administrator theo source Booking Bot hiện tại
  </tbody>

      # Administrator Commands

**Mã màu phổ biến:**
        <strong>🔐 Yêu cầu:</strong> Cần có whitelist <code>admin</code> để sử dụng command trong trang này.
color all 0x7c3aed      # Tím Discord
color default 0x3b82f6  # Xanh dương  
      ## Command chính
color error 0xef4444    # Đỏ
      | Lệnh | Mục đích | Ghi chú |
      |---|---|---|
      | `addcash` / `ac` | Cộng cash cho user | Prefix |
      | `subcash` / `sc` | Trừ cash cho user | Prefix |
      | `addcoin` | Cộng coin | Chỉ một số bot name |
      | `subcoin` | Trừ coin | Chỉ một số bot name |
      | `addtime` | Cộng giờ cho player |  |
      | `subtime` | Trừ giờ của player |  |
      | `addstar` | Cộng star cho player |  |
      | `substar` | Trừ star cho player |  |
      | `addluong` | Cộng thưởng lương |  |
      | `subluong` | Trừ lương/phạt |  |
      | `topstar` | Xem top star | Slash |
      | `tongluong` | Tổng hợp lương toàn server | Slash |
      | `prefix` | Đổi prefix server | Slash |
      | `color` | Đổi màu embed hệ thống | Slash |
      | `emoji` | Đổi emoji hệ thống | Slash |
      | `ban` / `unban` | Quản lý ban member | Slash |
      | `mute` / `unmute` | Quản lý mute member | Slash |
      | `antiraid` | Cấu hình anti-raid | Slash |
      | `payment-config` | Cấu hình kênh thanh toán | Xem trang Thanh toán |
emoji success ✅       # Emoji thành công
      ## Phần cần nhớ
emoji cash 💰          # Emoji tiền
      - `addcash` và `addcoin` dùng role `cash` trong source.
      - Một số command tiền chỉ có trên bot name nhất định.
      - `antiraid` có các subcommand nested: `whitelist_role`, `config`, `setup`, `advanced/*`.
      - `ban`, `mute`, `prefix`, `color`, `emoji` đều là slash command.
emoji box 🎁           # Emoji lucky box

```
