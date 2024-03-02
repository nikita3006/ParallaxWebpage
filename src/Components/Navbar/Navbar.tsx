import React, { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import "./Navbar.css";
import { useContextGetScrollY } from "../../utils/hooks/scroll";

const Navbar: React.FC = () => {
    const [navItem, setNavItem] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const { scrollY } = useContextGetScrollY();
    const navItemHandler = () => {
        setNavItem(!navItem);
    };

    useEffect(() => {
        if (scrollY >= 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }, [scrollY]);

    return (
        <nav className="navbar">
            <>
                <nav className={navbar ? "navbar active" : "navbar"}>
                    <div id="logo-ham">
                        <NavbarLogo />
                        <span className="hamburger" onClick={navItemHandler}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
                                />
                            </svg>
                        </span>
                    </div>

                    <div
                        className={
                            navItem === false
                                ? "nav-list"
                                : "nav-list nav-item-toggle"
                        }
                    >
                        <NavbarMenu />
                    </div>
                </nav>
            </>
        </nav>
    );
};

export default Navbar;
