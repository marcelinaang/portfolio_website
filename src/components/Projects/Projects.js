import React, { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import Modal from "../Modal/Modal";

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
import { useScrollHandler } from "../Modal/useScrollHandler";
import { lightTheme, darkTheme } from "../../themes/variables";
import { useDarkMode } from "../../components/DarkToggler/useDarkMode";

const TOTAL_CAROUSEL_COUNT = projects.length;

const Projects = () => {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [projectDetails, setProjectDetails] = useState({});
    const { setScrollable } = useScrollHandler();
    const [activeItem, setActiveItem] = useState(0);
    const carouselRef = useRef();
    const [screenWidth, setScreenWidth] = useState(getWindowDimensions());

    const { theme } = useDarkMode();
    const [mdBreakPoint] =
        theme === "light"
            ? [
                  parseInt(
                      lightTheme.breakpoints.md
                          .split(" ")[3]
                          .substring(
                              0,
                              lightTheme.breakpoints.md.split(" ")[3].length - 3
                          )
                  ),
              ]
            : [
                  parseInt(
                      darkTheme.breakpoints.md
                          .split(" ")[3]
                          .substring(
                              0,
                              lightTheme.breakpoints.md.split(" ")[3].length - 3
                          )
                  ),
              ];

    const scroll = (node, left) => {
        return node.scrollTo({ left, behavior: "smooth" });
    };

    const handleClick = (e, i, item) => {
        e.preventDefault();

        // only show description for medium screen and below when clicked for the first time
        if (screenWidth <= mdBreakPoint && activeItem != i) {
            if (carouselRef.current) {
                const scrollLeft = Math.floor(
                    carouselRef.current.scrollWidth * (i / projects.length)
                );

                scroll(carouselRef.current, scrollLeft);
                setActiveItem(i);
            }
        } else {
            // show modal
            handleOpen(item);
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            const index = Math.round(
                (carouselRef.current.scrollLeft /
                    carouselRef.current.scrollWidth) *
                    projects.length
            );

            setActiveItem(index);
        }
    };

    const handleOpen = (selectedProject) => {
        setModalDisplay(true);
        setProjectDetails(selectedProject);
        setScrollable(false);
    };

    const handleClose = () => {
        setModalDisplay(false);
        setScrollable(true);
    };

    function getWindowDimensions() {
        return window.innerWidth;
    }

    // snap back to beginning of scroll when window is resized
    // avoids a bug where content is covered up if coming from smaller screen
    useEffect(() => {
        const handleResize = () => {
            scroll(carouselRef.current, 0);
            setScreenWidth(getWindowDimensions());
        };

        const handler = window.addEventListener("resize", handleResize);

        return handler;
    }, []);

    return (
        <Section id="projects">
            <SectionDivider />
            <SectionTitle main>Projects</SectionTitle>
            <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
                {projects.map(
                    (
                        {
                            id,
                            title,
                            subtitle,
                            image,
                            description,
                            tags,
                            source,
                            visit,
                        },
                        index
                    ) => (
                        <CarouselMobileScrollNode
                            key={index}
                            final={index === TOTAL_CAROUSEL_COUNT - 1}
                        >
                            <BlogCard
                                index={index}
                                active={activeItem}
                                key={id}
                                onClick={(e) =>
                                    handleClick(e, index, {
                                        id,
                                        title,
                                        subtitle,
                                        image,
                                        description,
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
                        onClick={(e) => handleClick(e, index, item)}
                        type="button"
                    >
                        <CarouselButtonDot active={activeItem} />
                    </CarouselButton>
                ))}
            </CarouselButtons>
            <Modal
                isOpen={modalDisplay}
                handleClose={handleClose}
                title={projectDetails.title}
            >
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
                    {projectDetails.source && (
                        <ExternalLinks
                            href={projectDetails.source}
                            target="_blank"
                        >
                            <FaGithub />
                            <LinkName>Code</LinkName>
                        </ExternalLinks>
                    )}
                    {projectDetails.visit && (
                        <ExternalLinks
                            href={projectDetails.visit}
                            target="_blank"
                        >
                            <BiLinkExternal />
                            <LinkName>Visit</LinkName>
                        </ExternalLinks>
                    )}
                </UtilityList>
            </Modal>
        </Section>
    );
};

export default Projects;
