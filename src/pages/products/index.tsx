import React from "react";
import cn from "classnames";

import styles from "./Catalog.module.css";
// import { ProductProps } from "./Product.props";

import { getAllTypes, getAllBrands, getAllDevices } from "@/api";
import { Breadcrumbs, ItemCounter, PaginationBar, Range } from "@/components/UI";

import { getId } from "@/utils";
import { CheckboxGroup, Product } from "@/components/modules";
import { toggleType } from "@/store/filter/types/actions";
import { useSelector } from "react-redux";
import { selectTypesFilter } from "@/store/filter/types/selector";
import { selectBrandsFilter } from "@/store/filter/brands/selector";
import { toggleBrand } from "@/store/filter/brands/actions";

const breadcrumbs = [
    { id: 1, name: "Главная", href: "/", active: false },
    {
        id: 2,
        name: "Продукты",
        href: "/",
        active: true,
    },
];

const items: number[] = [2, 5, 10, 15]

const Products = ({ types, brands, device, ...props }: any): JSX.Element => {
    const [value, setValue] = React.useState<number[]>([25, 75])

    const [devices, setDevices] = React.useState(device)

    const [page, setPage] = React.useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = React.useState<number>(items[0]);

    const typesFilter = useSelector(selectTypesFilter);
    const brandsFilter = useSelector(selectBrandsFilter);

    React.useEffect(() => {
        // console.log(device)
        getAllDevices(undefined, undefined, page, itemsPerPage).then(data => { // type.id, brand.id
            // console.log(data.rows)
            setDevices(data);
        })
    }, [page, itemsPerPage])

    return (
        <React.Fragment {...props}>
            <main className={cn(styles.main, "wrapper")}>
                <Breadcrumbs list={breadcrumbs} />
                <div className={styles.content}>
                    <aside className={styles.aside}>
                        <b>
                            Категория
                        </b>
                        <CheckboxGroup items={types} filterByArr={typesFilter} filterByFunc={toggleType} />
                        <b>
                            Бренд
                        </b>
                        <CheckboxGroup items={brands} filterByArr={brandsFilter} filterByFunc={toggleBrand} />
                        <b>
                            Цена
                        </b>
                        <Range value={value} setValue={setValue} />
                    </aside>
                    <div>
                        <div className={styles.products}>
                            {
                                devices.rows.map((item: any) => (
                                    <Product key={getId()} item={item} />
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
            device
        },
    };
}

