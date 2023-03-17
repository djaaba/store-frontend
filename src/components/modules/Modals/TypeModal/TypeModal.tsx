import cn from "classnames";
import React from "react";
import HyperModal from 'react-hyper-modal';

import styles from "./TypeModal.module.css";
import { TypeModalProps } from "./TypeModal.props";

import { useInput } from "@/hooks";
import { Button, Input } from "@/components/UI";

export const TypeModal = ({ ...props }: TypeModalProps): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);

    const name = useInput('', { isEmpty: true, minLength: 1 })
    const linkUrl = useInput('', { isEmpty: true, minLength: 1 })

    let nameError = name.isDirty && name.isEmpty;
    let linkUrlError = linkUrl.isDirty && linkUrl.isEmpty;

    let isDisabled = !name.inputValid || !linkUrl.inputValid;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Добавить тип</button>
            <HyperModal requestClose={() => setIsOpen(false)} isOpen={isOpen}>
                <h1>
                    hi! 2
                </h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        className={cn(styles.input, nameError ? "errorIndicator" : null)}
                        placeholder="Введите название типа"
                        onBlur={name.onBlur}
                        type="name"
                        value={name.value}
                        onChange={(e: any) => name.onChange(e)}
                    />
                    <Input
                        className={cn(styles.input, linkUrlError ? "errorIndicator" : null)}
                        placeholder="Введите ссылку типа"
                        onBlur={linkUrl.onBlur}
                        type="name"
                        value={linkUrl.value}
                        onChange={(e: any) => linkUrl.onChange(e)}
                    />
                    <Button
                        disabled={isDisabled}
                        type="submit"
                        className={styles.btn} color={isDisabled ? "gray" : "dark"} size="big">
                        Продолжить
                    </Button>
                </form>
            </HyperModal>
        </>
    );
};
