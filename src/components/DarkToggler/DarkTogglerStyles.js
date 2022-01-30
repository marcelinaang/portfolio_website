import styled from "styled-components";

export const ToggleWrapper = styled.div`
    position: relative;
    margin: 0 0.5rem;
    display: flex;
`;
export const ToggleLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 24px;
    border-radius: 15px;
    background: #cfcfcf;
    cursor: pointer;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 16px;
        margin: 3.5px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`;
export const Toggler = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 24px;
    cursor: pointer;
    &:checked + ${ToggleLabel} {
        background: #505050;
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 16px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }
`;
