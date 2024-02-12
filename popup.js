console.log("Popup script loaded");

document.getElementById("saveSettings").addEventListener("click", () => {
  const autoSwipe = document.getElementById("autoSwipe").checked;
  const delayTime = document.getElementById("delayTime").value;
  chrome.storage.local.set({ autoSwipe, delayTime }, () => {
    console.log("Settings saved");
  });
});
