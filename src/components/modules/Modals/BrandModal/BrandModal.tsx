import cn from "classnames";
import React from "react";
import HyperModal from 'react-hyper-modal';

import styles from "./BrandModal.module.css";
import { BrandModalProps } from "./BrandModal.props";

export const BrandModal = ({ ...props }: BrandModalProps): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Добавить бренд</button>
            <HyperModal requestClose={() => setIsOpen(false)} isOpen={isOpen}>
                <h1>
                    hi!
                </h1>
            </HyperModal>
        </>
    );
};
