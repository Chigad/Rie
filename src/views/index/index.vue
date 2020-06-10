<template>
    <div class="index-content">
        <!-- 顶部栏目 -->
        <el-row :gutter="10" class="index-header">
            <!-- 概况栏目 -->
            <el-col :lg="8" :md="24" class="index-survey header-modules mb-2">
                <el-card class="survey-card zy-card h-100">
                    <!-- 卡片-头部 -->
                    <div
                        slot="header"
                        class="clearfix card-hd d-flex jc-between"
                    >
                        <span class="font-16 text-white"
                            ><i
                                :class="[
                                    'iconfont',
                                    'icon-biaodanyemian',
                                    'font-20',
                                    'lh-20'
                                ]"
                            ></i
                            >概况</span
                        >
                    </div>

                    <!-- 卡片底部 -->
                    <div class="card-body">
                        <!-- 搜索 -->
                        <zy-search-dz class="search-dz mb-1"></zy-search-dz>
                        <!-- main -->
                        <div class="survey-main">
                            <el-row :gutter="10">
                                <el-col
                                    :span="8"
                                    v-for="(item, index) in surveyData"
                                    :key="index"
                                    class="survey-item mt-1 ta-center"
                                >
                                    <div
                                        class="survey-icon mb-1"
                                        :style="{
                                            backgroundPosition:
                                                '0 ' + -46 * index + 'px'
                                        }"
                                    ></div>

                                    <div class="survey-title mb-1 font-14">
                                        {{ item.title }}
                                    </div>

                                    <div
                                        class="survey-number font-16 lh-24 bg-gray"
                                    >
                                        {{ item.number }}
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-card>
            </el-col>

            <!-- 运行状态 -->
            <el-col :lg="8" :md="24" class="index-status header-modules mb-2">
                <el-card class="status-card zy-card h-100">
                    <!-- 卡片-头部 -->
                    <div
                        slot="header"
                        class="clearfix card-hd d-flex jc-between"
                    >
                        <span class="font-16 text-white"
                            ><i
                                :class="[
                                    'iconfont',
                                    'icon-iconfkzt',
                                    'font-20',
                                    'lh-20'
                                ]"
                            ></i
                            >运行状态</span
                        >
                    </div>

                    <!-- 卡片底部 -->
                    <div class="card-body">
                        <!-- 提示 -->
                        <el-alert
                            class="mb-2"
                            title="更新时间 ： 2020-05-21 08:25:00"
                            type="info"
                        ></el-alert>

                        <!-- main -->
                        <el-row :gutter="10" class="mb-1 status-top">
                            <el-col
                                class="status-item ta-center"
                                v-for="(item, index) in statusTopData"
                                :key="index"
                                :span="6"
                            >
                                <!-- 图标 -->
                                <div
                                    class="status-icon"
                                    :style="{
                                        backgroundPosition:
                                            '0 ' + -74 * index + 'px'
                                    }"
                                ></div>

                                <!-- title -->
                                <div class="status-title fons-14">
                                    {{ item.title }}
                                </div>
                                <div class="status-number font-16 fw-600">
                                    {{ item.number }}
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="4" class="status-link">
                            <el-col
                                class="status-item ta-center"
                                :span="6"
                                v-for="(item, index) in statusBtmData"
                                :key="index"
                            >
                                <!-- 图标 -->
                                <div class="status-img bg-gray-dark py-3">
                                    <div
                                        class="im"
                                        :style="{
                                            backgroundPosition:
                                                '0 ' + -29 * index + 'px'
                                        }"
                                    ></div>
                                </div>

                                <!-- title -->
                                <div
                                    class="status-title font-16 bg-gray po-relative lh-26 text-white"
                                >
                                    {{ item.title }}
                                    <div class="bo bo1 po-absolute"></div>
                                    <div class="bo bo2 po-absolute"></div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-card>
            </el-col>

            <!-- 记录栏目 -->
            <el-col :lg="8" :md="24" class="index-log h-100 mb-2">
                <!-- 当日事件记录 -->
                <el-card class="log-func zy-card mb-2">
                    <!-- 卡片-头部 -->
                    <div
                        slot="header"
                        class="clearfix card-hd d-flex jc-between"
                    >
                        <span class="font-16 text-white"
                            ><i
                                :class="[
                                    'iconfont',
                                    'icon-shijian',
                                    'font-20',
                                    'lh-20'
                                ]"
                            ></i
                            >当日事件记录</span
                        >
                    </div>

                    <!-- 卡片底部 -->
                    <div class="card-body">
                        <el-row :gutter="10">
                            <el-col :span="8" class="ta-center func-item">
                                <div class="func-hd text-white font-14 fw-600">
                                    遥测越限
                                </div>
                                <div
                                    class="func-ft font-14 bg-gray-light  lh-24 fw-600"
                                >
                                    0次
                                </div>
                            </el-col>

                            <el-col :span="8" class="ta-center func-item">
                                <div class="func-hd text-white font-14 fw-600">
                                    遥测越限
                                </div>
                                <div
                                    class="func-ft font-14 bg-gray-light lh-24 fw-600"
                                >
                                    0次
                                </div>
                            </el-col>

                            <el-col :span="8" class="ta-center func-item">
                                <div class="func-hd text-white font-14 fw-600">
                                    遥测越限
                                </div>
                                <div
                                    class="func-ft font-14 bg-gray-light lh-24 fw-600"
                                >
                                    0次
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-card>

                <!-- 近期巡检记录 -->
                <el-card class="log-inspect h-100 zy-card">
                    <!-- 卡片-头部 -->
                    <div
                        slot="header"
                        class="clearfix card-hd d-flex jc-between"
                    >
                        <span class="font-16 text-white"
                            ><i
                                :class="[
                                    'iconfont',
                                    'icon-biaodanyemian',
                                    'font-20',
                                    'lh-20'
                                ]"
                            ></i
                            >近期巡检记录</span
                        >
                    </div>

                    <!-- 卡片底部 -->
                    <div class="card-body po-relative">
                        <div class="inspect-item lh-24 font-14 inspect-time">
                            巡检时间：<span
                                >2020-04-03 13:07 - 2020-04-03 13:13</span
                            >
                        </div>
                        <div class="inspect-item lh-24 font-14 ">
                            巡 检 项：<span>0</span> 项
                        </div>
                        <div class="inspect-item lh-24 font-14">
                            缺 陷 项：<span>0</span> 项
                        </div>
                        <div class="inspect-item lh-24 font-14">
                            巡检人员：<span>叶奇超</span>
                        </div>

                        <!-- 合格率 -->
                        <div class="po-absolute inspect-pass ta-center">
                            <div class="number fw-600">96%</div>
                            <div class="title font-14 text-white">合格率</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <!-- 底部栏目 -->
        <el-row :gutter="10" class="index-body">
            <!-- 底部图表 -->
            <el-col :lg="16" :md="24" class="index-echart">
                <el-card class="echart-main h-100 zy-card">
                    <!-- 卡片-头部 -->
                    <div
                        slot="header"
                        class="clearfix card-hd d-flex jc-between"
                    >
                        <span class="font-16 text-white"
                            ><i
                                :class="[
                                    'iconfont',
                                    'icon-tongji',
                                    'font-20',
                                    'lh-20'
                                ]"
                            ></i
                            >当日逐时用电曲线</span
                        >

                        <div
                            slot="btn"
                            class="d-flex jc-center ai-center font-14 card-btn"
                        >
                            <div
                                :class="[
                                    'cu-p',
                                    'text-white',
                                    'card-btn-item',
                                    echartsActive == 'f' ? 'active' : ''
                                ]"
                                @click="getEchartsOpt('f')"
                            >
                                分时段
                            </div>
                            <span class="px-1">|</span>
                            <div
                                :class="[
                                    'cu-p',
                                    'text-white',
                                    'card-btn-item',
                                    echartsActive == 'z' ? 'active' : ''
                                ]"
                                @click="getEchartsOpt('z')"
                            >
                                总用电
                            </div>
                        </div>
                    </div>

                    <!-- 卡片底部 -->
                    <div class="card-body po-relative">
                        <zy-echarts-curve height="360px"></zy-echarts-curve>
                    </div>
                </el-card>
            </el-col>

            <!-- 用电概况 -->
            <el-col :lg="8" :sm="24" class="index-electric">
                <el-card class="electric-main h-100 zy-card">
                    <!-- 卡片-头部 -->
                    <div
                        slot="header"
                        class="clearfix card-hd d-flex jc-between"
                    >
                        <span class="font-16 text-white"
                            ><i
                                :class="[
                                    'iconfont',
                                    'icon-yongdianfenxi',
                                    'font-20',
                                    'lh-20'
                                ]"
                            ></i
                            >用电概况</span
                        >

                        <div
                            slot="btn"
                            class="d-flex jc-center ai-center font-14 card-btn"
                        >
                            <div
                                :class="[
                                    'cu-p',
                                    'text-white',
                                    'card-btn-item',
                                    useEleActive == 'y' ? 'active' : ''
                                ]"
                                @click="getUseEle('y')"
                            >
                                年
                            </div>
                            <span class="px-1">|</span>
                            <div
                                :class="[
                                    'cu-p',
                                    'text-white',
                                    'card-btn-item',
                                    useEleActive == 'm' ? 'active' : ''
                                ]"
                                @click="getUseEle('m')"
                            >
                                月
                            </div>

                            <span class="px-1">|</span>
                            <div
                                :class="[
                                    'cu-p',
                                    'text-white',
                                    'card-btn-item',
                                    useEleActive == 'd' ? 'active' : ''
                                ]"
                                @click="getUseEle('d')"
                            >
                                日
                            </div>
                        </div>
                    </div>

                    <!-- 卡片底部 -->
                    <div class="card-body po-relative">
                        <div class="use-ele">
                            <el-row
                                v-for="(item, index) in useEle"
                                :key="index"
                                class="use-ele-item"
                            >
                                <el-col class="title ta-center" :span="8">{{
                                    item.title
                                }}</el-col>
                                <el-col
                                    class="number pl-4 po-relative"
                                    :span="16"
                                >
                                    {{ item.number }}

                                    <div
                                        v-if="item.status !== 0"
                                        :class="[
                                            'po-absolute',
                                            'use-ele-status',
                                            item.status == 1 ? 'up' : 'down'
                                        ]"
                                    ></div>
                                </el-col>
                            </el-row>
                        </div>

                        <el-row>
                            <el-col
                                :span="12"
                                class="d-flex jc-center bg-gray ta-center ai-center"
                            >
                                <div class="number py-1">
                                    <div class="item font-18 fw-600 text-white">
                                        09:00-09:15
                                    </div>
                                    <div class="item">最大用电时间</div>
                                </div>
                            </el-col>

                            <el-col
                                :span="12"
                                class="d-flex jc-center bg-gray ta-center ai-center"
                            >
                                <div class="number py-1">
                                    <div class="item font-18 fw-600 text-white">
                                        09:00-09:15
                                    </div>
                                    <div class="item">最大用电时间</div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import zySearchDz from '@/components/zy-search-dz'
