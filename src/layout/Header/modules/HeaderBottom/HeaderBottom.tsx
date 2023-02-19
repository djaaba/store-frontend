import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

import { HeaderBottomProps } from "./HeaderBottom.props";
import styles from "./HeaderBottom.module.css";

import { Scroll } from "../../../../components/modules";

export const HeaderBottom = forwardRef(
    (
        { slides, className, ...props }: HeaderBottomProps,
        ref: ForwardedRef<any>
    ): JSX.Element => {

        return (
            <>
                <section className={cn("wrapper", className)} ref={ref}>
                    <Scroll slides={slides}/>
                </section>
            </>
        );
    }
);
