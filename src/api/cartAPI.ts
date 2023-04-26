import { $authHost, $host } from "./"

import { IDevice } from "@/shared";

export const createCart = async (devices: IDevice[], userId: number, order: string) => {
    const { data } = await $authHost.post('cart', {devices, userId, order})
    return data;
}

export const getAllCarts = async () => {
    try {
        const response = await $host.get("cart/");
        return response.data;
    } catch (error) {
        return [];
    }
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