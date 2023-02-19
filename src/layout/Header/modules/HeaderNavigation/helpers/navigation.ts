import {
    BarsIcon,
    UserIcon,
    SignalIcon,
    SolidHeartIcon,
    CartShoppingIcon,
} from "../../../../../components/UI";
import { INav } from "../../../../../shared";

export const navigation: Array<INav> = [
    { link: "catalog", icon: BarsIcon, text: "Каталог" },
    { link: "login", icon: UserIcon, text: "Войти" },
    { link: "compare", icon: SignalIcon, text: "Сравнение" },
    { link: "favorite", icon: SolidHeartIcon, text: "Избранное" },
    { link: "cart", icon: CartShoppingIcon, text: "Корзина" },
];
