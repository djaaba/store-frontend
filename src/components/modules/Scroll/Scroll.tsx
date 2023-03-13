import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import styles from "./Scroll.module.css";
import { ScrollProps } from "./Scroll.props";

import { LeftArrow, RightArrow } from "./UI";
import { useDrag } from "./hooks/useDrag";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export const Scroll = ({ children, ...props }: ScrollProps): JSX.Element => {
    const { dragStart, dragStop, dragMove } = useDrag();
    const handleDrag =
        ({ scrollContainer }: scrollVisibilityApiType) =>
            (ev: React.MouseEvent) =>
                dragMove(ev, (posDiff) => {
                    if (scrollContainer.current) {
                        scrollContainer.current.scrollLeft += posDiff;
                    }
                });

    return (
        <>
            <div {...props} onMouseLeave={dragStop}>
                <ScrollMenu
                    LeftArrow={LeftArrow}
                    RightArrow={RightArrow}
                    onMouseDown={() => dragStart}
                    onMouseUp={() => dragStop}
                    onMouseMove={handleDrag}
                    transitionDuration={900}
                    transitionBehavior={"smooth"}
                >
                    {children}
                </ScrollMenu>
            </div>
        </>
    );
};
