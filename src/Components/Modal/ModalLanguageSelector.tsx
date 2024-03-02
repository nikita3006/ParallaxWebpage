import React, { useState } from "react";
import Modal from "./Modal";
import LanguageSelector from "../Language/LanguageSelector";

interface ModalSelectLanguageProps {
    isOpen: boolean;
    onClose: () => void;
}

const modalTitleStyle: React.CSSProperties = {
    marginBottom: "10px",
};

const ModalSelectLanguage: React.FC<ModalSelectLanguageProps> = ({
    isOpen,
    onClose,
}) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);

    const handleClose = () => {
        setModalOpen(false);
        onClose();
    };

    return (
        <Modal onClose={handleClose}>
            <div>
                <h2 style={modalTitleStyle}>
                    {isModalOpen ? "Select Language" : "Language"}
                </h2>
                <LanguageSelector />
                <button onClick={handleClose}>Close</button>
            </div>
        </Modal>
    );
};

export default ModalSelectLanguage;
