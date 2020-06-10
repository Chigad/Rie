<template>
    <div>
        <!-- 第一排按钮 -->
        <div class="skip-content">
            <zy-func-btns nyz date>
                <div class="font-14" slot="nyz-title">能源站名称：</div>
            </zy-func-btns>
        </div>
        <!-- 第二排 -->
        <div class="skip-content">
            <zy-func-btn
                zxjg
                :zxjgTitle="zxjgTitle"
                :zxjgOption="zxjgOption"
                fzr
                :fzrTitle="fzrTitle"
                :fzrOption="fzrOption"
                zxr
                :zxrTitle="zxrTitle"
                :zxrOption="zxrOption"
                rwzt
                :rwztTitle="rwztTitle"
                :rwztOption="rwztOption"
                :name="name"
                sarchbtn
                excelbtn
            >
                <div class="font-14" slot="rwzt-title">
                    任务状态：
                </div>
                <div class="font-14" slot="zxjg-title">
                    执行结果：
                </div>
                <div class="font-14" slot="fzr-title">
                    负责人：
                </div>
                <div class="font-14" slot="zxr-title">
                    执行人：
                </div></zy-func-btn
            >
        </div>
        <!-- 表格 -->
        <Tables :rightHeader="rightHeader" :rightsDate="rightsDate">
            <af-table-column slot="cz">
                <el-button
                    type="warning"
                    size="mini"
                    @click="dialogVisible1 = true"
                    >执行情况</el-button
                >
                <el-button
                    type="warning"
                    size="mini"
                    @click="dialogVisible2 = true"
                    >巡检明细</el-button
                >
            </af-table-column>
        </Tables>
        <!-- 页码 -->
        <zyPage :pageModel="pageModel" :total="tota"></zyPage>
        <!-- 弹窗 -->
        <el-dialog title="执行情况" :visible.sync="dialogVisible1" width="30%">
            <el-table
                :data="indata1"
                border
                stripe
                highlight-current-row="true"
                :default-sort="{ prop: 'date', order: 'descending' }"
                :header-cell-style="{
                    background: 'rgb(1,173,168)',
                    color: '#fff'
                }"
            >
                <af-table-column
                    v-for="info in intable1"
                    :key="info.key"
                    :property="info.key"
                    :label="info.label"
                >
                    <template slot-scope="scope">
                        {{ scope.row[scope.column.property] }}
                        <!-- 渲染对应表格里面的内容 -->
                    </template>
                </af-table-column>
                <slot name="cz"></slot>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible1 = false"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
        <el-dialog title="巡检明细" :visible.sync="dialogVisible2" width="30%">
            <el-table
                :data="indata2"
                border
                stripe
                highlight-current-row="true"
                :default-sort="{ prop: 'date', order: 'descending' }"
                :header-cell-style="{
                    background: 'rgb(1,173,168)',
                    color: '#fff'
                }"
            >
                <af-table-column
                    v-for="info in intable2"
                    :key="info.key"
                    :property="info.key"
                    :label="info.label"
                >
                    <template slot-scope="scope">
                        {{ scope.row[scope.column.property] }}
                        <!-- 渲染对应表格里面的内容 -->
                    </template>
                </af-table-column>
                <slot name="cz"></slot>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible2 = false"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>
<script>
import funcBtns from '@/mixins/func-btns'
import funcBtn from '@/mixins/buttons'
import zyPage from '@/components/zy-page'
export default {
    mixins: [funcBtns, funcBtn],
    data() {
        return {
            name: '巡检记录',
            pageModel: {
                pagenum: 1,
                pagesize: 8
            },
            tota: 0,
            rightHeader: [
                //行
                {
                    label: '能源站名称',
                    key: 'distribution'
                },
                {
                    label: '巡检任务单号',
                    key: 'task_no'
                },
                {
                    label: '负责人',
                    key: 'leading'
                },
                {
                    label: '执行人',
                    key: 'executor'
                },
                {
                    label: '提交情况',
                    key: 'task_type'
                },
                {
                    label: '巡检开始时间',
                    key: 'inspect_time'
                },
                {
                    label: '巡检结束时间',
                    key: 'inspect_endtime'
                },
                {
                    label: '计划完成时间',
                    key: 'scheduled_end_time'
                },
                {
                    label: '任务状态',
                    key: 'task_state'
                },
                {
                    label: '执行结果',
                    key: 'result'
                },
                {
                    label: '签到偏差距离(m)',
                    key: 'distance'
                },
                {
                    label: '巡检内容',
                    key: 'content'
                }
            ],
            rightsDate: [
                //列
                {
                    distribution: '安科瑞电气股份有限公司E楼变电所',
                    task_no: 'R2005050012',
                    leading: '用户',
                    executor: 'acrel',
                    task_type: '0/1',
                    inspect_time: '2020-05-20 11:06:03',
                    inspect_endtime: '——',
                    scheduled_end_time: '2020-05-30',
                    task_state: '在办',
                    result: '——',
                    distance: '690036',
                    content: ''
                }
            ],
            dialogFormVisible: false,
            form: [],
            formLabelWidth: '120px',
            tableData: [
                {
                    name: 'test',
                    details: '未签到',
                    time: '——',
                    position: '——'
                }
            ],
            tableData1: [],
            rwlxTitle: '任务类别',
            rwlxOption: [
                {
                    value: 'xj',
                    label: '巡检'
                },
                {
                    value: 'xq',
                    label: '消缺'
                }
            ],
            dialogVisible1: false,
            dialogVisible2: false,
            intable1: [
                {
                    label: '执行人',
                    key: 'executor'
                },
                {
                    label: '执行情况',
                    key: 'details'
                },
                {
                    label: '签到时间',
                    key: 'time'
                },
                {
                    label: '签到地点',
                    key: 'position'
                }
            ],
            intable2: [
                {
                    label: '设备名称',
                    key: 'eq_name'
                },
                {
                    label: '巡检项',
                    key: 'details'
                },
                {
                    label: '巡检类型',
                    key: 'type'
                },
                {
                    label: '巡检结果',
                    key: 'result'
                }
            ],
            indata1: [],
            indata2: []
        }
    },
    mounted: function() {
        this.tota = this.rightsDate.length
    },
    components: {
        zyPage
    }
}
</script>
