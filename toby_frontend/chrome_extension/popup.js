document.getElementById("openApp").addEventListener("click", () => {
    chrome.tabs.create({ url: "http://localhost:3002" }); 
  });
  