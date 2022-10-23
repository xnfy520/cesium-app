import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },{
        path: '/404',
        component: () => import('@/views/error-page/404.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router