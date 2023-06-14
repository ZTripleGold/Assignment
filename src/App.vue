<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <nav class="navbar bg-dark fixed-top">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <form class="d-flex mt-3" role="search" id="nav-form">
                            <input class="form-control me-2 text-light" type="search" placeholder="Search" aria-label="Search" style="color: black !important;">
                            <router-link to="/tableVue" class="btn btn-outline-success text-light" type="submit">
                                Search
                            </router-link>
                        </form>
                        <div class="navbar-brand text-light" id="tools-container">
                            <div class="navbar-brand text-light" href="/HelloWorld">
                                <router-link to="/HelloWorld">
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                        <el-icon class="el-icon--right">
                                            <Tools />
                                        </el-icon>&nbsp;&nbsp;&nbsp;Triple Gold
                                    </span>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                            <el-dropdown-item>Action 1</el-dropdown-item>
                                            <el-dropdown-item>Action 2</el-dropdown-item>
                                            <el-dropdown-item>Action 3</el-dropdown-item>
                                            <el-dropdown-item disabled>Action 4</el-dropdown-item>
                                            <el-dropdown-item divided>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                                </router-link>
                            </div>
                        </div>
                        <div class="offcanvas offcanvas-start offcanvas-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header bg-dark">
                                <h5 class="offcanvas-title text-light" id="offcanvasNavbarLabel">X-Web</h5>
                                <button type="button" class="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body bg-dark" id="nav-div-ul">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" id="nav-ul">
                                    <li class="nav-item">
                                        <router-link to="/HelloWorld" class="nav-link active text-light">
                                            <el-icon><MoreFilled /></el-icon>&nbsp;&nbsp;概要
                                        </router-link>
                                    </li>
                                    <li class="nav-item dropdown" id="nav-dropdown">
                                        <a class="nav-link dropdown-toggle text-light" href="/HelloWorld" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <el-icon><Menu /></el-icon>&nbsp;&nbsp;数据分析
                                        </a>
                                        <ul class="dropdown-menu bg-dark">
                                            <router-link to="/PieChart" class="dropdown-item text-light">
                                                <el-icon><PieChart /></el-icon>&nbsp;&nbsp;图表
                                            </router-link>
                                            <router-link to="/TableChart" class="dropdown-item text-light">
                                                <el-icon><TrendCharts /></el-icon>&nbsp;&nbsp;表格
                                            </router-link>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/Calendar" class="nav-link text-light">
                                            <el-icon><Tools /></el-icon>&nbsp;&nbsp;设置
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/RecordTable" class="nav-link text-light">
                                            <el-icon><ZoomIn /></el-icon>&nbsp;&nbsp;关于
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </el-header>
            <el-main id="main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>


<script>
/* 导入HelloWorld组件 */
// import HelloWorld from './components/HelloWorld.vue'

import {MoreFilled, PieChart, Tools, TrendCharts, ZoomIn} from "@element-plus/icons-vue";

export default {
    name: 'App',
    components: {TrendCharts, PieChart, ZoomIn, MoreFilled, Tools},
}
</script>

<style>
@import 'css/nav.css'; /* 导入样式文件 */

</style>