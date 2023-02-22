import axios from "axios";

// const API_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}`;

const defaultOptions = {
    // baseURL: API_URL,
};

export default (function () {
    const instance = axios.create(defaultOptions);
    return instance;
})();
