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
                    <zy-func-btns
                        sarchbtn
                        excelbtn
                        :name="name"
                        datetime
                    ></zy-func-btns>
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
import funcBtn from '@/mixins/func-btns'
export default {
    name: 'monitor_limit',
    mixins: [funcBtn],
    data() {
        return {
            name: '用能集抄',
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
            rightHeader: [
                {
                    label: '回路名称',
                    key: 'loop'
                },
                {
                    label: '起始数值',
                    key: 'start'
                },
                {
                    label: '截至数值',
                    key: 'end'
                },
                {
                    label: '差值',
                    key: 'difference'
                }
            ],
            rightsDate: [
                {
                    loop: '地源热泵空调总表',
                    start: '1824872',
                    end: '-',
                    difference: '-'
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
        }
    }
}
</script>
