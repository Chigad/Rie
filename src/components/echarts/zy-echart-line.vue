<template>
    <div class="zy-echart-line">
        <div ref="myChart" :style="{ height: height }"></div>
    </div>
</template>

<script>
export default {
    name: 'zy-echart-line',
    props: {
        height: String
    },
    data() {
        return {
            colors: [
                {
                    type: 'linear',
                    x: 0,
                    x2: 0,
                    y: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#28f0f5'
                        },
                        {
                            offset: 0.5,
                            color: '#16abaf'
                        },
                        {
                            offset: 0.5,
                            color: '#16abaf'
                        },
                        {
                            offset: 1,
                            color: '#077175'
                        }
                    ]
                },
                {
                    type: 'linear',
                    x: 0,
                    x2: 0,
                    y: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#0172e2'
                        },
                        {
                            offset: 0.5,
                            color: '#0656c6'
                        },
                        {
                            offset: 0.5,
                            color: '#0656c6'
                        },
                        {
                            offset: 1,
                            color: '#0f299a'
                        }
                    ]
                }
            ],

            barWidth: 25
        }
    },
    mounted() {
        // 初始化 Echarts 实例
        const _this = this
        const xAxisData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        const seriesName1 = '机房温度'
        const seriesName2 = '机房湿度'
        const seriesData1 = [
            10,
            10.9,
            12.4,
            13.6,
            19.2,
            22.5,
            24.6,
            18.5,
            18.7,
            19.9,
            30.8,
            15.4,
            16.9
        ]
        var seriesData2 = [
            12.6,
            13.6,
            11.6,
            15.7,
            16.6,
            17.6,
            16.7,
            15.1,
            22.4,
            23.5,
            13.6,
            16.6,
            19.6
        ]

        // 2. 指定配置和数据
        const option = {
            tooltip: {
                //提示框组件
                trigger: 'axis',
                formatter: '{a0}: {c0}°C<br />{a1}: {c1}%',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        backgroundColor: '#4c647c'
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12
                }
            },
            grid: {
                left: '1%',
                right: '4%',
                bottom: '2%',
                top: '15%',
                padding: '0 0 0 0',
                containLabel: true
            },
            legend: {
                right: '30%',
                top: 'top',
                textStyle: {
                    color: '#4c647c',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12
                },
                data: name
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true, //坐标轴两边留白
                    data: xAxisData,
                    axisLabel: {
                        //坐标轴刻度标签的相关设置。
                        interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                        margin: 15,
                        textStyle: {
                            color: '#4c647c',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12
                        }
                    },
                    axisTick: {
                        //坐标轴刻度相关设置。
                        show: false
                    },
                    axisLine: {
                        //坐标轴轴线相关设置
                        lineStyle: {
                            color: '#4c647c',
                            opacity: 0.2
                        }
                    },
                    splitLine: {
                        //坐标轴在 grid 区域中的分隔线。
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitNumber: 5,
                    axisLabel: {
                        formatter: '{value}°C',
                        textStyle: {
                            color: '#4c647c',
                            fontStyle: '{value}',
                            fontFamily: '微软雅黑',
                            fontSize: 12
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#000'],
                            opacity: 0.06
                        }
                    }
                },
                {
                    type: 'value',
                    splitNumber: 5,
                    axisLabel: {
                        formatter: '{value}%',
                        textStyle: {
                            color: '#4c647c',
                            fontStyle: '{value}',
                            fontFamily: '微软雅黑',
                            fontSize: 12
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: ['#000'],
                            opacity: 0.06
                        }
                    }
                }
            ],
            series: [
                {
                    name: seriesName1,
                    type: 'line',
                    data: seriesData1,
                    symbolSize: 11,
                    barWidth: 10,
                    barGap: 0, //柱间距离
                    itemStyle: {
                        //图形样式
                        normal: {
                            lineStyle: {
                                width: 3
                                // type: 'dotted',
                            },
                            barBorderRadius: 20,
                            color: '#5fbdff'
                        }
                    }
                },
                {
                    name: seriesName2,
                    type: 'line',
                    data: seriesData2,
                    symbolSize: 11,
                    yAxisIndex: 1,
                    barWidth: 10,
                    barGap: 1, //柱间距离
                    itemStyle: {
                        //图形样式
                        normal: {
                            lineStyle: {
                                width: 3
                                // type: 'dotted',
                            },
                            barBorderRadius: 20,
                            color: '#F6C541'
                        }
                    }
                }
            ]
        }
        _this.chart = this.$echarts.init(_this.$refs.myChart)
        _this.chart.setOption(option)

        // 绑定监听事件
        window.addEventListener('resize', _this.resizeHandler)
    },
    beforeDestroy() {
        // 清理工作 避免内存泄漏
        // 销毁监听事件
        window.removeEventListener('resize', this.resizeHandler)
        // 销毁 Echarts 实例
        this.chart.dispose()
    },
    methods: {
        // Echarts 的 resize 方法
        resizeHandler() {
            this.chart.resize()
        }
    }
}
</script>
