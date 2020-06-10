<template>
    <div class="monitor-run h-100">
        <el-row :gutter="10" class="h-100">
            <!-- 左侧选择项 -->
            <el-col :lg="6" :xm="8" class="h-100 run-left">
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
                    <zy-func-btn
                        sarchbtn
                        excelbtn
                        rb
                        yb
                        rwzt
                        :rwztTitle="rwztTitle"
                        :rwztOption="rwztOption"
                        :name="name"
                    >
                        <div
                            class="date-picker d-flex mb-2 ai-center"
                            slot="cr"
                        >
                            <span>日期：</span>
                            <el-date-picker
                                class="mr-2"
                                placeholder="选择日期"
                                v-model="dateModel"
                                type="date"
                            >
                            </el-date-picker>
                        </div>
                        <div class="font-14" slot="rwzt-title">
                            电力类别：
                        </div>
                        <el-button
                            slot="cr1"
                            type="warning"
                            class="mb-2"
                            icon="el-icon-arrow-left"
                            @click="getPrevDate()"
                            >上一日</el-button
                        >
                        <el-button
                            slot="cr2"
                            type="warning"
                            class="mb-2"
                            icon="el-icon-arrow-right"
                            @click="getNextDate()"
                            >下一日</el-button
                        >
                    </zy-func-btn>
                    <!-- 表格 -->
                    <el-table
                        :data="tableData"
                        style="width: 100%"
                        id="out-table"
                        :header-cell-style="{
                            background: 'rgb(1,173,168)',
                            color: '#fff'
                        }"
                    >
                        <el-table-column
                            prop="loop"
                            label="回路名称"
                            align="center"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="date"
                            label="日期"
                            align="center"
                            width="120"
                        >
                        </el-table-column>
                        <el-table-column label="有功功率(kW)" align="center">
                            <el-table-column label="最大值" align="center">
                                <el-table-column
                                    prop="value1"
                                    label="数值"
                                    align="center"
                                    width="80"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="time1"
                                    label="发生时间"
                                    align="center"
                                    width="100"
                                >
                                </el-table-column>
                            </el-table-column>
                            <el-table-column label="最小值" align="center">
                                <el-table-column
                                    prop="value2"
                                    label="数值"
                                    align="center"
                                    width="80"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="time2"
                                    label="发生时间"
                                    align="center"
                                    width="100"
                                >
                                </el-table-column>
                            </el-table-column>
                            <el-table-column
                                prop="avg1"
                                label="平均值"
                                align="center"
                                width="80"
                            >
                            </el-table-column>
                        </el-table-column>
                        <el-table-column label="无功功率(kW)" align="center">
                            <el-table-column label="最大值" align="center">
                                <el-table-column
                                    prop="value3"
                                    label="数值"
                                    align="center"
                                    width="80"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="time3"
                                    label="发生时间"
                                    align="center"
                                    width="100"
                                >
                                </el-table-column>
                            </el-table-column>
                            <el-table-column label="最小值" align="center">
                                <el-table-column
                                    prop="value4"
                                    label="数值"
                                    align="center"
                                    width="80"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="time4"
                                    label="发生时间"
                                    align="center"
                                    width="100"
                                >
                                </el-table-column>
                            </el-table-column>
                            <el-table-column
                                prop="avg2"
                                label="平均值"
                                align="center"
                                width="80"
                            >
                            </el-table-column>
                        </el-table-column> </el-table
                ></el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import funcBtn from '@/mixins/buttons'
