// Fires when a request is about to occur.
// This event is sent before any TCP connection is made.


//  Uncomment to use
window.onload = function(){
//IF popup window is getting blocked add ID from your extension window
    var allowed = ["bing.com/", "google.com/", "dfddlagbijiffckagoijpammjafmfnno"];
  
    chrome.webRequest.onBeforeRequest.addListener(function(details) {
        var isForbidden = allowed.every(function(url) {
            return details.url.indexOf(url) == -1;
        });
        return {cancel: isForbidden}
    }, {urls: ["<all_urls>"]}, ["blocking"]);
  }; 