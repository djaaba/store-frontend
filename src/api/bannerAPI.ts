import { $authHost, $host } from "./"
import { IBanner } from "@/shared";

export const createBanner = async (banner: FormData) => {
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