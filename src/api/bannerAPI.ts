import { $authHost, $host } from "./"
import { IBanner } from "@/shared";

export const createBanner = async (banner: FormData) => {
    const { data } = await $authHost.post('banners', banner)
    return data;
}

export const deleteBanner = async (id: number) => {
    const { data } = await $authHost.post('banners/delete/', { id })
    return data;
}

export const updateBanner = async (banner: FormData) => {
    try {
        const { data } = await $authHost.post('banners/update', banner)
        return data;
    } catch {
        return false;
    }
};

export const getAllBanners = async () => {
    try {
        const response = await $host.get("banners/");
        return response.data;
    } catch (error) {
        return [];
    }
}