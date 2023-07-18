import cn from "classnames";
import React, { ForwardedRef, forwardRef } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { HeaderBottomProps } from "./HeaderBottom.props";
import styles from "./HeaderBottom.module.css";

import { Scroll } from "@/components/modules";
import { HeaderNavCard } from "../../UI";
import { getAllBrands, getAllTypes } from "@/api";
import { IBrand, IType } from "@/shared";
import { PRODUCT_ROUTE } from "@/utils";
import { toggleType } from "@/store/filter/types/actions";
import { toggleBrand } from "@/store/filter/brands/actions";

import typesPlug from "@/plug/backend/types.json";
import brandsPlug from "@/plug/backend/brands.json";

export const HeaderBottom = forwardRef(
	(
		{ className, ...props }: HeaderBottomProps,
		ref: ForwardedRef<HTMLElement>
	): JSX.Element => {
		const dispatch = useDispatch();

		const [types, setTypes] = React.useState<IType[]>([]);
		const [brands, setBrands] = React.useState<IBrand[]>([]);

		React.useEffect(() => {
			// getAllBrands().then(data => setBrands(data))
			// getAllTypes().then(data => setTypes(data))

			setTypes(typesPlug);
			setBrands(brandsPlug);
		}, []);

		return (
			<>
				<section
					{...props}
					className={cn("wrapper", className)}
					ref={ref}
				>
					{types.length > 0 && brands.length > 0 ? (
						<Scroll>
							{types.map((item) => (
								<Link
									key={item.id}
									href={PRODUCT_ROUTE}
									onClick={() => dispatch(toggleType(item))}
								>
									<HeaderNavCard title={item.name} />
								</Link>
							))}
							{brands.map((item) => (
								<Link
									key={item.id}
									href={PRODUCT_ROUTE}
									onClick={() => dispatch(toggleBrand(item))}
								>
									<HeaderNavCard title={item.name} />
								</Link>
							))}
						</Scroll>
					) : null}
				</section>
			</>
		);
	}
);
