import { $authHost, $host } from "./"
import jwt_decode from "jwt-decode";

export const createType = async (type: any) => {
    const { data } = await $authHost.post('type', type)
    return data;
}

export const getAllTypes = async () => {
    try {
        const response = await $host.get("type/");
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getTypeBySlug = async (slug: any) => {
    try {
        const response = await $host.get(`type/${slug}`);
        return response.data;
    } catch {
        return false;
    }
};