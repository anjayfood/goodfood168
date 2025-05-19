const siteData = [
    // 罐頭類
  { name: "富達 什錦水果罐", url: "/products/富達什錦水果罐.html", tags: ["富達", "罐頭", "水果罐", "什錦", "水果","FUDA","FU","fu"] },
  { name: "富達 椰漿", url: "/products/富達椰漿.html", tags: ["富達", "椰漿", "罐頭","FUDA","FU","fu"] },
  { name: "富達 特甜玉米粒", url: "/products/富達特甜玉米粒.html", tags: ["富達", "玉米粒", "玉米", "特甜", "罐頭","FUDA","FU","fu"] },
  { name: "富達 甜玉米醬", url: "/products/富達甜玉米醬.html", tags: ["富達", "玉米醬", "玉米", "甜玉米", "罐頭","FUDA","FU","fu"] },
  { name: "富達 鳳梨片", url: "/products/富達鳳梨片.html", tags: ["富達", "鳳梨片", "鳳梨", "罐頭","FUDA","FU","fu"] },
  { name: "富達 糖水鳳梨角", url: "/products/富達糖水鳳梨角.html", tags: ["富達", "鳳梨角", "鳳梨", "糖水", "罐頭","FUDA","FU","fu"] },
  { name: "富達 迷你鳳梨片", url: "/products/富達迷你鳳梨片.html", tags: ["富達", "迷你", "鳳梨片", "鳳梨", "罐頭","FUDA","FU","fu"] },
  { name: "富達 紅毛丹夾鳳梨", url: "/products/富達紅毛丹夾鳳梨.html", tags: ["富達", "紅毛丹", "鳳梨", "罐頭","FUDA","FU","fu"] },
  { name: "Christine 糖水鳳梨角", url: "/products/Christine糖水鳳梨角.html", tags: ["Christine", "鳳梨角", "鳳梨", "糖水", "罐頭", "克莉絲汀", "ch", "CH"] },
  { name: "巨人 迷你鳳梨片", url: "/products/巨人迷你鳳梨片.html", tags: ["巨人", "迷你", "鳳梨片", "鳳梨", "罐頭","giant"] },
  { name: "巨人 調製奶水", url: "/products/巨人調製奶水.html", tags: ["巨人", "奶水", "調製奶水", "乳製品","giant"] },
  { name: "DAVIA 切碎番茄罐", url: "/products/DAVIA切碎番茄罐.html", tags: ["DAVIA", "番茄罐", "番茄", "罐頭", "蕃茄罐", "蕃茄"] },
  { name: "三花調製奶水", url: "/products/三花調製奶水.html", tags: ["三花", "奶水", "調製奶水", "乳製品"] },
  { name: "綠巨人 玉米粒", url: "/products/綠巨人玉米粒.html", tags: ["綠巨人", "玉米粒", "玉米", "罐頭","巨人","greengiant"] },
  { name: "綠巨人 玉米醬", url: "/products/綠巨人玉米醬.html", tags: ["綠巨人", "玉米醬", "玉米", "罐頭","巨人","greengiant"] },
    // 堅果/果乾類
  { name: "腰果粒", url: "/products/腰果粒.html", tags: ["腰果", "堅果"] },
  { name: "腰果片", url: "/products/腰果片.html", tags: ["腰果", "堅果"] },
  { name: "西瓜子仁", url: "/products/西瓜子仁.html", tags: ["西瓜子", "種子", "堅果"] },
  { name: "南瓜子仁", url: "/products/南瓜子仁.html", tags: ["南瓜子", "種子", "堅果"] },
  { name: "翠綠開心果仁", url: "/products/翠綠開心果仁.html", tags: ["開心果", "堅果"] },
  { name: "葵花子", url: "/products/葵花子.html", tags: ["葵花子", "種子", "堅果", "瓜子仁"] },
  { name: "去皮榛果粒", url: "/products/去皮榛果粒.html", tags: ["榛果", "堅果", "去皮"] },
  { name: "去皮榛果粉", url: "/products/去皮臻果粉.html", tags: ["榛果", "堅果", "粉", "去皮"] },
  { name: "帶皮榛果粒", url: "/products/帶皮臻果粒.html", tags: ["榛果", "堅果", "帶皮"] },
  { name: "金黃杏桃乾", url: "/products/金黃杏桃乾.html", tags: ["杏桃", "果乾", "乾果", "金黃"] },
  { name: "土耳其無花果乾", url: "/products/truckish-dried-figs.html", tags: ["無花果", "果乾", "土耳其"] },
  { name: "伊朗無花果乾", url: "/products/伊朗無花果乾.html", tags: ["無花果", "果乾", "伊朗"] },
  { name: "青提子", url: "/products/青提子.html", tags: ["提子", "葡萄乾", "果乾"] },
  { name: "有籽椰棗", url: "/products/有籽椰棗.html", tags: ["椰棗", "果乾"] },
  { name: "台灣龍眼肉", url: "/products/台灣龍眼肉.html", tags: ["龍眼", "果乾", "台灣"] },
  { name: "進口龍眼肉", url: "/products/進口龍眼肉.html", tags: ["龍眼", "果乾", "進口"] },
  // 義大利麵系列
  { name: "Ankara直麵", url: "/products/Ankara直麵.html", tags: ["Ankara", "義大利麵", "直麵", "麵條", "麵", "an", "安卡蘿"] },
  { name: "Ankara筆管麵", url: "/products/Ankara筆管麵.html", tags: ["Ankara", "義大利麵", "筆管麵", "麵條", "麵", "an", "安卡蘿"] },
  { name: "Ankara蝴蝶麵", url: "/products/Ankara蝴蝶麵.html", tags: ["Ankara", "義大利麵", "蝴蝶麵", "麵條", "麵", "an", "安卡蘿"] },
  { name: "Ankara螺旋麵", url: "/products/Ankara螺旋麵.html", tags: ["Ankara", "義大利麵", "螺旋麵", "麵條", "麵", "an", "安卡蘿"] },
  { name: "Ankara貝殼麵", url: "/products/Ankara貝殼麵.html", tags: ["Ankara", "義大利麵", "貝殼麵", "麵條", "麵", "an", "安卡蘿"] },
  { name: "Ankara彎管麵", url: "/products/Ankara彎管麵.html", tags: ["Ankara", "義大利麵", "彎管麵", "通心麵", "麵條", "麵", "an", "安卡蘿"] },
  { name: "Ankara螺旋蔬菜麵", url: "/products/Ankara螺旋蔬菜麵.html", tags: ["Ankara", "義大利麵", "螺旋麵", "蔬菜麵", "麵條", "麵","an", "安卡蘿"] },
  { name: "Ankara卡通蔬菜麵", url: "/products/Ankara卡通蔬菜麵.html", tags: ["Ankara", "義大利麵", "蔬菜麵", "卡通", "麵條", "麵", "an", "安卡蘿"] },
  { name: "Christine直麵", url: "/products/Christine直麵.html", tags: ["Christine", "義大利麵", "直麵", "麵條", "麵", "克莉絲汀", "CH"] },
  { name: "VIVOLA筆尖麵", url: "/products/VIVOLA筆尖麵.html", tags: ["VIVOLA", "義大利麵", "筆尖麵", "麵條", "麵", "VI"] },
  { name: "VIVOLA螺旋麵", url: "/products/VIVOLA螺旋麵.html", tags: ["VIVOLA", "義大利麵", "螺旋麵", "麵條", "麵", "VI"] },
  { name: "VIVOLA通心麵", url: "/products/VIVOLA通心麵.html", tags: ["VIVOLA", "義大利麵", "通心麵", "彎管麵", "麵條", "麵", "VI"] },
  // 醬料、糖漿、調味/罐頭
  { name: "龍眼蜂蜜調味糖漿", url: "/products/龍眼蜂蜜調味糖漿.html", tags: ["龍眼", "蜂蜜", "糖漿", "調味"] },
  { name: "富達 檸檬汁", url: "/products/富達-檸檬汁.html", tags: ["富達", "檸檬汁", "飲品", "果汁","FUDA","FU"] },
  { name: "富達 泰式甜辣醬", url: "/products/富達-泰式甜辣醬.html", tags: ["富達", "泰式", "甜辣醬", "醬料","FUDA","FU"] },
  { name: "香草精", url: "/products/香草精.html", tags: ["香草", "香草精", "調味"] },
  { name: "烏鶖煉乳", url: "/products/烏鶖煉乳.html", tags: ["烏鶖", "煉乳", "乳製品","U CHIOU"] },
  { name: "仰南 石榴糖漿", url: "/products/仰南-石榴糖漿.html", tags: ["仰南", "石榴", "糖漿", "調味"] },
  { name: "仰南 萊姆糖漿", url: "/products/仰南-萊姆糖漿.html", tags: ["仰南", "萊姆", "糖漿", "調味"] },
  { name: "仰南 杏仁露", url: "/products/仰南-杏仁露.html", tags: ["仰南", "杏仁", "杏仁露", "飲品"] },
  { name: "紅花牌 檸檬果露", url: "/products/紅花牌-檸檬果露.html", tags: ["紅花牌", "檸檬", "果露", "飲品"] },
  { name: "Hershey's 巧克力醬", url: "/products/Hersheys-巧克力醬.html", tags: ["Hersheys", "巧克力醬", "巧克力", "醬料"] },
  { name: "青蓋咖哩粉", url: "/products/青蓋咖哩粉.html", tags: ["咖哩粉", "青蓋", "調味粉"] },
  { name: "日本海苔粉(細)", url: "/products/日本海苔粉細.html", tags: ["日本", "海苔粉", "海苔", "調味粉"] },
  // 乳製品/烘焙
  { name: "Christine 乳酪絲(單色)", url: "/products/Christine-乳酪絲單色.html", tags: ["Christine", "乳酪絲", "乳酪", "乳製品", "起司", "克莉絲汀",] },
  { name: "Christine 乳酪絲(雙色)", url: "/products/Christine-乳酪絲雙色.html", tags: ["Christine", "乳酪絲", "乳酪", "乳製品", "起司", "克莉絲汀",] },
  { name: "安佳磅裝奶油塊 (有鹽)", url: "/products/安佳磅裝奶油塊-有鹽.html", tags: ["安佳", "奶油", "奶油塊", "乳製品", "有鹽"] },
  { name: "安佳磅裝奶油塊 (無鹽)", url: "/products/安佳磅裝奶油塊-無鹽.html", tags: ["安佳", "奶油", "奶油塊", "乳製品", "無鹽"] },
  { name: "安佳84片起司", url: "/products/安佳84片起司.html", tags: ["安佳", "起司", "乳製品"] },
  { name: "鳥牌吉士粉", url: "/products/鳥牌吉士粉.html", tags: ["三鳥牌", "吉士粉", "烘焙原料", "烘焙"] },
  { name: "燕子牌 低糖酵母(紅)", url: "/products/燕子牌低糖酵母紅.html", tags: ["燕子牌", "酵母", "低糖", "烘焙原料", "烘焙"] },
  { name: "燕子牌 高糖酵母(金)", url: "/products/燕子牌高糖酵母金.html", tags: ["燕子牌", "酵母", "高糖", "烘焙原料", "烘焙"] },
  { name: "BBA改良酵母粉", url: "/products/BBA改良酵母粉.html", tags: ["BBA", "改良酵母粉", "酵母", "烘焙原料", "烘焙"] },
  { name: "香草粉", url: "/products/香草粉.html", tags: ["香草", "香草粉", "烘焙原料"] },
  { name: "三菱SP乳化劑", url: "/products/三菱SP乳化劑.html", tags: ["三菱", "乳化劑", "烘焙原料", "SP", "烘焙"] },
  { name: "戰艦玉米粉", url: "/products/戰艦玉米粉.html", tags: ["戰艦", "玉米粉", "烘焙原料", "玉米", "烘焙"] },
  { name: "軍艦玉米粉", url: "/products/軍艦玉米粉.html", tags: ["軍艦", "玉米粉", "烘焙原料", "玉米", "烘焙"] },
  { name: "吉利丁片", url: "/products/吉利丁片.html", tags: ["吉利丁片", "烘焙原料","吉利","明膠", "烘焙"] },
  { name: "吉利丁粉", url: "/products/吉利丁粉.html", tags: ["吉利丁粉", "烘焙原料","吉利","明膠", "烘焙"] },
  { name: "吉利T果凍粉", url: "/products/吉利T果凍粉.html", tags: ["吉利T", "果凍粉", "烘焙原料","吉利", "烘焙"] },
  { name: "白明膠粉", url: "/products/白明膠粉.html", tags: ["白明膠粉", "烘焙原料","明膠", "烘焙"] },
  { name: "月光牌無鋁泡打粉", url: "/products/月光牌無鋁泡打粉.html", tags: ["月光牌", "泡打粉", "烘焙原料", "烘焙"] },
  { name: "五彩米", url: "/products/五彩米.html", tags: ["五彩米", "米","巧克力"] },
  { name: "一色米", url: "/products/一色米.html", tags: ["一色米", "米","巧克力"] },
];

