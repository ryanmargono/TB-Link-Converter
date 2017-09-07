chrome.browserAction.onClicked.addListener(() => {
	chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, tabs => {
		const tab = tabs[0]
		const url = tab.url;
		if (url.includes('m.intl.taobao.com')) {
			let id = '';
			const indexOfId = url.indexOf('id');
			for (i=indexOfId; i<url.length; i++){
				if (url[i] === "&") break;
				else id = id + url[i];
			}
			const newUrl = 'https://item.taobao.com/item.htm?' + id;
			console.log(newUrl)
			chrome.tabs.update(tab.id, {url: newUrl});
		}
		else console.log('Not a Taobao Website')
	});
});
