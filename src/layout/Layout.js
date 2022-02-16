import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <h1 style={{ display: "none" }}>
                Marcelina Anggraeni - Professional Portfolio - Front-end Web
                Developer
            </h1>
            <main>{children}</main>
            <Footer />
        </Container>
    );
};