import zyEchartsCurve from '@/components/echarts/zy-echart-curve'
export default {
    name: 'index',
    data() {
        return {
            surveyData: [
                {
                    title: '电压等级',
                    number: '10/0.4kV'
                },
                {
                    title: '电压等级',
                    number: '10/0.4kV'
                },
                {
                    title: '电压等级',
                    number: '10/0.4kV'
                },
                {
                    title: '电压等级',
                    number: '10/0.4kV'
                },
                {
                    title: '电压等级',
                    number: '10/0.4kV'
                },
                {
                    title: '电压等级',
                    number: '10/0.4kV'
                }
            ],
            statusTopData: [
                {
                    title: '电压等级',
                    number: '10/0.4kV'
                },
                {
                    title: '电压等级',
                    number: '10/0.4kV'
                },
                {
                    title: '电压等级',
                    number: '10/0.4kV'
                },
                {
                    title: '电压等级',
                    number: '10/0.4kV'
                }
            ],
            statusBtmData: [
                {
                    title: '有功功率',
                    path: '/'
                },
                {
                    title: '有功功率',
                    path: '/'
                },
                {
                    title: '有功功率',
                    path: '/'
                },
                {
                    title: '有功功率',
                    path: '/'
                }
            ],
            tableData: [
                {
                    date: '当日用电',
                    name: '398.96 kW·h'
                },
                {
                    date: '当日用电',
                    name: '398.96 kW·h'
                },
                {
                    date: '当日用电',
                    name: '398.96 kW·h'
                },
                {
                    date: '当日用电',
                    name: '398.96 kW·h'
                }
            ],
            useEle: [
                {
                    title: '今年用电',
                    number: '222756.32 kW·h',
                    status: 0
                },
                {
                    title: '上月同期',
                    number: '23176 kW·h',
                    status: 0
                },
                {
                    title: '环比',
                    number: '-5.85%',
                    status: 1
                }
            ],
            useEleActive: 'y',
            echartsActive: 'f'
        }
    },
    components: {
        zySearchDz,
        zyEchartsCurve
    },
    created() {
        this.getHrzGkList()
        this.getEchartData()
    },
    methods: {
        getEchartsOpt(type) {
            this.echartsActive = type
            alert('获取echarts-option' + type)
        },
        getUseEle(type) {
            this.useEleActive = type
            alert('获取' + type)
            if (type === 'd') {
                this.useEle = [
                    {
                        title: '今年用电',
                        number: '222756.32 kW·h',
                        status: 0
                    },
                    {
                        title: '上月同期',
                        number: '23176 kW·h',
                        status: 0
                    },
                    {
                        title: '环比',
                        number: '-5.85%',
                        status: 2
                    }
                ]
            } else {
                this.useEle = [
                    {
                        title: '今年用电',
                        number: '222756.32 kW·h',
                        status: 0
                    },
                    {
                        title: '上月同期',
                        number: '23176 kW·h',
                        status: 0
                    },
                    {
                        title: '环比',
                        number: '-5.85%',
                        status: 1
                    }
                ]
            }
        },
        // 获取概况列表
        getHrzGkList() {
            const res = this.$api.home.getHrzGk({
                hrz: '市民中心'
            })
            console.log(res)
        },
        // 获取echarts数据
        getEchartData() {
            const res = this.$api.home.getEchartData({
                hrz: '政府大楼',
                name: '电能'
            })
            console.log(res)
        }
    }
}
</script>
