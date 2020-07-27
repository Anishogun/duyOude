//////////////////////////////////////////////////////////////////////////////////////////////////
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "ENVI",
    title: "Translate '%s' to Vietnamese",
    contexts: ['selection']
  })
})
chrome.contextMenus.onClicked.addListener(function (info) {
  const selectionText = info.selectionText
  const url = `https://translate.google.com/?hl=vi#view=home&op=translate&sl=auto&tl=vi&text=${selectionText}`
  chrome.windows.create({
    url,
    type: 'popup',
    height: 300,
    width: 600,
  })
})
// // // // // // // // // // // // Translate [Test]  // // // // // // // // // // // // // // // 
//////////////////////////////////////////////////////////////////////////////////////////////////
