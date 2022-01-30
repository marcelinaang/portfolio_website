import React from "react";
import { func, string } from "prop-types";

import { ToggleWrapper, Toggler, ToggleLabel } from "./DarkTogglerStyles";

import {FaSun, FaMoon} from 'react-icons/fa'

const Toggle = ({ theme, toggleTheme }) => (
    <>
        <FaSun />
        <ToggleWrapper>
            <Toggler
                id="toggle"
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
            />
            <ToggleLabel htmlFor="toggle" />
        </ToggleWrapper>
        <FaMoon />
    </>
);

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
};
export default Toggle;
