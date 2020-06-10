<template>
    <div class="env-status-yb">
        <div class="connect-header d-flex ai-center mb-2">
            <div class="font-14">变配电站名称：</div>
            <zy-search-dz class="mr-2"></zy-search-dz>

            <!-- 搜索仪表名称 -->
            <el-input
                class="search-yb-name"
                v-model="nameModel"
                placeholder="请输入仪表名称"
            ></el-input>
            <el-button
                type="primary"
                class="search-btn mr-2"
                icon="el-icon-search"
                @click="dialogVisible = true"
            ></el-button>

            <!-- 只显示通讯中断 -->
            <el-checkbox v-model="showErr">只显示通讯中断</el-checkbox>
        </div>

        <div class="connect-main">
            <el-table :data="tableData" class="w-100" border>
                <el-table-column
                    align="center"
                    header-align="center"
                    prop="GateWay"
                    label="网关"
                >
                </el-table-column>
                <el-table-column
                    prop="Serial"
                    label="串口"
                    width="80"
                    align="center"
                    header-align="center"
                ></el-table-column>
                <el-table-column
                    prop="MeterAddr"
                    align="center"
                    header-align="center"
                    label="仪表地址"
                    width="80"
                >
                </el-table-column>

                <el-table-column
                    prop="Metername"
                    align="center"
                    header-align="center"
                    label="仪表名称"
                >
                </el-table-column>

                <el-table-column
                    align="center"
                    header-align="center"
                    label="通讯状态"
                    width="80"
                >
                    <template slot-scope="scope">
                        <div>
                            <i
                                v-if="scope.row.comStatus === 0"
                                class="iconfont icon--wuxian- text-red fw-600"
                            ></i>
                            <i
                                v-else
                                class="iconfont icon--wuxian-1 text-blue-dark"
                            ></i>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column
                    prop="OffTime"
                    align="center"
                    header-align="center"
                    label="离线时间"
                >
                </el-table-column>

                <el-table-column
                    prop="fLastcollecttime"
                    align="center"
                    header-align="center"
                    label="最后采集时间"
                >
                </el-table-column>
                <el-table-column
                    prop="TotalTime"
                    align="center"
                    header-align="center"
                    label="累计中断时间"
                >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'env_status_yb',
    data() {
        return {
            showErr: false,
            tableData: [
                {
                    GateWay: 'HF8104',
                    Serial: 'COM1',
                    MeterAddr: '1',
                    Metername: '测试4G路由稳定性',
                    comStatus: 0,
                    OffTime: '--',
                    fLastcollecttime: '2019-12-06 16:55:00',
                    TotalTime: '0分'
                },

                {
                    GateWay: 'HF8104',
                    Serial: 'COM1',
                    MeterAddr: '1',
                    Metername: '测试4G路由稳定性',
                    comStatus: 1,
                    OffTime: '--',
                    fLastcollecttime: '2019-12-06 16:55:00',
                    TotalTime: '0分'
                },

                {
                    GateWay: 'HF8104',
                    Serial: 'COM1',
                    MeterAddr: '1',
                    Metername: '测试4G路由稳定性',
                    comStatus: 0,
                    OffTime: '--',
                    fLastcollecttime: '2019-12-06 16:55:00',
                    TotalTime: '0分'
                },

                {
                    GateWay: 'HF8104',
                    Serial: 'COM1',
                    MeterAddr: '1',
                    Metername: '测试4G路由稳定性',
                    comStatus: 0,
                    OffTime: '--',
                    fLastcollecttime: '2019-12-06 16:55:00',
                    TotalTime: '0分'
                },

                {
                    GateWay: 'HF8104',
                    Serial: 'COM1',
                    MeterAddr: '1',
                    Metername: '测试4G路由稳定性',
                    comStatus: 0,
                    OffTime: '--',
                    fLastcollecttime: '2019-12-06 16:55:00',
                    TotalTime: '0分'
                },

                {
                    GateWay: 'HF8104',
                    Serial: 'COM1',
                    MeterAddr: '1',
                    Metername: '测试4G路由稳定性',
                    comStatus: 0,
                    OffTime: '--',
                    fLastcollecttime: '2019-12-06 16:55:00',
                    TotalTime: '0分'
                },

                {
                    GateWay: 'HF8104',
                    Serial: 'COM1',
                    MeterAddr: '1',
                    Metername: '测试4G路由稳定性',
                    comStatus: 0,
                    OffTime: '--',
                    fLastcollecttime: '2019-12-06 16:55:00',
                    TotalTime: '0分'
                },
                {
                    GateWay: 'HF8104',
                    Serial: 'COM1',
                    MeterAddr: '1',
                    Metername: '测试4G路由稳定性',
                    comStatus: 0,
                    OffTime: '--',
                    fLastcollecttime: '2019-12-06 16:55:00',
                    TotalTime: '0分'
                },

                {
                    GateWay: 'HF8104',
                    Serial: 'COM1',
                    MeterAddr: '1',
                    Metername: '测试4G路由稳定性',
                    comStatus: 0,
                    OffTime: '--',
                    fLastcollecttime: '2019-12-06 16:55:00',
                    TotalTime: '0分'
                },

                {
                    GateWay: 'HF8104',
                    Serial: 'COM1',
                    MeterAddr: '1',
                    Metername: '测试4G路由稳定性',
                    comStatus: 0,
                    OffTime: '--',
                    fLastcollecttime: '2019-12-06 16:55:00',
                    TotalTime: '0分'
                },

                {
                    GateWay: 'HF8104',
                    Serial: 'COM1',
                    MeterAddr: '1',
                    Metername: '测试4G路由稳定性',
                    comStatus: 0,
                    OffTime: '--',
                    fLastcollecttime: '2019-12-06 16:55:00',
                    TotalTime: '0分'
                },

                {
                    GateWay: 'HF8104',
                    Serial: 'COM1',
                    MeterAddr: '1',
                    Metername: '测试4G路由稳定性',
                    comStatus: 0,
                    OffTime: '--',
                    fLastcollecttime: '2019-12-06 16:55:00',
                    TotalTime: '0分'
                }
            ],
            nameModel: ''
        }
    }
}
</script>
