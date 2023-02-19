import cn from "classnames";
import React from "react";
import { ForwardedRef, forwardRef } from "react";

import { HeaderBottomProps } from "./HeaderBottom.props";
import styles from "./HeaderBottom.module.css";

import { Ptag, SmoothText } from "../../../../components/UI";
import { getId } from "../../../../utils";

export const HeaderBottom = forwardRef(
    (
        { slides, className, ...props }: HeaderBottomProps,
        ref: ForwardedRef<any>
    ): JSX.Element => {
        const handleMove = (e: React.TouchEvent<HTMLDListElement>, el: any) => {
            el = el.parentNode.parentNode;

            if (el.tagName === "DIV") return;

            var coords = el.getBoundingClientRect().left;
            var shiftX = e.changedTouches[0].pageX - coords;

            el.style.position = "absolute";
            moveAt(e);

            function moveAt(e: any) {
                el.style.left = e.changedTouches[0].pageX - shiftX - 67 + "px";
            }

            document.ontouchmove = function (e) {
                moveAt(e);
            };

            document.ontouchend = function () {
                document.ontouchmove = null;
                el.onmouseup = null;
            };

            el.ontouchstart = function () {
                return false;
            };
        };

        const handleDown = (e: React.MouseEvent<HTMLDListElement>, el: any) => {
            el = el.parentNode.parentNode;

            if (el.tagName === "DIV") return;

            var coords = el.getBoundingClientRect().left;
            var shiftX = e.pageX - coords;

            el.style.position = "absolute";

            function moveAt(e: any) {
                el.style.left = e.pageX - 67 - shiftX + "px";
            }

            document.onmousemove = function (e) {
                moveAt(e);
            };

            document.onmouseup = function (e) {
                document.onmousemove = null;
                el.onmouseup = null;
            };
        };

        return (
            <>
                <section className={cn(styles.wrapper, className)} ref={ref}>
                    <button className={styles.btn}>
                        <div className="left">
                            <i />
                        </div>
                    </button>
                    <div className={cn(styles.container)}>
                        <ul
                            className={styles.slider}
                            onMouseDown={(e) => handleDown(e, e.target)}
                            onTouchStart={(e) => handleMove(e, e.target)}
                        >
                            {slides.map((title) => (
                                <SmoothText color="gray" key={getId()}>
                                    <Ptag upperCase className={styles.elem}>
                                        {title}
                                    </Ptag>
                                </SmoothText>
                            ))}
                        </ul>
                    </div>
                    <button className={styles.btn}>
                        <div className="right">
                            <i />
                        </div>
                    </button>
                </section>
            </>
        );
    }
);
