import { $authHost, $host } from "./"

import { IStoreInfo } from "@/shared";

export const updateStore = async (storeInfo: FormData) => {
    const { data } = await $authHost.post('store', storeInfo)
    return data;
}

export const getStore = async () => {
    try {
        const response = await $host.get("store/");
        return response.data;
    } catch (error) {
        return [];
    }
}