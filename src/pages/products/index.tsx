import React from "react";
import cn from "classnames";
import { useSelector } from "react-redux";

import styles from "./Product.module.css";
// import { ProductProps } from "./Product.props";

import { getAllTypes, getAllBrands, getAllDevices } from "@/api";
import { Breadcrumbs, Htag, ItemCounter, PaginationBar, Range } from "@/components/UI";

import { getId, getPrimitiveIdArray } from "@/utils";
import { CheckboxGroup, Product } from "@/components/modules";
import { toggleType } from "@/store/filter/types/actions";
import { selectTypesFilter } from "@/store/filter/types/selector";
import { selectBrandsFilter } from "@/store/filter/brands/selector";
import { toggleBrand } from "@/store/filter/brands/actions";
import { IBrand, IDevice, IPaginationDevice, IType } from "@/shared";
import { Meta } from "@/components/seo/Meta";

const breadcrumbs = [
    { id: 1, name: "Главная", href: "/", active: false },
    {
        id: 2,
        name: "Продукты",
        href: "/",
        active: true,
    },
];

const items: number[] = [1, 2, 10]

const Products = ({ types, brands, device, ...props }: ProductProps): JSX.Element => {
    const [value, setValue] = React.useState<number[]>([0, 70000])
    const [devices, setDevices] = React.useState(device)
    const [page, setPage] = React.useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = React.useState<number>(items[0]);
    const typesFilter = useSelector(selectTypesFilter);
    const brandsFilter = useSelector(selectBrandsFilter);

    React.useEffect(() => {
        getAllDevices(getPrimitiveIdArray(typesFilter), getPrimitiveIdArray(brandsFilter), page, value[0], value[1], itemsPerPage)
            .then(data => {
                setDevices(data);
            })
    }, [page, value[0], value[1]])

    React.useEffect(() => {
        getAllDevices(getPrimitiveIdArray(typesFilter), getPrimitiveIdArray(brandsFilter), page, value[0], value[1], itemsPerPage)
            .then(data => {
                setDevices(data);
                setPage(1)

            })
    }, [itemsPerPage, typesFilter.length, brandsFilter.length])

    return (
        <React.Fragment {...props}>
            <Meta title="Товары" description="Список товаров" />
            <main className={cn(styles.main, "wrapper")}>
                <Breadcrumbs list={breadcrumbs} />
                <div className={styles.content}>
                    <aside className={styles.aside}>
                        <Htag tag="h2">
                            Категория
                        </Htag>
                        <CheckboxGroup items={types} filterByArr={typesFilter} filterByFunc={toggleType} />
                        <Htag tag="h2">
                            Бренд
                        </Htag>
                        <CheckboxGroup items={brands} filterByArr={brandsFilter} filterByFunc={toggleBrand} />
                        <Htag tag="h2">
                            Цена
                        </Htag>
                        <Range className={styles.range} value={value} setValue={setValue} />
                    </aside>
                    <div>
                        <div className={styles.products}>
                            {
                                devices.rows?.map((item: IDevice) => (
                                    <Product className={styles.card} key={getId()} item={item} />
                                ))
                            }
                        </div>
                        <div className={styles.display}>
                            <PaginationBar
                                pageSize={itemsPerPage}
                                total={devices.count}
                                page={page}
                                setPage={setPage}
                            />
                            <ItemCounter items={items} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
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
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: IDevice[];
    types: IType[];
    brands: IBrand[];
    device: IPaginationDevice;
}
