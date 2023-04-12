import React from "react";
import Link from "next/link";

import styles from "./Search.module.css";
import { SearchProps } from "./Search.props";

import { useDebounce } from "@/hooks";
import { Button, Dictaphone, FontAwesomeIcon, MagnifyingGlassIcon, XmarkIcon } from "..";
import { getByMatch } from "@/api";
import { IDevice } from "@/shared";
import { getId, PRODUCT_ROUTE } from "@/utils";

export const Search = ({ placeholder, value, setValue }: SearchProps): JSX.Element => {
    const [isOpen, setOpen] = React.useState<boolean>(false);

    const [results, setResults] = React.useState<IDevice[]>([]);
    const [_, setIsSearching] = React.useState(false);

    const debouncedSearchTerm = useDebounce(value, 500);

    React.useEffect(
        () => {
            if (debouncedSearchTerm) {
                setIsSearching(true);

                getByMatch(debouncedSearchTerm).then((results: IDevice[]) => {
                    setIsSearching(false);
                    setResults(results);
                });
            } else {
                setResults([]);
                setIsSearching(false);
            }
        },
        [debouncedSearchTerm]
    );

    return (
        <>
            <div className={styles.container}

            >
                <div

                >
                    <input
                        type="text"
                        className={styles.input}
                        placeholder={placeholder}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        onFocus={() => setOpen(true)}
                        onBlur={() => setTimeout(() => setOpen(false), 100)}
                    />
                    <Dictaphone setText={setValue} className={styles.inputMicro} />

                    <FontAwesomeIcon
                        onClick={() => setValue("")}
                        icon={XmarkIcon}
                        className={styles.inputCross}
                    />
                    <Button
                        size="small"
                        color="red"
                        className={styles.inputButton}
                    >
                        <FontAwesomeIcon icon={MagnifyingGlassIcon} />
                    </Button>
                </div>
                <ul
                    className={styles.resultList}
                >
                    {
                        isOpen ?
                            results.map((item: IDevice) => (
                                <Link onClick={() => setValue("")} key={getId()} href={`${PRODUCT_ROUTE}${item.id}`}>
                                    <li className={styles.result}>
                                        {item.name}
                                    </li>
                                </Link>
                            ))
                            :
                            ''
                    }
                </ul>
            </div>
        </>
    );
};
