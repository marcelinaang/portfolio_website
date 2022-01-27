import styled from "styled-components";

export const Img = styled.img`
    margin: 1rem;
    width: calc(100% - 2rem);
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 10px;
`;

export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    padding: 3rem;
    place-items: baseline;
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
    border-radius: 10px;
    background-color: white;
    box-shadow: 3px 3px 20px ${(props) => props.theme.colors.darkMuted};
    text-align: center;
    width: 400px;
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
    }
`;
export const TitleContent = styled.div`
    text-align: center;
    z-index: 20;
    width: 100%;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary}
`;

export const HeaderThree = styled.h3`
    font-weight: 500;
    letter-spacing: 2px;
    color: ${(props) => props.theme.colors.accent1};
    padding: 0.5rem 0;
    margin-top: 1rem;
    font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
    width: 50px;
    height: 3px;
    margin: 20px auto;
    border: 0;
    background: ${(props) => props.theme.colors.accent2};
`;

export const Intro = styled.div`
    width: 170px;
    margin: 0 auto;
    color: #dce3e7;
    font-family: ${props => props.theme.fonts.project};
    font-size: 13px;
    font-style: italic;
    line-height: 18px;
`;

export const CardInfo = styled.p`
    width: 100%;
    padding: 0 50px;
    color: ${(props) => props.theme.colors.darkMuted};
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
    justify-content: space-around;
    margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
    color: ${(props) => props.theme.colors.light};
    opacity: 0.9;
    font-size: 1.6rem;
    padding: 1rem 1.5rem;
    margin: 0rem 1rem;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 15px;
    transition: 0.5s;
    width: 100%;
    &:hover {
        font-weight: bold;
        opacity: 1;
    }
`;

export const TagList = styled.ul`
    display: flex;
    justify-content: space-around;
    padding: 2rem;
`;
export const Tag = styled.li`
    color: ${(props) => {props.theme.colors.darkMuted}};
    font-size: 1.35rem;
`;
