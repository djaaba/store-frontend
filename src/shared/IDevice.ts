export interface IDevice {
    price: number;
    discount: number;
    name: string;
    description: string;
    imgUrl: string;
    brandId: number;
    typeId: number;
    count: number;
    id: number;
    info?: [];
    viewCount?: number;
    discountPrice?: number;
    purchasesCount?: number;
}

export interface IPaginationDevice {
    count: number;
    rows: IDevice[];
}