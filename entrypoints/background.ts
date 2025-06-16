export default defineBackground(() => {
	console.log("Hello background!", { id: browser.runtime.id });
	const deleteUrl = (url: string, strict: boolean) => {
		let pattern = url;
		if (strict) {
			pattern = `^.*${pattern}$`;
		}
		const regex = new RegExp(pattern, "i");
		browser.history
			.search({ text: "", startTime: 0, maxResults: 1000 })
			.then((urls) => {
				console.log("all urls", urls);
				const filteredUrls = urls.filter((url: any) =>
					regex.test(url.url || ""),
				);
				console.log("filteredUrls", filteredUrls);
				filteredUrls.forEach((url: any) => {
					console.log(url.url);
					browser.history
						.deleteUrl({ url: url.url })
						.then(() => console.log("Url deleted"))
						.catch((err) => console.error(err));
				});
			});
	};

	browser.runtime.onMessage.addListener((message, _, sendResponse) => {
		if (message.type === "deleteSavedUrls") {
			message.urls.forEach((url: { url: string; strict: boolean }) => {
				deleteUrl(url.url, url.strict);
			});
			console.log("All URL deletions completed");
			sendResponse({ success: true, message: "URLs deleted successfully" });
			return true;
		}
	});
});
