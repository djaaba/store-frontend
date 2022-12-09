import cn from "classnames";
import Slider from "react-slick";
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { HeaderBottomProps } from "./HeaderBottom.props";
import styles from "./HeaderBottom.module.css";
import { Ptag, SmoothText } from "..";
import { getId } from "../../utils";
import React from "react";

export const HeaderBottom = forwardRef(({ ...props }: HeaderBottomProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    
    const slides: Array<String> = [
      "Все акции",
      "Кэшбэк",
      "Телевизоры",
      "Айфоны 14 ",
      "Ноутбуки",
      "Экспресс-доставка",
      "Гарантия лучшей цены",
      "Лучшие предложения",
      "Холодильники",
    ];

    const handleDown = (e: React.MouseEvent<HTMLDListElement>, ball: any) => {
      // ball = ball.parentNode;
      ball = ball.parentNode.parentNode;

      if (ball.tagName === "DIV") return;

      var coords = ball.getBoundingClientRect().left;
      var shiftX = e.pageX - coords;

      ball.style.position = "absolute";
      moveAt(e);

      function moveAt(e: any) {
        // if (ball.parentElement.offsetLeft < e.pageX - shiftX) return;
        // if (ball.parentElement.clientWidth > e.pageX + 30 - shiftX) return;
        ball.style.left = e.pageX - shiftX - 67 + "px";
      }

      document.onmousemove = function (e) {
        moveAt(e);
      };

      document.onmouseup = function () {
        document.onmousemove = null;
        ball.onmouseup = null;
      };

      ball.ondragstart = function () {
        return false;
      };
    };

    return (
      <>
        <div className={cn(styles.headerBottom, "wrapper")} ref={ref}>
          <p className={styles.HeaderBottomBtn}>-</p>
          <div className={cn(styles.HeaderBottomContainer)}>
            <ul
              className={styles.HeaderBottomSlider}
              onMouseDown={(e) => handleDown(e, e.target)}
            >
              {slides.map((title) => (
                <SmoothText color="gray" key={getId()}>
                  <Ptag upperCase className={styles.HeaderBottomSlide}>
                    {title}
                  </Ptag>
                </SmoothText>
              ))}
            </ul>
          </div>
          <div className={styles.HeaderBottomBtn}>+</div>
        </div>
      </>
    );
  }
);
