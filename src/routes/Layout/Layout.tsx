import React, { Suspense, useEffect } from "react";
import i18n from "../../i18n";
const Navbar = React.lazy(() => import("../../Components/Navbar/Navbar"));
import { Outlet, useLocation } from "react-router-dom";
import ScrollIndicator from "../../Components/ScrollIndicator/ScrollIndicator";

function Layout() {
    const location = useLocation();
    useEffect(() => {
        const param = new URLSearchParams(location.search);
        const lng = param.get("lng");
        if (lng) {
            i18n.changeLanguage(lng);
        }
    }, [location.search]);

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <ScrollIndicator />
                <Outlet />
            </Suspense>
        </>
    );
}

export default Layout;
