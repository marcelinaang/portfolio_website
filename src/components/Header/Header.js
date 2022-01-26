import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {FaTelegram} from 'react-icons/fa'
import { DiCssdeck } from "react-icons/di";

import {
    Container,
    Div1,
    Div2,
    Div3,
    NavLink,
    SocialIcons,
    Span
} from "./HeaderStyles";

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <a
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                    }}
                >
                    <DiCssdeck size="3rem" />
                    <Span>Portfolio</Span>
                </a>
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
