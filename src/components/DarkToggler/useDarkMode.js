import React, { useContext, useEffect, useState } from "react";

const DarkModeContext = React.createContext();

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};

export const DarkModeProvider = (props) => {
    const { children } = { ...props };
    const [theme, setTheme] = useState("dark");
    const [loadingTheme, setLoadingTheme] = useState(true);

    const setMode = (mode) => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };

    const themeToggler = () => {
        theme === "light" ? setMode("dark") : setMode("light");
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
        setLoadingTheme(false)
    }, []);

    const value = {
        loadingTheme, 
        theme,
        themeToggler,
    };

    return (
        <DarkModeContext.Provider value={value}>
            {loadingTheme ? null : children}
        </DarkModeContext.Provider>
    );
};
