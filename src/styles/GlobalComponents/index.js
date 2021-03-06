import styled from "styled-components";

export const Section = styled.section`
    display: ${(props) => (props.grid ? "grid" : "flex")};
    flex-direction: ${(props) => (props.row ? "row" : "column")};
    padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
    margin: 0 auto;
    max-width: 1040px;
    box-sizing: content-box;
    position: relative;
    overflow: hidden;
    grid-template-columns: 1fr 1fr;

    @media ${(props) => props.theme.breakpoints.md} {
        padding: ${(props) => (props.nopadding ? "0" : "24px 48px 0")};
        width: calc(100vw - 96px);
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
        width: calc(100vw - 32px);
    }
`;

export const SectionTitle = styled.h2`
    font-weight: 600;
    font-size: ${(props) => (props.main ? "48px" : "52px")};
    line-height: ${(props) => (props.main ? "48px" : "60px")};
    width: max-content;
    max-width: 100%;
    background: ${(props) => props.theme.colors.dark};
    backgorund-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
    padding: ${(props) => (props.main ? "58px 0 16px" : "0")};

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: ${(props) => (props.main ? "56px" : "48px")};
        line-height: ${(props) => (props.main ? "56px" : "48px")};
        margin-bottom: 12px;
        padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 32px;
        line-height: 40px;
        font-size: ${(props) => (props.main ? "28px" : "32px")};
        line-height: ${(props) => (props.main ? "32px" : "40px")};
        margin-bottom: 8px;
        padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
        max-width: 100%;
    }
`;

export const SectionText = styled.p`
    max-width: 800px;
    font-size: ${(props) => props.hero? '24px' : '20px'};
    line-height: ${(props) => props.hero? '40px' : '32px'};
    font-weight: 500;
    padding-bottom: 3.6rem;
    color: ${(props) => props.theme.colors.darkMuted};

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: ${(props) => props.hero? '20px' : '18px'};
        max-width: 670px;
        line-height: ${(props) => props.hero? '32px' : '24px'};
        padding-bottom: 24px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: ${(props) => props.hero? '16px' : '14px'};
        line-height: ${(props) => props.hero? '24px' : '20px'};
        padding-bottom: 16px;
    }
`;

export const SectionDivider = styled.div`
    width: 100px;
    height: 4px;
    border-radius: 10px;
    background-color: #fff;
    background: ${(props) =>
        !props.colorAlt
            ? `linear-gradient(90deg, ${props.theme.colors.accent1} 0%, ${props.theme.colors.accent2} 100%)`
            : `linear-gradient(270deg, ${props.theme.colors.accent2} 0%, ${props.theme.colors.accent3} 100%)`};

    margin: ${(props) => (props.divider ? "4rem 0" : "")};

    @media ${(props) => props.theme.breakpoints.md} {
        width: 75px;
        height: 2.5px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 50px;
        height: 1.25px;
    }
`;
export const SectionSubText = styled.p`
    max-width: 800px;
    font-weight: 300;
    font-size: 18px;
    line-height: 32px;
    color: ${(props) => props.theme.colors.primaryMuted};

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 672px;
        font-size: 16px;
        line-height: 25px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 14px;
        line-height: 22px;
    }
`;
export const SecondaryBtn = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background: none;
    border: 1px solid ${(props) => props.theme.colors.primaryMuted};
    box-sizing: border-box;
    border-radius: 999px;
    padding: 16px 24px;
    font-weight: 600;
    font-size: 18px;
    line-height: 16px;
    width: fit-content;
    margin-top: 32px;
    margin-bottom: 80px;
    cursor: pointer;
    transition: 0.4s ease;
    &:focus {
        outline: none;
    }

    &:hover {
        color: ${(props) => props.theme.colors.light};
        background: ${(props) => props.theme.colors.primary};
        border: 1px solid ${(props) => props.theme.colors.primary};
    }

    &:active {
        background: #e0e4eb;
        border: 1px solid #304169;
        box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
            inset 0px 0px 4px rgba(20, 20, 55, 0.3);
    }

    @media ${(props) => props.theme.breakpoints.md} {
        margin-top: 24px;
        margin-bottom: 64px;
        padding: 16px 24px;
        width: fit-content;
        font-size: 20px;
        line-height: 20px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin-top: 16px;
        margin-bottom: 40px;
        padding: 8px 16px;
        width: 100%;
        font-size: 14px;
        line-height: 16px;
    }
