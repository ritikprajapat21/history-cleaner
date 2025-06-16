import { useState, useEffect } from "react";
import "./App.css";

type Url = {
	url: string;
	strict: boolean;
};

function App() {
	const [url, setUrl] = useState("");
	const [strict, setStrict] = useState(true);
	const [urls, setUrls] = useState<Url[]>([]);
	const [error, setError] = useState("");

	const loadSavedUrls = async () => {
		try {
			const result = await browser.storage.local.get("urlsToDelete");
			if (result.urlsToDelete) {
				setUrls(result.urlsToDelete);
			}
		} catch (error) {
			console.error("Error loading saved URLs:", error);
			setError("Failed to load saved URLs");
		}
	};

	const saveToStorage = async () => {
		try {
			await browser.storage.local.set({ urlsToDelete: urls });
			console.log("Saved URLs to storage successfully");
		} catch (error) {
			console.error("Error saving URLs to storage:", error);
		}
	};

	useEffect(() => {
		loadSavedUrls();
	}, []);

	useEffect(() => {
		saveToStorage();
	}, [urls]);

	const handleDelete = () => {
		browser.runtime.sendMessage(
			{ type: "deleteSavedUrls", urls },
			(response) => {
				console.log(response);
			},
		);
	};

	const handleAdd = () => {
		if (url.trim() === "") {
			setError("Please provide a valid url");
			return;
		}

		setUrls((prev) => [...prev, { url: url.trim(), strict }]);
		setUrl("");
		setStrict(true);
	};

	const handleUrlDelete = (i: number) => {
		setUrls((prev) => {
			const newUrls = [...prev];
			newUrls.splice(i, 1);
			return newUrls;
		});
	};

	return (
		<main className="grid place-items-center gap-4">
			<div className="flex gap-2 w-full">
				<input
					type="text"
					className="border border-gray-300 rounded p-2 flex-1 w-72"
					value={url}
					onKeyDown={(e) => {
						if (e.code === "Enter") {
							handleAdd();
						}
					}}
					onChange={(e) => setUrl(e.target.value)}
				/>
				<select
					onChange={(e) => setStrict(e.target.value === "strict")}
					className="border border-gray-300 rounded p-2"
				>
					<option value="strict">Exact</option>
					<option value="match">Matching</option>
				</select>
				<button onClick={handleAdd}>Add</button>
			</div>
			<p className="text-xs text-red-500">{error}</p>
			{!strict && (
				<p className="text-xs text-red-500">
					This will delete all urls matching the patterns. Please verify first
					in history tab that you are getting the urls that you want to delete.
				</p>
			)}
			{urls.length > 0 && (
				<Viewer
					urls={urls}
					handleUrlDelete={handleUrlDelete}
					handleDelete={handleDelete}
				/>
			)}
		</main>
	);
}

function Viewer({
	urls,
	handleUrlDelete,
	handleDelete,
}: {
	urls: Url[];
	handleUrlDelete: (i: number) => void;
	handleDelete: () => void;
}) {
	return (
		<section className="w-full">
			<div className="space-y-1">
				{urls.map((url, i) => (
					<div key={url.url} className="flex justify-between items-center">
						<li>{url.url}</li>
						<button onClick={() => handleUrlDelete(i)}>Delete</button>
					</div>
				))}
			</div>
			<button onClick={handleDelete}>Delete</button>
		</section>
	);
}

export default App;
