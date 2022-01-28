import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

import {
    BackgroundImg,
    BlogCard,
    CardContent,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Intro,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
    Modal,
    ModalContent,
    CloseButton,
    ModalHeader,
    LinkName,
} from "./ProjectsStyles";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";

import { projects } from "../../constants/constants";

const Projects = () => {
    const [modalDisplay, setModalDisplay] = useState("none");
    const [projectDetails, setProjectDetails] = useState({});

    const handleOpen = (selectedProject) => {
        setModalDisplay("flex");
        setProjectDetails(selectedProject);
    };

    const handleClose = () => {
        setModalDisplay("none");
    };

    return (
        <Section id="projects">
            <SectionDivider />
            <SectionTitle main>Projects</SectionTitle>
            <GridContainer>
                {projects.map(
                    ({
                        id,
                        title,
                        subtitle,
                        image,
                        description,
                        tags,
                        source,
                        visit,
                    }) => (
                        <BlogCard
                            key={id}
                            onClick={() =>
                                handleOpen({
                                    title,
                                    description,
                                    image,
                                    tags,
                                    source,
                                    visit,
                                })
                            }
                        >
                            <BackgroundImg src={image} />
                            <CardContent>
                                <TitleContent>
                                    <HeaderThree>{title}</HeaderThree>
                                </TitleContent>
                                <Hr />
                                <Intro>{subtitle}</Intro>
                                {/* <CardInfo>{description}</CardInfo> 
                        <div>
                            <Hr />
                            <TitleContent>Stack</TitleContent>
                            <TagList>
                                {tags.map((tag, i) => (
                                    <Tag key={i}>{tag}</Tag>
                                ))}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={source}>
                                <FaGithub />
                                Code
                            </ExternalLinks>
                            <ExternalLinks href={visit}>
                                <BiLinkExternal />
                                Visit
                            </ExternalLinks>
                        </UtilityList>
                        */}
                            </CardContent>
                        </BlogCard>
                    )
                )}
            </GridContainer>
            <Modal display={modalDisplay}>
                <ModalContent>
                    <ModalHeader>
                        <TitleContent>
                            <HeaderThree>{projectDetails.title}</HeaderThree>
                        </TitleContent>
                        <CloseButton onClick={handleClose}>&times;</CloseButton>
                    </ModalHeader>
                    <Img src={projectDetails.image} />
                    <CardInfo>{projectDetails.description}</CardInfo>
                    <div>
                        <Hr />
                        <TitleContent>Stack</TitleContent>
                        <TagList>
                            {projectDetails?.tags?.map((tag, i) => (
                                <Tag key={i}>{tag}</Tag>
                            ))}
                        </TagList>
                    </div>
                    <UtilityList>
                        <ExternalLinks href={projectDetails.source}>
                            <FaGithub />
                            <LinkName>Code</LinkName>
                        </ExternalLinks>
                        <ExternalLinks href={projectDetails.visit}>
                            <BiLinkExternal />
                            <LinkName>Visit</LinkName>
                        </ExternalLinks>
                    </UtilityList>
                </ModalContent>
            </Modal>
        </Section>
    );
};

export default Projects;
