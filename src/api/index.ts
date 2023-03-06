import axios from "axios";

// const API_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}`;
const API_URL = 'http://localhost:7000/api/'


const $host = axios.create({
    baseURL: API_URL,
})

const $authHost = axios.create({
    baseURL: API_URL,
})

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}