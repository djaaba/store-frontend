import { IDevice } from "./IDevice";

export interface IOrder {
    order: string;
    deviceCounts: number[];
    deviceIds:  number[];
    status: boolean;
    userId: number;
    user: IUserOrder;
}

export interface IUserOrder {
    address: string;
    email: string;
    id: number;
    name: string;
    password: string;
    role: string;
}

export interface IOrderInfo {
    count: number;
    device: IDevice;
    deviceId: number;
    id: number;
    order: string;
    status: boolean;
    userId: number;
}