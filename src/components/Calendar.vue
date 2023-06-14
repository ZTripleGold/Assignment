<template>
    <el-row :gutter="20" class="home_head" style="margin-top: 20px;">
        <el-col>
            <el-card>
                <el-config-provider :locale="locale">
                    <el-calendar v-model="nowDateValue">
                    </el-calendar>
                </el-config-provider>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
export default {
    name: 'CalendarTable',
    components: {
        [ElConfigProvider.name]: ElConfigProvider
    },
    setup () {
        return {
            locale: zhCn
        }
    },
    data () {
        return {
            nowDateValue: new Date()
        }
    }
}
</script>

<style scoped>

</style>