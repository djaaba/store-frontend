import { $authHost, $host } from "."

import { IDevice } from "@/shared";

export const createOrder = async (devices: IDevice[], userId: number, order: string) => {
    const { data } = await $authHost.post('order', { devices, userId, order })
    return data;
}

export const getAllOrders = async () => {
    try {
        const response = await $host.get("order/");
        return response.data;
    } catch (error) {
        return [];
    }
}

export const getOrderBySlug = async (slug: string) => {
    try {
        const response = await $host.get(`order/${slug}`);
        return response.data;
    } catch {
        return false;
    }
};

export const updateOrder = async (order: string) => {
    try {
        const { data } = await $authHost.post('order/update', { order })
        return data;
    } catch {
        return false;
    }
};

export const deleteOrder = async (order: string) => {
    try {
        const { data } = await $authHost.post('order/delete/', { order })
        return data;
    } catch {
        return false;
    }
};

export const deleteOrderItem = async (id: number) => {
    try {
        const { data } = await $authHost.post('order/delete/', { id })
        return data;
    } catch {
        return false;
    }
};