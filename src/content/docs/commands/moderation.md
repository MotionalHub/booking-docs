---
title: Moderation Commands
description: Tài liệu các lệnh kiểm duyệt và quản lý thành viên cho Administrator và Supporter
---
> Hệ thống moderation giúp duy trì trật tự và an toàn trong server Discord thông qua các công cụ kiểm soát thành viên.

<span className="badge badge-admin">Administrator</span> có quyền sử dụng tất cả lệnh moderation mạnh mẽ.

| Lệnh | Quyền | Mô tả | Cú pháp |
|------|-------|-------|---------|
| `ban` | Administrator | Cấm vĩnh viễn người dùng khỏi server | `ban @user [lý do]` |
| `unban` | Administrator | Hủy cấm (unban) người dùng | `unban @user` |
| `mute` | Administrator | Tắt tiếng (mute) người dùng | `mute @user [thời gian] [lý do]` |
| `unmute` | Administrator | Bật tiếng (unmute) người dùng | `unmute @user` |

### Ví dụ sử dụng Administrator:

```bash
# Ban với lý do
ban @spammer Spam tin nhắn liên tục

# Ban không lý do (sẽ hỏi sau)
ban @troll

# Unban người dùng
unban @reformed_user

# Mute 1 giờ
mute @toxic_user 1h Toxic behavior

# Mute vĩnh viễn
mute @problematic_user

# Unmute
unmute @user
```

## Supporter

<span className="badge badge-supporter">Supporter</span> có quyền moderation cơ bản cho công việc hỗ trợ hàng ngày.

### Lệnh quản lý role và tin nhắn

<table className="command-table">
  <thead>
    <tr>
      <th>Lệnh</th>
      <th>Quyền</th>
      <th>Mô tả</th>
      <th>Cú pháp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>role</code></td>
      <td>Supporter</td>
      <td>Gán hoặc gỡ role cho người dùng</td>
      <td><code>role @user @role</code></td>
    </tr>
    <tr>
      <td><code>purge</code></td>
      <td>Supporter</td>
      <td>Xóa nhiều tin nhắn trong kênh hiện tại</td>
      <td><code>purge [số lượng]</code></td>
    </tr>
  </tbody>
</table>

### Ví dụ sử dụng Supporter:

```bash
# Gán role
role @new_member @Customer
role @verified_player @Player

# Gỏ role
role @ex_player @Player

# Xóa 10 tin nhắn gần nhất
purge 10

# Xóa 50 tin nhắn
purge 50

# Xóa tối đa (100 tin nhắn)
purge 100
```

## Thời gian cho lệnh Mute

### Định dạng thời gian hỗ trợ:

```bash
# Phút
mute @user 30m Spam chat
mute @user 45m Toxic behavior

# Giờ  
mute @user 1h Inappropriate content
mute @user 24h Major violation

# Ngày
mute @user 3d Repeated violations
mute @user 7d Serious offense

# Tuần
mute @user 1w Temporary ban
mute @user 2w Extended punishment
```

### Mute vĩnh viễn:

```bash
# Không chỉ định thời gian = mute vĩnh viễn
mute @user Permanent restriction
```

## Tính năng nâng cao

### Purge với filter:

```bash
# Xóa tin nhắn của một user cụ thể
purge user @user 50
```

### Role management nâng cao:

```bash
# Gán role theo điều kiện
role @new_user -Unverified  # Cho user mới
role @active_user -Regular  # Cho user hoạt động
role @donor Supporter      # Cho người donate
```