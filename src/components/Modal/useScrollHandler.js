import React, { useContext, useState } from "react";

const OuterScrollContext = React.createContext();

export const useScrollHandler = () => {
    return useContext(OuterScrollContext);
};

export const OuterScrollProvider = (props) => {
    const { children } = { ...props };
    const [scrollable, setScrollable] = useState(true);

    const value = { scrollable, setScrollable };

    return (
        <OuterScrollContext.Provider value={value}>
            {children}
        </OuterScrollContext.Provider>
    );
};
