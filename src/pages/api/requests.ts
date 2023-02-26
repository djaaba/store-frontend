import axios from ".";

export const getAllDevice = async () => {
    try {
        const response = await axios.get("device/");
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getDeviceBySlug = async (slug: any) => {
    try {
        const response = await axios.get(`device/${slug}`);
        return response.data;
    } catch {
        return false;
    }
};

export const getAllBrands = async () => {
    try {
        const response = await axios.get("brand/");
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getBrandBySlug = async (slug: any) => {
    try {
        const response = await axios.get(`brand/${slug}`);
        return response.data;
    } catch {
        return false;
    }
};

export const getAllTypes = async () => {
    try {
        const response = await axios.get("type/");
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getTypeBySlug = async (slug: any) => {
    try {
        const response = await axios.get(`type/${slug}`);
        return response.data;
    } catch {
        return false;
    }
};

// export const getAllBestsellers = async () => {
//     try {
//         const response = await axios.get("bestsellers/");
//         return response.data;
//     } catch {
//         return [];
//     }
// };

