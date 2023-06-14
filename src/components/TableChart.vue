<template>
    <div ref="chart" class="item item-visits" id="TableChart" style="height: 250px; width: 500px"></div>
</template>

<script>
import * as echarts from "echarts"
import {onMounted, onUnmounted} from "vue";
import '../css/main.css'

export default {
    // 绘制数据图
    name: 'TableChart',
    setup() {
        // 定义echart
        let echart = echarts;

        onMounted(() => {
            initChart();
        });

        onUnmounted(() => {
            echart.dispose;
        });

        // 配置echart
        function initChart() {
            // 基于准备好的dom， 初始化echarts实例
            const dom = document.getElementById('TableChart');
            const pieChart = echarts.init(dom, 'light', {
                renderer: 'canvas'
            });

            // 生成随机数据
            function generateData() {
                var data = [];
                for (var i = 0; i < 12; i++) {
                    data.push(Math.round(Math.random() * 3500));
                }
                return data;
            }

            pieChart.setOption({
                title: {
                    text: '访问量',
                    top: 10,
                },
                xAxis: {
                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'], // 将横轴改为中文表示
                    axisLabel: {
                        interval: 0, // 不隔开显示标签文字
                        rotate: -30, // 旋转标签文字，以免重叠
                        margin: 10 // 调整标签文字与轴线的距离
                    },
                    axisTick: {
                        interval: 0, // 不隔开显示刻度线
                        length: 5 // 调整刻度线的长度
                    }
                },
                yAxis: {
                    min: 0,   // 纵轴最小值为 0
                    max: 3500, // 纵轴最大值为 3500
                    interval: 500, // 纵轴刻度间隔为 500
                    axisLabel: {
                        margin: 10 // 调整标签文字与轴线的距离
                    },
                    axisTick: {
                        length: 5 // 调整刻度线的长度
                    }
                },
                series: [
                    {
                        data: generateData(), // 使用随机数据
                        type: 'line',
                        smooth: true
                    }
                ]
            });
            window.onresize = function () {
                //自适应大小
                pieChart.resize();
            };
        }

        return {initChart};
    }
};
</script>

<style scoped>

</style>