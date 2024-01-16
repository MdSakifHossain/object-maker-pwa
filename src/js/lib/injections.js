export const injectApplicationNameMetaTag = appName => {
	// create and add
	const newApplicationNameMetaTag = document.createElement("meta");
	newApplicationNameMetaTag.name = "application-name";
	newApplicationNameMetaTag.content = appName;
	document.head.appendChild(newApplicationNameMetaTag);
};

export const injectManifestLinkTag = manifestHref => {
	const newManifestLinkTag = document.createElement("link");
	newManifestLinkTag.rel = "manifest";
	newManifestLinkTag.href = manifestHref;
	document.head.appendChild(newManifestLinkTag);
};

export const injectMobileWebAppCapableMetaTag = () => {
	const newMobileWebAppCapableMetaTag = document.createElement("meta");
	newMobileWebAppCapableMetaTag.name = "mobile-web-app-capable";
	newMobileWebAppCapableMetaTag.content = "yes";
	document.head.appendChild(newMobileWebAppCapableMetaTag);
};

export const injectFavicon = faviconProps => {
	const newFaviconLinkTag = document.createElement("link");
	newFaviconLinkTag.rel = faviconProps.rel;
	newFaviconLinkTag.type = faviconProps.type;
	newFaviconLinkTag.href = faviconProps.href;
	newFaviconLinkTag.sizes = faviconProps.sizes;
	document.head.appendChild(newFaviconLinkTag);
};

export const injectIosStatusBar = theme_color => {
	// Meta tag doesn't exist, create and add
	const newIosStatusBarMetaTag = document.createElement("meta");
	newIosStatusBarMetaTag.name = "apple-mobile-web-app-status-bar-style";
	newIosStatusBarMetaTag.content = theme_color;
	document.head.appendChild(newIosStatusBarMetaTag);
};

export const injectMetaThemeTag = themeColor => {
	const newMetaThemeTag = document.createElement("meta");
	newMetaThemeTag.name = "theme-color";
	newMetaThemeTag.content = themeColor;
	document.head.appendChild(newMetaThemeTag);
};

export const injectTitle = newTitle => {
	const newTitleTag = document.createElement("title");
	newTitleTag.textContent = newTitle;
	document.head.appendChild(newTitleTag);
};

export const injectAppleTouchStartupImageLinkTag = imageHref => {
	const newAppleTouchStartupImageLinkTag = document.createElement("link");
	newAppleTouchStartupImageLinkTag.rel = "apple-touch-startup-image";
	newAppleTouchStartupImageLinkTag.href = imageHref;
	document.head.appendChild(newAppleTouchStartupImageLinkTag);
};

export const injectAppleTouchIcons = sizesArray => {
	const linkElements = sizesArray.map(size => {
		const newLinkElement = document.createElement("link");
		newLinkElement.rel = "apple-touch-icon";
		newLinkElement.href = size;
		return newLinkElement; // Return the link element for mapping
	});

	// Append the link elements to the document head
	linkElements.forEach(linkElement => document.head.appendChild(linkElement));
};

export const injectStylesheet = stylesheetPath => {
	const newStylesheetLinkTag = document.createElement("link");
	newStylesheetLinkTag.rel = "stylesheet";
	newStylesheetLinkTag.href = stylesheetPath;
	document.head.appendChild(newStylesheetLinkTag);
};
