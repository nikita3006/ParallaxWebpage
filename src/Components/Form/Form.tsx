import React, { useEffect, useState } from "react";
import "../../routes/Contact/Contact.css";
import { ZodTypeAny, z } from "zod";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    isError?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
    zodSchema: z.ZodObject<{ [key: string]: ZodTypeAny }>;
    onSubmit: (event: { [key: string]: any }) => void;
    children: React.ReactNode;
}

interface FormContextProps {
    errorMessages?: { [key: string]: string };
    setIsResetForm: React.Dispatch<React.SetStateAction<boolean>>;

    isResetForm: boolean;
}

export const FormContext = React.createContext<FormContextProps>({
    errorMessages: {},
    setIsResetForm: () => {},
    isResetForm: false,
});

const Form: React.FC<FormProps> = ({
    isError,
    isInvalid,
    isDisabled,
    zodSchema,
    children,
    ...nativeFormProps
}) => {
    const [isResetForm, setIsResetForm] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});

    useEffect(() => {
        if (isResetForm) {
            setTimeout(() => {
                setIsResetForm(false);
            }, 1);
        }
    }, [isResetForm]);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const values = Object.fromEntries(formData.entries());

        const result = zodSchema.safeParse(values);

        if (result.success) {
            nativeFormProps.onSubmit(values);
            setIsResetForm(true);
            setErrorMessages({});
        } else {
            const fieldErrors = result.error.formErrors.fieldErrors;

            setErrorMessages(fieldErrors);
        }

        nativeFormProps.onSubmit && nativeFormProps.onSubmit(event);
    };

    return (
        <FormContext.Provider
            value={{ errorMessages, setIsResetForm, isResetForm }}
        >
            <form
                {...(nativeFormProps as React.FormHTMLAttributes<HTMLFormElement>)}
                onSubmit={onSubmit}
            >
                {children}
            </form>
        </FormContext.Provider>
    );
};

export default Form;
