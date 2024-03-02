import React from "react";
import BaseButton, { BaseButtonProps } from "./bases/BaseButton";
import GhostButton, { GhostButtonProps } from "./variants/GhostButton";
import TextButton, { TextButtonProps } from "./variants/TextButton";
import SubmitButton, {SubmitButtonProps} from './variants/SubmitButton';
 
type ButtonVariants =
  | ({
      variant: "ghost";
    } & GhostButtonProps)
  | ({
      variant: "text";
    } & TextButtonProps)
  | ({
      variant: "submit";
    } & SubmitButtonProps)

  | ({ variant: undefined | "base-button" } & BaseButtonProps);

const Button: React.FC<ButtonVariants> = ({ variant, ...props }) => {
    switch (variant) {
    case "ghost":
        return <GhostButton {...(props as GhostButtonProps)} />;

    case "text":
        return <TextButton {...(props as TextButtonProps)} />;
        
    case "submit":
        return <SubmitButton {...(props as SubmitButtonProps)} />;

    default:
        return <BaseButton {...props} />;
    }
};


export { Button };
