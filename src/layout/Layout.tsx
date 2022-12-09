import cn from "classnames";
import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Htag } from "../components/Htag/Htag";

export const Layout = ({ className, ...props }: LayoutProps): JSX.Element => {
	// причесать хедер
	return (
		<React.Fragment { ...props }>
			<Header className={styles.stic}/>
			<div className={styles.cl}>

			<Outlet />
			</div>
			<Htag tag='h1'>Хиты продаж</Htag>
		</React.Fragment>
	);
};