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
                            :default-checked-keys="[1]"
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
                            时隔时间：
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
                    <Tables
                        :rightHeader="rightHeader"
                        :rightsDate="rightsDate"
                    ></Tables
                ></el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import funcBtn from '@/mixins/buttons'
export default {
    name: 'monitor_run',
    mixins: [funcBtn],
    data() {
        return {
            name: '运行报表',
            dx: '1',
            treeData: [
                {
                    id: 0,
                    label: '电表',
                    children: [
                        {
                            id: 1,
                            label: '电表1'
                        },
                        {
                            id: 2,
                            label: '电表2'
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            rightHeader: [
                {
                    label: '回路名称',
                    key: 'loop'
                },
                {
                    label: '采集时间',
                    key: 'time'
                },
                {
                    label: 'EPi(kWh)',
                    key: 'epi'
                },
                {
                    label: 'Ua(V)',
                    key: 'ua'
                },
                {
                    label: 'Ub(V)',
                    key: 'ub'
                },
                {
                    label: 'Uc(V)',
                    key: 'uc'
                },
                {
                    label: 'Ia(v)',
                    key: 'ia'
                },
                {
                    label: 'Ib(v)',
                    key: 'ib'
                },
                {
                    label: 'Ic(v)',
                    key: 'ic'
                },
                {
                    label: 'P(kW)',
                    key: 'p'
                },
                {
                    label: 'Q(kVar)',
                    key: 'q'
                },
                {
                    label: 'Pf',
                    key: 'pf'
                }
            ],
            rightsDate: [
                {
                    loop: '主线进柜',
                    time: '2020-05-19 00:00',
                    epi: '2695036',
                    ua: '238.4',
                    ub: '239.2',
                    uc: '239',
                    ia: '55.4',
                    ib: '53.6',
                    ic: '54.8',
                    p: '39.07',
                    q: '1.88',
                    pf: '1'
                },
                {
                    loop: '主线进柜',
                    time: '2020-05-19 00:00',
                    epi: '2695036',
                    ua: '238.4',
                    ub: '239.2',
                    uc: '239',
                    ia: '55.4',
                    ib: '53.6',
                    ic: '54.8',
                    p: '39.07',
                    q: '1.88',
                    pf: '1'
                },
                {
                    loop: '主线进柜',
                    time: '2020-05-19 00:00',
                    epi: '2695036',
                    ua: '238.4',
                    ub: '239.2',
                    uc: '239',
                    ia: '55.4',
                    ib: '53.6',
                    ic: '54.8',
                    p: '39.07',
                    q: '1.88',
                    pf: '1'
                },
                {
                    loop: '主线进柜',
                    time: '2020-05-19 00:00',
                    epi: '2695036',
                    ua: '238.4',
                    ub: '239.2',
                    uc: '239',
                    ia: '55.4',
                    ib: '53.6',
                    ic: '54.8',
                    p: '39.07',
                    q: '1.88',
                    pf: '1'
                },
                {
                    loop: '主线进柜',
                    time: '2020-05-19 00:00',
                    epi: '2695036',
                    ua: '238.4',
                    ub: '239.2',
                    uc: '239',
                    ia: '55.4',
                    ib: '53.6',
                    ic: '54.8',
                    p: '39.07',
                    q: '1.88',
                    pf: '1'
                },
                {
                    loop: '主线进柜',
                    time: '2020-05-19 00:00',
                    epi: '2695036',
                    ua: '238.4',
                    ub: '239.2',
                    uc: '239',
                    ia: '55.4',
                    ib: '53.6',
                    ic: '54.8',
                    p: '39.07',
                    q: '1.88',
                    pf: '1'
                },
                {
                    loop: '主线进柜',
                    time: '2020-05-19 00:00',
                    epi: '2695036',
                    ua: '238.4',
                    ub: '239.2',
                    uc: '239',
                    ia: '55.4',
                    ib: '53.6',
                    ic: '54.8',
                    p: '39.07',
                    q: '1.88',
                    pf: '1'
                },
                {
                    loop: '主线进柜',
                    time: '2020-05-19 00:00',
                    epi: '2695036',
                    ua: '238.4',
                    ub: '239.2',
                    uc: '239',
                    ia: '55.4',
                    ib: '53.6',
                    ic: '54.8',
                    p: '39.07',
                    q: '1.88',
                    pf: '1'
                }
            ],
            rwztTitle: '',
            rwztOption: [
                {
                    value: 'five',
                    label: '五分钟'
                },
                {
                    value: 'quarter',
                    label: '十五分钟'
                },
                {
                    value: 'half',
                    label: '半小时'
                },
                {
                    value: 'hour',
                    label: '一小时'
                }
            ],
            dateModel: '2020-04-28T16:00:00.000Z'
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
