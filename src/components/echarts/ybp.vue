<template>
    <div class="ybpChart">
        <div ref="myChart" :style="{ height: height,width:width }"></div>
    </div>
</template>
<script>
export default {
    name: 'ybpChart',
    props: {
        height: String,
        width: String
    },
    data() {
        return {}
    },
    mounted() {
        // 初始化Echarts实例
        const _this = this
        // const data = {}
        // 指定配置和数据
        const option = {
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%',
                borderWidth: 0
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}%',
                        textStyle: {
                            fontSize: 16
                        }
                    },
                    data: [{ value: 50, name: '温度' }],
                    axisLine: {
                        lineStyle: {
                            // 属性lineStyle控制线条样式
                            color: [
                                [0.5, '#FF6F90'],
                                [0.8, '#FFB36F'],
                                [1, '#27D9C8']
                            ],
                            shadowColor: '#ccc',
                            shadowBlur: 25,
                            width: 5
                        }
                    },
                    // 刻度线
                    splitLine: {
                        length: 10
                    },
                    axisLabel: {
                        distance: 0,
                    },
                    title: {
                        show: true,
                        offsetCenter: [0, '60%'],
                        color: '#333',
                        fontSize: 12
                    }
                }
            ]
        }
        _this.chart = this.$echarts.init(_this.$refs.myChart)
        _this.chart.setOption(option)
        // 绑定监听事件
        window.addEventListener('resize', _this.resizeHandler)
    }
}
</script>
<style  scoped>
</style>