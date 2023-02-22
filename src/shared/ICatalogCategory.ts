export interface ICatalogItem {
    subtitle: string;
    link: string;
}

export interface ICatalogCategory {
    id: number;
    title: string;
    link: string;
    items: ICatalogItem[];
}
