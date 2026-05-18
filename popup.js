// Popup UI logic
let allTabs = [];

document.addEventListener('DOMContentLoaded', async () => {
  await loadTabs();
  setupEventListeners();
});

async function loadTabs() {
  chrome.runtime.sendMessage({ action: 'getTabs' }, (response) => {
    allTabs = response.tabs;
    displayTabs(allTabs);
    updateStats();
  });
}

function displayTabs(tabs) {
  const tabList = document.getElementById('tabList');
  tabList.innerHTML = '';
  
  tabs.forEach(tab => {
    const item = document.createElement('div');
    item.className = 'tab-item';
    item.innerHTML = `
      <img class="tab-icon" src="${tab.favIconUrl || 'icons/icon16.png'}" onerror="this.src='icons/icon16.png'">
      <div class="tab-info">
        <div class="tab-title">${escapeHtml(tab.title)}</div>
        <div class="tab-url">${escapeHtml(new URL(tab.url).hostname)}</div>
      </div>
      <span class="tab-category">${tab.category}</span>
    `;
    item.onclick = () => chrome.tabs.update(tab.id, { active: true });
    tabList.appendChild(item);
  });
}

function updateStats() {
  document.getElementById('tabCount').textContent = `${allTabs.length} tabs`;
}

function setupEventListeners() {
  document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = allTabs.filter(tab => 
      tab.title.toLowerCase().includes(query) || 
      tab.url.toLowerCase().includes(query)
    );
    displayTabs(filtered);
  });

  document.getElementById('groupBtn').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'groupByCategory' }, () => {
      showNotification('✅ Tabs grouped by category!');
    });
  });

  document.getElementById('saveBtn').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'saveSession' }, () => {
      showNotification('💾 Session saved!');
    });
  });

  document.getElementById('upgradeLink').addEventListener('click', (e) => {
    e.preventDefault();
    chrome.tabs.create({ url: 'https://your-payment-page.com' });
  });
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = 'position:fixed;top:10px;right:10px;background:#4caf50;color:white;padding:12px 20px;border-radius:6px;z-index:1000;';
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 2000);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
