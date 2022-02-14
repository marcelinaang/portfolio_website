import Link from "next/link";
import React from "react";
import Toggle from "../DarkToggler/DarkToggler";
import { useDarkMode } from "../DarkToggler/useDarkMode";

import {
    BrandImage,
    BrandLink,
    Container,
    Div1,
    Div2,
    Div3,
    LinkWrapper,
    NavLink,
} from "./HeaderStyles";

const Header = () => {
    const { theme, themeToggler } = useDarkMode();

    return (
        <Container>
            <Div1>
                <Link href="/">
                    <BrandLink>
                        <BrandImage src="/images/brand.png" alt="brand logo"/>
                    </BrandLink>
                </Link>
            </Div1>
            <Div2>
                <LinkWrapper>
                    <Link href="#projects">
                        <NavLink>Projects</NavLink>
                    </Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link href="#tech">
                        <NavLink>Technologies</NavLink>
                    </Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link href="#about">
                        <NavLink>About</NavLink>
                    </Link>
                </LinkWrapper>
            </Div2>
            <Div3>
                <Toggle theme={theme} toggleTheme={themeToggler} />
            </Div3>
        </Container>
    );
};

export default Header;
