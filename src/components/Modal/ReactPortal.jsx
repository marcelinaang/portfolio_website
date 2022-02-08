import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

function wrapElement(wrapperId) {
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}

const ReactPortal = ({ children, wrapperId }) => {
    const [wrapperElement, setWrapperElement] = useState(null);

    useLayoutEffect(() => {
        let portalCreated = false;
        let element = document.getElementById(wrapperId);

        if (!element) {
            element = wrapElement(wrapperId);
            portalCreated = true;
        }
        setWrapperElement(element);

        return () => {
            // delete the programatically created element
            if (portalCreated && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);

    // wrapperElement state will be null on very first render.
    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
};

export default ReactPortal;
