import { useState } from "react";
import { Button, Dictaphone, FontAwesomeIcon, MagnifyingGlassIcon, XmarkIcon } from "..";

import styles from "./Search.module.css";
import { SearchProps } from "./Search.props";

export const Search = ({ placeholder }: SearchProps): JSX.Element => {
    const [text, setText] = useState<string>("");

    return (
        <>
            <input
                type="text"
                className={styles.input}
                placeholder={placeholder}
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <Dictaphone setText={setText} className={styles.inputMicro}/>

            <FontAwesomeIcon
                onClick={() => setText("")}
                icon={XmarkIcon}
                className={styles.inputCross}
            />
            <Button size="small" color="red" className={styles.inputButton}>
                <FontAwesomeIcon icon={MagnifyingGlassIcon} />
            </Button>
        </>
    );
};
