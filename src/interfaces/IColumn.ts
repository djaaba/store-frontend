export interface IColumnLink {
    id: Number;
    name: String;
    href: string;
}

export interface IColumnItem {
    title: String;
    links: IColumnLink[];
}
