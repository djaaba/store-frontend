import cn from "classnames";
import { useLayoutEffect, useRef } from "react";

import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import {
  HeaderTop,
  HeaderMiddle,
  HeaderBottom,
} from "./../../components/index";
import React from "react";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    window.onscroll = function () {
        if (window.pageYOffset < 1) {
          divRef.current!.style.display = "flex";
          return;
        }
          divRef.current!.style.display = "none";
    };
  }, []);

  return (
    <header
      className={cn(className, styles.header, styles.wrapperPadding)}
      {...props}
    >
      <HeaderTop />
      <HeaderMiddle />
      <React.Fragment>
        <HeaderBottom ref={divRef} />
        <hr />
      </React.Fragment>
    </header>
  );
};
