import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { config } from 'process';

// 创建axios实例
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
});

// 请求拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (!config.headers){
            throw new Error(
                `Expected 'config' and 'config.headers' not to be undefined`
            )
        }
        config.headers.Authorization = 'token';
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        const res = response.data;
        const { code, msg } = res;
        return res;
    },
    (error) => {
        const { msg } = error.response.data;
        return Promise.reject(new Error(msg || 'Error'))
    }
)

// 导出实例
export default service;