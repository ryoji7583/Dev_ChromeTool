window.onload = function() {
chrome.tabs.getSelected(null, function(tab) {
document.getElementById('url').innerHTML = tab.url;
});
};