import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <SectionTitle main>Technologies</SectionTitle>
        <SectionText>
            I've worked with a range of technologies in web development world.
            From back-end, front-end, to design.
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem" />
                <br />
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experienced with <br />
                        React.js and Next.js
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <br />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experienced with <br />
                        Node.js, Express.js and Databases (PostgreSQL, MySQL,
                        etc.)
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <FiFigma size="2rem" />
                <br />
                <ListContainer>
                    <ListTitle>UI/UX</ListTitle>
                    <ListParagraph>
                        Experienced with <br />
                        Figma
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
