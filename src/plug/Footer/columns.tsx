import { IColumnItem } from "@/shared";

export const buyers: IColumnItem = {
    title: "Покупателям",
    links: [
        { id: 1, name: "Каталог", href: "/" },
        { id: 2, name: "Акции и скидки", href: "/" },
        { id: 3, name: "Доставка", href: "/" },
        { id: 4, name: "Кредит и рассрочка", href: "/" },
    ],
};

export const forBusiness: IColumnItem = {
    title: "Бизнесу",
    links: [
        { id: 1, name: "Поставщикам", href: "/" },
        { id: 2, name: "Партнерская программа", href: "/" },
    ],
};

export const aboutCompany: IColumnItem = {
    title: "О компании",
    links: [
        { id: 1, name: "О нас", href: "/" },
        { id: 2, name: "Политика компании", href: "/" },
    ],
};
