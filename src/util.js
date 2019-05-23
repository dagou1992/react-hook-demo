import axios from 'axios';

const instance = getDefaultInstance();

export function getJson(url, data) {
    return instance.get(url, { params: data });
}

function getDefaultInstance() {
    const instance = axios.create({
        baseURL: '/',
        withCredentials: true
    });
    instance.interceptors.response.use(res => {
        return res.data.data;
    }, err => {
        throw err;
    });
    return instance;
}