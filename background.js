const callback = (detail) => {
  return {
    cancel: true,
  };
};



const filter = {
  urls: [
    
    "*://partner.googleadservices.com/*",
    "*://*.adbrite.com/*",
    "*://*.doubleclick.net/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
  ],
};

console.log("hello from background")



window.addEventListener("storage",()=>{

  

  if(localStorage.getItem("checked") ==="true" ){

    console.log("true")
    chrome.webRequest.onBeforeRequest.addListener(callback, filter, ["blocking"]);


  }
    
  else{
    
    chrome.webRequest.onBeforeRequest.removeListener(callback)
    
  }
 
})