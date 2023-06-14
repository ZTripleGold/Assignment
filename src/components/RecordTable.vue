<template>
    <p id="p4"><b>操作记录</b></p>
    <div class="item item-records">
        <el-table :data="tableData" height="335" style="width: 100% " class="my-table" >
            <el-table-column prop="date" label="时间" width="180" />
            <el-table-column prop="name" label="用户" width="180" />
            <el-table-column prop="address" label="IP地址" />
            <el-table-column prop="content" label="操作内容" />
        </el-table>
    </div>
</template>

<script>
import { ref } from 'vue';
import '../css/main.css'

export default {
    name: 'RecordTable',
    setup() {
        const tableData = ref([]);
        const names = ['张三'];
        const addresses = ['127.0.0.1'];

        // 生成随机日期时间
        function randomDateTime() {
            const startDate = new Date('2023-06-13 12:33:33');
            const endDate = new Date('2023-06-13 12:22:22');
            const diff = endDate.getTime() - startDate.getTime();
            const randomDiff = Math.floor(Math.random() * diff);
            const randomDate = new Date(startDate.getTime() + randomDiff);
            return randomDate;
        }

        // 生成随机内容
        function randomContent(index) {
            return index % 2 === 0 ? '退出登录' : '登录';
        }

        for (let i = 0; i < 12; i++) {
            const date = randomDateTime();
            const name = names[0];
            const address = addresses[0];
            const content = randomContent(i);
            const dateStr = date.toLocaleString('zh-CN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            }).replace(/\//g, '-').replace(',', '');
            tableData.value.push({
                date: dateStr,
                name,
                address,
                content,
            });
        }

        return {
            tableData,
        };
    },
};
</script>