// import $host from ".";
import { $authHost, $host } from "./index"

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

// export const getAllBestsellers = async () => {
//     try {
//         const response = await $host.get("bestsellers/");
//         return response.data;
//     } catch {
//         return [];
//     }
// };

