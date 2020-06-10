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
                        fzr
                        :fzrTitle="fzrTitle"
                        :fzrOption="fzrOption"
                        :fzrStyle="fzrStyle"
                        zxr
                        :zxrTitle="zxrTitle"
                        :zxrOption="zxrOption"
                        :zxrStyle="zxrStyle"
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
                        <div class="font-14" slot="zxr-title">
                            至
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
                    <span class="dw">（单位：kW.h）</span>
                    <!-- 表格 -->
                    <Tables :rightHeader="rightHeader" :rightsDate="rightsDate">
                        <el-table-column type="selection" slot="cz1" fixed>
                        </el-table-column></Tables
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
            name: '用能报表',
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
            rightHeader: [
                {
                    label: '回路名称',
                    key: 'loop'
                },
                {
                    label: '00时',
                    key: '00'
                },
                {
                    label: '01时',
                    key: '01'
                },
                {
                    label: '02时',
                    key: '02'
                },
                {
                    label: '03时',
                    key: '03'
                },
                {
                    label: '04时',
                    key: '04'
                },
                {
                    label: '05时',
                    key: '05'
                },
                {
                    label: '06时',
                    key: '06'
                },
                {
                    label: '07时',
                    key: '07'
                },
                {
                    label: '08时',
                    key: '08'
                },
                {
                    label: '09时',
                    key: '09'
                },
                {
                    label: '10时',
                    key: '10'
                },
                {
                    label: '11时',
                    key: '11'
                },
                {
                    label: '12时',
                    key: '12'
                },
                {
                    label: '13时',
                    key: '13'
                },
                {
                    label: '14时',
                    key: '14'
                },
                {
                    label: '15时',
                    key: '15'
                },
                {
                    label: '16时',
                    key: '16'
                },
                {
                    label: '17时',
                    key: '17'
                },
                {
                    label: '18时',
                    key: '18'
                },
                {
                    label: '19时',
                    key: '19'
                },
                {
                    label: '20时',
                    key: '20'
                },
                {
                    label: '21时',
                    key: '21'
                },
                {
                    label: '22时',
                    key: '22'
                },
                {
                    label: '23时',
                    key: '23'
                }
            ],
            rightsDate: [
                {
                    loop: '主进线柜',
                    '00': '27.63',
                    '01': '20.38',
                    '02': '25',
                    '03': '23.2',
                    '04': '20.5',
                    '05': '24.56',
                    '06': '22',
                    '07': '22.66',
                    '08': '23.54',
                    '09': '65',
                    '10': '12.3',
                    '11': '17',
                    '12': '24.33',
                    '13': '5.44',
                    '14': '42.5',
                    '15': '4.45',
                    '16': '5.3',
                    '17': '5.4',
                    '18': '44.5.',
                    '19': '45.6',
                    '20': '44.74',
                    '21': '23.5',
                    '22': '12.15',
                    '23': '42.45'
                },
                {
                    loop: '主进线柜',
                    '00': '27.63',
                    '01': '20.38',
                    '02': '25',
                    '03': '23.2',
                    '04': '20.5',
                    '05': '24.56',
                    '06': '22',
                    '07': '22.66',
                    '08': '23.54',
                    '09': '65',
                    '10': '12.3',
                    '11': '17',
                    '12': '24.33',
                    '13': '5.44',
                    '14': '42.5',
                    '15': '4.45',
                    '16': '5.3',
                    '17': '5.4',
                    '18': '44.5.',
                    '19': '45.6',
                    '20': '44.74',
                    '21': '23.5',
                    '22': '12.15',
                    '23': '42.45'
                },
                {
                    loop: '主进线柜',
                    '00': '27.63',
                    '01': '20.38',
                    '02': '25',
                    '03': '23.2',
                    '04': '20.5',
                    '05': '24.56',
                    '06': '22',
                    '07': '22.66',
                    '08': '23.54',
                    '09': '65',
                    '10': '12.3',
                    '11': '17',
                    '12': '24.33',
                    '13': '5.44',
                    '14': '42.5',
                    '15': '4.45',
                    '16': '5.3',
                    '17': '5.4',
                    '18': '44.5.',
                    '19': '45.6',
                    '20': '44.74',
                    '21': '23.5',
                    '22': '12.15',
                    '23': '42.45'
                },
                {
                    loop: '主进线柜',
                    '00': '27.63',
                    '01': '20.38',
                    '02': '25',
                    '03': '23.2',
                    '04': '20.5',
                    '05': '24.56',
                    '06': '22',
                    '07': '22.66',
                    '08': '23.54',
                    '09': '65',
                    '10': '12.3',
                    '11': '17',
                    '12': '24.33',
                    '13': '5.44',
                    '14': '42.5',
                    '15': '4.45',
                    '16': '5.3',
                    '17': '5.4',
                    '18': '44.5.',
                    '19': '45.6',
                    '20': '44.74',
                    '21': '23.5',
                    '22': '12.15',
                    '23': '42.45'
                },
                {
                    loop: '主进线柜',
                    '00': '27.63',
                    '01': '20.38',
                    '02': '25',
                    '03': '23.2',
                    '04': '20.5',
                    '05': '24.56',
                    '06': '22',
                    '07': '22.66',
                    '08': '23.54',
                    '09': '65',
                    '10': '12.3',
                    '11': '17',
                    '12': '24.33',
                    '13': '5.44',
                    '14': '42.5',
                    '15': '4.45',
                    '16': '5.3',
                    '17': '5.4',
                    '18': '44.5.',
                    '19': '45.6',
                    '20': '44.74',
                    '21': '23.5',
                    '22': '12.15',
                    '23': '42.45'
                },
                {
                    loop: '主进线柜',
                    '00': '27.63',
                    '01': '20.38',
                    '02': '25',
                    '03': '23.2',
                    '04': '20.5',
                    '05': '24.56',
                    '06': '22',
                    '07': '22.66',
                    '08': '23.54',
                    '09': '65',
                    '10': '12.3',
                    '11': '17',
                    '12': '24.33',
                    '13': '5.44',
                    '14': '42.5',
                    '15': '4.45',
                    '16': '5.3',
                    '17': '5.4',
                    '18': '44.5.',
                    '19': '45.6',
                    '20': '44.74',
                    '21': '23.5',
                    '22': '12.15',
                    '23': '42.45'
                },
                {
                    loop: '主进线柜',
                    '00': '27.63',
                    '01': '20.38',
                    '02': '25',
                    '03': '23.2',
                    '04': '20.5',
                    '05': '24.56',
                    '06': '22',
                    '07': '22.66',
                    '08': '23.54',
                    '09': '65',
                    '10': '12.3',
                    '11': '17',
                    '12': '24.33',
                    '13': '5.44',
                    '14': '42.5',
                    '15': '4.45',
                    '16': '5.3',
                    '17': '5.4',
                    '18': '44.5.',
                    '19': '45.6',
                    '20': '44.74',
                    '21': '23.5',
                    '22': '12.15',
                    '23': '42.45'
                },
                {
                    loop: '主进线柜',
                    '00': '27.63',
                    '01': '20.38',
                    '02': '25',
                    '03': '23.2',
                    '04': '20.5',
                    '05': '24.56',
                    '06': '22',
                    '07': '22.66',
                    '08': '23.54',
                    '09': '65',
                    '10': '12.3',
                    '11': '17',
                    '12': '24.33',
                    '13': '5.44',
                    '14': '42.5',
                    '15': '4.45',
                    '16': '5.3',
                    '17': '5.4',
                    '18': '44.5.',
                    '19': '45.6',
                    '20': '44.74',
                    '21': '23.5',
                    '22': '12.15',
                    '23': '42.45'
                },
                {
                    loop: '主进线柜',
                    '00': '27.63',
                    '01': '20.38',
                    '02': '25',
                    '03': '23.2',
                    '04': '20.5',
                    '05': '24.56',
                    '06': '22',
                    '07': '22.66',
                    '08': '23.54',
                    '09': '65',
                    '10': '12.3',
                    '11': '17',
                    '12': '24.33',
                    '13': '5.44',
                    '14': '42.5',
                    '15': '4.45',
                    '16': '5.3',
                    '17': '5.4',
                    '18': '44.5.',
                    '19': '45.6',
                    '20': '44.74',
                    '21': '23.5',
                    '22': '12.15',
                    '23': '42.45'
                },
                {
                    loop: '主进线柜',
                    '00': '27.63',
                    '01': '20.38',
                    '02': '25',
                    '03': '23.2',
                    '04': '20.5',
                    '05': '24.56',
                    '06': '22',
                    '07': '22.66',
                    '08': '23.54',
                    '09': '65',
                    '10': '12.3',
                    '11': '17',
                    '12': '24.33',
                    '13': '5.44',
                    '14': '42.5',
                    '15': '4.45',
                    '16': '5.3',
                    '17': '5.4',
                    '18': '44.5.',
                    '19': '45.6',
                    '20': '44.74',
                    '21': '23.5',
                    '22': '12.15',
                    '23': '42.45'
                },
                {
                    loop: '主进线柜',
                    '00': '27.63',
                    '01': '20.38',
                    '02': '25',
                    '03': '23.2',
                    '04': '20.5',
                    '05': '24.56',
                    '06': '22',
                    '07': '22.66',
                    '08': '23.54',
                    '09': '65',
                    '10': '12.3',
                    '11': '17',
                    '12': '24.33',
                    '13': '5.44',
                    '14': '42.5',
                    '15': '4.45',
                    '16': '5.3',
                    '17': '5.4',
                    '18': '44.5.',
                    '19': '45.6',
                    '20': '44.74',
                    '21': '23.5',
                    '22': '12.15',
                    '23': '42.45'
                },
                {
                    loop: '主进线柜',
                    '00': '27.63',
                    '01': '20.38',
                    '02': '25',
                    '03': '23.2',
                    '04': '20.5',
                    '05': '24.56',
                    '06': '22',
                    '07': '22.66',
                    '08': '23.54',
                    '09': '65',
                    '10': '12.3',
                    '11': '17',
                    '12': '24.33',
                    '13': '5.44',
                    '14': '42.5',
                    '15': '4.45',
                    '16': '5.3',
                    '17': '5.4',
                    '18': '44.5.',
                    '19': '45.6',
                    '20': '44.74',
                    '21': '23.5',
                    '22': '12.15',
                    '23': '42.45'
                }
            ],
            fzrTitle: '时',
            fzrOption: [
                {
                    value: '00',
                    label: '00'
                },
                {
                    value: '01',
                    label: '01'
                },
                {
                    value: '02',
                    label: '02'
                },
                {
                    value: '03',
                    label: '03'
                },
                {
                    value: '04',
                    label: '04'
                },
                {
                    value: '05',
                    label: '05'
                },
                {
                    value: '06',
                    label: '06'
                },
                {
                    value: '07',
                    label: '07'
                },
                {
                    value: '08',
                    label: '08'
                },
                {
                    value: '09',
                    label: '09'
                },
                {
                    value: '10',
                    label: '10'
                },
                {
                    value: '11',
                    label: '11'
                },
                {
                    value: '12',
                    label: '12'
                },
                {
                    value: '13',
                    label: '13'
                },
                {
                    value: '14',
                    label: '14'
                },
                {
                    value: '15',
                    label: '15'
                },
                {
                    value: '16',
                    label: '16'
                },
                {
                    value: '17',
                    label: '17'
                },
                {
                    value: '18',
                    label: '18'
                },
                {
                    value: '19',
                    label: '19'
                },
                {
                    value: '20',
                    label: '20'
                },
                {
                    value: '21',
                    label: '21'
                },
                {
                    value: '22',
                    label: '22'
                },
                {
                    value: '23',
                    label: '23'
                }
            ],
            zxrTitle: '时',
            zxrOption: [
                {
                    value: '00',
                    label: '00'
                },
                {
                    value: '01',
                    label: '01'
                },
                {
                    value: '02',
                    label: '02'
                },
                {
                    value: '03',
                    label: '03'
                },
                {
                    value: '04',
                    label: '04'
                },
                {
                    value: '05',
                    label: '05'
                },
                {
                    value: '06',
                    label: '06'
                },
                {
                    value: '07',
                    label: '07'
                },
                {
                    value: '08',
                    label: '08'
                },
                {
                    value: '09',
                    label: '09'
                },
                {
                    value: '10',
                    label: '10'
                },
                {
                    value: '11',
                    label: '11'
                },
                {
                    value: '12',
                    label: '12'
                },
                {
                    value: '13',
                    label: '13'
                },
                {
                    value: '14',
                    label: '14'
                },
                {
                    value: '15',
                    label: '15'
                },
                {
                    value: '16',
                    label: '16'
                },
                {
                    value: '17',
                    label: '17'
                },
                {
                    value: '18',
                    label: '18'
                },
                {
                    value: '19',
                    label: '19'
                },
                {
                    value: '20',
                    label: '20'
                },
                {
                    value: '21',
                    label: '21'
                },
                {
                    value: '22',
                    label: '22'
                },
                {
                    value: '23',
                    label: '23'
                }
            ],
            dateModel: '2020-04-28T16:00:00.000Z',
            fzrStyle: 'width:70px',
            zxrStyle: 'width:70px'
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
