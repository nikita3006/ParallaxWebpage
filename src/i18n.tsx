import i18n from "i18next";
import enContact from '../public/locales/en/enContact.json';
import enHome from '../public/locales/en/enHome.json';
import enMenu from '../public/locales/en/enMenu.json';
import enNavbar from '../public/locales/en/enNavbar.json';
import enTeam from '../public/locales/en/enTeam.json';
import frContact from '../public/locales/fr/frContact.json';
import frHome from '../public/locales/fr/frHome.json';
import frMenu from '../public/locales/fr/frMenu.json';
import frNavbar from '../public/locales/fr/frNavbar.json';
import frTeam from '../public/locales/fr/frTeam.json';

import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
 
const enTranslation ={
    contact: enContact,
    home: enHome,
    menu:enMenu,
    navbar:enNavbar,
    team:enTeam,
   
}
const frTranslation ={
    contact: frContact,
    home: frHome,
    menu:frMenu,
    navbar:frNavbar,
    team:frTeam
  
}


i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        lng: "en",
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["querystring"], 
            lookupQuerystring: "lng"
        },
        resources: {
            en: enTranslation,
            fr: frTranslation,
        },
    });

export default i18n;
