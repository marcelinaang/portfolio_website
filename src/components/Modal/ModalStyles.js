import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
    background-color: ${(props) => props.theme.colors.darkEnhanced};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    transition: all 0.3s ease-in-out;
    z-index: 999;
    padding: 40px 20px 20px;
    overflow: auto;

    &.modal-enter {
        opacity: 0;
    }

    &.modal-enter-done {
        opacity: 1;
    }

    &.modal-exit {
        opacity: 1;
    }

    &.modal-exit-done {
        opacity: 0;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        padding: 0;
    }
`;

export const ModalContent = styled.div`
    width: 70%;
    background-color: ${(props) => props.theme.colors.light};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border-radius: 10px;
    padding: 1.5rem 0 1.5rem;
    transition: all 0.3s ease-in-out;

    ${ModalWrapper}.modal-enter & {
        transform:scale(.4);
        opacity:0;
    }

    ${ModalWrapper}.modal-enter-active & {
        transform:scale(1);
        opacity:1;
    }

    ${ModalWrapper}.modal-exit & {
        transform:scale(1);
        opacity:1;
    }

    ${ModalWrapper}.modal-exit-active & {
        transform:scale(.4);
        opacity:0;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        width: 100%;
        min-height: 100vh;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    padding: 1.5rem 1.5rem 0;
`;

export const CloseButton = styled.span`
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.dark};
    float: right;
    font-size: 30px;
    font-weight: bold;
    &:hover {
        text-decoration: none;
        cursor: pointer;
        color: ${(props) => props.theme.colors.darkMuted};
    }
`;
