<template>
    <div class="pie-chart">
        <div ref="pieChart" :style="{ height: height }"></div>
    </div>
</template>

<script>
export default {
    name: 'pie-chart',
    props: {
        height: String
    },
    data() {
        const tooltip = {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        }

        const legend = {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            bottom: 0,
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12'
            }
        }

        const color = [
            '#006cff',
            '#60cda0',
            '#ed8884',
            '#ff9f7f',
            '#0096ff',
            '#9fe6b8',
            '#32c5e9',
            '#1d9dff'
        ]

        const series = [
            {
                name: '点位统计',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['42%', '54%'],
                roseType: 'radius',
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '深圳' },
                    { value: 42, name: '广东' }
                ],
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 10,
                    length2: 10
                }
            }
        ]

        return {
            option: {
                tooltip,
                legend,
                color,
                series
            }
        }
    },
    mounted() {
        const _this = this
        _this.chart = this.$echarts.init(_this.$refs.pieChart)
        _this.chart.setOption(_this.option)
        window.addEventListener('resize', _this.resizeHandler)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeHandler)
        this.chart.dispose()
    },
    methods: {
        resizeHandler() {
            this.chart.resize()
        }
    }
}
</script>
