// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
     
    },
  },
  ru: {
    translation: {},
  },
  en: {
    translation: {},
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz", // default language
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
