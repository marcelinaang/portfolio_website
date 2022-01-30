import { ThemeProvider } from "styled-components";

import GlobalStyles from "./globals";
import { lightTheme, darkTheme } from "../themes/variables";

import { useDarkMode } from "../components/DarkToggler/useDarkMode";

const Theme = (props) => {
    const { children } = { ...props };
    const { theme } = useDarkMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
