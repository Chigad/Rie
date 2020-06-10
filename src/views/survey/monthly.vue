<template>
    <div class="survey-monthly h-100">
        <div class="monthly-header d-flex ai-center mb-2">
            <div class="font-14">起止日期：</div>
            <el-date-picker
                class="mr-2"
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            >
            </el-date-picker>
            <div class="font-14">排序字段：</div>
            <el-select v-model="value" placeholder="请选择" class="mr-2">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>

            <div class="font-14">排序方式：</div>
            <el-select v-model="value2" placeholder="请选择" class="mr-2">
                <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>

            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary" icon="el-icon-search">导出</el-button>
        </div>
        <div class="monthly-body ">
            <div class="msg w-100 d-flex ai-center jc-between">
                <div class="font-14">注意：仅支持同年查询</div>
                <div class="font-12 fw-600">(单位：kW.h)</div>
            </div>

            <!--                     :summary-method="getSummaries"
                    show-summary -->
            <div class="monthly-table">
                <el-table :data="tableData2" style="width: 100%" border>
                    <el-table-column
                        v-for="(value, key, index) in tableData2[0]"
                        :key="index"
                        :prop="key"
                        :label="key == 'name' ? '能源站名称' : key"
                        :width="key == 'name' ? '' : '100px'"
                        :min-width="key == 'name' ? '260px' : ''"
                    >
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'survey_monthly',
    data() {
        return {
            value1: ['2020-04-28T16:00:00.000Z', '2020-04-30T16:00:00.000Z'],
            options: [
                {
                    value: 'ydzl',
                    label: '用电总量'
                },
                {
                    value: 'dzmc',
                    label: '电站名称'
                },
                {
                    value: 'dzbh',
                    label: '电站编号'
                }
            ],
            value: 'ydzl',
            options2: [
                {
                    value: 'zx',
                    label: '正序'
                },
                {
                    value: 'dx',
                    label: '倒序'
                }
            ],
            value2: 'zx',
            tableData: [
                {
                    name: '江苏安科瑞仪表生产基地变电所',
                    '5-1': '23076.0',
                    '5-2': '23076.0',
                    '5-3': '23076.0',
                    '5-4': '23076.0',
                    '5-5': '23076.0',
                    '5-6': '23076.0',
                    '5-7': '23076.0',
                    '5-8': '23076.0',
                    '5-9': '23076.0',
                    '5-10': '23076.0',
                    '5-11': '23076.0',
                    '5-12': '23076.0',
                    '5-13': '23076.0',
                    '5-14': '23076.0',
                    '5-15': '23076.0',
                    '5-16': '23076.0',
                    total: '23076.0'
                },
                {
                    name: '江苏安科瑞仪表生产基地变电所',
                    '5-1': '23076.0',
                    '5-2': '23076.0',
                    '5-3': '23076.0',
                    '5-4': '23076.0',
                    '5-5': '23076.0',
                    '5-6': '23076.0',
                    '5-7': '23076.0',
                    '5-8': '23076.0',
                    '5-9': '23076.0',
                    '5-10': '23076.0',
                    '5-11': '23076.0',
                    '5-12': '23076.0',
                    '5-13': '23076.0',
                    '5-14': '23076.0',
                    '5-15': '23076.0',
                    '5-16': '23076.0',
                    total: '23076.0'
                },
                {
                    name: '江苏安科瑞仪表生产基地变电所',
                    '5-1': '23076.0',
                    '5-2': '23076.0',
                    '5-3': '23076.0',
                    '5-4': '23076.0',
                    '5-5': '23076.0',
                    '5-6': '23076.0',
                    '5-7': '23076.0',
                    '5-8': '23076.0',
                    '5-9': '23076.0',
                    '5-10': '23076.0',
                    '5-11': '23076.0',
                    '5-12': '23076.0',
                    '5-13': '23076.0',
                    '5-14': '23076.0',
                    '5-15': '23076.0',
                    '5-16': '23076.0',
                    total: '23076.0'
                },
                {
                    name: '江苏安科瑞仪表生产基地变电所',
                    '5-1': '23076.0',
                    '5-2': '23076.0',
                    '5-3': '23076.0',
                    '5-4': '23076.0',
                    '5-5': '23076.0',
                    '5-6': '23076.0',
                    '5-7': '23076.0',
                    '5-8': '23076.0',
                    '5-9': '23076.0',
                    '5-10': '23076.0',
                    '5-11': '23076.0',
                    '5-12': '23076.0',
                    '5-13': '23076.0',
                    '5-14': '23076.0',
                    '5-15': '23076.0',
                    '5-16': '23076.0',
                    total: '23076.0'
                },
                {
                    name: '江苏安科瑞仪表生产基地变电所',
                    '5-1': '23076.0',
                    '5-2': '23076.0',
                    '5-3': '23076.0',
                    '5-4': '23076.0',
                    '5-5': '23076.0',
                    '5-6': '23076.0',
                    '5-7': '23076.0',
                    '5-8': '23076.0',
                    '5-9': '23076.0',
                    '5-10': '23076.0',
                    '5-11': '23076.0',
                    '5-12': '23076.0',
                    '5-13': '23076.0',
                    '5-14': '23076.0',
                    '5-15': '23076.0',
                    '5-16': '23076.0',
                    total: '23076.0'
                },
                {
                    name: '江苏安科瑞仪表生产基地变电所',
                    '5-1': '23076.0',
                    '5-2': '23076.0',
                    '5-3': '23076.0',
                    '5-4': '23076.0',
                    '5-5': '23076.0',
                    '5-6': '23076.0',
                    '5-7': '23076.0',
                    '5-8': '23076.0',
                    '5-9': '23076.0',
                    '5-10': '23076.0',
                    '5-11': '23076.0',
                    '5-12': '23076.0',
                    '5-13': '23076.0',
                    '5-14': '23076.0',
                    '5-15': '23076.0',
                    '5-16': '23076.0',
                    total: '23076.0'
                },
                {
                    name: '江苏安科瑞仪表生产基地变电所',
                    '5-1': '23076.0',
                    '5-2': '23076.0',
                    '5-3': '23076.0',
                    '5-4': '23076.0',
                    '5-5': '23076.0',
                    '5-6': '23076.0',
                    '5-7': '23076.0',
                    '5-8': '23076.0',
                    '5-9': '23076.0',
                    '5-10': '23076.0',
                    '5-11': '23076.0',
                    '5-12': '23076.0',
                    '5-13': '23076.0',
                    '5-14': '23076.0',
                    '5-15': '23076.0',
                    '5-16': '23076.0',
                    total: '23076.0'
                },
                {
                    name: '合计',
                    '5-1': '23076.0',
                    '5-2': '23076.0',
                    '5-3': '23076.0',
                    '5-4': '23076.0',
                    '5-5': '23076.0',
                    '5-6': '23076.0',
                    '5-7': '23076.0',
                    '5-8': '23076.0',
                    '5-9': '23076.0',
                    '5-10': '23076.0',
                    '5-11': '23076.0',
                    '5-12': '23076.0',
                    '5-13': '23076.0',
                    '5-14': '23076.0',
                    '5-15': '23076.0',
                    '5-16': '23076.0',
                    total: '23076.0'
                }
            ],
            tableData2: []
        }
    },
    created() {
        this.cls()
    },
    methods: {
        cls() {
            const res = {
                nhList: [
                    {
                        cjsj: '05-26 ',
                        Value: '0',
                        HrzName: '新乡商务大厦',
                        Name: '热能'
                    },
                    {
                        cjsj: '05-25 ',
                        Value: '0',
                        HrzName: '新乡商务大厦',
                        Name: '热能'
                    },
                    {
                        cjsj: '05-24 ',
                        Value: '0',
                        HrzName: '新乡商务大厦',
                        Name: '热能'
                    },
                    {
                        cjsj: '05-23 ',
                        Value: '0',
                        HrzName: '新乡商务大厦',
                        Name: '热能'
                    },
                    {
                        cjsj: '05-22 ',
                        Value: '0',
                        HrzName: '新乡商务大厦',
                        Name: '热能'
                    },
                    {
                        cjsj: '05-21 ',
                        Value: '-0.00',
                        HrzName: '新乡商务大厦',
                        Name: '热能'
                    },
                    {
                        cjsj: '05-20 ',
                        Value: '-0.00',
                        HrzName: '新乡商务大厦',
                        Name: '热能'
                    },
                    {
                        cjsj: '05-19 ',
                        Value: '-0.00',
                        HrzName: '新乡商务大厦',
                        Name: '热能'
                    },
                    {
                        cjsj: '05-18 ',
                        Value: '-0.00',
                        HrzName: '新乡商务大厦',
                        Name: '热能'
                    },
                    {
                        cjsj: '05-17 ',
                        Value: '-0.00',
                        HrzName: '新乡商务大厦',
                        Name: '热能'
                    },
                    {
                        cjsj: '05-16 ',
                        Value: '-0.00',
                        HrzName: '新乡商务大厦',
                        Name: '热能'
                    },
                    {
                        cjsj: '05-15 ',
                        Value: '-0.00',
                        HrzName: '新乡商务大厦',
                        Name: '热能'
                    }
                ],
                code: '200',
                msg: '查询成功'
            }

            const obj = {
                name: '新乡商务大厦',
                total: '23076.0'
            }

            res.nhList.filter(item => {
                const c = item['cjsj']
                obj[c] = item.Value
            })

            this.tableData2.push(obj)
            console.log('this.tableData2', this.tableData2)
        }
        // getSummaries(param) {
        //     const { columns, data } = param
        //     const sums = []
        //     columns.forEach((column, index) => {
        //         if (index === 0) {
        //             sums[index] = '总价'
        //             return
        //         }
        //         const values = data.map(item => Number(item[column.property]))
        //         if (!values.every(value => isNaN(value))) {
        //             sums[index] = values.reduce((prev, curr) => {
        //                 const value = Number(curr)
        //                 if (!isNaN(value)) {
        //                     return prev + curr
        //                 } else {
        //                     return prev
        //                 }
        //             }, 0)
        //             sums[index] += ' 元'
        //         } else {
        //             sums[index] = 'N/A'
        //         }
        //     })
        //     return sums
        // }
    }
}
</script>
