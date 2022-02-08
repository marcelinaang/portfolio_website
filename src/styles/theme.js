import { ThemeProvider } from "styled-components";

import GlobalStyles from "./globals";
import { lightTheme, darkTheme } from "../themes/variables";

import { useDarkMode } from "../components/DarkToggler/useDarkMode";
import { useScrollHandler } from "../components/Modal/useScrollHandler";

const Theme = (props) => {
    const { children } = { ...props };
    const { theme } = useDarkMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;
    const {scrollable} = useScrollHandler();

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles scrollable={scrollable} />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
