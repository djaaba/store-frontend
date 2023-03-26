import cn from "classnames";
import React from "react";
import { useDispatch } from "react-redux";

import styles from "./Admin.module.css";
// import { AdminProps } from "./Admin.props";

import { BrandModal, DeviceModal, TypeModal } from "@/components/modules";
import { check, getAllBrands, getAllTypes } from "@/api";
import { IBrand, IType, IUserInfo } from "@/shared";

import { login } from "@/store/user/actions";

const Admin = ({ types, brands, className, ...props }: AdminProps): JSX.Element => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        check().then(data => {
            dispatch(login(data as IUserInfo))
        }).catch(err => {
        })
    }, [])

    return (
        <React.Fragment {...props}>
            <main className={cn(styles.main, "wrapper")}>
                <BrandModal />
                <DeviceModal brands={brands} types={types} />
                <TypeModal />
            </main>
        </React.Fragment>
    );
};

export default Admin;

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

interface AdminProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    types: IType[];
    brands: IBrand[];
}
