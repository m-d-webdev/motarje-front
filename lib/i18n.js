"use client";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    // Load translations using http backend
    // For all available options: https://github.com/i18next/i18next-http-backend
    .use(Backend)

    // Detect user language
    // For all options: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)

    // Pass the i18n instance to react-i18next
    .use(initReactI18next)

    // Initialize i18next
    .init({
        // Default language
        fallbackLng: 'en',

        // Debug mode (set to false in production)
        debug: process.env.NODE_ENV === 'development',

        // Namespace (you can use multiple namespaces if needed)
        ns: ['translation'],
        defaultNS: 'translation',

        // Caching (recommended: 7 days in production)
        cache: {
            enabled: true,
            expirationTime: 7 * 24 * 60 * 60 * 1000
        },

        interpolation: {
            // React already protects against XSS
            escapeValue: false
        },

        // Detect and remember user language settings
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage', 'cookie'],
        },

        // Path to load language files
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        // React settings
        react: {
            useSuspense: true,
        },

        // Supported languages
        supportedLngs: ['en', 'fr', 'ar'],

        load: 'languageOnly',
    });

// Handle RTL direction for Arabic
const currentLanguage = i18n.language || window.localStorage.i18nextLng || 'en';
if (currentLanguage === 'ar') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
} else {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = currentLanguage;
}

// Function to change language manually
export const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
            
    // Update direction for RTL languages
    if (lng === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lng;
    }
};

export default i18n;