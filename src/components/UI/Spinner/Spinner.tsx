import cn from "classnames";
import Image from 'next/image'

import styles from "./Spinner.module.css";
import { SpinnerProps } from "./Spinner.props";

export const Spinner = ({
    ...props
}: SpinnerProps): JSX.Element => {

    return (
        <div className={styles.container}>
            <div className={styles.spinner}>
            </div>
        </div>
    );
};
