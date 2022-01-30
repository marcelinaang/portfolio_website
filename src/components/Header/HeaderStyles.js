import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    padding: 1rem;
    padding-top: 2rem;

    @media ${(props) => props.theme.breakpoints.sm} {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(60px);
        grid-column-gap: 0.5rem;
        grid-row-gap: 0.5rem;
    }
`;
export const Span = styled.span`
    font-size: 2rem;
    white-space: nowrap;
`;
export const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    align-content: center;
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-area: 1 / 1 / 2 / 3;
    }
`;
export const Div2 = styled.div`
    grid-area:1 / 2 / 2 / 5;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.md} {
        grid-area: 1 / 3 / 2 / 3;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    }
`;
export const Div3 = styled.div`
    grid-area: 1 / 5 / 2 / 6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    }
`;

// Brand
export const BrandImage = styled.img`
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    margin-left: 1rem;
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
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.5rem;
    }
`;

// Navigation Links
export const NavLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    line-height: 32px;
    padding: 1rem;
    color: ${(props) => props.theme.colors.darkMuted};
    transition: 0.4s ease;
    &:hover {
        color: ${(props) => props.theme.colors.dark};
        opacity: 1;
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.lg} {
        padding: 0.75rem;
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

// Social Icons

export const SocialIcons = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
    color: ${(props) => props.theme.colors.darkMuted};
    border-radius: 50px;
    padding: 8px;
    &:hover {
        background-color: ${(props) => props.theme.colors.dark};
        color: ${(props) => props.theme.colors.light};
        transform: scale(1.2);
        cursor: pointer;
    }
`;
