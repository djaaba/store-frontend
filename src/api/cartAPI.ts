import { $authHost, $host } from "./"

import { IDevice, IUserInfo } from "@/shared";

export const createCart = async (devices: IDevice[], cartId: number, order: string) => {
    const { data } = await $authHost.post('cart', {devices, cartId, order})
    return data;
}

// export const updateDevice = async (device: FormData) => {
//     try {
//         const { data } = await $authHost.post('device/update', device)
//         return data;
//     } catch {
//         return false;
//     }
// };

// export const deleteDevice = async (id: number) => {
//     try {
//         const { data } = await $authHost.post('device/delete/', {
//             id 
//         }
//         )
//         return data;
//     } catch {
//         return false;
//     }
// };