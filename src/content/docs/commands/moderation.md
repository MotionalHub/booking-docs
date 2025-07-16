---
title: Moderation Commands
description: Tài liệu các lệnh kiểm duyệt và quản lý thành viên cho Administrator và Supporter
---

# 🛡️ Moderation Commands

Hệ thống moderation giúp duy trì trật tự và an toàn trong server Discord thông qua các công cụ kiểm soát thành viên.

## 👑 Administrator Moderation

<span className="badge badge-admin">Administrator</span> có quyền sử dụng tất cả lệnh moderation mạnh mẽ.

### Lệnh cấm và hạn chế

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
      <td><code>ban</code></td>
      <td>Administrator</td>
      <td>Cấm vĩnh viễn người dùng khỏi server</td>
      <td><code>ban @user [lý do]</code></td>
    </tr>
    <tr>
      <td><code>unban</code></td>
      <td>Administrator</td>
      <td>Hủy cấm (unban) người dùng</td>
      <td><code>unban @user</code></td>
    </tr>
    <tr>
      <td><code>mute</code></td>
      <td>Administrator</td>
      <td>Tắt tiếng (mute) người dùng</td>
      <td><code>mute @user [thời gian] [lý do]</code></td>
    </tr>
    <tr>
      <td><code>unmute</code></td>
      <td>Administrator</td>
      <td>Bật tiếng (unmute) người dùng</td>
      <td><code>unmute @user</code></td>
    </tr>
  </tbody>
</table>

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

## 🎧 Supporter Moderation

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

## ⏰ Thời gian cho lệnh Mute

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

## 🔧 Tính năng nâng cao

### Purge với filter:

```bash
# Xóa tin nhắn của một user cụ thể
purge 50 @spammer

# Xóa tin nhắn chứa từ khóa
purge 20 "bad_word"

# Xóa tin nhắn có attachment
purge 30 --attachments

# Xóa tin nhắn của bot
purge 25 --bots
```

### Role management nâng cao:

```bash
# Gán multiple roles
role @user @Customer @VIP @Special

# Gán role theo điều kiện
role @new_user @Unverified  # Cho user mới
role @active_user @Regular  # Cho user hoạt động
role @donor @Supporter      # Cho người donate
```

## 📋 Workflow Moderation

### Quy trình xử lý vi phạm:

#### 1. **Vi phạm nhẹ (Supporter xử lý)**
```bash
# Bước 1: Cảnh báo bằng lời
@user Vui lòng không spam chat

# Bước 2: Purge tin nhắn vi phạm
purge 5

# Bước 3: Mute tạm thời (nếu tiếp tục)
mute @user 30m Please follow chat rules
```

#### 2. **Vi phạm trung bình (Administrator xử lý)**
```bash
# Mute dài hạn
mute @user 24h Repeated violations after warnings

# Gỡ role đặc biệt (nếu có)
role @user @VIP  # Gỡ VIP role

# Ghi chép vào log
```

#### 3. **Vi phạm nghiêm trọng (Administrator xử lý)**
```bash
# Ban tạm thời hoặc vĩnh viễn
ban @user Serious rule violation

# Purge toàn bộ tin nhắn
purge 100

# Báo Owner nếu cần
```

### Escalation process:

```
Supporter → Administrator → Owner
    ↓            ↓           ↓
Warning      Mute/Role    Ban/Major
Purge        Management   Decisions
```

## 🚨 Tình huống đặc biệt

### Xử lý Raid/Spam attack:

```bash
# Bước 1: Mute hàng loạt
mute @raider1 Raid attack
mute @raider2 Raid attack  
mute @raider3 Raid attack

# Bước 2: Purge spam messages
purge 100

# Bước 3: Kích hoạt lockdown (nếu có)
lockdown on

# Bước 4: Ban các tài khoản raid
ban @raider1 Raid participation
ban @raider2 Raid participation
```

### Xử lý Drama/Conflict:

```bash
# Bước 1: Mute các bên liên quan
mute @user1 30m Involved in drama
mute @user2 30m Involved in drama

# Bước 2: Purge tin nhắn conflict
purge 20

# Bước 3: Di chuyển discussion sang DM
# Bước 4: Mediation và giải quyết
```

## 📊 Logging và Tracking

### Thông tin được ghi log:

- ✅ **User actions**: Ban, mute, role changes
- ✅ **Moderator**: Ai thực hiện action
- ✅ **Timestamp**: Khi nào thực hiện  
- ✅ **Reason**: Lý do (nếu có)
- ✅ **Duration**: Thời gian mute/ban
- ✅ **Channel**: Kênh xảy ra vi phạm

### Ví dụ log entry:

```
🛡️ MODERATION ACTION
👤 Target: @problematic_user
👮 Moderator: @admin_user
🔨 Action: Mute (24h)
📝 Reason: Repeated toxic behavior
📍 Channel: #general
🕐 Time: 16:30:25 - 16/07/2025
```

## ⚠️ Best Practices

### Dos and Don'ts:

#### ✅ **DO:**
- Luôn ghi rõ lý do khi mute/ban
- Cảnh báo trước khi punishment
- Document các vi phạm nghiêm trọng
- Escalate khi không chắc chắn
- Treat everyone fairly và consistent

#### ❌ **DON'T:**
- Abuse quyền moderation
- Mute/ban vì personal conflicts
- Purge tin nhắn quan trọng
- Skip warning cho vi phạm nhẹ
- Make major decisions khi emotional

### Moderation principles:

1. **Prevention > Punishment**: Giáo dục tốt hơn trừng phạt
2. **Proportional response**: Punishment phù hợp với vi phạm
3. **Consistent enforcement**: Áp dụng rules đồng đều
4. **Documentation**: Ghi chép đầy đủ
5. **Team coordination**: Communicate với team

## 🔐 Permissions Required

### Discord permissions cho bot:

```
Required for Moderation:
✅ Manage Messages      # Để purge
✅ Manage Roles         # Để role command
✅ Kick Members         # Cho kick (future)
✅ Ban Members          # Cho ban/unban
✅ Moderate Members     # Cho mute/timeout
✅ View Audit Log       # Để tracking
✅ Send Messages        # Để respond
✅ Embed Links          # Để log embed
```

### Role hierarchy requirements:

```
Bot Role
├── Higher than all manageable roles
├── Lower than Owner/Admin roles
└── Manage permissions properly
```

## 📞 Support và Escalation

### Khi nào cần escalate:

- 🚨 **Major raid attacks**: Báo Admin/Owner ngay
- ⚖️ **Complex disputes**: Cần mediation cao hơn
- 🔍 **Unclear rules**: Clarify với leadership
- 💼 **Staff violations**: Report lên Owner
- 🛠️ **Technical issues**: IT support hoặc bot developer

### Contact hierarchy:

```
🆘 Emergency: @Owner (immediate)
⚠️ Serious: @Administrator (< 1h)
📞 Normal: @Supporter team (< 4h)
💬 General: Public mod channel
```

---

**🛡️ Remember**: Moderation là về protecting community, không phải wielding power. Luôn aim for education và rehabilitation hơn là punishment!
