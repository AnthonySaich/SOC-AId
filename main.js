
var Information = { //creation of the information tab
    "id": "Info",
    "title": "alienvault intelligcne  checker", //makes the title of the menu
    "contexts": ['selection']
};

var EventError = {//creation of the event errors
    "id": "EventError",
    "title": "Microsoft Event IDs and error Code",//makes the title of the menu
    "contexts": ['selection']
};
var Abusemenu = {//creation of the Abusemenu
    "id": "Abuse",
    "title": "IP and hash checker", //makes the title of the menu
    "contexts": ['selection']
};
var IPAbuse = {//creation of the IPAbubse
	"parentId": "Abuse", // sub section of the the ID Abuse folder 
    "id": "IP Abuse",
    "title": "IP Reputation",//makes the title of the menu
    "contexts": ['selection']
};

var Hashmenu = {
	"parentId": "Abuse",// sub section of the the ID Abuse folder 
    "id": "Hash Rep",
    "title": "Hash Reputation", //makes the title of the menu
    "contexts": ['selection']
};
var Domainabuse = {
	"parentId": "Abuse", //sub section of the the ID Abuse folder
    "id": "Domain Abuse",
    "title": "Domain Reputation",//makes the title of the menu
    "contexts": ['selection']
};
var Domaininfo = {
	"parentId": "Info",// sub section of the the ID Info folder 
    "id": "Domain Info",
    "title": "Domain Info",//makes the title of the menu
    "contexts": ['selection']
};


var Errorinfo = {
	"parentId": "EventError",// sub section of the the ID Error Info  folder 
    "id": "Error Info",
    "title": "Microsoft Error Info",//makes the title of the menu
    "contexts": ['selection']
};


var Eventinfo = {
	"parentId": "EventError",// sub section of the the ID Error Info  folder 
    "id": "Event Info",
    "title": "Windows Security Log Events ID Info",//makes the title of the menu
    "contexts": ['selection']
};



chrome.runtime.onInstalled.addListener(() => { //this creates the menus in chrome
	chrome.contextMenus.create(Abusemenu)
	chrome.contextMenus.create(Information)
	chrome.contextMenus.create(EventError)
	chrome.contextMenus.create(IPAbuse)
	chrome.contextMenus.create(Hashmenu)
	chrome.contextMenus.create(Domaininfo)
	chrome.contextMenus.create(Errorinfo)
	chrome.contextMenus.create(Eventinfo)	
});

function fixedEncodeURI (str) { //function too add the  highlighted  data to the string ill be honest not sure how it works i "borrorwed" the code
    return encodeURI(str).replace('/%5B/g', '[').replace('/%5D/g', ']');
}

chrome.contextMenus.onClicked.addListener(function(contextClick) {
	
	if (contextClick.selectionText && contextClick.menuItemId == "IP Abuse") {
		var VirusTotal = "https://www.virustotal.com/gui/search/" + fixedEncodeURI(contextClick.selectionText);
		var abuseipdb = "https://www.abuseipdb.com/check/" + fixedEncodeURI(contextClick.selectionText);
		chrome.tabs.create({url:VirusTotal});
		chrome.tabs.create({url:abuseipdb}); //creates the tab with the highlighted  data
    }

	else if (contextClick.selectionText && contextClick.menuItemId == "Hash Rep") {
        var VirusTotal = "https://www.virustotal.com/gui/search/" + fixedEncodeURI(contextClick.selectionText);
        chrome.tabs.create({url:VirusTotal});//creates the tab with the highlighted  data
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "Domain Abuse") {
        var VirusTotal = "https://www.virustotal.com/gui/search/" + fixedEncodeURI(contextClick.selectionText);
		var abuseipdb = "https://www.abuseipdb.com/check/" + fixedEncodeURI(contextClick.selectionText);
        chrome.tabs.create({url:VirusTotal});
		chrome.tabs.create({url:abuseipdb});//creates the tab with the highlighted  data
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "Domain Info") {
		var alienvault = "https://otx.alienvault.com/indicator/domain/"  + fixedEncodeURI(contextClick.selectionText);
		chrome.tabs.create({url:alienvault});//creates the tab with the highlighted  data
    }
	
    else if (contextClick.selectionText && contextClick.menuItemId == "Error Info") {
        var Error = "https://login.microsoftonline.com/error?code=" + fixedEncodeURI(contextClick.selectionText);
        chrome.tabs.create({url:Error});//creates the tab with the highlighted  data
    }
	else if (contextClick.selectionText && contextClick.menuItemId == "Event Info") {
        var EventID = "https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventid=" + fixedEncodeURI(contextClick.selectionText);
        chrome.tabs.create({url:EventID});//creates the tab with the highlighted  data
    }
	
});