function setupSiteSearch(inputId, resultId) {
  const input = document.getElementById(inputId);
  const resultBox = document.getElementById(resultId);
  if (!input || !resultBox) return;
  let result = [];

  // 搜尋輸入
  input.addEventListener('input', function() {
    const keyword = input.value.trim().toLowerCase();
    if (!keyword) {
      resultBox.innerHTML = '';
      resultBox.style.display = 'none';
      return;
    }
    result = siteData.filter(item =>
      item.name.toLowerCase().includes(keyword) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(keyword)))
    );
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

  // 按下 Enter 跳轉
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && result.length > 0) {
      window.location.href = result[0].url;
    }
  });

  // 搜尋按鈕（桌機/手機）直接跳轉
  const searchBtn = input.parentElement.querySelector('.nav-search-btn, .mobile-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      if (result.length > 0) {
        window.location.href = result[0].url;
      }
    });
  }

  // 點選搜尋結果 a 直接跳轉，且不會提前收起
  resultBox.addEventListener('mousedown', function(e) {
    // 只要是 a 就直接導頁，不要讓外部的 mousedown 先把它收掉
    if (e.target.tagName.toLowerCase() === 'a') {
      window.location.href = e.target.href;
    }
  });

  // 點到 input 以外才收起選單
  document.addEventListener('mousedown', function(e) {
    if (!resultBox.contains(e.target) && e.target !== input) {
      resultBox.style.display = 'none';
    }
  });
}
window.addEventListener('DOMContentLoaded', function() {
  setupSiteSearch('site-search-input', 'search-results');
  setupSiteSearch('mobile-search-input', 'mobile-search-results');
});