
/**
 * Helper to get the localized string whether it's a translation key, a raw string, or an object with 'en'/'ar' keys.
 * 
 * @param {string|object} content - The content to translate. Can be a i18n key (string), a localized object {en:..., ar:...}, or a raw string.
 * @param {function} t - The i18next translation function.
 * @param {string} currentLang - The current language code ('en' or 'ar').
 * @returns {string} The localized content.
 */
export const getLocalizedContent = (content, t, currentLang) => {
    if (!content) return "";

    // If it's an object with language keys (newly added places)
    if (typeof content === 'object' && content !== null) {
        return content[currentLang] || content['en'] || "";
    }

    // If it's a string, try to translate it. If key exists, it returns value. If not, it returns key (or fallback).
    // Note: t() returns the key if missing. We assume 'content' might be a key like 'placesItems.gem.title'
    // or a raw string like 'My Custom Place'.
    return t(content);
};
