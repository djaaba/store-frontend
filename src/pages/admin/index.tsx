import cn from "classnames";
import React from "react";

import styles from "./Admin.module.css";
import { AdminProps } from "./Admin.props";

import { BrandModal, DeviceModal, TypeModal } from "@/components/modules";
import { getAllBrands, getAllTypes } from "@/pages/api/requests";


const Admin = ({ types, brands, className, ...props }: AdminProps): JSX.Element => {

    console.log(types)

    return (
        <React.Fragment {...props}>
            <main className={cn(styles.main, "wrapper")}>
                <BrandModal/>
                <DeviceModal brands={brands} types={types}/>
                <TypeModal/>
            </main>
        </React.Fragment>
    );
};

export default Admin;

export async function getServerSideProps() {
    const types = await getAllTypes();
    const brands = await getAllBrands();
    // const devices = await getAllDevices();

    return {
        props: {
            types,
            brands,
            // devices
        },
    };
}