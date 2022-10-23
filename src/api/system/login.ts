import { Login } from '@/types/api/system/login';
import request from '@/utils/request';
import { AxiosPromise } from 'axios';

// 登录获取token
export function getToken(): AxiosPromise<Login> {
    return request({
        url: '/category',
        method: 'get'
    })
}