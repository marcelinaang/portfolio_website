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
    NavLink,
    SocialIcons,
    Span,
} from "./HeaderStyles";

const Header = () => {
    const { theme, themeToggler } = useDarkMode();

    return (
        <Container>
            <Div1>
                <Link href="/">
                    <BrandLink>
                        <BrandImage src="/images/brand.png" />
                    </BrandLink>
                </Link>
            </Div1>
            <Div2>
                <li>
                    <Link href="#projects">
                        <NavLink>Projects</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#tech">
                        <NavLink>Technologies</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#about">
                        <NavLink>About</NavLink>
                    </Link>
                </li>
            </Div2>
            <Div3>
                <Toggle theme={theme} toggleTheme={themeToggler} />
            </Div3>
        </Container>
    );
};

export default Header;
