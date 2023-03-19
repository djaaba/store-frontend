import { $authHost, $host } from "./"
import jwt_decode from "jwt-decode";

export const createBanner = async (banner: any) => {
    const { data } = await $authHost.post('banners', banner)
    return data;
}

export const getAllBanners = async () => {
    try {
        const response = await $host.get("banners/");
        return response.data;
    } catch (error) {
        return [];
    }
}