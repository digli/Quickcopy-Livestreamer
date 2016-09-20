function copyCommand(info,tab) {
	// Need textarea element to be able to select and copy to clipboard
	var e = document.createElement("textarea");
	e.innerHTML = "livestreamer " + info.linkUrl + " best";
	document.body.appendChild(e);
	e.select();
	document.execCommand("copy");
	document.body.removeChild(e);
}

chrome.contextMenus.create({
	title: "Copy Livestreamer Command", 
	contexts: ["link"], 
	onclick: copyCommand,
});