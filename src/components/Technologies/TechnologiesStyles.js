import styled from "styled-components";

export const ImageContainer = styled.div`
    text-align: center;
    background-image: radial-gradient(
        50% 50% at 50% 50%,
        rgba(79, 108, 176, 0.25) 53.8%,
        rgba(79, 108, 176, 0) 100%
    );
    width: 100%;
    padding: 60px;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${(props) => props.theme.breakpoints.lg} {
        background-image: none;
        padding: 0;
        margin-top: 40px;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        background-image: none;
        padding: 0;
        margin-top: 16px;
    }
`;

export const MainImage = styled.img`
    width: 100%;
`;

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;

    @media ${(props) => props.theme.breakpoints.sm} {
        flex-direction: column;
        margin: 32px 0;
    }
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        margin-left: 18px;
    }
`;

export const ListTitle = styled.h4`
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 8px;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 24px;
        line-height: 28px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.02em;
        margin-bottom: 4px;
    }
`;

export const ListParagraph = styled.p`
    font-size: 16px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.darkMuted};

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 14px;
        line-height: 26px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 12px;
        line-height: 20px;
    }
`;

export const ListItem = styled.li`
    width: 33.33%;
    display: flex;
    flex-direction: column;
    padding-right: 5%;

    @media ${(props) => props.theme.breakpoints.md} {
        width: 50%;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin-bottom: 14px;
        width: 100%;
        flex-direction: row;
    }
`;

export const ListIcon = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 48px;
    height: 48px;
    margin-bottom: 10px;

    @media ${(props) => props.theme.breakpoints.md} {
        width: 40px;
        height: 40px;
        margin-bottom: 8px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 32px;
        height: 32px;
        margin-bottom: 0px;
    }
`;
