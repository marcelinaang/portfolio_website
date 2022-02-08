import React, { useEffect, useRef  } from "react";
import { CSSTransition } from "react-transition-group";

import ReactPortal from "./ReactPortal";
import {
    ModalWrapper,
    ModalContent,
    ModalHeader,
    CloseButton,
} from "./ModalStyles";
import { HeaderThree, TitleContent } from "../Projects/ProjectsStyles";

const Modal = ({ children, isOpen, handleClose, title }) => {
    const nodeRef = useRef(null);

    useEffect(() => {
        const closeOnEscapeKey = (e) =>
            e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <CSSTransition
                in={isOpen}
                timeout={{ entry: 0, exit: 300 }}
                unmountOnExit
                classNames="modal"
                nodeRef={nodeRef}
            >
                <ModalWrapper ref={nodeRef}>
                    <ModalContent>
                        <ModalHeader>
                            <TitleContent>
                                <HeaderThree modal>{title}</HeaderThree>
                            </TitleContent>
                            <CloseButton onClick={handleClose}>
                                &times;
                            </CloseButton>
                        </ModalHeader>
                        {children}
                    </ModalContent>
                </ModalWrapper>
            </CSSTransition>
        </ReactPortal>
    );
};

export default Modal;
