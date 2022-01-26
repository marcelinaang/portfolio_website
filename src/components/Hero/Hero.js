import React from "react";

import {
    Section,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle mian center>
                Welcome to <br />
                My Professional Portfolio
            </SectionTitle>
            <SectionText>I'm Marcel, a front-end web developer.</SectionText>
            <Button onClick={() => (window.location = "mailto:marcelina.ang@gmail.com")}>
                Contact Me
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
