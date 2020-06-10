<template>
    <div class="forecast-heating">
        <el-row :gutter="10">
            <!-- 左侧 -->
            <el-col :lg="12" :xm="12" class="byq-left">
                <el-card class="zy-card">
                    <!-- 卡片头部 -->
                    <div
                        slot="header"
                        class="clearfix card-hd d-flex jc-between"
                    >
                        <span class="font-16 text-white">气象曲线分析</span>
                    </div>

                    <!-- 卡片底部 -->
                    <!-- 最高温 最低温 -->
                    <div class="left-main po-relative">
                        <zy-echart-curve height="389px" radio></zy-echart-curve>
                    </div>
                </el-card>
            </el-col>

            <!-- 右侧 -->
            <el-col :lg="12" :xm="12">
                <!-- 选择项 -->
                <el-card class="zy-card mb-2">
                    <!-- 卡片头部 -->
                    <div
                        slot="header"
                        class="clearfix card-hd d-flex jc-between ai-center"
                    >
                        <span class="font-16 text-white">未来七天气象预报</span>
                    </div>

                    <!-- 卡片底部 -->
                    <div class="left-main">
                        <!-- 表格 -->
                        <el-table
                            :data="rightsDate"
                            stripe
                            id="out-table"
                            :default-sort="{
                                prop: 'date',
                                order: 'descending'
                            }"
                        >
                            <el-table-column
                                v-for="info in rightHeader"
                                :key="info.key"
                                :property="info.key"
                                :label="info.label"
                            >
                                <template slot-scope="scope">
                                    {{ scope.row[scope.column.property] }}
                                    <!-- 渲染对应表格里面的内容 -->
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <!-- 下部 -->
            <el-col>
                <el-card class="zy-card">
                    <!-- 卡片头部 -->
                    <div slot="header" class="d-flex jc-between">
                        <span class="font-16 text-white">供热预测</span>
                        <el-select v-model="value" placeholder="请选择能源站">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </div>

                    <!-- 卡片底部 -->
                    <!-- 最高温 最低温 最高应供热量 最低应供热量 -->
                    <div class="box-body po-relative">
                        <zy-echart-line
                            height="345px"
                            radio
                            :year="year"
                        ></zy-echart-line>
                    </div> </el-card
            ></el-col>
        </el-row>
    </div>
</template>

<script>
import zyEchartCurve from '@/components/echarts/zy-echart-curve'
import zyEchartLine from '@/components/echarts/zy-echart-line'
export default {
    name: 'forecast_heating',
    data() {
        return {
            options: [
                {
                    value: '选项1',
                    label: '能源站1'
                },
                {
                    value: '选项2',
                    label: '能源站2'
                },
                {
                    value: '选项3',
                    label: '能源站3'
                }
            ],
            value: '',
            rightHeader: [
                //行
                {
                    label: '日期',
                    key: 'date'
                },
                {
                    label: '天气',
                    key: 'weather'
                },
                {
                    label: '温度',
                    key: 'temperature'
                },
                {
                    label: '风况',
                    key: 'wind'
                },
                {
                    label: '风速',
                    key: 'speed'
                }
            ],
            rightsDate: [
                {
                    date: '2020-05-28',
                    weather: '多云',
                    temperature: '31℃-35℃',
                    wind: '东风',
                    speed: '<3级'
                },
                {
                    date: '2020-05-29',
                    weather: '多云',
                    temperature: '31℃-35℃',
                    wind: '东风',
                    speed: '<3级'
                },
                {
                    date: '2020-05-30',
                    weather: '多云',
                    temperature: '31℃-35℃',
                    wind: '东风',
                    speed: '<3级'
                },
                {
                    date: '2020-05-31',
                    weather: '多云',
                    temperature: '31℃-35℃',
                    wind: '东风',
                    speed: '<3级'
                },
                {
                    date: '2020-06-01',
                    weather: '多云',
                    temperature: '31℃-35℃',
                    wind: '东风',
                    speed: '<3级'
                },
                {
                    date: '2020-06-02',
                    weather: '多云',
                    temperature: '31℃-35℃',
                    wind: '东风',
                    speed: '<3级'
                },
                {
                    date: '2020-06-03',
                    weather: '多云',
                    temperature: '31℃-35℃',
                    wind: '东风',
                    speed: '<3级'
                }
            ],
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        }
    },
    components: {
        zyEchartLine,
        zyEchartCurve
    }
}
</script>
