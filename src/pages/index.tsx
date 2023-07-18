import React from "react";
import { useSelector } from "react-redux";

import {
	getAllBanners,
	getAllBrands,
	getAllTypes,
	getBestsellers,
	getMostDiscounted,
	getMostViewed,
	getRecommended,
} from "@/api";
import { selectRecommendation } from "@/store/recommendation/selector";
import { Home } from "@/screens/home/Home";
import { IDevice } from "@/shared";
import { selectView } from "@/store/view/selector";

import bannersPlug from "@/plug/backend/banners.json";
import typesPlug from "@/plug/backend/types.json";
import brandsPlug from "@/plug/backend/brands.json";
import storePlug from "@/plug/backend/store.json";
import devices from "@/plug/backend/devices.json";

const mostDiscountedPlug = devices.rows
	.sort((prev, next) => next.discount - prev.discount)
	.slice(0, 5);

const mostViewedPlug = devices.rows
	.sort((prev, next) => next.viewCount - prev.viewCount)
	.slice(0, 10);

const bestsellersPlug = devices.rows
	.sort((prev, next) => next.viewCount - prev.viewCount)
	.slice(0, 10);

function Main({
	mostViewed,
	mostDiscounted,
	bestsellers,
	types,
	brands,
	banners,
}: any) {
	const [recommendation, setRecommendation] = React.useState<IDevice[]>([]);
	const recommended = useSelector(selectRecommendation);
	const recentlyViewed = useSelector(selectView);

	React.useEffect(() => {
		getRecommended(recommended).then((data) => setRecommendation(data));
	}, []);

	return (
		<>
			<Home
				types={types.lenght ? types : typesPlug}
				brands={brands.lenght ? brands : brandsPlug}
				banners={banners.lenght ? banners : bannersPlug}
				mostViewed={mostViewed.lenght ? mostViewed : mostViewedPlug}
				recentlyViewed={recentlyViewed}
				bestsellers={bestsellers.lenght ? bestsellers : bestsellersPlug}
				mostDiscounted={
					mostDiscounted.lenght ? mostDiscounted : mostDiscountedPlug
				}
				recommended={recommendation}
			/>
		</>
	);
}

export default Main;

export async function getServerSideProps() {
	const types = await getAllTypes();
	const brands = await getAllBrands();
	const banners = await getAllBanners();
	const mostViewed = await getMostViewed();
	const mostDiscounted = await getMostDiscounted();
	const bestsellers = await getBestsellers();

	return {
		props: {
			types,
			brands,
			banners,
			mostViewed,
			bestsellers,
			mostDiscounted,
		},
	};
}

// next time use formik
// next time use - cookie httponly secure token
// next time export default
// next time props for components name "variant"
// next time aria-label="Aria Name" for buttons
// next time use Omit, Record and etc
// next time use style naming with "primary" root
// next time more often use spread operator