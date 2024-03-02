import React, { useContext } from "react";
import "../../routes/Contact/Contact.css";
import { FormContext } from "./Form";

interface FormControlProps {
    isError?: boolean;
    name: string;
    errorMessage?: { [key: string]: any };
    isInvalid?: boolean;
    isDisabled?: boolean;
    children: React.ReactNode;
}

interface FormControlContextProps extends Omit<FormControlProps, "children"> {
    isResetInputs: boolean;
    setIsResetInputs: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormControlContext = React.createContext<FormControlContextProps>({
    isError: false,
    name: "",
    errorMessage: {},
    isInvalid: false,
    isDisabled: false,
    isResetInputs: false,
    setIsResetInputs: () => {},
});

const FormControl: React.FC<FormControlProps> = ({
    isError,
    errorMessage,
    isInvalid,
    isDisabled,
    name,
    children,
}) => {
    const [isResetInputs, setIsResetInputs] = React.useState(false);

    const { errorMessages: contextErrorMessage, isResetForm } =
        useContext(FormContext);

    React.useEffect(() => {
        if (isResetForm) setIsResetInputs(true);
    }, [isResetForm, setIsResetInputs]);

    return (
        <FormControlContext.Provider
            value={{
                isError:
                    isError ||
                    Object.keys(contextErrorMessage || {}).includes(name),
                isInvalid,
                isDisabled,
                setIsResetInputs,
                isResetInputs,
                name,
                errorMessage:
                    (errorMessage ? errorMessage[name] : undefined) ||
                    (contextErrorMessage ? contextErrorMessage[name] : ""),
            }}
        >
            {children}
        </FormControlContext.Provider>
    );
};

export default FormControl;
