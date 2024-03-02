import React, { useState } from "react";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { navItems } from "../../App"; 
import ModalSelectLanguage from "../Modal/ModalLanguageSelector";
import Navlink from "./Navlink";

const NavbarMenu: React.FC = () => {
    const { t } = useTranslation("navbar");
    const [isLanguageModalOpen, setLanguageModalOpen] = useState<boolean>(false);

    const openLanguageModal = () => {
        setLanguageModalOpen(true);
    };

    const closeLanguageModal = () => {
        setLanguageModalOpen(false);
    };

    const navigationItems = navItems.map((item: navItems) => (
        <li key={item.path} className="nav-item">
            <Navlink
                variant={item.subLinks ? "expandableNavlink" : "simpleNavlink"}
                to={item.path}
                label={t(item.meta.title)}
                subLinks={item.subLinks}
            />
        </li>
    ));

    return (
        <ul className="nav-item">
            {navigationItems}
            <li className="nav-item">
                <Suspense fallback={<div>Loading...</div>}>
                    <button
                        onClick={openLanguageModal}
                        style={{ width: "150px", fontSize: "large" }}
                    >
                        Language
                    </button>
                    {isLanguageModalOpen && (
                        <ModalSelectLanguage
                            isOpen={isLanguageModalOpen}
                            onClose={closeLanguageModal}
                        />
                    )}
                </Suspense>
            </li>
        </ul>
    );
};

export default NavbarMenu;
