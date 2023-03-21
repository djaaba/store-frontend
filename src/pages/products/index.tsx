import React from "react";
import cn from "classnames";

import styles from "./Catalog.module.css";
// import { ProductProps } from "./Product.props";

import { getAllTypes, getAllBrands, getAllDevices } from "@/api";
import { Breadcrumbs, ItemCounter, PaginationBar, Range } from "@/components/UI";

import { getId, getPrice, getPrimitiveIdArray } from "@/utils";
import { CheckboxGroup, Product } from "@/components/modules";
import { toggleType } from "@/store/filter/types/actions";
import { useSelector } from "react-redux";
import { selectTypesFilter } from "@/store/filter/types/selector";
import { selectBrandsFilter } from "@/store/filter/brands/selector";
import { toggleBrand } from "@/store/filter/brands/actions";
import { IDevice } from "@/shared";

const breadcrumbs = [
    { id: 1, name: "Главная", href: "/", active: false },
    {
        id: 2,
        name: "Продукты",
        href: "/",
        active: true,
    },
];

const items: number[] = [1, 2, 10, 15]

const Products = ({ types, brands, device, ...props }: any): JSX.Element => {
    const [value, setValue] = React.useState<number[]>([0, 70000])

    const [devices, setDevices] = React.useState(device)

    const [page, setPage] = React.useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = React.useState<number>(items[0]);

    const typesFilter = useSelector(selectTypesFilter);
    const brandsFilter = useSelector(selectBrandsFilter);

    // React.useEffect(() => {
        // const dev = devices.rows.filter((device: IDevice) => getPrice(device.price, device.discount) > value[0] && getPrice(device.price, device.discount) < value[1])
        // setDevices({ ...devices, rows: dev });

        // const sorted = devices.rows.sort((cur: IDevice, next: IDevice) => cur.price - next.price);
        // const minVal = getPrice(sorted[0].price, sorted[0].discount);
        // const maxVal = getPrice(sorted[sorted.length - 1].price, sorted[sorted.length - 1].discount);
        // setValue([minVal, maxVal])

    // }, [value[0], value[1]])


    React.useEffect(() => {
        getAllDevices(getPrimitiveIdArray(typesFilter), getPrimitiveIdArray(brandsFilter), page, value[0], value[1], itemsPerPage)
            .then(data => { 
                // const dev = data.rows?.filter((device: IDevice) => getPrice(device.price, device.discount) >= value[0] && getPrice(device.price, device.discount) <= value[1])
                setDevices(data);

                if (typesFilter.length || brandsFilter.length){
                    setPage(1)
                }
                // console.log(data)
                // setDevices({ ...data, rows: dev });
                // console.log(value)
            })
    }, [page, itemsPerPage, typesFilter.length, brandsFilter.length, value[0], value[1]])

    // React.useEffect(() => {
    //     getAllDevices(getPrimitiveIdArray(typesFilter), getPrimitiveIdArray(brandsFilter), page, value[0], value[1], itemsPerPage)
    //         .then(data => { 
    //             setDevices(data);
    //             setPage(1)
    //         })
    // }, [itemsPerPage, typesFilter.length, brandsFilter.length, value[0], value[1]])

    // Сейчас проблема в том, что не совсем правильно на сервере сортируются даннные по мин цене и макс цене
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
                                devices.rows?.map((item: any) => (
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
            device,
        },
    };
}

