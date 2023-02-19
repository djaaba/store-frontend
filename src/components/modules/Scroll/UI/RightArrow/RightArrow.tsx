import { useContext, useEffect, useState } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import { Arrow } from "../Arrow/Arrow";
import { Arrow as ArrowIcon } from '../../../../UI';

export const RightArrow = ({ }): JSX.Element => {

    const { isLastItemVisible, scrollNext, visibleElements } =
        useContext(VisibilityContext);

    const [disabled, setDisabled] = useState(
        !visibleElements.length && isLastItemVisible
    );
    useEffect(() => {
        if (visibleElements.length) {
            setDisabled(isLastItemVisible);
        }
    }, [isLastItemVisible, visibleElements]);

    return (
        <Arrow disabled={disabled} onClick={() => scrollNext()}>
            <ArrowIcon direction="right" />
        </Arrow>
    );
}