import React, { Suspense } from "react";
const DesktopHome = React.lazy(() => import("./DesktopHome"));
const PhoneHome = React.lazy(() => import("./PhoneHome"));
import { isDesktop } from "../../utils/bowserHelper";

const Home: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {isDesktop() ? <DesktopHome /> : <PhoneHome />}
        </Suspense>
    );
};

export default Home;
