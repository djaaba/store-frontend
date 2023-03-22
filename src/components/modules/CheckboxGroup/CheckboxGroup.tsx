import cn from "classnames";
import { useDispatch } from 'react-redux';

import styles from "./CheckboxGroup.module.css";
import { CheckboxGroupProps } from "./CheckboxGroup.props";

import { searchById } from '@/utils';
import { Checkbox } from "@/components/UI";

export const CheckboxGroup = ({
    items,
    filterByArr,
    filterByFunc,
    ...props
}: CheckboxGroupProps): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <>
            <div
                {...props}
                className={cn(styles.container, props.className)}
            >
                {
                    items?.map((item: any) => (
                        <div key={item.id} className={styles.filter}>
                            <Checkbox
                                onChange={() => dispatch(filterByFunc(item))}
                                checked={searchById(item, filterByArr)}
                            />
                            <p>
                                {item.name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};
