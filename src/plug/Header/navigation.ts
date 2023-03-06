import { INav } from "@/shared";
import {
    BarsIcon,
    SolidHeartIcon,
    CartShoppingIcon,
} from "@/components/UI";
import { CATALOG_ROUTE, FAVORITE_ROUTE, CART_ROUTE } from "@/utils";

export const navigation: INav[] = [
    { link: CATALOG_ROUTE, icon: BarsIcon, text: "Каталог" },
    { link: FAVORITE_ROUTE, icon: SolidHeartIcon, text: "Избранное" },
    { link: CART_ROUTE, icon: CartShoppingIcon, text: "Корзина" },
];
