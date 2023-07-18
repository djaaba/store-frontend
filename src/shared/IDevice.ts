import { ICharacteristic } from "./ICharacteristic";

export interface IDevice {
    id: number;
    count: number;
    description: string;
    imgUrl: string;
    name: string;
    price: number;
    info: ICharacteristic[];
    discount: number;
    discountPrice: number;
    viewCount: number;
    purchasesCount: number;
    typeId: number;
    brandId: number;
}

export interface IPaginationDevice {
    count: number;
    rows: IDevice[];
}