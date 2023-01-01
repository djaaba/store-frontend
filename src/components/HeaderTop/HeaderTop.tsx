import cn from "classnames";
import { Link } from "react-router-dom";
import { CompassIcon, FontAwesomeIcon, PhoneIcon, Ptag, SmoothText } from "..";

import styles from "./HeaderTop.module.css";
import { HeaderTopProps } from "./HeaderTop.props";

export const HeaderTop = ({ ...props }: HeaderTopProps): JSX.Element => {
  return (
    <div className={styles.headerTopColorDark}>
      <div
        className={cn(styles.headerTop, "wrapper", "wrapperPadding")}
        {...props}
      >
        <div className={styles.headerTopNavBar}>
          <Link to="/">
            <SmoothText color="white" className="iconWithText">
              <FontAwesomeIcon icon={CompassIcon} />
              <Ptag>Ростов-на-Дону</Ptag>
            </SmoothText>
          </Link>
          <Link to="/counter">
            <SmoothText color="white">
              <Ptag>Магазины</Ptag>
            </SmoothText>
          </Link>
          <Link to="/counter1">
            <SmoothText color="white">
              <Ptag>Доставка</Ptag>
            </SmoothText>
          </Link>
        </div>
        <div className={styles.headerTopNavBar}>
          <Link to="/">
            <SmoothText color="white">
              <Ptag>Блог «М.Клик»</Ptag>
            </SmoothText>
          </Link>
          <Link to="/">
            <SmoothText color="white">
              <Ptag>M.Club</Ptag>
            </SmoothText>
          </Link>
          <Link to="/">
            <SmoothText color="white">
              <Ptag>Для бизнеса</Ptag>
            </SmoothText>
          </Link>
          <Link to="/">
            <SmoothText color="white" className="iconWithText">
              <FontAwesomeIcon icon={PhoneIcon} />
              <Ptag className={cn("mobile", "tablet")}>8-800-600-7775</Ptag>
            </SmoothText>
          </Link>
        </div>
      </div>
    </div>
  );
};
