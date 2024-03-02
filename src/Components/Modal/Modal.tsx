import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

const modalOverlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const modalContentStyle: React.CSSProperties = {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "100%",
};

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <div style={modalOverlayStyle} onClick={onClose}>
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
