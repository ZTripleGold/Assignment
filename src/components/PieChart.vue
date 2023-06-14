<template>
    <div ref="chart" class="item item-stats" id="PieChart" style="height: 250px; width: 500px"></div>
</template>

<script>
import * as echarts from "echarts"
import {onMounted, onUnmounted} from "vue";
import '../css/main.css'

export default {
    // 绘制数据图
    name: 'PieChart',
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
            const dom = document.getElementById('PieChart');
            const pieChart = echarts.init(dom, 'light', {
                renderer: 'canvas'
            });
            pieChart.setOption({
                title: {
                    text: '浏览器统计',
                    top: 10,
                },
                legend: {
                    top: 35,
                    orient: 'horizontal',
                    x: 'center',
                    y: 'top',
                    itemWidth: 30,
                    itemHeight: 15,
                    itemGap: 20,
                    data: ['Chrome', 'Firefox', 'Edge', '其他']
                },
                color: ['#5470c6', '#91cc75', '#fac858', '#ee6666'],
                series: [
                    {
                        type: 'pie',
                        height: 200,
                        radius: ['55%', '90%'],  // 调整环的宽度
                        center: ['50%', '75%'],  // 调整圆环图的位置
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        labelLine: {
                            show: false
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        },
                        data: [
                            { value: 350, name: 'Chrome' },
                            { value: 400, name: 'Firefox' },
                            { value: 150, name: 'Edge' },
                            { value: 100, name: '其他' }
                        ]
                    }
                ]
            });
            window.onresize = function() {
                //自适应大小
                pieChart.resize();
            };
        }
        return { initChart };
    }
};
</script>

<style scoped>

</style>