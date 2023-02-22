import axios from ".";

export const getProductBySlug = async (slug: any) => {
    try {
        const response = await axios.get(`product/${slug}`);
        return response.data;
    } catch {
        return false;
    }
};

export const getBestsellers = async () => {
    try {
        const response = await axios.get("bestsellers/");
        return response.data;
    } catch {
        return [];
    }
};