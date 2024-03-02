import React from "react";
import useHover from "../../../utils/hooks/useHover";

export interface BaseButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    hoverStyle?: React.CSSProperties;
    title: string;
}

const BaseButton: React.FC<BaseButtonProps> = ({
    title,
    hoverStyle,
    style,
    ...nativeProps
}) => {
    const { isHovered, hoverProps } = useHover();

    const buttonStyle: React.CSSProperties = {
        padding: "10px 20px",
        color: "white",
        backgroundColor: "black",
        border: "none",
        borderRadius: "5px",
        transition: "background-color 0.3s",
        cursor: "pointer",
        ...style,
        ...(isHovered && hoverStyle),
    };

    return (
        <button {...nativeProps} style={buttonStyle} {...hoverProps}>
            {title}
        </button>
    );
};

export default BaseButton;
