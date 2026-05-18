# Installation Instructions

## For Users

### Method 1: Chrome Web Store (Recommended)
*Coming soon after approval*

### Method 2: Manual Installation (Developer Mode)

1. **Download the extension**
   - Location: `~/.openclaw/workspace/chrome-extensions/smart-tab-manager/`

2. **Open Chrome Extensions**
   - Type `chrome://extensions/` in address bar
   - Or: Menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle switch in top-right corner

4. **Load the Extension**
   - Click "Load unpacked" button
   - Navigate to the `smart-tab-manager` folder
   - Click "Select Folder"

5. **Pin to Toolbar** (Optional)
   - Click puzzle icon in Chrome toolbar
   - Find "Smart Tab Manager"
   - Click pin icon

6. **Done!**
   - Click the 🧠 icon to start
   - Or press `Ctrl+Shift+T` (Mac: `Cmd+Shift+T`)

## For Developers

### Setup
```bash
cd ~/.openclaw/workspace/chrome-extensions/smart-tab-manager
```

### Testing
1. Load unpacked in Chrome (see above)
2. Make changes to files
3. Click reload icon in chrome://extensions/
4. Test changes

### Building for Production
```bash
# Create distribution zip
zip -r smart-tab-manager-v1.0.0.zip . \
  -x "*.git*" \
  -x "*.md" \
  -x "PROJECT_SUMMARY.md" \
  -x "PUBLISHING.md"
```

### File Structure
```
smart-tab-manager/
├── manifest.json          # Extension config
├── background.js          # Service worker
├── popup.html            # Main UI
├── popup.css             # Styles
├── popup.js              # UI logic
├── suspended.html        # Suspended tab page
├── icons/
│   ├── icon16.svg
│   ├── icon48.svg
│   └── icon128.svg
└── docs/
    ├── README.md
    ├── QUICKSTART.md
    ├── PUBLISHING.md
    └── STORE_LISTING.md
```

## Troubleshooting

**Extension won't load?**
- Check all files are present
- Verify manifest.json is valid JSON
- Check Chrome console for errors

**Icons not showing?**
- Convert SVG to PNG if needed
- Ensure icons are in icons/ folder

**Features not working?**
- Check permissions in manifest.json
- Reload extension after changes
- Check browser console (F12)

## Support

Questions? Email: support@smarttabmanager.com
