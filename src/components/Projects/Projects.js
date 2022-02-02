import React, { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

import {
    BackgroundImg,
    BlogCard,
    CardContent,
    CardInfo,
    ExternalLinks,
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
    CarouselContainer,
    CarouselMobileScrollNode,
    CarouselButtons,
    CarouselButton,
    CarouselButtonDot,
} from "./ProjectsStyles";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";

import { projects } from "../../constants/constants";
import { useScrollHandler } from "./useScrollHandler";

const TOTAL_CAROUSEL_COUNT = projects.length;

const Projects = () => {
    const [modalDisplay, setModalDisplay] = useState("none");
    const [projectDetails, setProjectDetails] = useState({});
    const { setScrollable } = useScrollHandler();
    const [activeItem, setActiveItem] = useState(0);
    const carouselRef = useRef();

    const scroll = (node, left) => {
        return node.scrollTo({ left, behavior: "smooth" });
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            const index = Math.round(
                (carouselRef.current.scrollLeft /
                    (carouselRef.current.scrollWidth * 0.7)) *
                    projects.length
            );

            setActiveItem(index);
        }
    };

    const handleOpen = (selectedProject) => {
        setModalDisplay("flex");
        setProjectDetails(selectedProject);
        setScrollable(false);
    };

    const handleClose = () => {
        setModalDisplay("none");
        setScrollable(true);
    };

    // snap back to beginning of scroll when window is resized
    // avoids a bug where content is covered up if coming from smaller screen
    useEffect(() => {
        const handleResize = () => {
            scroll(carouselRef.current, 0);
        };

        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <Section id="projects">
            <SectionDivider />
            <SectionTitle main>Projects</SectionTitle>
            <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
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
                    }, index) => (
                        <CarouselMobileScrollNode
                            key={index}
                            final={index === TOTAL_CAROUSEL_COUNT - 1}
                        >
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
                                    <Intro>{subtitle}</Intro>
                                </CardContent>
                            </BlogCard>
                        </CarouselMobileScrollNode>
                    )
                )}
            </CarouselContainer>
            <CarouselButtons>
                {projects.map((item, index) => (
                    <CarouselButton
                        key={index}
                        index={index}
                        active={activeItem}
                        onClick={(e) => handleClick(e, index)}
                        type="button"
                    >
                        <CarouselButtonDot active={activeItem} />
                    </CarouselButton>
                ))}
            </CarouselButtons>
            <Modal display={modalDisplay}>
                <ModalContent>
                    <ModalHeader>
                        <TitleContent>
                            <HeaderThree modal>
                                {projectDetails.title}
                            </HeaderThree>
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
                        <ExternalLinks
                            href={projectDetails.visit}
                            target="_blank"
                        >
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
