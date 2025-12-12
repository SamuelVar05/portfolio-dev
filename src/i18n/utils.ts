import type { Language } from "./translations";

export const DEFAULT_LANGUAGE: Language = "en";

export function getLanguage(): Language {
	if (typeof window === "undefined") {
		return DEFAULT_LANGUAGE;
	}
	const stored = localStorage.getItem("language") as Language | null;
	return stored === "en" || stored === "es" ? stored : DEFAULT_LANGUAGE;
}

export function setLanguage(lang: Language): void {
	if (typeof window !== "undefined") {
		localStorage.setItem("language", lang);
		document.documentElement.lang = lang;
	}
}
