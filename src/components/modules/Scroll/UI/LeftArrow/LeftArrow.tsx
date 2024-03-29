import { useContext, useEffect, useState } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Arrow } from "../Arrow/Arrow";

import { Arrow as ArrowIcon } from '../../../../UI';

export const LeftArrow = ({ }): JSX.Element => {

    const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
        useContext(VisibilityContext);

    const [disabled, setDisabled] = useState(
        !initComplete || (initComplete && isFirstItemVisible)
    );
    useEffect(() => {
        if (visibleElements.length) {
            setDisabled(isFirstItemVisible);
        }
    }, [isFirstItemVisible, visibleElements]);

    return (
        <Arrow disabled={disabled} onClick={() => scrollPrev()}>
            <ArrowIcon direction="left" />
        </Arrow>
    );
}