// background.js

// Listen for new tab creation
chrome.tabs.onCreated.addListener(function(tab) {
    // Redirect the new tab to the home page of your React app
    console.log("Hello World")
    chrome.tabs.update(tab.id, { url: "http://localhost:3002" });
  });

