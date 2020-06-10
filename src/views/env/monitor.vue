<template>
    <div class="population">
        <div class="topaontent">
            <div class="fBlock">
                <div class="navText">
                    <span>水浸</span>
                    <button type="text" @click="dialogTableVisible = true">更多</button>
                    <el-dialog title="水浸" :visible.sync="dialogTableVisible">
                        <el-table :data="waterData" border>
                            <el-table-column property="number" label="编号" width="150"></el-table-column>
                            <el-table-column property="name" label="名称" width="200"></el-table-column>
                            <el-table-column property="status" label="状态"></el-table-column>
                        </el-table>
                    </el-dialog>
                </div>
                <div class="content">
                    <span>水浸：正常</span>
                    <img src="../../assets/images/common/aside_user_avatar.png" alt />
                </div>
            </div>
            <div class="sBlock">
                <div class="navText">
                    <span>烟雾</span>
                    <button type="text" @click="dialogTableVisible2 = true">更多</button>
                    <el-dialog title="烟雾" :visible.sync="dialogTableVisible2">
                        <el-table :data="smokeData" border>
                            <el-table-column property="number" label="编号" width="150"></el-table-column>
                            <el-table-column property="name" label="名称" width="200"></el-table-column>
                            <el-table-column property="status" label="状态"></el-table-column>
                        </el-table>
                    </el-dialog>
                </div>
                <div class="content">
                    <span>烟感1：无烟</span>
                    <span>烟感2：无烟</span>
                    <img src="../../assets/images/common/aside_user_avatar.png" alt />
                </div>
            </div>
            <div class="tBlock">
                <div class="navText">
                    <span>门状态</span>
                    <button type="text" @click="dialogTableVisible3 = true">更多</button>
                    <el-dialog title="门状态" :visible.sync="dialogTableVisible3">
                        <el-table :data="doorStatus" border>
                            <el-table-column property="number" label="编号" width="150"></el-table-column>
                            <el-table-column property="name" label="仪表名称" width="200"></el-table-column>
                            <el-table-column property="status" label="门状态"></el-table-column>
                        </el-table>
                    </el-dialog>
                </div>
                <div class="content">
                    <span>门磁：关门</span>
                    <img src="../../assets/images/common/aside_user_avatar.png" alt />
                </div>
            </div>
            <div class="foBlock">
                <div class="navText">
                    <span>人感</span>
                    <button type="text" @click="dialogTableVisible4 = true">更多</button>
                    <el-dialog title="人感" :visible.sync="dialogTableVisible4">
                        <el-table
                            :data="smokeData"
                            border
                            :header-cell-style="{ background: 'rgb(1,173,168)', color: '#fff',}"
                        >
                            <el-table-column property="number" label="编号" width="150"></el-table-column>
                            <el-table-column property="name" label="名称" width="200"></el-table-column>
                            <el-table-column property="status" label="状态"></el-table-column>
                        </el-table>
                    </el-dialog>
                </div>
                <div class="content">
                    <span>人感：正常</span>
                    <img src="../../assets/images/common/aside_user_avatar.png" alt />
                </div>
            </div>
        </div>
        <header class="navheader">
            <span>温湿度</span>
        </header>
        <div class="btmComtent">
            <div class="btmLeft"> 
                <button>更多</button>
                <span class="tips">(当时实时数据)</span>
               
                <div class="ybp">
                    <section>
                        <ybp height="180px" width="180px"></ybp>
                        <ybp height="180px" width="180px"></ybp>
                    </section>
                    <section>
                        <ybp height="180px" width="180px"></ybp>
                        <ybp height="180px" width="180px"></ybp>
                    </section>
                </div>
            </div>
            <div class="dataGraph">
                <div class="select">
                    <span>仪表名称：</span>
                    <el-select v-model="meterSelect" clearable placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                    <span>日期：</span>
                    <el-date-picker v-model="dateSelect" type="date" placeholder="选择日期"></el-date-picker>
                    <button>上一日</button>
                    <button>下一日</button>
                    <span class="tips">(历史数据)</span>
                    <lineChart height="500px" width="100%"></lineChart>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ybp from '../../components/echarts/ybp'
import lineChart from '../../components/echarts/lineChart'
export default {
    name: 'hello',
    data() {
        return {
            // 水浸
            waterData: [
                {
                    number: 'T101003',
                    name: '水浸',
                    status: '正常'
                }
            ],
            dialogTableVisible: false,
            dialogFormVisible: false,
            // 烟雾
            smokeData: [
                {
                    number: 'T101001',
                    name: '烟感1',
                    status: '无烟'
                },
                {
                    number: 'T101004',
                    name: '烟感2',
                    status: '无烟'
                }
            ],
            dialogTableVisible2: false,
            // 门状态
            doorStatus: [
                {
                    number: 'T101002',
                    name: '门磁',
                    status: '关门'
                }
            ],
            dialogTableVisible3: false,
            // 人感
            humanSense: [
                {
                    number: '2016-05-02',
                    name: '王小虎',
                    status: '上海市普陀区金沙江路 1518 弄'
                }
            ],
            dialogTableVisible4: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px',
            // 选项
            options: [
                {
                    value: '选项1',
                    label: '温湿度1'
                },
                {
                    value: '选项2',
                    label: '温湿度2'
                }
            ],
            meterSelect: '',

            // msg: 'Welcome to Your Vue.js App'
            // 日期
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now()
                }
            },
            dateSelect: ''
        }
    },
    components: {
        ybp,
        lineChart
    },
    methods: {}
}
</script>
<style scoped>
/* 上半部分整体 */
.topaontent {
    display: flex;
    justify-content: space-between;
}
/* 提示文字 */
.tips {
    color: #a29494;
}
.fBlock,
.sBlock,
.tBlock,
.foBlock {
    width: 550px;
    height: 200px;
    border: 1px solid;
    margin-left: 15px;
}
.fBlock {
    margin: 0;
}
/* 水浸等头部整体  */
.navText {
    border: 1px solid;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #01ada8;
    color: #fff;
}
button {
    background-color: #01ada8;
    border: 1px solid;
    color: #fff;
    border-radius: 5px;
    outline: none;
}
.content {
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
}
.content img {
    border: 1px solid red;
    border-radius: 50%;
}
/* 仪表盘和曲线图整体 */
.btmComtent {
    display: flex;
    border: 1px solid red;
}
/* 温湿度 头部 */
.navheader {
    margin-top: 15px;
    padding: 0 20px;
    background-color: #01ada8;
    color: #fff;
}
/* 仪表盘 */
.btmLeft {
    width: 400px;
    border: solid 1px;
}
.btmLeft > .tips,.btmLeft > button{
    float: right;
}
/* 曲线图整体 */
.dataGraph {
    margin-left: 15px;
    width: 80%;
}
/* 选择框 */
.select {
    margin: 10px;
}
.ybp {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

</style>