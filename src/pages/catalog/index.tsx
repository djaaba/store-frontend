import cn from "classnames";
import React, { useState } from "react";
import Link from "next/link";

import styles from "./Catalog.module.css";

import { IBrand, IDevice, IType } from "@/shared";
import { getAllBrands, getAllDevices, getAllTypes } from "@/api";
import { getId, PRODUCT_ROUTE } from "@/utils";
import { Meta } from "@/components/seo/Meta";

import typesPlug from "@/plug/backend/types.json";
import brandsPlug from "@/plug/backend/brands.json";
import devicesPlug from "@/plug/backend/devices.json";

const Catalog = ({
	className,
	types,
	brands,
	...props
}: CatalogProps): JSX.Element => {
	types = types.length ? types : typesPlug;
	brands = brands.length ? brands : brandsPlug;

	const [type, setType] = useState<IType>(types[0]);
	// const [devices, setDevices] = React.useState<IDevice[]>([]);
	const [devices, setDevices] = React.useState<any[]>([]);

	React.useEffect(() => {
		// getAllDevices(type.id).then((data) => setDevices(data.rows));
		let items = devicesPlug.rows.filter(
			(device) => type.id === device.typeId
		);
		setDevices(items);
	}, [type]);

	const handleMouseOver = (item: IType) => {
		setType(item);
	};

	return (
		<React.Fragment {...props}>
			<Meta title="Каталог" description="Страница каталога" />
			<main className={cn(styles.main, "wrapper")}>
				<div className={styles.content}>
					<ul className={styles.categories}>
						{types.map((item) => (
							<li
								onMouseOver={() => handleMouseOver(item)}
								key={item.id}
								className={cn(
									styles.categoriesLi,
									item.id === type.id ? styles.active : ""
								)}
							>
								{item.name}
							</li>
						))}
					</ul>

					<ul className={styles.subcategories}>
						{devices?.map((item) => (
							<li
								className={styles.subcategoriesLi}
								key={getId()}
							>
								<Link
									href={`${PRODUCT_ROUTE}${item.id}`}
									className={styles.link}
									aria-label={`Ссылка на ${item.name}`}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</main>
		</React.Fragment>
	);
};

export async function getServerSideProps() {
	const types = await getAllTypes();
	const brands = await getAllBrands();

	return {
		props: {
			types,
			brands,
		},
	};
}

export default Catalog;

interface CatalogProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	types: IType[];
	brands: IBrand[];
}
