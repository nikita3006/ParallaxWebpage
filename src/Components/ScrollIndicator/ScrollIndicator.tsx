import React from "react";
import { useContextGetScrollPercentage } from "../../utils/hooks/scroll";

const ScrollIndicator: React.FC = () => {
    const { scrollPercentage } = useContextGetScrollPercentage();

    const headerStyle: React.CSSProperties = {
        position: "fixed",
        top: "0",
        zIndex: 1,
        width: "100%",
        backgroundColor: "#f1f1f1",
    };

    const progressContainerStyle: React.CSSProperties = {
        width: "100%",
        height: "8px",
        background: "#ccc",
    };

    const progressBarStyle: React.CSSProperties = {
        height: "8px",
        background: "#04AA6D",
        width: `${scrollPercentage}%`,
    };

    return (
        <div>
            <div style={headerStyle}>
                <div style={progressContainerStyle}>
                    <div style={progressBarStyle}></div>
                </div>
            </div>
        </div>
    );
};

export default ScrollIndicator;
