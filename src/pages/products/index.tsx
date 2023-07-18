import React from "react";
import cn from "classnames";
import { useSelector } from "react-redux";

import styles from "./Product.module.css";
// import { ProductProps } from "./Product.props";

import { getAllTypes, getAllBrands, getAllDevices } from "@/api";
import {
	Breadcrumbs,
	Htag,
	ItemCounter,
	PaginationBar,
	Range,
} from "@/components/UI";

import { cutArray, getId, getPrimitiveIdArray } from "@/utils";
import { CheckboxGroup, Product } from "@/components/modules";
import { toggleType } from "@/store/filter/types/actions";
import { selectTypesFilter } from "@/store/filter/types/selector";
import { selectBrandsFilter } from "@/store/filter/brands/selector";
import { toggleBrand } from "@/store/filter/brands/actions";
import { IBrand, IDevice, IPaginationDevice, IType } from "@/shared";
import { Meta } from "@/components/seo/Meta";

import typesPlug from "@/plug/backend/types.json";
import brandsPlug from "@/plug/backend/brands.json";
import devicesPlug from "@/plug/backend/devices.json";

const breadcrumbs = [
	{ id: 1, name: "Главная", href: "/", active: false },
	{
		id: 2,
		name: "Поиск",
		href: "/",
		active: true,
	},
];

const items: number[] = [3, 6, 9];

const filterDevices = (
	typeId: number[],
	brandId: number[],
	page: number,
	minVal: number,
	maxVal: number,
	itemsPerPage: number
) => {
	let typeMatch = [];
	let brandMatch = [];

	function intersect(a: any[], b: any[]) {
		let new_arr = [];

		if (!a.length && !b.length) return devicesPlug.rows;
		if (!a.length) return b;
		if (!b.length) return a;

		for (let element_a of a) {
			for (let element_b of b) {
				if (element_b.id == element_a.id) {
					new_arr.push(element_a);
				}
			}
		}
		return new_arr;
	}

	for (let i = 0; i < devicesPlug.rows.length; i++) {
		for (let j = 0; j < typeId.length; j++) {
			devicesPlug.rows[i].typeId == typeId[j]
				? typeMatch.push(devicesPlug.rows[i])
				: null;
		}
	}

	for (let i = 0; i < devicesPlug.rows.length; i++) {
		for (let j = 0; j < brandId.length; j++) {
			devicesPlug.rows[i].brandId == brandId[j]
				? brandMatch.push(devicesPlug.rows[i])
				: null;
		}
	}

	let typeBrandFilteredArr = intersect(typeMatch, brandMatch);
	let result = typeBrandFilteredArr.filter(
		(device) =>
			device.discountPrice > minVal && device.discountPrice < maxVal
	);
	console.log(result);
	return cutArray(result, itemsPerPage);
};

const Products = ({
	types,
	brands,
	device,
	...props
}: ProductProps): JSX.Element => {
	device = devicesPlug.rows;
	brands = brandsPlug;
	types = typesPlug;

	const [value, setValue] = React.useState<number[]>([0, 70000]);
	const [devices, setDevices] = React.useState(device);
	const [page, setPage] = React.useState<number>(1);
	const [totalItems, setTotalItems] = React.useState<number>(device.length);
	const [itemsPerPage, setItemsPerPage] = React.useState<number>(items[0]);
	const typesFilter = useSelector(selectTypesFilter);
	const brandsFilter = useSelector(selectBrandsFilter);

	React.useEffect(() => {
		let data = filterDevices(
			getPrimitiveIdArray(typesFilter),
			getPrimitiveIdArray(brandsFilter),
			page,
			value[0],
			value[1],
			itemsPerPage
		);

		setDevices(data[page]);
		setPage(1);
		setTotalItems(data.concat(...data).length);


		// getAllDevices(
		// 	getPrimitiveIdArray(typesFilter),
		// 	getPrimitiveIdArray(brandsFilter),
		// 	page,
		// 	value[0],
		// 	value[1],
		// 	itemsPerPage
		// ).then((data) => {
		// 	setDevices(data);
		// 	setPage(1);
		// });
	}, [
		itemsPerPage,
		typesFilter.length,
		brandsFilter.length,
		value[0],
		value[1],
	]);

	React.useEffect(() => {
		let data = filterDevices(
			getPrimitiveIdArray(typesFilter),
			getPrimitiveIdArray(brandsFilter),
			page,
			value[0],
			value[1],
			itemsPerPage
		);
		setDevices(data[page]);
		setTotalItems(data.concat(...data).length);
	}, [page]);

	return (
		<React.Fragment {...props}>
			<Meta title="Поиск" description="Поиск товаров" />
			<main className={cn(styles.main, "wrapper")}>
				<Breadcrumbs list={breadcrumbs} />
				<div className={styles.content}>
					<aside className={styles.aside}>
						<Htag tag="h2">Категория</Htag>
						<CheckboxGroup
							items={types}
							filterByArr={typesFilter}
							filterByFunc={toggleType}
						/>
						<Htag tag="h2">Бренд</Htag>
						<CheckboxGroup
							items={brands}
							filterByArr={brandsFilter}
							filterByFunc={toggleBrand}
						/>
						<Htag tag="h2">Цена</Htag>
						<Range
							className={styles.range}
							value={value}
							setValue={setValue}
						/>
					</aside>
					<div>
						<div className={styles.products}>
							{devices?.map((item: IDevice) => (
								<Product
									className={styles.card}
									key={getId()}
									item={item}
								/>
							))}
						</div>
						<div className={styles.display}>
							<PaginationBar
								pageSize={itemsPerPage}
								total={totalItems}
								page={page}
								setPage={setPage}
							/>
							<ItemCounter
								items={items}
								itemsPerPage={itemsPerPage}
								setItemsPerPage={setItemsPerPage}
							/>
						</div>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
};

export default Products;

export async function getServerSideProps() {
	const types = await getAllTypes();
	const brands = await getAllBrands();
	const device = await getAllDevices();

	return {
		props: {
			types,
			brands,
			device,
		},
	};
}

interface ProductProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	// data: IDevice[];
	data: any[];
	types: IType[];
	brands: IBrand[];
	// device: IPaginationDevice;
	device: any;
}
