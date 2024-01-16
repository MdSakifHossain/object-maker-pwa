export const setThemeColor = value => {
	document.documentElement.style.setProperty("--theme-color", value);
	localStorage.setItem('--theme-color', value);
};

