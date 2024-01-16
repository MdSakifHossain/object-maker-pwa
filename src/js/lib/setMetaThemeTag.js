export const setMetaThemeTag = (themeColor = `#ffffff`) => {
	const existingMetaThemeTag = document.querySelector(
		`meta[name="theme-color"]`
	);

	if (existingMetaThemeTag) {
		existingMetaThemeTag.content = themeColor;
	} else {
		const newMetaThemeTag = document.createElement("meta");
		newMetaThemeTag.name = "theme-color";
		newMetaThemeTag.content = themeColor;
		document.head.appendChild(newMetaThemeTag);
	}
};
