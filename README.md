# 🎮 Discord Booking Bot Documentation

Complete documentation guide for Discord Booking Bot - Professional booking management system for Discord Servers.

## 🌟 Key Features

- 💰 **Cash System** - Secure and transparent virtual currency management
- ⭐ **Player Management** - Automatic salary calculation, star hour management
- 🎫 **Ticket System** - Professional customer support
- 🛍️ **Integrated Shop** - Store with Lucky Box and Marriage System
- 🛡️ **Anti-Raid** - Protect server from raids and spam
- 📊 **Detailed Statistics** - Revenue and activity reports

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

### Access Documentation

- **Local Development:** http://localhost:4321
- **Production:** After build, deploy the `dist/` folder

## 📁 Project Structure

```
docs/
├── src/
│   ├── content/
│   │   └── docs/           # All markdown documentation
│   │       ├── commands/   # Commands documentation by role
│   │       ├── features/   # Advanced features
│   │       ├── user/       # User guides
│   │       └── shop/       # Shop system
│   ├── assets/            # Images, icons
│   └── styles/            # Custom CSS
├── public/                # Static files
└── astro.config.mjs      # Astro/Starlight configuration
```

## 📝 Documentation Content

### 🔰 Getting Started
- [Introduction](/introduction/) - System overview
- [Quick Start](/quick-start/) - Setup in 5 minutes
- [Basic Setup](/basic-setup/) - Detailed configuration

### 👑 System Management
- [Owner Commands](/commands/owner/) - Full configuration control
- [Administrator](/commands/administrator/) - Cash and player management
- [Cash Management](/commands/cash/) - Financial system
- [Supporter](/commands/supporter/) - Booking and support
- [Moderation](/commands/moderation/) - Server control

### ✨ Advanced Features
- [Welcome System](/features/welcome/) - Member welcome
- [Ticket System](/features/ticket/) - Customer support
- [Embed Builder](/features/embed/) - Create beautiful embeds
- [Autoresponder](/features/autoresponder/) - Automatic responses
- [Giveaway](/features/giveaway/) - Event hosting
- [Anti-Raid](/features/anti-raid/) - Server protection

### 👥 Users
- [Player Commands](/user/player/) - For players
- [Customers](/user/customer/) - Usage guide
- [Utility Commands](/user/utilities/) - Useful tools

### 🛍️ Shop System
- [Shop Management](/shop/management/) - Shop admin
- [Marriage System](/shop/marriage/) - In-game marriage
- [Lucky Box](/shop/lucky-box/) - Lucky gift boxes

### 🆘 Support
- [FAQ](/faq/) - Frequently asked questions
- [Troubleshooting](/troubleshooting/) - Issue resolution

## 🎨 Customization

### Change theme colors

Edit `src/styles/custom.css`:

```css
:root {
  --sl-color-accent: #7c3aed;    /* Primary color */
  --sl-color-accent-high: #8b5cf6; /* Hover color */
}
```

### Add new pages

1. Create `.md` file in `src/content/docs/`
2. Add frontmatter:
   ```yaml
   ---
   title: Page Title
   description: Page description
   ---
   ```
3. Update sidebar in `astro.config.mjs`

### Custom components

Use available components:

```mdx
import { Card, CardGrid } from '@astrojs/starlight/components';

<Card title="Feature" icon="star">
  Content here
</Card>
```

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Documentation:** [Starlight](https://starlight.astro.build/)
- **Styling:** Custom CSS + Starlight themes
- **Content:** Markdown + MDX
- **Deployment:** Static site (compatible with Netlify, Vercel, GitHub Pages)

## 📋 VS Code Tasks

- `Ctrl+Shift+P` → `Tasks: Run Task`
- Select `Serve Documentation` to run dev server
- Select `Build Documentation` to build production

## 🚀 Deployment

### Netlify
```bash
npm run build
# Upload dist/ folder
```

### Vercel
```bash
npm run build
# Upload dist/ folder
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## 🤝 Contributing

1. Fork repository
2. Create new branch: `git checkout -b feature/new-docs`
3. Commit changes: `git commit -m 'Add new documentation'`
4. Push: `git push origin feature/new-docs`  
5. Create Pull Request

### Documentation writing guidelines:

- ✅ Use English for main content
- ✅ Code examples in English
- ✅ Add emojis for readability
- ✅ Use callout boxes for important information
- ✅ Screenshots for complex UI

## 📞 Support

- 📖 **Documentation:** This site
- 🐛 **Bug Reports:** GitHub Issues
- 💬 **Discord:** Server support channel
- 📧 **Email:** support@example.com

## 📄 License

MIT License - See [LICENSE](LICENSE) file for more details.

---

**🌟 Made for Discord Booking Community**

Built with Astro and Starlight to provide the best documentation experience!

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
