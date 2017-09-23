var host = 'http://kensraspberry.com:8089/'
var bkg = chrome.extension.getBackgroundPage();
bkg.lang = 'CN'

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      var redirectUrl = host + details.url.match(/^https?:\/\/static.hbonordic.com\/([\S]*)\//)[1] + '/SUB-' + bkg.lang  + '.xml';
      bkg.console.log('momsubtitle: redirect to: ' + redirectUrl)
      return {redirectUrl};
    },
    {
      urls: [
         "https://static.hbonordic.com/*/HBON-*-000-SUB-01-01-XML-*.xml",
        //https://static.hbonordic.com/abc-efg/HBON-kkk-000-SUB-01-01-XML-CN.xml 
      ],
      types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);