export default {
    name: 'monitor_limit',
    mixins: [funcBtn],
    data() {
        return {
            name: '极值报表',
            dx:'1',
            treeData: [
                {
                    id: 0,
                    label: '电表',
                    children: [
                        {
                            id: 3,
                            label: '电表1'
                        },
                        {
                            id: 4,
                            label: '电表2'
                        }
                    ]
                },
                {
                    id: 1,
                    label: '热表',
                    children: [
                        {
                            id: 5,
                            label: '热表1'
                        },
                        {
                            id: 6,
                            label: '热表2'
                        }
                    ]
                },
                {
                    id: 2,
                    label: '压力表',
                    children: [
                        {
                            id: 7,
                            label: '压力表1'
                        },
                        {
                            id: 8,
                            label: '压力表2'
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            rwztTitle: '',
            rwztOption: [
                {
                    value: 'power',
                    label: '功率'
                },
                {
                    value: 'voltage',
                    label: '电流/电压'
                },
                {
                    value: 'phase',
                    label: '相电压'
                },
                {
                    value: 'line',
                    label: '线电压'
                }
            ],
            dateModel: '2020-04-28T16:00:00.000Z',
            tableData: [
                {
                    loop: '六层 南',
                    date: '2020-05-19',

                    value1: '16.2',
                    time1: '07:40',

                    value2: '1',
                    time2: '08:45',
                    avg1: '4.02',

                    value3: '6',
                    time3: '06:25',

                    value4: '-1.66',
                    time4: '13:10',
                    avg2: '3.98'
                },
                {
                    loop: '六层 南',
                    date: '2020-05-19',

                    value1: '16.2',
                    time1: '07:40',

                    value2: '1',
                    time2: '08:45',
                    avg1: '4.02',

                    value3: '6',
                    time3: '06:25',

                    value4: '-1.66',
                    time4: '13:10',
                    avg2: '3.98'
                },
                {
                    loop: '六层 南',
                    date: '2020-05-19',

                    value1: '16.2',
                    time1: '07:40',

                    value2: '1',
                    time2: '08:45',
                    avg1: '4.02',

                    value3: '6',
                    time3: '06:25',

                    value4: '-1.66',
                    time4: '13:10',
                    avg2: '3.98'
                },
                {
                    loop: '六层 南',
                    date: '2020-05-19',

                    value1: '16.2',
                    time1: '07:40',

                    value2: '1',
                    time2: '08:45',
                    avg1: '4.02',

                    value3: '6',
                    time3: '06:25',

                    value4: '-1.66',
                    time4: '13:10',
                    avg2: '3.98'
                },
                {
                    loop: '六层 南',
                    date: '2020-05-19',

                    value1: '16.2',
                    time1: '07:40',

                    value2: '1',
                    time2: '08:45',
                    avg1: '4.02',

                    value3: '6',
                    time3: '06:25',

                    value4: '-1.66',
                    time4: '13:10',
                    avg2: '3.98'
                },
                {
                    loop: '六层 南',
                    date: '2020-05-19',

                    value1: '16.2',
                    time1: '07:40',

                    value2: '1',
                    time2: '08:45',
                    avg1: '4.02',

                    value3: '6',
                    time3: '06:25',

                    value4: '-1.66',
                    time4: '13:10',
                    avg2: '3.98'
                },
                {
                    loop: '六层 南',
                    date: '2020-05-19',

                    value1: '16.2',
                    time1: '07:40',

                    value2: '1',
                    time2: '08:45',
                    avg1: '4.02',

                    value3: '6',
                    time3: '06:25',

                    value4: '-1.66',
                    time4: '13:10',
                    avg2: '3.98'
                },
                {
                    loop: '六层 南',
                    date: '2020-05-19',

                    value1: '16.2',
                    time1: '07:40',

                    value2: '1',
                    time2: '08:45',
                    avg1: '4.02',

                    value3: '6',
                    time3: '06:25',

                    value4: '-1.66',
                    time4: '13:10',
                    avg2: '3.98'
                },
                {
                    loop: '六层 南',
                    date: '2020-05-19',

                    value1: '16.2',
                    time1: '07:40',

                    value2: '1',
                    time2: '08:45',
                    avg1: '4.02',

                    value3: '6',
                    time3: '06:25',

                    value4: '-1.66',
                    time4: '13:10',
                    avg2: '3.98'
                },
                {
                    loop: '六层 南',
                    date: '2020-05-19',

                    value1: '16.2',
                    time1: '07:40',

                    value2: '1',
                    time2: '08:45',
                    avg1: '4.02',

                    value3: '6',
                    time3: '06:25',

                    value4: '-1.66',
                    time4: '13:10',
                    avg2: '3.98'
                }
            ]
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

        // 上一天
        getPrevDate() {
            const activeDate = new Date(this.dateModel)
            this.dateModel = activeDate.getTime() - 3600 * 1000 * 24
        },

        // 下一天
        getNextDate() {
            const activeDate = new Date(this.dateModel)
            this.dateModel = activeDate.getTime() + 3600 * 1000 * 24
        }
    }
}
</script>
