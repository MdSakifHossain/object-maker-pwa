export const setIosStatusBar = theme_color => {
	const existingIosStatusBar = document.querySelector(
		`meta[name="apple-mobile-web-app-status-bar-style"]`
	);
	// Check if meta tag exists
	if (existingIosStatusBar) {
		// Meta tag exists, update content
		existingIosStatusBar.content = theme_color;
	} else {
		// Meta tag doesn't exist, create and add
		const newIosStatusBarMetaTag = document.createElement("meta");
		newIosStatusBarMetaTag.name = "apple-mobile-web-app-status-bar-style";
		newIosStatusBarMetaTag.content = theme_color;
		document.head.appendChild(newIosStatusBarMetaTag);
	}
};
