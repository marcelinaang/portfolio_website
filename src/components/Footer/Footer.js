import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

import {
    FooterWrapper,
    SocialContainer,
    SocialIconsContainer,
    SocialIcons
} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterWrapper>
            <SocialIconsContainer>
                <SocialContainer>
                    <SocialIcons href="mailto:marcelina.ang@gmail.com" target="_blank">
                        <AiFillMail size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://github.com/marcelinaang/" target="_blank">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/marcelinaang/" target="_blank">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://telegram.me/marcelina_ang" target="_blank">
                        <FaTelegram size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
