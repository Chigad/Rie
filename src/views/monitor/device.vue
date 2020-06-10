<template>
    <div class="monitor-byq h-100">
        <el-row :gutter="10" class="h-100">
            <!-- 左侧选择项 -->
            <el-col :lg="6" :xm="8" class="h-100 byq-left">
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
                        <div class="font-14 mb-1">变配电站名称：</div>
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
                <!-- 选择项 -->
                <el-card class="zy-card mb-2">
                    <!-- 卡片头部 -->
                    <div
                        slot="header"
                        class="clearfix card-hd d-flex jc-between ai-center"
                    >
                        <span class="font-16 text-white">设备状态</span>

                        <span class="text-white"
                            >更新时间 ： 2020-05-25 10:04:16</span
                        >
                    </div>

                    <!-- 卡片底部 -->
                    <div class="left-main">
                        <!-- 节点选项 -->
                        <div class="node-checked">
                            <!-- 选择项一 -->
                            <div class="checked-item mb-2">
                                <div class="checked-title font-16 mb-1">
                                    设备名称：
                                    <el-checkbox
                                        :indeterminate="isIndeterminateA"
                                        v-model="checkAllA"
                                        @change="handleCheckAllChangeA"
                                        >全选</el-checkbox
                                    >
                                </div>
                                <div class="checked-body pl-4">
                                    <!-- 全选 -->
                                    <!-- 多选列表 -->
                                    <el-checkbox-group
                                        v-model="checkedModelA"
                                        @change="handleCheckedCitiesChangeA"
                                    >
                                        <el-checkbox
                                            v-for="city in checkedListA"
                                            :label="city"
                                            :key="city"
                                            >{{ city }}</el-checkbox
                                        >
                                    </el-checkbox-group>
                                </div>
                            </div>

                            <!-- 选择项二 -->
                            <div class="checked-item">
                                <div class="checked-title font-16 mb-1">
                                    热表数据：
                                    <el-checkbox
                                        :indeterminate="isIndeterminateB"
                                        v-model="checkAllB"
                                        @change="handleCheckAllChangeB"
                                        >全选</el-checkbox
                                    >
                                </div>
                                <div class="checked-body pl-4">
                                    <!-- 全选 -->
                                    <!-- 多选列表 -->
                                    <el-checkbox-group
                                        v-model="checkedModelB"
                                        @change="handleCheckedCitiesChangeB"
                                    >
                                        <el-checkbox
                                            v-for="city in checkedListB"
                                            :label="city"
                                            :key="city"
                                            >{{ city }}</el-checkbox
                                        >
                                    </el-checkbox-group>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-card>

                <!-- 数据展示 -->
                <el-card class="zy-card">
                    <!-- 卡片头部 -->
                    <div slot="header" class="d-flex jc-between">
                        <div class="time">
                            <span class="text-white">日期：</span>
                            <el-date-picker
                                v-model="dateModel"
                                align="right"
                                type="date"
                                placeholder="选择日期"
                            >
                            </el-date-picker>
                        </div>
                        <div
                            slot="btn"
                            class="d-flex jc-center ai-center font-14"
                        >
                            <div
                                :class="['cu-p', 'text-white']"
                                @click="getPrevDate()"
                            >
                                上一天
                            </div>
                            <span class="px-1 text-white">|</span>
                            <div
                                :class="['cu-p', 'text-white']"
                                @click="getNextDate()"
                            >
                                下一天
                            </div>
                        </div>
                    </div>

                    <!-- 卡片底部 -->
                    <div class="box-body">
                        <zy-echart-line height="434px" radio></zy-echart-line>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import zySearchDz from '@/components/zy-search-dz'
import zyEchartLine from '@/components/echarts/zy-echart-line'
const checkedA = ['上海', '北京', '广州', '深圳']
const checkedB = ['上海', '北京', '广州', '深圳']
export default {
    name: 'monitor_byq',
    data() {
        return {
            dx:'1',
            treeData: [
                {
                    id: 0,
                    label: '能源测',
                    children: [
                        {
                            id: 3,
                            label: '热表'
                        },
                        {
                            id: 4,
                            label: '流量'
                        },
                        {
                            id: 5,
                            label: '温度'
                        },
                        {
                            id: 6,
                            label: '压力'
                        }
                    ]
                },
                {
                    id: 1,
                    label: '用户测',
                    children: [
                        {
                            id: 7,
                            label: '热表'
                        },
                        {
                            id: 8,
                            label: '流量'
                        },
                        {
                            id: 9,
                            label: '温度'
                        },
                        {
                            id: 10,
                            label: '压力'
                        }
                    ]
                },
                {
                    id: 2,
                    label: '通用',
                    children: [
                        {
                            id: 11,
                            label: '热表'
                        },
                        {
                            id: 12,
                            label: '流量'
                        },
                        {
                            id: 13,
                            label: '温度'
                        },
                        {
                            id: 14,
                            label: '压力'
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            // 选项一 model
            checkedModelA: [],
            // 选项一 选项列表
            checkedListA: checkedA,
            // 选项一 全选
            isIndeterminateA: true,
            // 选项一 全选
            checkAllA: false,

            // 选项一 model
            checkedModelB: [],
            // 选项一 选项列表
            checkedListB: checkedB,
            // 选项一 全选
            isIndeterminateB: true,
            // 选项一 全选
            checkAllB: false,

            // 日期model
            dateModel: '2020-04-28T16:00:00.000Z'
        }
    },
    components: {
        zySearchDz,
        zyEchartLine
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

        // 右侧选项
        handleCheckAllChangeA(val) {
            this.checkedModelA = val ? checkedA : []
            this.isIndeterminateA = false
        },
        handleCheckedCitiesChangeA(value) {
            console.log(value)
            let checkedCount = value.length
            this.checkAllA = checkedCount === this.checkedListA.length
            this.isIndeterminateA =
                checkedCount > 0 && checkedCount < this.checkedListA.length
        },

        // 选项二
        handleCheckAllChangeB(val) {
            this.checkedModelA = val ? checkedA : []
            this.isIndeterminateA = false
        },
        handleCheckedCitiesChangeB(value) {
            console.log(value)
            let checkedCount = value.length
            this.checkAllA = checkedCount === this.checkedListA.length
            this.isIndeterminateA =
                checkedCount > 0 && checkedCount < this.checkedListA.length
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
