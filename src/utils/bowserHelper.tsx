import bowser from "bowser";

export const isDesktop = () => {
    const { platform } = bowser.parse(window.navigator.userAgent);
    if (platform.type === "desktop") {
        return true;
    }
    return false;
};
