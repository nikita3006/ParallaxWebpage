import React, { Suspense } from "react";
const ContactForm = React.lazy(() => import("../../sections/ContactForm"));
import { Parallax } from "react-parallax";
import { useTranslation } from "react-i18next";
import "./Contact.css";
import contact from "../../assets/images/contact-background.jpg";

const Contact: React.FC = () => {
    const { t } = useTranslation("contact");

    const handleFormSubmit = (formData: { [key: string]: any }) => {
        console.log("formData: ", formData);
    };

    return (
        <Parallax
            strength={800}
            style={{
                height: "100%",
                backgroundImage: `url(${contact})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="ContactPage">
                <h1>{t("title")}</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactForm onSubmit={handleFormSubmit} />
                </Suspense>
            </div>
        </Parallax>
    );
};

export default Contact;
