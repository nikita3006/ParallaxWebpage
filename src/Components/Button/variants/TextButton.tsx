import React from "react";
import BaseButton, { BaseButtonProps } from "../bases/BaseButton";

export interface TextButtonProps extends BaseButtonProps {
  hoverColor: string;
}

/**
 * It's important to leave a descriptive commment here.
 * Text buttons lack of backround unless you hover them.
 */
const TextButton: React.FC<TextButtonProps> = ({
    hoverColor,
    ...baseButtonProps
}) => {
    const TextButtonStyle: React.CSSProperties = {
        backgroundColor: "white",
    };

    const style = {
        ...TextButtonStyle,
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

export default TextButton;
