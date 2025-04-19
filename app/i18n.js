export const locales = ['en', 'fr', 'ar'];
export const defaultLocale = 'en';

// Dictionary files
import enTranslations from '../public/locales/en/translation.json';
import frTranslations from '../public/locales/fr/translation.json';
import arTranslations from '../public/locales/ar/translation.json';

const dictionaries = {
    en: enTranslations,
    fr: frTranslations,
    ar: arTranslations,
};

export const getDictionary = (locale) => {
    return dictionaries[locale] || dictionaries[defaultLocale];
};
