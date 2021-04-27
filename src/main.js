import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue' // 引入入口页面
import Mod from './components/index.js' // 引入组件库

const // 创建对象
    routes = [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/home.vue')
        }
    ], // 创建路由表
    app = createApp(App)

app.use(createRouter({ history: createWebHashHistory(), routes })) // 导入路由
    .use(Mod) // 导入组件库
    .mount('#app')