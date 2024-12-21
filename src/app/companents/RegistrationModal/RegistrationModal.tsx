import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./RegistrationModal.css"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
