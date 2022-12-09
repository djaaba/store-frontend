import cn from "classnames";
import { Outlet } from "react-router-dom";

import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Htag } from "../components/Htag/Htag";

export const Layout = ({ className, ...props }: LayoutProps): JSX.Element => {
	
	return (
		<div className={cn()}{ ...props }>
			<Header/>
			<Outlet/>
			<Htag tag='h1'>Хиты продаж</Htag>
		</div>
	);
};