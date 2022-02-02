import styled from "styled-components";

export const BackgroundImg = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: auto;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 10px;
`;


export const CarouselContainer = styled.ul`
    max-width: 1040px;
    padding: 0rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
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
    background-color: white;
    border-radius: 10px;
    margin: auto;
    width: 3px;
    height: 3px;
`;

export const BlogCard = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    box-shadow: 1px 1px 8px ${(props) => props.theme.colors.lightEnhanced};
    text-align: center;
    width: 400px;
    height: 225px;
    margin-bottom: 3rem;
    transition: 0.3s;
    &:hover {
        transform: scale(1.05);
        box-shadow: 1px 1px 30px ${(props) => props.theme.colors.lightEnhanced};
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.lg} {
        width: 320px;
        height: 180px;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        width: 400px;
        height: 225px;
        margin-bottom: 0;
        margin-right: 2rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 320px;
        height: 180px;
    }
    @media ${(props) => props.theme.breakpoints.xs} {
        width: 240px;
        height: 135px;
    }
`;
export const CardContent = styled.div`
    background: linear-gradient(
        120deg,
        ${(props) => props.theme.colors.accent1 + "AA"} 0%,
        ${(props) => props.theme.colors.primary + "99"} 50%,
        ${(props) => props.theme.colors.accent2 + "88"} 100%
    );
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    &:hover {
        background: linear-gradient(
            120deg,
            ${(props) => props.theme.colors.accent1 + "EE"} -20%,
            ${(props) => props.theme.colors.primary + "EE"} 50%,
            ${(props) => props.theme.colors.accent2 + "EE"} 120%
        );
    }
`;
export const TitleContent = styled.div`
    text-align: center;
    z-index: 20;
    width: 100%;
    font-weight: 500;
    color: ${(props) => props.theme.colors.dark};

    ${BlogCard}:hover & {
        display: none;
    }
`;

export const HeaderThree = styled.h3`
    font-weight: 700;
    letter-spacing: 2px;
    color: ${(props) => (props.modal ? props.theme.dark : "#ffffff")};
    padding: ${(props) => (props.modal ? '0.5rem 1rem': '0')};
    
    transition: 0.3s;
    font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
    width: 50px;
    height: 3px;
    margin: 10px auto;
    border: 0;
    background: linear-gradient(
        120deg,
        ${(props) => props.theme.colors.accent1} 0%,
        ${(props) => props.theme.colors.primary} 50%,
        ${(props) => props.theme.colors.accent2} 100%
    );
`;

export const Intro = styled.div`
    margin: 0.5rem auto;
    color: #ffffff;
    font-family: ${(props) => props.theme.fonts.title};
    font-style: italic;
    line-height: 18px;
    display: none;

    ${BlogCard}:hover & {
        display: block;
    }
`;

export const CardInfo = styled.p`
    width: 100%;
    padding: 0 50px;
    margin: 1.5rem;
    color: ${(props) => props.theme.colors.dark};
    font-style: 2rem;
    line-height: 24px;
    text-align: justify;
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 1rem;
    }
`;

export const UtilityList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 2.5rem;
    width: 30%;
    @media ${(props) => props.theme.breakpoints.lg} {
        width: 50%;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        width: 60%;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        flex-direction: column;
        width: 80%;
        padding: 0 1rem;
    }
`;

export const ExternalLinks = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    opacity: 0.9;
    font-size: 1.6rem;
    padding: 1.25rem 2.5rem;
    margin: 0.5rem 1rem;
    background: linear-gradient(
        120deg,
        ${(props) => props.theme.colors.accent1} -10%,
        ${(props) => props.theme.colors.primary} 50%,
        ${(props) => props.theme.colors.accent2} 110%
    );
    border-radius: 15px;
    transition: 0.5s;
    width: 100%;
    &:hover {
        transform: scale(1.05);
        opacity: 1;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 0.5rem 0;
    }
`;
export const LinkName = styled.span`
    margin-left: 0.5rem;
`;

export const TagList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
    @media ${(props) => props.theme.breakpoints.sm} {
        flex-direction: column;
    }
`;
export const Tag = styled.li`
    color: ${(props) => props.theme.colors.dark};
    font-size: 1.35rem;
    padding: 0 2rem;
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.5rem 2rem;
    }
`;

export const Modal = styled.div`
    background-color: ${(props) => props.theme.colors.darkEnhanced};
    display: ${(props) => `${props.display}`};
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
    z-index: 99;
    left: 0;
    top: 0;
    overflow: auto;
    @media ${(props) => props.theme.breakpoints.md} {
        padding: 0;
    }
`;
export const ModalContent = styled.div`
    background-color: ${(props) => props.theme.colors.light};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    width: 80%;
    max-width: 900px;
    padding: 1.5rem 0;
    @media ${(props) => props.theme.breakpoints.md} {
        width: 100%;
        height: 100%;
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
export const Img = styled.img`
    margin: 1.5rem auto;
    max-width: calc(100% - 100px);
    max-height: 100%;
    overflow: hidden;
    border-radius: 10px;

    @media ${(props) => props.theme.breakpoints.sm} {
        max-width: calc(100% - 2rem);
    }
`;
