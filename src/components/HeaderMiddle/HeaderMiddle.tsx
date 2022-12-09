import cn from "classnames";
import { Link } from "react-router-dom";

import {
  BarsIcon,
  Button,
  CartShoppingIcon,
  ClockIcon,
  FontAwesomeIcon,
  Input,
  Ptag,
  SignalIcon,
  SmoothText,
  SolidHeartIcon,
  UserIcon,
} from "..";
import logo from "./mvideo_logo.svg";
import styles from "./HeaderMiddle.module.css";
import { HeaderMiddleProps } from "./HeaderMiddle.props";

import { getId } from "../../utils";
import { INav } from "../../interfaces";

const inputPlaceholder: string = "Искать товары с кэшбэком до 100%";

export const HeaderMiddle = ({ ...props }: HeaderMiddleProps): JSX.Element => {
  const navLinks: Array<INav> = [
    { link: "status", icon: ClockIcon, text: "Статус заказа" },
    { link: "login", icon: UserIcon, text: "Войти" },
    { link: "compare", icon: SignalIcon, text: "Сравнение" },
    { link: "favorite", icon: SolidHeartIcon, text: "Избранное" },
    { link: "cart", icon: CartShoppingIcon, text: "Корзина" },
  ];

  return (
    <div className={styles.headerMiddleColorWhite}>
      <div
        className={cn(
          styles.headerMiddle,
          styles.headerMiddlePadding,
          styles.headerMiddleWrapper,
          "wrapper",
          "wrapperPadding"
        )}
        {...props}
      >
        <div className={styles.headerMiddleWrapper}>
          <Link to="/">
            <img className={styles.headerMiddleImage} src={logo} alt="" />
          </Link>
          <Button size="medium" color="red" icon>
            <FontAwesomeIcon icon={BarsIcon} />
            <p className={cn("mobile", "tablet")}>Каталог</p>
          </Button>
        </div>
        <div className={styles.headerMiddleContainer}>
          <Input placeholder={inputPlaceholder} />
        </div>
        <div className={cn(styles.headerMiddleNavTab)}>
          {navLinks.map((obj) => (
            <div key={getId()}>
              <Link to={obj.link}>
                <SmoothText color="gray" className={styles.headerMiddleTab}>
                  <FontAwesomeIcon icon={obj.icon} />
                  <Ptag className={cn("mobile", "tablet")}>{obj.text}</Ptag>
                </SmoothText>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
