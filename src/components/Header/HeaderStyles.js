import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
    box-sizing: content-box;
    display: flex;    
    align-content: center;
    max-width: 1040px;
    margin: 0 auto;
    padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};

    @media ${(props) => props.theme.breakpoints.md} {
        padding: ${(props) => (props.nopadding ? "0" : "24px 48px 0")};
        width: calc(100vw - 96px);
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
        width: calc(100vw - 32px);
    }
}
`;
export const Div1 = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 14.5rem;

    @media ${(props) => props.theme.breakpoints.md} {
        flex-grow: 1;
    }
`;
export const Div2 = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: end;
    padding: ${(props) => (props.nopadding ? "0" : "0 48px")};

    @media ${(props) => props.theme.breakpoints.md} {
        display: none;
    }
`;
export const Div3 = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

// Brand
export const BrandImage = styled.img`
    width: auto;
    height: 3.75rem;
`;
export const BrandLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    line-height: 32px;
    color: ${(props) => props.theme.colors.dark};
    transition: 0.4s ease;
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
`;

// Navigation Links
export const LinkWrapper = styled.li`
    & + & {
        margin-left: 2rem;
    }
`;
export const NavLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    line-height: 32px;
    color: ${(props) => props.theme.colors.darkMuted};
    transition: 0.4s ease;

    &:hover {
        color: ${(props) => props.theme.colors.dark};
        opacity: 1;
        cursor: pointer;
    }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
    border: none;
    display: flex;
    position: relative;
    background: none;
    font-size: 1.7rem;

    line-height: 32px;
    color: ${(props) => props.theme.colors.darkMuted};
    cursor: pointer;
    transition: 0.3s ease;

    &:focus {
        outline: none;
    }
    &:hover {
        color: ${(props) => props.theme.colors.dark};
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.4rem 0;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        padding: 0;
    }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
    margin-left: 8px;
    display: flex;
    align-self: center;
    transition: 0.3s ease;
    opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
    transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

    &:hover {
        opacity: 1;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 2px 0 0 2px;
        width: 15px;
    }
`;
