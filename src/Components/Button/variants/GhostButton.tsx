import React from "react";
import BaseButton, { BaseButtonProps } from "../bases/BaseButton";

export interface GhostButtonProps extends BaseButtonProps {
  opacity: number;
  outlineColor: string;
  hoverColor: string;
}

/**
 * It's important to leave a descriptive commment here.
 * Ghost buttons are those buttons you see that completely transparent and empty, with just an outside border and the button words inside it.
 */
const GhostButton: React.FC<GhostButtonProps> = ({
    opacity,
    outlineColor,
    hoverColor,
    ...baseButtonProps
}) => {
    const GhostButtonStyle: React.CSSProperties = {
        backgroundColor: "white",
        opacity,
        border: `1px solid ${outlineColor}`,
        color: outlineColor,
    };

    const style = {
        ...GhostButtonStyle,
        ...baseButtonProps.style,
    };

    const hoverStyle = {
        backgroundColor: hoverColor,
    };

    return (
        <BaseButton
            {...baseButtonProps}
            style={style}
            hoverStyle={hoverStyle}
        ></BaseButton>
    );
};

export default GhostButton;
