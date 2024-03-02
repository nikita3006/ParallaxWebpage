import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../routes/Contact/Contact.css";
import { z } from "zod";
import { Button } from "../Components/Button/Button";
import FormControl from "../Components/Form/FormControl";
import FormLabel from "../Components/Form/FormLabel";
import Input from "../Components/Form/Input";
import FormHelperText from "../Components/Form/FormHelperText";
import FormErrorMessage from "../Components/Form/FormErrorMessage";
import Form from "../Components/Form/Form";
import Textarea from "../Components/Form/TextArea";

const formDataSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name can't exceed 50 characters"),
    email: z.string().email("Invalid email format"),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(500, "Message can't exceed 500 characters"),
});

type formDataType = z.infer<typeof formDataSchema>;

interface ContactFormProps {
    onSubmit: (formData: formDataType) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const { t } = useTranslation("contact");
    const [formData, setFormData] = useState<formDataType>({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = () => {
        onSubmit(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Form onSubmit={handleSubmit} zodSchema={formDataSchema}>
            <div className="form-group">
                <FormControl name="name">
                    <FormLabel htmlFor="name">{t("name")}</FormLabel>
                    <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    <FormErrorMessage />
                </FormControl>

                <FormControl name="email">
                    <FormLabel htmlFor="email">{t("email")}</FormLabel>
                    <Input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
                    <FormErrorMessage />

                    <FormHelperText>
                        We will never share your email with anyone.
                    </FormHelperText>
                </FormControl>

                <FormControl name="message">
                    <FormLabel htmlFor="message">{t("message")}</FormLabel>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} />
                    <FormErrorMessage />
                </FormControl>
            </div>

            <Button
                title={t("submit")}
                variant="submit"
                hoverColor="green"
                style={{ fontSize: "20px" }}
            />
        </Form>
    );
};

export default ContactForm;
