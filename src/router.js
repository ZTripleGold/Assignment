// // 导入路由
// import { createRouter, createWebHashHistory } from 'vue-router'
// // 导入组件
// import App from './App.vue'
// import HelloWorld from './components/HelloWorld.vue';
// import PieChart from './components/PieChart.vue';
// import TableChart from './components/TableChart.vue'
// import CalData from "./components/CalData.vue";
// import RecordTable from './components/RecordTable.vue'
// import Calendar from './components/Calendar.vue'
// import tableVue from './components/table.vue'
// // 配置路由与组件的映射关系
// let routes = [
//     {
//         path: '/HelloWorld',
//         component: HelloWorld
//     },
//     {
//         path: '/PieChart',
//         component: PieChart
//     },
//     {
//         path: '/TableChart',
//         component: TableChart
//     },
//     {
//         path: '/RecordTable',
//         component: RecordTable
//     },
//     {
//         path: '/Calendar',
//         component: Calendar
//     },
//     {
//         path: '/tableVue',
//         component: tableVue
//     }
// ]
//
// const router = createRouter({
//     history: createWebHashHistory(),
//     routes
// })
//
//
// // 挂载路由导航守卫
// // to是我们跳转的路径，from是来自的路径，next为放行函数，这里不做处理
// router.beforeEach((to,from,next)=>{
//     if (to.path === "/") return next("/HelloWorld");
//     // 不做处理之间跳转
//     next();
// })
// export default router
//
