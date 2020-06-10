<template>
    <div>
        <!-- 第一排按钮 -->
        <div class="skip-content">
            <zy-func-btns
                rwlx
                :rwlxTitle="rwlxTitle"
                :rwlxOption="rwlxOption"
                nyz
                date
                :btnClick="btnClick"
                btn
                :btnType="btn.btnType"
                :btnTitle="btn.btnTitle"
            >
                <div class="font-14" slot="nyz-title">能源站名称：</div>
                <div class="font-14" slot="rwlx-title">任务类别：</div>
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
                sarchbtn
                excelbtn
                :name="name"
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
                    >当前位置</el-button
                >
                <el-button
                    type="warning"
                    size="mini"
                    @click="dialogVisible2 = true"
                    >历史轨迹</el-button
                >
            </af-table-column>
        </Tables>
        <!-- 页码 -->
        <zyPage :pageModel="pageModel" :total="tota"></zyPage>
        <!-- 弹窗 -->
        <el-dialog
            title="任务发布"
            :visible.sync="dialogFormVisible"
            width="32%"
        >
            <el-form :model="rightsDate">
                <div>
                    <el-form-item
                        label="能源站名称"
                        :label-width="formLabelWidth"
                        required
                    >
                        <el-select
                            v-model="rightsDate.distribution"
                            placeholder="请选择能源站"
                        >
                            <el-option
                                label="能源站1"
                                value="能源站1"
                            ></el-option>
                            <el-option
                                label="能源站2"
                                value="能源站2"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item
                        label="任务类型"
                        :label-width="formLabelWidth"
                        required
                    >
                        <el-select v-model="rightsDate.type" value="巡检">
                            <el-option label="巡检" value="巡检"></el-option>
                            <el-option label="消缺" value="消缺"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item
                        label="开始时间"
                        :label-width="formLabelWidth"
                        required
                    >
                        <el-date-picker
                            type="date"
                            placeholder="选择日期"
                            style="width:200px"
                            v-model="rightsDate.schedule_start_time"
                            value-format="yyyy-MM-dd"
                        ></el-date-picker>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item
                        label="要求完成时间"
                        :label-width="formLabelWidth"
                        required
                    >
                        <el-date-picker
                            type="date"
                            style="width:200px"
                            placeholder="选择日期"
                            v-model="rightsDate.schedule_end_time"
                            value-format="yyyy-MM-dd"
                        ></el-date-picker>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item
                        label="负责人"
                        :label-width="formLabelWidth"
                        required
                    >
                        <el-select
                            v-model="rightsDate.leading"
                            placeholder="选择负责人"
                        >
                            <el-option label="test" value="test"></el-option>
                            <el-option label="sxwz" value="sxwz"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item
                        label="执行人"
                        :label-width="formLabelWidth"
                        required
                    >
                        <el-select
                            v-model="rightsDate.executor"
                            placeholder="选择执行人"
                        >
                            <el-option label="test" value="test"></el-option>
                            <el-option label="sxwz" value="sxwz"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item
                        label="任务内容"
                        :label-width="formLabelWidth"
                    >
                        <el-input
                            type="textarea"
                            v-model="rightsDate.content"
                            style="width:50%"
                        ></el-input>
                    </el-form-item>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button plain>确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="当前位置" :visible.sync="dialogVisible1" width="30%">
            <baidu-map
                class="map"
                center="上海"
                scroll-wheel-zoom
                style="height:500px"
                ><bm-geolocation
                    anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                    :showAddressBar="true"
                    :autoLocation="true"
                ></bm-geolocation
            ></baidu-map>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible1 = false"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
        <el-dialog title="历史轨迹" :visible.sync="dialogVisible2" width="30%">
            <baidu-map
                @click="clickHandler"
                class="map trajectory"
                style="height:500px"
                scroll-wheel-zoom
                :center="{ lng: 113.63889, lat: 34.756287 }"
                :zoom="4"
            >
                <bm-point-collection
                    :points="points"
                    animation="BMAP_ANIMATION_BOUNCE"
                    color="red"
                ></bm-point-collection>
                <bm-geolocation
                    anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                    :showAddressBar="true"
                    :autoLocation="true"
                ></bm-geolocation>
            </baidu-map>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
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
            name: '任务管理',
            points: [],
            key: 1,
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
                    label: '任务单号',
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
                    label: '任务类别',
                    key: 'type'
                },
                {
                    label: '任务状态',
                    key: 'state'
                },
                {
                    label: '执行结果',
                    key: 'task_result'
                },
                {
                    label: '签到偏差距离(m)',
                    key: 'distance'
                },
                {
                    label: '计划开始时间',
                    key: 'schedule_start_time'
                },
                {
                    label: '计划完成时间',
                    key: 'schedule_end_time'
                },
                {
                    label: '实际开始时间',
                    key: 'start_time'
                },
                {
                    label: '实际完成时间',
                    key: 'end_time'
                },
                {
                    label: '创建人',
                    key: 'creator'
                },
                {
                    label: '创建时间',
                    key: 'create_time'
                },
                {
                    label: '任务内容',
                    key: 'content'
                }
            ],
            rightsDate: [
                //列
                {
                    distribution: '安科瑞电器股份有限公司E楼变电所',
                    task_no: 'R2004280001',
                    leading: 'test',
                    executor: 'xmzp',
                    type: '消缺',
                    state: '待办',
                    task_result: '——',
                    distance: '——',
                    schedule_start_time: '2020-04-28',
                    schedule_end_time: '2020-04-29',
                    start_time: '——',
                    end_time: '——',
                    creator: 'sxwz',
                    create_time: '2020-04-28 11:01:23',
                    content: ''
                },
                {
                    distribution: '安科瑞电器股份有限公司E楼变电所',
                    task_no: 'R2004280001',
                    leading: 'sxwz',
                    executor: 'xmzp',
                    type: '巡检',
                    state: '待办',
                    task_result: '——',
                    distance: '——',
                    schedule_start_time: '2020-04-28',
                    schedule_end_time: '2020-04-29',
                    start_time: '——',
                    end_time: '——',
                    creator: 'sxwz',
                    create_time: '2020-04-28 11:01:23',
                    content: ''
                },
                {
                    distribution: '安科瑞电器股份有限公司E楼变电所',
                    task_no: 'R2004280001',
                    leading: 'sxwz',
                    executor: 'xmzp',
                    type: '巡检',
                    state: '待办',
                    task_result: '——',
                    distance: '——',
                    schedule_start_time: '2020-04-28',
                    schedule_end_time: '2020-04-29',
                    start_time: '——',
                    end_time: '——',
                    creator: 'sxwz',
                    create_time: '2020-04-28 11:01:23',
                    content: ''
                },
                {
                    distribution: '安科瑞电器股份有限公司E楼变电所',
                    task_no: 'R2004280001',
                    leading: 'sxwz',
                    executor: 'xmzp',
                    type: '巡检',
                    state: '待办',
                    task_result: '——',
                    distance: '——',
                    schedule_start_time: '2020-04-28',
                    schedule_end_time: '2020-04-29',
                    start_time: '——',
                    end_time: '——',
                    creator: 'sxwz',
                    create_time: '2020-04-28 11:01:23',
                    content: ''
                },
                {
                    distribution: '安科瑞电器股份有限公司E楼变电所',
                    task_no: 'R2004280001',
                    leading: 'sxwz',
                    executor: 'xmzp',
                    type: '巡检',
                    state: '待办',
                    task_result: '——',
                    distance: '——',
                    schedule_start_time: '2020-04-28',
                    schedule_end_time: '2020-04-29',
                    start_time: '——',
                    end_time: '——',
                    creator: 'sxwz',
                    create_time: '2020-04-28 11:01:23',
                    content: ''
                }
            ],
            dialogFormVisible: false,
            formLabelWidth: '120px',
            btn: {
                btnTitle: '任务发布',
                btnType: 'warning'
            },
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
            dialogVisible2: false
        }
    },
    mounted: function() {
        this.tota = this.rightsDate.length
    },
    methods: {
        btnClick() {
            this.dialogFormVisible = true
        },
        clickHandler(e) {
            console.log(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`)
            const position = {
                lng: e.point.lng,
                lat: e.point.lat
            }
            this.points.push(position)
        },
        trajectory() {
            this.key = 0
            console.log(this.key)
        },
        position() {
            this.key = 1
            console.log(this.key)
        }
    },
    components: {
        zyPage
    }
}
</script>
<style>
textarea {
    min-height: 100px;
}
</style>
