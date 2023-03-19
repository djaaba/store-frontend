import cn from "classnames";
import React from "react";
import Pagination from 'rc-pagination';

import styles from "./Pagination.module.css";
import { PaginationProps } from "./Pagination.props";

export const PaginationBar = ({
    page,
    setPage,
    total,
    pageSize,
    ...props
}: PaginationProps): JSX.Element => {
    // const [current, setCurrent] = React.useState<number>(1);

    return (
        <>
            <div className={cn(styles.main, props.className)}>
                <Pagination
                    onChange={setPage}
                    current={page}
                    total={total}
                    pageSize={pageSize}
                    showPrevNextJumpers={false}
                />
            </div>
        </>
    )
}