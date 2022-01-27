import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

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

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <BrandLink>
                    <BrandImage src="/favicon.ico" />
                    <Span>Marcelina Anggraeni</Span>
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
            <SocialIcons href="https://github.com/marcelinaang/">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/marcelinaang/">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://telegram.me/marcelina_ang">
                <FaTelegram size="3rem" />
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
