import { $authHost, $host } from "./"
// import { IDevice } from "@/shared";

export const createDevice = async (device: any) => {
    const { data } = await $authHost.post('device', device)
    return data;
}

export const getMostViewed = async () => {
    try {
        const response = await $host.get("device/mostviewed");
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getByMatch = async (word: string) => {
    try {
        const response = await $host.get("device/match", {
            params: {
                word
            }
        });
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getBestsellers = async () => {
    try {
        const response = await $host.get("device/bestsellers");
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getAllDevices = async (typeId?: string | number | number[], brandId?: string | number | number[], page?: number, minPrice?: number, maxPrice?: number, limit: number = 5) => {
    try {
        const response = await $host.get("device/", {
            params: {
                typeId, brandId, page, limit, minPrice, maxPrice
            }
        });
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getDeviceBySlug = async (slug: string, flag?: boolean) => {
    try {
        const response = await $host.get(`device/${slug}?flag=${flag}`);
        return response.data;
    } catch {
        return false;
    }
};

export const updateDevice = async (device: FormData) => {
    try {
        const { data } = await $authHost.post('device/update', device)
        return data;
    } catch {
        return false;
    }
};

export const deleteDevice = async (id: number) => {
    try {
        const { data } = await $authHost.post('device/delete/', {
            id
        })
        return data;
    } catch {
        return false;
    }
};