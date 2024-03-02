import React, { createContext, useEffect, useState, useContext } from "react";
import _ from "lodash";

const ScrollContext = createContext({
    scrollY: 0,
    scrollHeight: document.documentElement.scrollHeight,
    clientHeight: document.documentElement.clientHeight,
    scrollPercentage: 0,
});

function ScrollProvider({ children }) {
    const [scrollY, setScrollY] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(
        document.documentElement.scrollHeight
    );
    const [clientHeight, setClientHeight] = useState(
        document.documentElement.clientHeight
    );
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleThrottledScroll = _.throttle(() => {
        const scrolled = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight ;
        const clientHeight = document.documentElement.clientHeight;
        const height = scrollHeight - clientHeight;
        const percentage = (scrolled / height) * 100;
        
        setScrollY(scrolled);
        setScrollPercentage(percentage);
        setScrollHeight(scrollHeight);
        setClientHeight(clientHeight); 
    },10);

    useEffect(() => {
        window.addEventListener("scroll", handleThrottledScroll);
        window.addEventListener("resize", handleThrottledScroll);


        return () => {
            window.removeEventListener("scroll", handleThrottledScroll);
            window.removeEventListener("resize", handleThrottledScroll);
            handleThrottledScroll.cancel();
        };
    }, []);

    return (
        <ScrollContext.Provider
            value={{ scrollY, scrollHeight, clientHeight, scrollPercentage }}
        >
            {children}
        </ScrollContext.Provider>
    );
}

const useScrollContext = () => {
    return useContext(ScrollContext);
};

export { ScrollProvider, useScrollContext };
export default ScrollContext;
