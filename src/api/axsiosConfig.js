import axios from "axios";

const mainApi = axios.create({
    baseURL: process.env.APP_API,
    headers: {
        'Content-Type': 'application/json',
    },
});

mainApi.interceptors.request.use(
    (req) => {
        const token = localStorage.getItem('token');
        if (token && req.headers) {
            req.headers.authorization = `Bearer ${token}`;
        }
        return req;
    },
    (error) => {
        return Promise.reject(error);
    },
);

mainApi.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        if (error.response.status === 401) {
            console.log('401');
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);


export default mainApi;