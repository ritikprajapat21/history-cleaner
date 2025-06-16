# My Awesome History Cleaner (WXT + React)

## 🚀 Overview

**My Awesome History Cleaner** is a powerful and intuitive Chrome extension designed to help you maintain your Browse privacy and declutter your history. Built with `WXT` and `React.js`, this extension provides advanced tools to automatically or selectively delete specific types of URLs from your Browse history, ensuring a cleaner and more organized digital footprint.

Leveraging the Chrome History API, it empowers users with granular control, allowing them to define patterns (e.g., using regular expressions) for URLs they wish to remove, enhancing privacy and performance.

## ✨ Features

* **Regex-based URL Deletion:** Define custom regular expressions to match and delete specific categories of URLs (e.g., social media feeds, search queries, unwanted domains).
* **Selective History Cleaning:** Manually trigger deletions based on your defined rules or custom criteria.
* **Automated Cleaning:** Automatically cleans up your history in the background.
* **Intuitive User Interface:** A clean and responsive pop-up and options page built with React.js for easy configuration.
* **Persistent Settings:** Your cleaning preferences and rules are saved using `chrome.storage`, so you only set them once.
* **Privacy Focused:** Gives you control over what gets saved and what gets removed from your Browse history.

## 🛠️ Technologies Used

* **[WXT](https://wxt.dev/)**: A powerful framework for building cross-browser extensions, providing a streamlined development experience.
* **[React.js](https://react.dev/)**: A declarative, component-based JavaScript library for building the user interface.
* **Chrome History API (`chrome.history`)**: Used to read, search, and delete Browse history entries.
* **Chrome Storage API (`chrome.storage`)**: Used to persist user settings and cleaning rules locally.

## ⚙️ Installation

To install and run this extension locally:

1.  **Clone the repository:**
    ```bash
    git clone https://[https://github.com/ritikprajapat21/history-cleaner.git](https://github.com/ritikprajapat21/history-cleaner.git)
    cd history-cleaner
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    bun install
    ```
3.  **Build the extension:**
    ```bash
    npm run build
    ```
4.  **Load into Chrome:**
    * Open Chrome and go to `chrome://extensions`.
    * Enable **Developer mode** (usually a toggle in the top-right corner).
    * Click on **Load unpacked**.
    * Navigate to the `dist` folder inside your project directory and select it.
    * The "My Awesome History Cleaner" extension should now appear in your list of extensions.

## 🚀 Usage

1.  **Open the Extension Pop-up:** Click on the extension icon in your Chrome toolbar.
2.  **Access Options Page:** From the pop-up, you can usually find a link or button to open the full options page where you can configure your cleaning rules.
3.  **Define Regex Patterns:** In the options, enter the regular expressions for the URLs you wish to clean. For example:
    * To remove all Google searches: `^https://www\.google\.com/search\?q=.*`
    * To remove all URLs containing "facebook.com": `.*facebook\.com.*`
    * (Remember to escape special characters like `.` with `\.`)
4.  **Trigger Cleaning:** Use the buttons in the pop-up or options page to initiate the cleaning process based on your defined rules.

## 🔒 Permissions

This extension requires the following permissions for its core functionality:

* **`history`**: To access, read, and modify your Browse history (e.g., to delete specific URLs).
* **`storage`**: To store your custom cleaning rules and preferences persistently across browser sessions.

When installing, you will see a warning about these permissions. This is standard for extensions that interact with sensitive browser data like history.
