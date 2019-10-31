
var beforeRequestFlag = false;
browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    beforeRequestFlag = true;
    return {redirectUrl:"https://smile.Amazon.com"};

  }, {
    urls: [
      "*://www.amazon.com/*",
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);

filter  = {
  url: ["*://www.amazon.com/*"]
}
function redirectCompleted(details){
  if (beforeRequestFlag) {
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/api/getUserActivity",
      data: { 
        UUID: UUID,
        EIN:EIN,
        entryType: Config },
      success: function(data){
        console.log("success insert to database userActivity");
      }
    });
  }
  beforeRequestFlag = false;
}
browser.webNavigation.onCompleted.addListener(redirectCompleted, filter);

var EIN = "";
var UUID = "";
var Config = "";
var onMessageListener = function(request, sender, sendResponse){
  EIN = request.EIN;
  UUID = request.UUID;
  Config = request.Config;
 
}

var onTabUpdated = function(tabid, changeinfo, tab){
  var url = tab.url;
  if (url !== undefined && changeinfo.status == "complete"){
    read_cookie();
  }
}
var onExtensionMounted = function (a, b, c) {
  read_cookie();
};

browser.tabs.onActivated.addListener(onExtensionMounted);
browser.tabs.onUpdated.addListener(onTabUpdated);
browser.runtime.onMessage.addListener(onMessageListener);

var read_cookie = function (){
  browser.tabs.query({
    active : true, currentWindow: true
  },
  function (tabs) {
    var tab = tabs[0];
    var url = new URL(tab.url);
    var domain = url.hostname;
    console.log('=================');
    console.log(url.hostname);
    if (url.hostname == "localhost"){
      browser.tabs.executeScript(tab.id,
        { file: "read_cookie.js", allFrames: true }, 
        function () {
        }
      );
    }
  });
};

read_cookie();



