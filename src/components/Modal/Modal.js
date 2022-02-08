import React, { useEffect } from "react";
import ReactPortal from "./ReactPortal";
import {
    ModalWrapper,
    ModalContent,
    ModalHeader,
    CloseButton,
} from "./ModalStyles";
import { HeaderThree, TitleContent } from "../Projects/ProjectsStyles";

const Modal = ({ children, isOpen, handleClose, title }) => {
    useEffect(() => {
        const closeOnEscapeKey = (e) =>
            e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);

    console.log(isOpen);

    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <ModalWrapper>
                <ModalContent>
                    <ModalHeader>
                        <TitleContent>
                            <HeaderThree modal>{title}</HeaderThree>
                        </TitleContent>
                        <CloseButton onClick={handleClose}>&times;</CloseButton>
                    </ModalHeader>
                    {children}
                </ModalContent>
            </ModalWrapper>
        </ReactPortal>
    );
};

export default Modal;
