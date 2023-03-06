export interface IDevice {
    id: number;
    price: number;
    discount: number;
    name: string;
    description: string;
    imgUrl: string;
    count: number;
    brandId: number;
    typeId: number;
    info?: [];
    viewCount: number;
}