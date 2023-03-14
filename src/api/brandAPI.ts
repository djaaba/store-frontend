import { $authHost, $host } from "./"
import jwt_decode from "jwt-decode";

export const createBrand = async (brand: any) => {
    const { data } = await $authHost.post('brand', brand)
    return data;
}

export const getAllBrands = async () => {
    try {
        const response = await $host.get("brand/");
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getBrandBySlug = async (slug: any) => {
    try {
        const response = await $host.get(`brand/${slug}`);
        return response.data;
    } catch {
        return false;
    }
};