# Smart Tab Manager - AI Productivity Extension

🧠 **AI-powered tab organization and memory optimization for Chrome**

## Features

### Core Features (Free)
- 🔍 **Quick Tab Search** - Find any tab instantly with fuzzy search
- 📁 **Auto-Categorization** - AI categorizes tabs (Work, Social, Shopping, etc.)
- 💾 **Session Management** - Save and restore tab sessions
- 🎯 **One-Click Grouping** - Organize tabs into colored groups by category

### Premium Features
- ⚡ **Auto-Suspend Inactive Tabs** - Save memory by suspending tabs after 30min
- 🤖 **Advanced AI Categorization** - Custom categories and smart rules
- ☁️ **Cloud Sync** - Access sessions across devices
- 📊 **Analytics Dashboard** - Track browsing patterns

## Installation

### From Source (Development)
1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (top right)
4. Click "Load unpacked"
5. Select the `smart-tab-manager` folder

### From Chrome Web Store
Coming soon! (After review approval)

## Usage

### Quick Start
1. Click the extension icon (or press `Ctrl+Shift+T` / `Cmd+Shift+T`)
2. Search for tabs using the search box
3. Click "📁 Auto Group" to organize tabs by category
4. Click "💾 Save Session" to save current tabs

### Keyboard Shortcuts
- `Ctrl+Shift+T` (Mac: `Cmd+Shift+T`) - Open popup

### Categories
Tabs are automatically categorized into:
- **Work**: Google Docs, Notion, Slack, Zoom, GitHub, Jira
- **Social**: Facebook, Twitter, Instagram, LinkedIn, Reddit
- **Shopping**: Amazon, eBay, AliExpress
- **Entertainment**: YouTube, Netflix, Spotify, Twitch
- **News**: News sites, Medium, BBC, CNN
- **Other**: Everything else

## Monetization Strategy

### Freemium Model
- **Free Tier**: Basic features (search, categorization, grouping)
- **Pro Tier** ($4.99/month or $39.99/year):
  - Auto-suspend inactive tabs
  - Unlimited saved sessions (free: 10 max)
  - Cloud sync across devices
  - Custom categories
  - Priority support

### Revenue Projections
- Target: 10,000 users in first 6 months
- Conversion rate: 5% to paid (500 paid users)
- Monthly revenue: $2,495
- Annual revenue: ~$30,000

## Technical Stack

- **Manifest V3** - Latest Chrome extension standard
- **Vanilla JavaScript** - No dependencies, fast and lightweight
- **Chrome APIs**: tabs, storage, tabGroups
- **Size**: < 50KB total

## File Structure

```
smart-tab-manager/
├── manifest.json       # Extension configuration
├── background.js       # Service worker (tab management logic)
├── popup.html         # Main UI
├── popup.css          # Styling
├── popup.js           # UI logic
├── suspended.html     # Suspended tab page
├── icons/             # Extension icons
└── README.md          # This file
```

## Publishing to Chrome Web Store

### Prerequisites
1. Create a [Chrome Web Store Developer account](https://chrome.google.com/webstore/devconsole) ($5 one-time fee)
2. Prepare promotional images:
   - Small icon: 128x128px
   - Large icon: 440x280px
   - Screenshots: 1280x800px or 640x400px (3-5 images)

### Steps
1. Zip the extension folder (exclude README.md)
2. Go to Chrome Web Store Developer Dashboard
3. Click "New Item" and upload the zip
4. Fill in:
   - Description (detailed feature list)
   - Category: Productivity
   - Language: English (+ others)
   - Pricing: Free with in-app purchases
5. Add screenshots and promotional images
6. Submit for review (typically 1-3 days)

### Store Listing Tips
- **Title**: "Smart Tab Manager - AI Productivity Booster"
- **Short description**: "Organize chaos into clarity. AI-powered tab management, memory optimization, and productivity tools."
- **Keywords**: tab manager, productivity, AI, memory saver, tab organizer

## Development

### Testing
1. Load extension in Chrome
2. Open multiple tabs across different categories
3. Test search functionality
4. Test auto-grouping
5. Test session save/restore

### Future Enhancements
- [ ] Tab deduplication
- [ ] Keyboard navigation
- [ ] Dark mode
- [ ] Export/import sessions
- [ ] Tab history timeline
- [ ] Integration with task managers

## Privacy & Permissions

### Required Permissions
- `tabs` - Read and manage tabs
- `storage` - Save sessions and settings
- `tabGroups` - Create and manage tab groups

### Data Policy
- All data stored locally (Chrome storage)
- No data sent to external servers (free tier)
- Pro tier: Optional cloud sync with encryption

## Support

- Email: support@smarttabmanager.com
- Issues: GitHub Issues (if open source)
- Twitter: @SmartTabManager

## License

Proprietary - All rights reserved

## Credits

Created with ❤️ for productivity enthusiasts

---

**Ready to publish!** Follow the publishing steps above to get on Chrome Web Store.
