import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue' // 引入入口页面
import Component from './components/index.js' // 引入组件库

const // 创建对象
    routes = [
        {
            path: '/',
            name: '主页',
            component: () => import('./views/home.vue')
        }
    ], // 创建路由表
    app = createApp(App)

app.use(createRouter({ history: createWebHashHistory(), routes })) // 导入路由
    .use(Component) // 导入组件库
    .mount('#app')
