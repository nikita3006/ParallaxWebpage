import React from "react";
import '../../routes/Contact/Contact.css';

interface FormHelperTextProps {
    children: React.ReactNode;
}

const FormHelperText: React.FC<FormHelperTextProps> = ({ children }) => {
    return <div className="form-helper-text">{children}</div>;
};

export default FormHelperText;
