import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

import { HeaderBottomProps } from "./HeaderBottom.props";
import styles from "./HeaderBottom.module.css";

import { Scroll } from "../../../../components/modules";
import { getId } from "../../../../utils";
import { HeaderNavCard } from "../../UI";

export const HeaderBottom = forwardRef(
    (
        { slides, className, ...props }: HeaderBottomProps,
        ref: ForwardedRef<any>
    ): JSX.Element => {
        return (
            <>
                <section
                    {...props}
                    className={cn("wrapper", className)}
                    ref={ref}
                >
                    <Scroll>
                        {slides.map((item, index) => (
                            // getId() key returns warn in console for no reason :/
                            <HeaderNavCard title={item} key={index} />
                        ))}
                    </Scroll>
                </section>
            </>
        );
    }
);
