import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
	modules: ["@wxt-dev/module-react"],
	manifest: {
		permissions: ["history", "storage"],
		name: "Smart History Cleaner",
		short_name: "History Cleaner",
		description:
			"Effortlessly manage and delete your Chrome Browse history with custom regex patterns. Enhance privacy, remove unwanted URLs, and keep your history clean. Supports automatic and selective history cleanup.",
	},
});
