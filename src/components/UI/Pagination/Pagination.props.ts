import { HTMLProps, ReactNode } from "react";

export interface PaginationProps extends HTMLProps<HTMLDivElement> {
    page: number,
    total: number,
    pageSize: number
    setPage: React.Dispatch<React.SetStateAction<number>>,
}

