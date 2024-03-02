import React, {  useState } from "react";
import "../../routes/Contact/Contact.css";
import { FormControlContext } from "./FormControl";

interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, ...nativeProps }) => {
    const { isDisabled, isError, isInvalid, isResetInputs, setIsResetInputs } =
        React.useContext(FormControlContext);

    const [value, setValue] = useState(nativeProps.defaultValue || "");

    React.useEffect(() => {
        if (isResetInputs) {
            setValue("");
            setIsResetInputs(false);
        }
    }, [isResetInputs, setIsResetInputs]);

    const style = {};

    if (isInvalid) {
        const assignStyle: React.CSSProperties = {
            backgroundColor: "gray",
            border: "1px solid orange",
            color: "white",
        };
        Object.assign(style, assignStyle);
    }

    if (isDisabled) {
        const assignStyle: React.CSSProperties = {
            backgroundColor: "lightgray",
            border: "1px solid gray",
            color: "white",
            cursor: "not-allowed",
        };
        Object.assign(style, assignStyle);
    }

    if (isError) {
        const assignStyle: React.CSSProperties = {
            backgroundColor: "gray",
            border: "1px solid red",
            color: "white",
        };
        Object.assign(style, assignStyle);
    }

    return (
        <textarea
            name={name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            {...nativeProps}
            style={{ ...style, ...nativeProps.style }}
        />
    );
};

export default Textarea;
