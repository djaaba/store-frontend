import cn from "classnames";
import { useEffect, useLayoutEffect, useRef } from "react";

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
      if (divRef.current) {
        if (window.pageYOffset < 60) {
          divRef.current.style.display = "flex";
        } else {
          divRef.current.style.display = "none";
        }
      }
    };
  }, []);

  return (
    <header className={cn(className, styles.header)} {...props}>
      <HeaderTop />
      <HeaderMiddle />
      <React.Fragment>
        <HeaderBottom ref={divRef} />
        <hr />
      </React.Fragment>
    </header>
  );
};
