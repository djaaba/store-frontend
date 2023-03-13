import { $authHost, $host } from "./index"
import jwt_decode from "jwt-decode";

export const registation = async (name: string, email: string, password: string) => {
    const { data } = await $host.post('user/registration', { name, email, password, role: 'USER' })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const login = async (email: string, password: string) => {
    const { data } = await $host.post('user/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const check = async () => {
    const { data } = await $authHost.get('user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}