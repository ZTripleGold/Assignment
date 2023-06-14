import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './css/nav.css'
import './css/main.css'

// 引入Bootstrap
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css'

// 导入中文
import locale from 'element-ui/lib/locale/lang/zh-CN'

// 导入路由
import { createRouter, createWebHashHistory } from 'vue-router'
// 导入组件
import HelloWorld from './components/HelloWorld.vue';
import PieChart from './components/PieChart.vue';
import TableChart from './components/TableChart.vue'
import RecordTable from './components/RecordTable.vue'
import Calendar from './components/Calendar.vue'
import tableVue from './components/table.vue'

import App from './App.vue'

// 导入echarts
import * as echarts from 'echarts'

const app = createApp(App)

// 导入图标组件库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 注册组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

const routes = [
    {
        path: '/',
        redirect: '/tableVue',
        component: App
    },
    {
        path: '/HelloWorld',
        component: HelloWorld
    },
    {
        path: '/PieChart',
        component: PieChart
    },
    {
        path: '/TableChart',
        component: TableChart
    },
    {
        path: '/RecordTable',
        component: RecordTable
    },
    {
        path: '/Calendar',
        component: Calendar
    },
    {
        path: '/tableVue',
        component: tableVue
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 安装插件和路由
app.use(ElementPlus, { locale })
app.use(router)

// 注册全局属性
app.config.globalProperties.$echarts = echarts

app.mount('#app')