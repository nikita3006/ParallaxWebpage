import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string | undefined) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <select
                className="language-selector"
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
            >
                <option value="en">English</option>
                <option value="fr">French</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
