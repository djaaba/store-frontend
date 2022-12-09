import cn from "classnames";
import React from "react";
import {
  ForwardedRef,
  forwardRef,
} from "react";

import { HeaderBottomProps } from "./HeaderBottom.props";
import styles from "./HeaderBottom.module.css";
import { Ptag, SmoothText } from "..";
import { getId } from "../../utils";

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

    const handleMove = (e: React.TouchEvent<HTMLDListElement>, el: any) => {
      el = el.parentNode.parentNode;

      if (el.tagName === "DIV") return;

      var coords = el.getBoundingClientRect().left;
      var shiftX = e.changedTouches[0].pageX - coords;

      
      el.style.position = "absolute";
      moveAt(e);
      
      function moveAt(e: any) {
        // if (el.parentElement.offsetLeft < e.pageX - shiftX) return;
        // if (el.parentElement.clientWidth > e.pageX + 30 - shiftX) return;
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
      moveAt(e);

      function moveAt(e: any) {
        // if (el.parentElement.offsetLeft < e.pageX - shiftX) return;
        // if (el.parentElement.clientWidth > e.pageX + 30 - shiftX) return;
        el.style.left = e.pageX - shiftX - 67 + "px";
      }

      document.onmousemove = function (e) {
        moveAt(e);
      };

      document.onmouseup = function () {
        document.onmousemove = null;
        el.onmouseup = null;
      };

      el.ondragstart = function () {
        return false;
      };
    };

    return (
      <>
        <div className={cn(styles.headerBottom, "wrapper", "wrapperPadding")} ref={ref}>
          <p className={styles.headerBottomBtn}>-</p>
          <div className={cn(styles.headerBottomContainer)}>
            <ul
              className={styles.headerBottomSlider}
              onMouseDown={e => handleDown(e, e.target)}
              onTouchStart={e => handleMove(e, e.target)}
            >
              {slides.map((title) => (
                <SmoothText color="gray" key={getId()}>
                  <Ptag upperCase className={styles.headerBottomSlide}>
                    {title}
                  </Ptag>
                </SmoothText>
              ))}
            </ul>
          </div>
          <div className={styles.headerBottomBtn}>+</div>
        </div>
      </>
    );
  }
);
