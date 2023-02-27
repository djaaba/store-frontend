import { IColumnItem } from "@/shared";

export const buyers: IColumnItem = {
    title: "Покупателям",
    links: [
        { id: 1, name: "Каталог", href: "/catalog" },
        { id: 2, name: "Акции и скидки", href: "/sales" },
        { id: 3, name: "Доставка", href: "/delivery" },
        { id: 4, name: "Кредит и рассрочка", href: "/credit" },
    ],
};

export const forBusiness: IColumnItem = {
    title: "Бизнесу",
    links: [
        { id: 1, name: "Поставщикам", href: "/producers" },
        { id: 2, name: "Партнерская программа", href: "/partners" },
    ],
};

export const aboutCompany: IColumnItem = {
    title: "О компании",
    links: [
        { id: 1, name: "Про М.Видео", href: "/about-company" },
        { id: 2, name: "Политика компании", href: "/policy" },
    ],
};
