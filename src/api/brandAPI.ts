import { $authHost, $host } from "./"
// import { IBrand } from "@/shared";

export const createBrand = async (brand: any) => {
    const { data } = await $authHost.post('brand', brand)
    return data;
}

export const deleteBrand = async (id: number) => {
    const { data } = await $authHost.post('brand/delete/', { id })
    return data;
}

export const updateBrand = async (brand: FormData) => {
    try {
        const { data } = await $authHost.post('brand/update', brand)
        return data;
    } catch {
        return false;
    }
};

export const getAllBrands = async () => {
    try {
        const response = await $host.get("brand/");
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getBrandBySlug = async (slug: number) => {
    try {
        const response = await $host.get(`brand/${slug}`);
        return response.data;
    } catch {
        return false;
    }
};