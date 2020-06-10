<template>
    <div class="datav-index">
        <div class="index-content">
            <!-- 头部 -->
            <div class="index-header">
                <div class="hd-nav nav-left">
                    <div class="nav-item">
                        <el-link href="/">首页</el-link>
                    </div>

                    <div class="nav-item">
                        <el-link href="/">用能月报</el-link>
                    </div>

                    <div class="nav-item">
                        <el-link href="/">运维中心</el-link>
                    </div>
                </div>

                <div class="hd-nav nav-right">
                    <div class="nav-item">
                        <el-link href="/">首页</el-link>
                    </div>

                    <div class="nav-item">
                        <el-link href="/">用能月报</el-link>
                    </div>

                    <div class="nav-item">
                        <el-link href="/">运维中心</el-link>
                    </div>
                </div>

                <div class="hd-title">
                    {{ $config.company.name }}
                </div>
            </div>

            <!-- 底部 -->
            <div class="index-main">
                <!-- 左侧 -->
                <div class="main-left">
                    <!-- 饼状图 -->
                    <div class="left-pie main-item">
                        <div class="main-hd">
                            <div class="hd-title">
                                饼状图
                            </div>

                            <div class="hd-sx">
                                刷新
                            </div>
                        </div>
                        <chart-pie height="3.125rem"></chart-pie>
                    </div>

                    <!-- 日程 -->
                    <div class="left-calendar main-item">
                        <div class="main-hd">
                            <div class="hd-title">
                                日程计划
                            </div>

                            <div class="hd-sx">
                                刷新
                            </div>
                        </div>
                        <el-calendar v-model="calendar" :range="range">
                        </el-calendar>
                    </div>

                    <!-- 天气预报 -->
                    <div class="left-weather">
                        <div class="main-hd">
                            <div class="hd-title">
                                天气预报
                            </div>

                            <div class="hd-sx">
                                刷新
                            </div>
                        </div>

                        <div class="weather-main">
                            <div class="weather-t">
                                <!-- 气温 -->
                                <div class="qw">
                                    25°C
                                    <span>多云</span>
                                </div>

                                <!-- 风速 -->
                                <div class="fs">
                                    西南风二级
                                </div>

                                <!-- 时间 -->
                                <div class="sj">
                                    18:00
                                </div>
                            </div>

                            <div class="weather-list"></div>
                        </div>
                    </div>
                </div>
                <div class="main-center"></div>
                <div class="main-right"></div>
            </div>
        </div>
    </div>
</template>

<script>
import chartPie from '../components/echarts/pie-chart'
export default {
    name: 'datav_index',
    data() {
        return {
            calendar: new Date(),
            range: []
        }
    },
    components: {
        chartPie
    },
    created() {
        this.getWeek()
    },
    methods: {
        // 获取本周日期
        getWeek() {
            // 获取当前时间
            const inowDate = new Date()
            console.log(inowDate)
            const d1 = this.dealTime(1, '20200528')
            const d7 = this.dealTime(0, '20200528')
            console.log(d1, d7)
            this.range = [d1, d7]
            console.log(this.range)
        },

        dealTime(dayNum, dat) {
            if (dayNum == '0') {
                dayNum = 7
            }
            var uom = new Date(),
                dateStr = '',
                fday = ''
            fday = dat.substring(6, 8)
            uom.setYear(dat.substring(0, 4))
            uom.setMonth(parseInt(dat.substring(4, 6)) - 1)
            uom.setDate(fday)

            if (uom.getDay() == 0) {
                uom.setDate(uom.getDate() - (7 - dayNum))
            } else {
                uom.setDate(uom.getDate() - (uom.getDay() - dayNum))
            }
            var mon = uom.getMonth() + 1 + ''
            if (mon.length != 2) {
                mon = '0' + mon
            }
            var day = uom.getDate() + ''
            if (day.length != 2) {
                day = '0' + day
            }
            dateStr = '' + uom.getFullYear() + '-' + mon + '-' + day
            return dateStr
        }
    }
}
</script>
