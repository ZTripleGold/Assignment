<template>
    <p id="p1"><b>统计数据</b></p>
    <div class="container">
        <!-- 日历部分、浏览器统计部分、访问量部分 -->
        <div class="info">
            <div class="item item-calendar"><router-link to="/Calendar"><Calendar/></router-link></div>
            <div class="item item-stats"><router-link to="/PieChart"><PieChart/></router-link></div>
            <div class="item item-visits"><router-link to="/TableChart"><TableChart/></router-link></div>
        </div>

        <!-- 点击量部分、操作记录部分 -->
        <div class="actions">
            <div class="item item-clicks" id="clicks">
                <div class="box">
                    <p class="p1">{{ dailyClicks1 }}</p>
                    <p class="p2">{{ total1 }}</p>
                    <p class="p3" :style="{ color: percentageColor1 }">{{ decreasePercentage1 }}</p>
                </div>
                <div class="box">
                    <p class="p1">{{ dailyClicks2 }}</p>
                    <p class="p2">{{ total2 }}</p>
                    <p class="p3" :style="{ color: percentageColor2 }">{{ decreasePercentage2 }}</p>
                </div>
                <div class="box">
                    <p class="p1">{{ dailyClicks3 }}</p>
                    <p class="p2">{{ total3 }}</p>
                    <p class="p3" :style="{ color: percentageColor3 }">{{ decreasePercentage3 }}</p>
                </div>
                <div class="box">
                    <p class="p1">{{ dailyClicks4 }}</p>
                    <p class="p2">{{ total4 }}</p>
                    <p class="p3" :style="{ color: percentageColor4 }">{{ decreasePercentage4 }}</p>
                </div>
            </div>
            <div class="item item-records"><router-link to="/RecordTable"><RecordTable/></router-link></div>
        </div>
    </div>
</template>

<script>
// import {MoreFilled, Tools, ZoomIn} from "@element-plus/icons-vue";
import PieChart from '../components/PieChart.vue'
import TableChart from '../components/TableChart.vue'
import RecordTable from '../components/RecordTable.vue'
import Calendar from '../components/Calendar.vue'
// import { useRouter } from 'vue-router'
// import router from '@/router'

export default {
    name: 'HelloWorld',
    // components: {ZoomIn, MoreFilled, Tools, PieChart, TableChart, RecordTable, Calendar},
    components: {PieChart, TableChart, RecordTable, Calendar},
    /* 显示数据 */
    data() {
        return {
            dailyClicks1: '日点击',
            total1: '1,163',
            decreasePercentage1: '-21.2%',
            dailyClicks2: '周点击',
            total2: '9,233',
            decreasePercentage2: '11.2%',
            dailyClicks3: '平均停留时间',
            total3: '21 min',
            decreasePercentage3: '-1.2%',
            dailyClicks4: '日活跃',
            total4: '31.21',
            decreasePercentage4: '4.2%',
        };
    },
    /* 颜色显示判断 */
    computed: {
        percentageColor1() {
            return this.decreasePercentage1.includes('-') ? '#008000' : 'red';
        },
        percentageColor2() {
            return this.decreasePercentage2.includes('-') ? '#008000' : 'red';
        },
        percentageColor3() {
            return this.decreasePercentage3.includes('-') ? '#008000' : 'red';
        },
        percentageColor4() {
            return this.decreasePercentage4.includes('-') ? '#008000' : 'red';
        },
    },
};
</script>

<style>
router-link {
    text-decoration: none;
    color: yellow;
}
</style>