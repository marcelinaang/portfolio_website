import styled from "styled-components";

export const CarouselContainer = styled.ul`
    max-width: 1040px;
    padding: 0rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    /* overflow-x: hidden; */

    margin-left: 32px;
    &:first-of-type {
        margin-left: 0px;
    }

    margin-bottom: 80px;

    //remove scrollbar
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    @media ${(props) => props.theme.breakpoints.lg} {
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        justify-content: space-between;
        flex-wrap: nowrap;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        touch-action: pan-x;
        justify-content: initial;
        margin-bottom: 8px;
    }
`;
export const CarouselMobileScrollNode = styled.div`
    @media ${(props) => props.theme.breakpoints.lg} {
        width: 50%;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
        min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
    }
`;

export const CarouselItem = styled.div`
    border-radius: 5px;
    max-width: 240px;
    padding: 2rem;
    background: linear-gradient(
        -22.5deg,
        ${(props) => props.theme.colors.primary + "00"} 60%,
        ${(props) => props.theme.colors.primary + "FF"} 140%
    );

    @media ${(props) => props.theme.breakpoints.lg} {
        max-width: 100%;
        margin-bottom: 5rem;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        margin-left: 32px;
        min-width: 240px;
        min-height: 135px;
        margin-bottom: 0rem;
        padding: 2rem;
        align-content: start;
        scroll-snap-align: start;
        border-radius: 5px;
        overflow: visible;
        position: relative;
        height: fit-content;

        ${(props) =>
            props.active === props.index ? `opacity: 1` : `opacity: 0.5`};
    }
`;

export const CarouselItemTitle = styled.h4`
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.02em;
    display: flex;
    color: ${(props) => props.theme.colors.dark};
    margin-bottom: 8px;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 28px;
        line-height: 40px;
        margin-bottom: 4px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 20px;
        line-height: 24px;
        -webkit-text-fill-color: ${(props) => props.theme.colors.dark};
    }
`;
export const CarouselItemImg = styled.svg`
    margin-left: 21px;
    -webkit-mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0)
    );
    width: 100%;

    @media ${(props) => props.theme.breakpoints.sm} {
        -webkit-mask-image: none;
        margin-left: 16px;
        overflow: visible;
    }
`;

export const CarouselItemText = styled.p`
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: ${(props) => props.theme.colors.darkMuted};
    padding-right: 16px;

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 18px;
        padding-right: 0;
        color: ${(props) => props.theme.colors.darkMuted};
    }
`;
export const CarouselButtons = styled.div`
    width: 288px;

    display: none;
    visibility: hidden;

    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
        visibility: visible;
        margin-bottom: 48px;
    }
`;

export const CarouselButton = styled.button`
    box-sizing: border-box;
    background: none;
    padding: 4px;
    border: none;
    cursor: pointer;
    margin-right: 4px;
    opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
    transform: ${(props) =>
        props.active === props.index ? `scale(1.6)` : `scale(1)`};

    &:focus {
        outline: none;
    }
`;

export const CarouselButtonDot = styled.div`
background-color: ${(props) => props.theme.colors.dark};
    border-radius: 10px;
    margin: auto;
    width: 3px;
    height: 3px;
`;
