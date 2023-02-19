import { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import styles from "./Scroll.module.css";
import { ScrollProps } from "./Scroll.props";

import { getId } from "../../../utils";
// import { list as slides } from "./helpers/list";
import { Card, LeftArrow, RightArrow } from "./UI";
import { useDrag } from "./hooks/useDrag";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export const Scroll = ({ slides, ...props }: ScrollProps): JSX.Element => {
    const [items] = useState(slides);

    // for drag by mouse
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
                    {items.map((item) => (
                        <Card
                            title={item}
                            itemId={getId()}
                            key={getId()}
                        />
                    ))}
                </ScrollMenu>
            </div>
        </>
    );
};