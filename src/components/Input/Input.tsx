import { Button, FontAwesomeIcon, MagnifyingGlassIcon, XmarkIcon } from "..";

import styles from "./Input.module.css";
import { InputProps } from "./Input.props";

export const Input = ({ placeholder }: InputProps): JSX.Element => {
  return (
    <>
      <input
        type="text"
        className={styles.input}
		placeholder={placeholder}
      />
      <FontAwesomeIcon
        icon={XmarkIcon}
        className={styles.inputIcon}
      />
      <Button
        size="small"
        color="red"
        className={styles.inputButton}
      >
        <FontAwesomeIcon icon={MagnifyingGlassIcon} />
      </Button>
    </>
  );
};
