import axios from "axios";

import { getFromLocalStorage } from "@/utils";

// const API_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}`;
const API_URL = 'http://localhost:7000/api/'

const $host = axios.create({
    baseURL: API_URL,
})

const $authHost = axios.create({
    baseURL: API_URL,
})

const authInterceptor = (config: any) => {
    const token = getFromLocalStorage("token")
    config.headers.authorization = `Bearer ${token}`
    return config;
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}