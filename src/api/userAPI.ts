import { $authHost, $host } from "./index"
import jwt_decode from "jwt-decode";

export const registation = async (name: string, email: string, password: string) => {
    const { data } = await $host.post('user/registration', { name, email, password, role: 'ADMIN' })
    return jwt_decode(data.token);
}

export const login = async (email: string, password: string) => {
    const { data } = await $host.post('user/login', { email, password })
    return jwt_decode(data.token);
}

export const check = async () => {
    const { data } = await $host.post('user/registration')
    return jwt_decode(data.token);
}