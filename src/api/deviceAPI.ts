import { $authHost, $host } from "./"
import jwt_decode from "jwt-decode";

export const createDevice = async (device: any) => {
    const { data } = await $authHost.post('device', device)
    return data;
}

export const getAllDevices = async (typeId?: string | number | number[], brandId?: string | number | number[], page?: number, limit: number = 5) => {
    try {
        const response = await $host.get("device/", {
            params: {
                typeId, brandId, page, limit
            }
        });
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getDeviceBySlug = async (slug: any) => {
    try {
        const response = await $host.get(`device/${slug}`);
        return response.data;
    } catch {
        return false;
    }
};