`;

export const ButtonBack = styled.div`
    position: relative;
    width: ${({ alt }) => (alt ? "160px" : "260px")};
    height: ${({ alt }) => (alt ? "40px" : "60px")};
    font-family: ${(props) => props.theme.fonts.title};
    font-size: ${({ alt }) => (alt ? "20px" : "24px")};
    font-weight: 600;
    border-radius: 50px;
    color: ${(props) => props.theme.colors.light};
    background: ${(props) =>
        !props.alt
            ? `linear-gradient(120deg, ${props.theme.colors.accent1} -15%, ${props.theme.colors.primary} 50%, ${props.theme.colors.accent2} 115%)`
            : props.theme.colors.accent1Muted};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({ disabled }) => (disabled ? ".5" : ".85")};
    transition: 0.4s ease;
    margin: ${({ alt, form }) => (alt || form ? "0" : "0 0 80px")};
    cursor: pointer;
    overflow: hidden;

    &:hover {
        opacity: 1;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        width: ${({ alt }) => (alt ? "150px" : "184px")};
        height: ${({ alt }) => (alt ? "52px" : "48px")};
        font-size: ${({ alt }) => (alt ? "20px" : "16px")};
        margin-bottom: ${({ alt }) => (alt ? "0" : "64px")};
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 150px;
        height: 36px;
        font-size: 16px;
        margin-bottom: ${({ alt }) => (alt ? "0" : "32px")};
    }
`;

export const ButtonFront = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: ${({ alt }) => (alt ? "20px" : "24px")};
    font-weight: 600;
    border-radius: 50px;
    border: none;
    color: ${(props) => props.theme.colors.light};
    background: ${(props) =>
        !props.alt
            ? `linear-gradient(120deg, ${props.theme.colors.accent1} 0%, ${props.theme.colors.primary} 50%, ${props.theme.colors.accent2} 100%)`
            : props.theme.colors.accent1Muted};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
    transition: 0.4s ease;
    cursor: pointer;
    box-shadow: ${({ disabled }) =>
        disabled
            ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)"
            : "none"};

    &:hover {
        opacity: 0;
    }
    &:focus {
        outline: none;
    }
    &:active {
        opacity: 1;
        box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
            inset 0px 0px 4px rgba(20, 20, 55, 0.3);
    }

    &:disabled {
        background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
        opacity: 0.5;
        box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
            inset 0px 0px 4px rgba(20, 20, 55, 0.3);
    }

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: ${({ alt }) => (alt ? "20px" : "16px")};
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
    }
`;

export const LinkContainer = styled.div`
    margin-left: ${({ large }) => (large ? "24px" : "16px")};
    transition: 0.3s ease;
    justify-content: center;
    border-radius: 50px;
    padding: 8px;

    &:hover {
        background-color: #212d45;
        transform: scale(1.2);
        cursor: pointer;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        margin-left: ${({ large }) => (large ? "16px" : "8px")};
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        margin-left: ${({ large }) => (large ? "0" : "8px")};
    }
`;

export const LinkIconImg = styled.div`
    display: flex;
    height: ${({ large }) => (large ? "32px" : "24px")};

    @media ${(props) => props.theme.breakpoints.md} {
        height: ${({ nav }) => (nav ? "16px" : "24px")};
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        height: ${({ large }) => (large ? "32px" : "16px")};
    }
`;
