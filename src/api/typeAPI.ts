import { $authHost, $host } from "./"
// import { IType } from "@/shared";

export const createType = async (type: FormData) => {
    const { data } = await $authHost.post('type', type)
    return data;
}

export const deleteType = async (id: number) => {
    const { data } = await $authHost.post('type/delete/', { id })
    return data;
}

export const updateType = async (type: FormData) => {
    try {
        const { data } = await $authHost.post('type/update', type)
        return data;
    } catch {
        return false;
    }
};

export const getAllTypes = async () => {
    try {
        const response = await $host.get("type/");
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getTypeBySlug = async (slug: number) => {
    try {
        const response = await $host.get(`type/${slug}`);
        return response.data;
    } catch {
        return false;
    }
};