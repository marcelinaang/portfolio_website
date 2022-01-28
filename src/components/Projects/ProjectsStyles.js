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

export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    padding: 3rem;
    place-items: center;
    column-gap: 2rem;
    row-gap: 3rem;
    margin-bottom: 1rem;
    @media ${(props) => props.theme.breakpoints.md} {
        place-items: center;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        padding-bottom: 0;
    }
`;
export const BlogCard = styled.div`
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    box-shadow: 3px 3px 20px ${(props) => props.theme.colors.darkMuted};
    text-align: center;
    width: 400px;
    height: 225px;
    transition: 0.3s;
    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
    }
`;
export const CardContent = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    opacity: 0.8;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    &:hover {
        opacity: 0.9;
    }
`;
export const TitleContent = styled.div`
    text-align: center;
    z-index: 20;
    width: 100%;
    font-weight: 500;
    color: ${(props) => props.theme.colors.accent2};
`;

export const HeaderThree = styled.h3`
    font-weight: 700;
    letter-spacing: 2px;
    color: ${(props) => props.theme.colors.light};
    padding: 0.5rem 0;
    margin-top: 1rem;
    transition: 0.3s;
    font-size: ${(props) => (props.title ? "3.5rem" : "2.5rem")};
`;

export const Hr = styled.hr`
    width: 50px;
    height: 3px;
    margin: 10px auto;
    border: 0;
    background: ${(props) => props.theme.colors.accent1};
`;

export const Intro = styled.div`
    margin: 0.5rem auto;
    color: ${(props) => props.theme.colors.light};
    font-family: ${(props) => props.theme.fonts.title};
    font-style: italic;
    line-height: 18px;
`;

export const CardInfo = styled.p`
    width: 100%;
    padding: 0 50px;
    margin: 1.5rem;
    color: ${(props) => props.theme.colors.light};
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
    color: ${(props) => props.theme.colors.primary};
    opacity: 0.9;
    font-size: 1.6rem;
    padding: 1.25rem 2.5rem;
    margin: 0.5rem 1rem;
    background: ${(props) => props.theme.colors.light};
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
    color: ${(props) => props.theme.colors.light};
    font-size: 1.35rem;
    padding: 0 2rem;
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.5rem 2rem;
    }
`;

export const Modal = styled.div`
    background-color: ${(props) => props.theme.colors.darkMuted};
    display: ${(props) => `${props.display}`};
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
    z-index: 1;
    left: 0;
    top: 0;
    overflow: auto;
`;
export const ModalContent = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    width: 80%;
    padding: 1.5rem 0;
`;
export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1.5rem;
`;
export const CloseButton = styled.span`
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.lightMuted};
    float: right;
    font-size: 30px;
    font-weight: bold;
    &:hover {
        text-decoration: none;
        cursor: pointer;
        color: ${(props) => props.theme.colors.light};
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
