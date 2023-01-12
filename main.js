var mainmenu = {
    "id": "Info",
    "title": "Information check",
    "contexts": ["selection"]
};

var othermenu = {
    "id": "Other",
    "title": "Other",
    "contexts": ["selection"]
};

var Eventerror = {
    "id": "Eventerror",
    "title": "Event ID"
    "contexts": ["selection"]
};

var abusemenu = {
    "parentId": "Abuse",
    "id": "IP  Abuse",
    "title": "Reputaional check",
    "contexts": ["selection"]
};

var hashmenu = {
    "parentId": "Abuse",
    "id": "Hash Rep",
    title "Hash Reputation"
    "contexts": ["selection"]
}


chrome.runtime.onInstalled.addListener(()) => {
    chrome.contextMenus.create(mainmenu)
    chrome.contextMenus.create(abusemenu)
    chrome.contextMenus.create(Eventerror)
    chrome.contextMenus.create(othermenu)
    chrome.contextMenus.create(hashmenu)
}

function fixedEncodeURL (str){
    return encodeURI(str).replace('/%5B/g','[').replace('/%5B/g')]');
}


chrome.contextMenus.onClick.addListener(function(contextClick)
{
    if(contextClick.selectText && contextClick.menuItemID == "Hash Rep") {
    var viurstotal = "https://www.virustotal.com/gui/home/url" + fixedEncodeURL(contextClick.selectText);
    chrome.tabs.create({url:viurstotal})
    }
else if(contextClick.selectText && contextClick.menuItemID == "Error Info"){
    var error = "https://login.microsoftonline.com/error?code="/ + fixedEncodeURL(contextClick.selectText);
    chrome.tabs.create({url:error})

}
});

