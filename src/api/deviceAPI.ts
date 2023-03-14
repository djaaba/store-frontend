import { $authHost, $host } from "./"
import jwt_decode from "jwt-decode";

export const createDevice = async (device: any) => {
    const { data } = await $authHost.post('device', device)
    return data;
}

export const getAllDevices = async () => {
    try {
        const response = await $host.get("device/");
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