<template>
    <div class="analyses-contrast h-100">
        <el-row :gutter="10" class="h-100">
            <!-- 左侧选择项 -->
            <el-col :lg="6" :xm="8" class="h-100 contrast-left">
                <el-card class="h-100 zy-card">
                    <!-- 卡片头部 -->
                    <div
                        slot="header"
                        class="clearfix card-hd d-flex jc-between"
                    >
                        <span class="font-16 text-white">变压器列表</span>
                    </div>

                    <!-- 卡片底部 -->
                    <div class="left-main">
                        <div class="font-14 mb-1">能源站名称：</div>
                        <zy-search-dz class="mr-2 mb-2" :dx="dx"></zy-search-dz>

                        <!-- 树形节点 -->
                        <el-tree
                            :data="treeData"
                            ref="tree"
                            show-checkbox
                            default-expand-all
                            node-key="id"
                            :default-checked-keys="[3]"
                            :props="defaultProps"
                            @check-change="handleNodeClick"
                        >
                        </el-tree>
                    </div>
                </el-card>
            </el-col>

            <!-- 右侧数据 -->
            <el-col :lg="18" :xm="16" class="h-100">
                <el-card class="zy-card">
                    <el-date-picker
                        class="mr-2"
                        style="width:200px"
                        v-model="value1"
                        type="year"
                        placeholder="选择年份"
                    >
                    </el-date-picker>
                    <el-button>上一年</el-button>
                    <el-button>下一年</el-button>
                    <div id="myChart" style="height:400px"></div>
                    <!-- 表格 -->
                    <Tables :rightHeader="rightHeader" :rightsDate="rightsDate">
                    </Tables
                ></el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import funcBtn from '@/mixins/buttons'
export default {
    name: 'analyses_contrast',
    mixins: [funcBtn],
    data() {
        return {
            name: '运行报表',
            dx: '2',
            treeData: [
                {
                    id: 0,
                    label: '热量表',
                    children: [
                        {
                            id: 3,
                            label: '热源侧'
                        },
                        {
                            id: 4,
                            label: '用户侧'
                        }
                    ]
                },
                {
                    id: 1,
                    label: '电表'
                },
                {
                    id: 2,
                    label: '水表'
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            rightHeader: [
                {
                    label: '月份',
                    key: 'month'
                },
                {
                    label: '本期',
                    key: 'current'
                },
                {
                    label: '同期',
                    key: 'same'
                },
                {
                    label: '同比(%)',
                    key: 'contrast'
                },
                {
                    label: '累计同比(%)',
                    key: 'cumulative'
                }
            ],
            rightsDate: [
                {
                    month: '1月',
                    current: '75712.00',
                    same: '121758.00',
                    contrast: '-37.82%',
                    cumulative: '-37.82%'
                },
                {
                    month: '2月',
                    current: '75712.00',
                    same: '121758.00',
                    contrast: '-37.82%',
                    cumulative: '-37.82%'
                },
                {
                    month: '3月',
                    current: '75712.00',
                    same: '121758.00',
                    contrast: '-37.82%',
                    cumulative: '-37.82%'
                },
                {
                    month: '4月',
                    current: '75712.00',
                    same: '121758.00',
                    contrast: '-37.82%',
                    cumulative: '-37.82%'
                },
                {
                    month: '5月',
                    current: '75712.00',
                    same: '121758.00',
                    contrast: '-37.82%',
                    cumulative: '-37.82%'
                },
                {
                    month: '6月',
                    current: '75712.00',
                    same: '121758.00',
                    contrast: '-37.82%',
                    cumulative: '-37.82%'
                },
                {
                    month: '7月',
                    current: '75712.00',
                    same: '121758.00',
                    contrast: '-37.82%',
                    cumulative: '-37.82%'
                },
                {
                    month: '8月',
                    current: '75712.00',
                    same: '121758.00',
                    contrast: '-37.82%',
                    cumulative: '-37.82%'
                },
                {
                    month: '9月',
                    current: '75712.00',
                    same: '121758.00',
                    contrast: '-37.82%',
                    cumulative: '-37.82%'
                },
                {
                    month: '10月',
                    current: '75712.00',
                    same: '121758.00',
                    contrast: '-37.82%',
                    cumulative: '-37.82%'
                },
                {
                    month: '11月',
                    current: '75712.00',
                    same: '121758.00',
                    contrast: '-37.82%',
                    cumulative: '-37.82%'
                },
                {
                    month: '12月',
                    current: '75712.00',
                    same: '121758.00',
                    contrast: '-37.82%',
                    cumulative: '-37.82%'
                }
            ],
            value1: '2020',
            option: {
                color: ['#5ba4f7', '#00d1b1'], //分别对应两个柱状图的颜色
                textStyle: {
                    color: '#828282'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'line' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    icon: 'square', // 在此处改变右上方图例的形状
                    data: ['本期', '同期'], // 在此处设置图例的文本展示内容
                    itemGap: 30,
                    // 以下是定义图例展示的位置
                    right: 0,
                    top: 0,
                    padding: 0
                },
                grid: {
                    // 此处定义图表内容到周边的距离
                    left: '0',
                    right: '0',
                    bottom: '3%',
                    containLabel: true
                },
                // 这里定义x轴的数据展示
                xAxis: [
                    {
                        type: 'category',
                        data: [
                            '1月',
                            '2月',
                            '3月',
                            '4月',
                            '5月',
                            '6月',
                            '7月',
                            '8月',
                            '9月',
                            '10月',
                            '11月',
                            '12月'
                        ],
                        axisTick: {
                            // alignWithLabel: true,
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#e0e0e0'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        min: 0,
                        max: 140000,
                        interval: 20000,
                        axisTick: { show: false },
                        axisLine: {
                            lineStyle: {
                                color: '#e0e0e0'
                            }
                        },
                        axisLabel: {
                            formatter: '{value}kW.h'
                        }
                    }
                ],
                series: [
                    {
                        name: '本期',
                        type: 'bar',
                        barWidth: '23px',
                        data: [
                            75712.0,
                            33196.0,
                            44878.0,
                            25618.0,
                            15174.0,
                            '-',
                            '-',
                            '-'
                        ]
                    },
                    {
                        name: '同期',
                        type: 'bar',
                        barWidth: '23px',
                        data: [
                            121758.0,
                            88276.0,
                            91558.0,
                            28276.0,
                            33250.0,
                            58220.0,
                            89814.0,
                            130874.0
                        ]
                    }
                ]
            }
        }
    },
    methods: {
        // 单选左侧
        handleNodeClick(data, checked, node) {
            console.log(data, checked, node)
            if (checked === true) {
                this.checkedId = data.id
                this.$refs.tree.setCheckedKeys([data.id])
            } else {
                if (this.checkedId == data.id) {
                    this.$refs.tree.setCheckedKeys([data.id])
                }
            }
        },
        getChartData() {
            // 选择容器并初始化
            let myChart = this.$echarts.init(document.querySelector('#myChart'))
            // 设置容器的内容并进行图表绘制
            myChart.setOption(this.option)
            setTimeout(function() {
                // 这里是让图表根据视图大小进行自适应
                window.onresize = function() {
                    myChart.resize()
                }
            }, 200)
        }
    },
    mounted() {
        this.getChartData()
    }
}
</script>
