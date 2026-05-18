// Background service worker for Smart Tab Manager
let suspendedTabs = new Set();

// Auto-suspend tabs after 30 minutes of inactivity
const SUSPEND_TIMEOUT = 30 * 60 * 1000;
const tabTimers = new Map();

chrome.tabs.onActivated.addListener(({ tabId }) => {
  clearTimeout(tabTimers.get(tabId));
  tabTimers.delete(tabId);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === 'complete') {
    clearTimeout(tabTimers.get(tabId));
    tabTimers.set(tabId, setTimeout(() => suspendTab(tabId), SUSPEND_TIMEOUT));
  }
});

async function suspendTab(tabId) {
  try {
    const tab = await chrome.tabs.get(tabId);
    if (!tab.active && !tab.pinned && !tab.audible) {
      suspendedTabs.add(tabId);
      await chrome.tabs.update(tabId, { url: `suspended.html?url=${encodeURIComponent(tab.url)}&title=${encodeURIComponent(tab.title)}` });
    }
  } catch (e) {
    // Tab may have been closed
  }
}

// Categorize tabs using simple keyword matching
function categorizeTab(url, title) {
  const categories = {
    'Work': ['docs.google', 'notion', 'slack', 'zoom', 'teams', 'jira', 'github'],
    'Social': ['facebook', 'twitter', 'instagram', 'linkedin', 'reddit'],
    'Shopping': ['amazon', 'ebay', 'aliexpress', 'shop'],
    'Entertainment': ['youtube', 'netflix', 'spotify', 'twitch'],
    'News': ['news', 'bbc', 'cnn', 'medium']
  };
  
  const text = (url + ' ' + title).toLowerCase();
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(kw => text.includes(kw))) return category;
  }
  return 'Other';
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getTabs') {
    chrome.tabs.query({}, (tabs) => {
      const categorized = tabs.map(tab => ({
        ...tab,
        category: categorizeTab(tab.url, tab.title)
      }));
      sendResponse({ tabs: categorized });
    });
    return true;
  }
  
  if (request.action === 'groupByCategory') {
    chrome.tabs.query({}, async (tabs) => {
      const groups = {};
      tabs.forEach(tab => {
        const cat = categorizeTab(tab.url, tab.title);
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(tab.id);
      });
      
      for (const [category, tabIds] of Object.entries(groups)) {
        if (tabIds.length > 1) {
          const groupId = await chrome.tabs.group({ tabIds });
          await chrome.tabGroups.update(groupId, { title: category });
        }
      }
      sendResponse({ success: true });
    });
    return true;
  }
  
  if (request.action === 'saveSession') {
    chrome.tabs.query({}, (tabs) => {
      const session = {
        timestamp: Date.now(),
        tabs: tabs.map(t => ({ url: t.url, title: t.title }))
      };
      chrome.storage.local.get(['sessions'], (result) => {
        const sessions = result.sessions || [];
        sessions.unshift(session);
        chrome.storage.local.set({ sessions: sessions.slice(0, 10) });
        sendResponse({ success: true });
      });
    });
    return true;
  }
});
