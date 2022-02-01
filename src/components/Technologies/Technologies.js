import React from "react";
import { DiAppstore, DiFirebase, DiReact } from "react-icons/di";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    List,
    ListContainer,
    ListIcon,
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
                <ListIcon>
                    <DiReact size="3rem" />
                </ListIcon>
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experienced with React.js and Next.js
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListIcon>
                    <DiFirebase size="3rem" />
                </ListIcon>
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experienced with Node.js, Express.js and Databases
                        (PostgreSQL, MySQL, etc.)
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListIcon>
                    <DiAppstore size="3rem" />
                </ListIcon>
                <ListContainer>
                    <ListTitle>UI/UX</ListTitle>
                    <ListParagraph>Experienced with Figma</ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
