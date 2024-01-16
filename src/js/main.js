// importing css
import "/src/css/style.css";

// importing necessary functions
import { copyToClipboard } from "./lib/copyToClipboard.js";
import { setCssVariable } from "./lib/setCssVariable.js";
import { setMetaThemeTag } from "./lib/setMetaThemeTag.js";
import { setIosStatusBar } from "./lib/setIosStatusBar.js";
import { setThemeColor } from "./lib/setThemeColor.js";

// importing helper functions
import {
	injectApplicationNameMetaTag,
	injectMobileWebAppCapableMetaTag,
	injectMetaThemeTag,
	injectTitle,
	injectFavicon,
	injectIosStatusBar,
	injectAppleTouchStartupImageLinkTag,
	injectAppleTouchIcons
} from "./lib/injections.js";

// importing constants
import {
	default_theme_color,
	new_title,
	faviconProps,
	icon_path,
	toast_removal_time,
	errorMessage,
	successMessage
} from "./constants/index.js";

//~~~~~ UFO ~~~~~//

//~~~~~ UFO ~~~~~//

// grabbing all the necessary stuffs
const id = document.getElementById("id");
const change_theme_color_btn = document.getElementById(
	"change_theme_color_btn"
);
const name_field = document.getElementById("name_field");
const name_paste_btn = document.getElementById("name_paste_btn");
const description_field = document.getElementById("description_field");
const description_paste_btn = document.getElementById("description_paste_btn");
const code_output = document.getElementById("code_output");
const code_copy_btn = document.getElementById("code_copy_btn");
const reset_btn = document.getElementById("reset_btn");
const generate_btn = document.getElementById("generate_btn");

/*
    ##########################
    / ~~ helper functions ~~ /
    ##########################
*/

const hardReset = () => {
	id.value = null;
	name_field.value = null;
	description_field.value = null;
	code_output.innerHTML = `
{<br />
<span class="key"> "id"</span>: <span class="value">0</span>,<br />
<span class="key"> "name"</span>: <span class="value">""</span>,<br />
<span class="key"> "description"</span>: <span class="value">""</span><br />
},<br />
`;
};

const addToast = (message = "🤗 Some Dummy Text 🚬") => {
	const toast = document.createElement("div");
	toast.classList.add("toast-item");
	toast.innerText = message;

	toastBox.appendChild(toast);

	setTimeout(() => {
		toast.remove();
	}, toast_removal_time * 1000);
};

/*
    ################################
    / ~~ main logic starts here ~~ /
    ################################
*/

setCssVariable("--toast-disappears-in", `${toast_removal_time}s`);

let current_theme_color =
	localStorage.getItem("--theme-color") || default_theme_color;
setThemeColor(current_theme_color);

// injeting necessary shits
(() => {
	injectApplicationNameMetaTag(new_title);
	injectMobileWebAppCapableMetaTag();
	injectMetaThemeTag(current_theme_color);
	injectTitle(new_title);
	injectFavicon(faviconProps);
	injectIosStatusBar(current_theme_color);
	injectAppleTouchStartupImageLinkTag(icon_path);
	injectAppleTouchIcons([
		icon_path,
		icon_path,
		icon_path,
		icon_path,
		icon_path
	]);
})();

name_paste_btn.addEventListener("click", async () => {
	const nameFromClipboard = await navigator.clipboard.readText();
	name_field.value = nameFromClipboard;
});

description_paste_btn.addEventListener("click", async () => {
	const descriptionFromClipboard = await navigator.clipboard.readText();
	description_field.value = descriptionFromClipboard;
});

code_copy_btn.addEventListener("click", async () => {
	try {
		await navigator.clipboard.writeText(code_output.innerText);
		addToast(successMessage);
	} catch (error) {
		addToast(errorMessage);
	}
});

reset_btn.addEventListener("click", () => {
	hardReset();
	addToast("🔰 Reset Successful 🔰");
});

generate_btn.addEventListener("click", () => {
	const idFromDom = id.value;
	const nameFromDom = name_field.value;
	const descriptionFromDom = description_field.value;

	if (!idFromDom) {
		addToast("❌ Bro, you forgot the ID 🥲");
		return;
	}

	if (!nameFromDom) {
		addToast("❌ I need a name bro... ❌");
		return;
	}

	if (!descriptionFromDom) {
		addToast("Bitch, You Forgot the description 😒");
		return;
	}

	code_output.innerHTML = `
{<br />
<span class="key"> "id"</span>: <span class="value">${idFromDom}</span>,<br />
<span class="key"> "name"</span>: <span class="value">"${nameFromDom}"</span>,<br />
<span class="key"> "description"</span>: <span class="value">"${descriptionFromDom}"</span><br />
},<br />
`;
});

change_theme_color_btn.addEventListener("click", async () => {
	try {
		const newThemeColor = await navigator.clipboard.readText();
		setMetaThemeTag(newThemeColor);
		setIosStatusBar(newThemeColor);
		setThemeColor(newThemeColor);
	} catch (error) {
		addToast("📋 Couldn't access clipboard 📋");
		addToast("😒 More: On Console.... 😒");
		console.log(error);
		return;
	}
});

addToast("🔰 Welcome You Mother Faq🔰");
