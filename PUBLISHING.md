# Publishing Checklist

## Pre-Publishing Steps

### 1. Icon Preparation
- [ ] Convert SVG icons to PNG (use online tool if ImageMagick unavailable)
  - Visit: https://cloudconvert.com/svg-to-png
  - Upload: icons/icon16.svg, icon48.svg, icon128.svg
  - Download and replace in icons/ folder

### 2. Testing Checklist
- [ ] Load extension in Chrome (chrome://extensions/)
- [ ] Test popup opens correctly
- [ ] Test tab search functionality
- [ ] Test "Auto Group" button
- [ ] Test "Save Session" button
- [ ] Verify no console errors
- [ ] Test on 20+ tabs

### 3. Store Assets Needed

#### Required Images
1. **Icon 128x128** - Already created (icons/icon128.png)
2. **Promotional Tile 440x280** - Create marketing image
3. **Screenshots** (1280x800 or 640x400):
   - Screenshot 1: Popup with tab list
   - Screenshot 2: Grouped tabs in action
   - Screenshot 3: Search functionality
   - Screenshot 4: Suspended tab page

#### Store Listing Text
- **Title**: Smart Tab Manager - AI Productivity
- **Summary**: Organize chaos into clarity with AI-powered tab management
- **Description**: See STORE_LISTING.md

### 4. Chrome Web Store Account
- [ ] Create developer account ($5 fee)
- [ ] Verify email
- [ ] Set up payment method (for paid features)

### 5. Package Extension
```bash
cd ~/.openclaw/workspace/chrome-extensions/smart-tab-manager
zip -r smart-tab-manager.zip . -x "*.git*" -x "README.md" -x "PUBLISHING.md"
```

### 6. Submit
1. Go to: https://chrome.google.com/webstore/devconsole
2. Click "New Item"
3. Upload smart-tab-manager.zip
4. Fill in all required fields
5. Upload screenshots and promotional images
6. Set category: Productivity
7. Submit for review

## Post-Publishing

### Marketing
- [ ] Create landing page
- [ ] Set up payment processing (Stripe/Paddle)
- [ ] Create Twitter account
- [ ] Post on Product Hunt
- [ ] Share on Reddit (r/chrome, r/productivity)
- [ ] Create demo video

### Monetization Setup
- [ ] Implement license key validation
- [ ] Set up Stripe/Paddle integration
- [ ] Create upgrade flow in extension
- [ ] Add analytics (Google Analytics)

## Timeline
- **Day 1**: Icon conversion, final testing
- **Day 2**: Create store assets (screenshots, promo images)
- **Day 3**: Submit to Chrome Web Store
- **Day 4-7**: Wait for review approval
- **Day 8+**: Marketing and user acquisition

## Support Resources
- Chrome Web Store Developer Dashboard: https://chrome.google.com/webstore/devconsole
- Publishing Guide: https://developer.chrome.com/docs/webstore/publish/
- Best Practices: https://developer.chrome.com/docs/webstore/best_practices/
