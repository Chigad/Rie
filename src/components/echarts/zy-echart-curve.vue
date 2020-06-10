<template>
    <div class="zy-echart-curve">
        <div ref="myChart" :style="{ height: height }"></div>
    </div>
</template>

<script>
export default {
    name: 'zy-echart-curve',
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
        const data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        }

        // 2. 指定配置和数据
        const option = {
            color: ['#2dc4d9', '#b4a3e9'],
            tooltip: {
                // 通过坐标轴来触发
                trigger: 'axis'
            },
            legend: {
                // 距离容器10%
                right: '0',
                // 修饰图例文字的颜色
                textStyle: {
                    color: '#4c9bfd'
                }
                // 如果series 里面设置了name，此时图例组件的data可以省略
                // data: ["邮件营销", "联盟广告"]
            },
            grid: {
                top: '8%',
                left: '3%',
                right: '4%',
                bottom: '0%',
                show: true,
                borderColor: '#012f4a',
                containLabel: true
            },

            xAxis: {
                type: 'category',
                boundaryGap: false,
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
                // 去除刻度
                axisTick: {
                    show: false
                },
                // 修饰刻度标签的颜色
                axisLabel: {
                    color: '#2dc4d9'
                },
                // 去除x坐标轴的颜色
                axisLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                // 去除刻度
                axisTick: {
                    show: false
                },
                // 修饰刻度标签的颜色
                axisLabel: {
                    color: '#2dc4d9'
                },
                // 修改y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: '#2dc4d9'
                    }
                }
            },
            series: [
                {
                    name: '新增粉丝',
                    type: 'line',
                    stack: '总量',
                    // 是否让线条圆滑显示
                    smooth: true,
                    data: data.year[0]
                },
                {
                    name: '新增游客',
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    data: data.year[1]
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
