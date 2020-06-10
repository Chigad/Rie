<template>
    <div>
        <!-- 第一排按钮 -->
        <div class="skip-content">
            <zy-func-btns
                nyz
                date
                :btnClick="btnClick"
                btn
                :btnType="btn.btnType"
                :btnTitle="btn.btnTitle"
            >
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
                rwzt
                :rwztTitle="rwztTitle"
                :rwztOption="rwztOption"
                send
                :name="name"
                sarchbtn
                excelbtn
            >
                <div class="font-14" slot="rwzt-title">
                    任务状态：
                </div>
                <div class="font-14" slot="zxjg-title">
                    缺陷状态：
                </div>
                <div class="font-14" slot="fzr-title">
                    严重等级：
                </div>
                <div class="font-14" slot="send-title">
                    发现时间：
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
                    >查看</el-button
                >
            </af-table-column>
        </Tables>
        <!-- 页码 -->
        <zyPage :pageModel="pageModel" :total="tota"></zyPage>
        <!-- 弹窗 -->
        <el-dialog title="缺陷详情" :visible.sync="dialogVisible1" width="30%">
            <el-form :model="rightsDate" disabled="false" label-position="left">
                <el-form-item
                    label="缺陷描述"
                    :label-width="formLabelWidth"
                    required
                >
                    <el-input v-model="this.rightsDate.description"></el-input>
                </el-form-item>
                <el-form-item label="具体位置" required>
                    <el-radio-group v-model="this.rightsDate.position">
                        <el-radio :label="3">A</el-radio>
                        <el-radio :label="6">B</el-radio>
                        <el-radio :label="9">C</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-col>
                    <el-col :span="12"
                        ><el-form-item
                            label="严重等级"
                            :label-width="formLabelWidth"
                            required
                        >
                            <el-input
                                v-model="this.rightsDate.level"
                            ></el-input> </el-form-item
                    ></el-col>
                    <el-col :span="12"
                        ><el-form-item
                            label="缺陷类别"
                            :label-width="formLabelWidth"
                            required
                        >
                            <el-input
                                v-model="this.rightsDate.type"
                            ></el-input> </el-form-item
                    ></el-col>
                </el-col>

                <el-col>
                    <el-col :span="12"
                        ><el-form-item
                            label="发现时间"
                            :label-width="formLabelWidth"
                            required
                        >
                            <el-date-picker
                                type="date"
                                v-model="this.rightsDate.discover"
                                value-format="yyyy-MM-dd"
                            ></el-date-picker> </el-form-item
                    ></el-col>
                    <el-col :span="12"
                        ><el-form-item
                            label="消缺期限"
                            :label-width="formLabelWidth"
                            required
                        >
                            <el-input
                                v-model="this.rightsDate.period"
                            ></el-input> </el-form-item
                    ></el-col>
                </el-col>
                <el-col>
                    <el-col :span="12"
                        ><el-form-item
                            label="状态"
                            :label-width="formLabelWidth"
                            required
                        >
                            <el-input
                                v-model="this.rightsDate.state"
                            ></el-input> </el-form-item
                    ></el-col>
                    <el-col :span="12"
                        ><el-form-item
                            label="缺陷危害"
                            :label-width="formLabelWidth"
                            required
                        >
                            <el-input></el-input> </el-form-item
                    ></el-col>
                </el-col>
                <el-col>
                    <el-col :span="12"
                        ><el-form-item
                            label="消缺日期"
                            :label-width="formLabelWidth"
                            required
                        >
                            <el-input
                                v-model="this.rightsDate.end_time"
                            ></el-input> </el-form-item
                    ></el-col>
                    <el-col :span="12"
                        ><el-form-item
                            label="消缺人员"
                            :label-width="formLabelWidth"
                            required
                        >
                            <el-input
                                v-model="this.rightsDate.person"
                            ></el-input> </el-form-item
                    ></el-col>
                </el-col>
                <el-form-item
                    label="处理建议"
                    :label-width="formLabelWidth"
                    required
                >
                    <el-input v-model="this.rightsDate.advice"></el-input>
                </el-form-item>
                <el-form-item
                    label="客户意见"
                    :label-width="formLabelWidth"
                    required
                >
                    <el-input type="textarea"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible1 = false"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
        <el-dialog
            title="任务发布"
            :visible.sync="dialogFormVisible"
            width="35%"
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
                        label="设备名称"
                        :label-width="formLabelWidth"
                        required
                    >
                        <el-select
                            v-model="rightsDate.name"
                            placeholder="请选择设备"
                        >
                            <el-option label="1" value="1"></el-option>
                            <el-option label="2" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item
                        label="缺陷描述"
                        :label-width="formLabelWidth"
                        required
                    >
                        <el-input
                            style="width:200px"
                            v-model="rightsDate.description"
                        ></el-input>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item
                        label="缺陷状态"
                        :label-width="formLabelWidth"
                    >
                        <el-select value="未处理" disabled>
                            <el-option
                                label="未处理"
                                value="未处理"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item
                        label="严重等级"
                        :label-width="formLabelWidth"
                        required
                    >
                        <el-select
                            v-model="rightsDate.level"
                            placeholder="严重"
                        >
                            <el-option label="严重" value="严重"></el-option>
                            <el-option label="紧急" value="紧急"></el-option>
                            <el-option label="一般" value="一般"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item
                        label="处理建议"
                        :label-width="formLabelWidth"
                        required
                    >
                        <el-input
                            style="width:200px"
                            v-model="rightsDate.advice"
                        ></el-input>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item
                        label="发现时间"
                        :label-width="formLabelWidth"
                        required
                    >
                        <el-date-picker
                            type="date"
                            placeholder="选择日期"
                            style="width:200px"
                            v-model="rightsDate.discover"
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
                            v-model="rightsDate.end_time"
                            value-format="yyyy-MM-dd"
                        ></el-date-picker>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item
                        label="消缺人员"
                        :label-width="formLabelWidth"
                        required
                    >
                        <el-select
                            v-model="rightsDate.person"
                            placeholder="选择消缺人员"
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
            name: '缺陷记录',
            radio: '3',
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
                    label: '设备名称',
                    key: 'name'
                },
                {
                    label: '缺陷描述',
                    key: 'description'
                },
                {
                    label: '缺陷状态',
                    key: 'state'
                },
                {
                    label: '严重等级',
                    key: 'level'
                },
                {
                    label: '处理建议',
                    key: 'advice'
                },
                {
                    label: '发现时间',
                    key: 'discover'
                },
                {
                    label: '消缺时间',
                    key: 'end_time'
                },
                {
                    label: '消缺人员',
                    key: 'person'
                },
                {
                    label: '消缺期限',
                    key: 'period'
                }
            ],
            rightsDate: [
                //列
                {
                    distribution: '安科瑞电气股份有限公司E楼变电所',
                    task_no: 'R2005050012',
                    name: '10kV进线部分-户外隔离刀闸-户外隔离刀闸',
                    description: '户外隔离刀闸合闸不到位',
                    state: '未处理',
                    type: '导电类',
                    level: '紧急',
                    advice: '重新合闸完好',
                    discover: '2020-05-13 09:36:52',
                    end_time: '——',
                    person: '——',
                    period: '1天以内'
                }
            ],
            dialogFormVisible: false,
            dialogVisible1: false,
            formLabelWidth: '120px',
            btn: {
                btnTitle: '任务发布',
                btnType: 'warning'
            },
            zxjgTitle: '缺陷状态',
            zxjgOption: [
                {
                    value: 'wcl',
                    label: '未处理'
                },
                {
                    value: 'ycl',
                    label: '已处理'
                }
            ],
            fzrTitle: '严重等级',
            fzrOption: [
                {
                    value: 'yz',
                    label: '严重'
                },
                {
                    value: 'jj',
                    label: '紧急'
                },
                {
                    value: 'yb',
                    label: '一般'
                }
            ]
        }
    },
    methods: {
        btnClick() {
            this.dialogFormVisible = true
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
<style>
textarea {
    min-height: 100px;
}
</style>
