<template>
    <div class="analyses-ring h-100">
        <el-row :gutter="10" class="h-100">
            <!-- 左侧选择项 -->
            <el-col :lg="6" :xm="8" class="h-100 ring-left">
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
                    <zy-func-btn sarchbtn excelbtn rb yb :name="name">
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
                    </zy-func-btn>
                    <span class="dw">（单位：kW.h）</span>
                    <!-- 表格 -->
                    <Tables
                        :rightHeader="rightHeader"
                        :rightsDate="rightsDate"
                    ></Tables>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import funcBtn from '@/mixins/buttons'
export default {
    name: 'analyses_ring',
    mixins: [funcBtn],
    data() {
        return {
            name: '环比分析',
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
                    label: '电表',
                    children: [
                        {
                            id: 5,
                            label: '电表1'
                        }
                    ]
                },
                {
                    id: 2,
                    label: '水表',
                    children: [
                        {
                            id: 6,
                            label: '水表1'
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
            rightHeader: [
                {
                    label: '回路名称',
                    key: 'loop'
                },
                {
                    label: '当日用电',
                    key: 'today'
                },
                {
                    label: '上日用电',
                    key: 'yesterday'
                },
                {
                    label: '增加值',
                    key: 'increase'
                },
                {
                    label: '环比(%)',
                    key: 'link'
                }
            ],
            rightsDate: [
                {
                    loop: '主线进柜',
                    today: '810',
                    yesterday: '478',
                    increase: '332',
                    link: '69.46'
                },
                {
                    loop: '主线进柜',
                    today: '810',
                    yesterday: '478',
                    increase: '332',
                    link: '69.46'
                },
                {
                    loop: '主线进柜',
                    today: '810',
                    yesterday: '478',
                    increase: '332',
                    link: '69.46'
                },
                {
                    loop: '主线进柜',
                    today: '810',
                    yesterday: '478',
                    increase: '332',
                    link: '69.46'
                },
                {
                    loop: '主线进柜',
                    today: '810',
                    yesterday: '478',
                    increase: '332',
                    link: '69.46'
                },
                {
                    loop: '主线进柜',
                    today: '810',
                    yesterday: '478',
                    increase: '332',
                    link: '69.46'
                },
                {
                    loop: '主线进柜',
                    today: '810',
                    yesterday: '478',
                    increase: '332',
                    link: '69.46'
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
