import React from 'react';
import cn from "classnames";
import Head from "next/head";
import { useDispatch } from "react-redux";

import styles from "./Home.module.css";

import {
    Banner,
    Bestsellers,
    Brands,
    Types,
    TopProduct,
} from "@/components/modules";
import { WhiteWrapper } from "@/components/UI";
import { check } from "@/api";
import { IBanner, IBrand, IDevice, IType, IUserInfo } from "@/shared";
import { login } from "@/store/user/actions";
import { Meta } from '@/components/seo/Meta';

export const Home = ({ mostViewed, bestsellers, types, brands, banners }: HomeProps) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        check().then(data => {
            dispatch(login(data as IUserInfo))
        }).catch(err => { })
    }, [])

    return (
        <>
            <Meta title="Главная страница" description="Главная страница магазина" />
            <section className={cn(styles.sliders, "wrapper")}>
                <Banner banners={banners} />
                <TopProduct items={mostViewed} />
            </section>
            <WhiteWrapper className={cn(styles.container, "wrapper")}>
                <Bestsellers items={bestsellers} />
                <Types types={types} />
                <Brands brands={brands} />
            </WhiteWrapper>
        </>
    );
}

interface HomeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    mostViewed: IDevice[];
    bestsellers: IDevice[];
    types: IType[];
    brands: IBrand[];
    banners: IBanner[];
}