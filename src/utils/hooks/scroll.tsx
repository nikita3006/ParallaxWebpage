import { useContext } from "react";
import ScrollContext from "../contexts/ScrollContext";

const useContextGetScrollHeight = () => {
    const { scrollHeight } = useContext(ScrollContext);
    return { scrollHeight };
};

const useContextGetScrollPercentage = () => {
    const { scrollPercentage } = useContext(ScrollContext);
    return { scrollPercentage };
};

const useContextGetScrollY = () => {
    const { scrollY } = useContext(ScrollContext);
    return { scrollY };
};

export {
    useContextGetScrollHeight,
    useContextGetScrollPercentage,
    useContextGetScrollY,
};
