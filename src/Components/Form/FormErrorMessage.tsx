import React, { useContext } from "react";
import "../../routes/Contact/Contact.css";
import { FormControlContext } from "./FormControl";

interface FormErrorMessageProps {}

const FormErrorMessage: React.FC<FormErrorMessageProps> = () => {
    const { errorMessage, isError } = useContext(FormControlContext);

    return (
        <div className="form-error-message" style={{ height: 25 }}>
            {isError ? errorMessage![0] : ""}
        </div>
    );
};

export default FormErrorMessage;
