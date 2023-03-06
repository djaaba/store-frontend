import cn from "classnames";
import React from "react";
import HyperModal from 'react-hyper-modal';

import styles from "./TypeModal.module.css";
import { TypeModalProps } from "./TypeModal.props";

export const TypeModal = ({ ...props }: TypeModalProps): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Добавить тип</button>
                <HyperModal requestClose={() => setIsOpen(false)} isOpen={isOpen}>
                    <h1>
                        hi! 2
                    </h1>
                </HyperModal>
        </>
    );
};
