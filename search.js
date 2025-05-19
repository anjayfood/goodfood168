const siteData = [
  { name: "富達 什錦水果罐", url: "/products/富達什錦水果罐.html", tags: ["富達", "罐頭", "水果罐", "什錦", "水果"] },
  { name: "富達 椰漿", url: "/products/富達椰漿.html", tags: ["富達", "椰漿", "罐頭"] },
  { name: "富達 特甜玉米粒", url: "/products/富達特甜玉米粒.html", tags: ["富達", "玉米粒", "玉米", "特甜", "罐頭"] },
  { name: "富達 甜玉米醬", url: "/products/富達甜玉米醬.html", tags: ["富達", "玉米醬", "玉米", "甜玉米", "罐頭"] },
  { name: "富達 鳳梨片", url: "/products/富達 鳳梨片.html", tags: ["富達", "鳳梨片", "鳳梨", "罐頭"] },
  { name: "富達 糖水鳳梨角", url: "/products/富達糖水鳳梨角.html", tags: ["富達", "鳳梨角", "鳳梨", "糖水", "罐頭"] },
  { name: "富達 迷你鳳梨片", url: "/products/富達迷你鳳梨片.html", tags: ["富達", "迷你", "鳳梨片", "鳳梨", "罐頭"] },
  { name: "富達 紅毛丹夾鳳梨", url: "/products/富達紅毛丹夾鳳梨.html", tags: ["富達", "紅毛丹", "鳳梨", "罐頭"] },
  { name: "Christine 糖水鳳梨角", url: "/products/Christine糖水鳳梨角.html", tags: ["Christine", "鳳梨角", "鳳梨", "糖水", "罐頭"] },
  { name: "巨人 迷你鳳梨片", url: "/products/巨人迷你鳳梨片.html", tags: ["巨人", "迷你", "鳳梨片", "鳳梨", "罐頭"] },
  { name: "巨人 調製奶水", url: "/products/巨人調製奶水.html", tags: ["巨人", "奶水", "調製奶水", "乳製品"] },
  { name: "DAVIA 切碎番茄罐", url: "/products/DAVIA切碎番茄罐.html", tags: ["DAVIA", "番茄罐", "番茄", "罐頭"] },
  { name: "三花調製奶水", url: "/products/三花調製奶水.html", tags: ["三花", "奶水", "調製奶水", "乳製品"] },
  { name: "綠巨人 玉米粒", url: "/products/綠巨人玉米粒.html", tags: ["綠巨人", "玉米粒", "玉米", "罐頭"] },
  { name: "綠巨人 玉米醬", url: "/products/綠巨人玉米醬.html", tags: ["綠巨人", "玉米醬", "玉米", "罐頭"] },
  // 以後有新商品，加上 tags 也照這格式
];

// 通用搜尋函式（name/tag模糊搜尋）
function setupSiteSearch(inputId, resultId) {
  const input = document.getElementById(inputId);
  const resultBox = document.getElementById(resultId);

  if (!input || !resultBox) return;

  let result = [];

  input.addEventListener('input', function() {
    const keyword = input.value.trim().toLowerCase();
    if (!keyword) {
      resultBox.innerHTML = '';
      resultBox.style.display = 'none';
      return;
    }
    result = siteData.filter(item => {
      // 比對商品名稱或 tag
      if (item.name.toLowerCase().includes(keyword)) return true;
      if (item.tags && item.tags.some(tag => tag.toLowerCase().includes(keyword))) return true;
      return false;
    });
    if (result.length === 0) {
      resultBox.innerHTML = '<div class="no-result">查無結果</div>';
      resultBox.style.display = 'block';
      return;
    }
    resultBox.innerHTML = result.map(item =>
      `<a href="${item.url}">${item.name}</a>`
    ).join('');
    resultBox.style.display = 'block';
  });

  // Enter 鍵自動跳轉第一個結果
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      if (result.length > 0) {
        window.location.href = result[0].url;
      }
    }
  });

  // 搜尋按鈕自動跳轉第一個結果
  const searchBtn = input.parentElement.querySelector('.nav-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      if (result.length > 0) {
        window.location.href = result[0].url;
      }
    });
  }

  // 點搜尋框外收起
  document.addEventListener('click', function(e) {
    if (!resultBox.contains(e.target) && e.target !== input) {
      resultBox.style.display = 'none';
    }
  });
  resultBox.addEventListener('click', function(e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      resultBox.style.display = 'none';
    }
  });
}

// 初始化（桌機+手機）
window.addEventListener('DOMContentLoaded', function() {
  setupSiteSearch('site-search-input', 'search-results');
  setupSiteSearch('mobile-search-input', 'mobile-search-results');
});
