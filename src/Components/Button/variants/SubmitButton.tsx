import React from "react";
import BaseButton, { BaseButtonProps } from "../bases/BaseButton";

export interface SubmitButtonProps extends BaseButtonProps {
    hoverColor: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ style, hoverColor, ...baseButtonProps }) => {
    
    const SubmitButtonStyle: React.CSSProperties = {
        border: "none",
        cursor: "pointer",
    };
    const hoverStyle = {
        backgroundColor: hoverColor,
    };


    return <BaseButton {...baseButtonProps} hoverStyle={hoverStyle} style={{ ...SubmitButtonStyle, ...style }}></BaseButton>;
};

export default SubmitButton;
