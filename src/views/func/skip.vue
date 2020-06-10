<template>
    <div>
        <!-- 按钮 -->
        <div class="skip-content">
            <zy-func-btns
                rwlx
                :rwlxTitle="rwlxTitle"
                :rwlxOption="rwlxOption"
                nyz
                date
                :name="name"
                :btnClick="btnClick"
                sarchbtn
                excelbtn
            >
                <div class="font-14" slot="nyz-title">能源站名称：</div>
                <div class="font-14" slot="rwlx-title">任务类型：</div>
            </zy-func-btns>
        </div>
        <!-- 表格 -->
        <Tables :rightHeader="rightHeader" :rightsDate="rightsDate"></Tables>
        <!-- 页码 -->
        <zyPage :pageModel="pageModel" :total="tota"></zyPage>
    </div>
</template>
<script>
import funcBtns from '@/mixins/func-btns'
import zyPage from '@/components/zy-page'
export default {
    mixins: [funcBtns],
    data() {
        return {
            name: '环境报警',
            pageModel: {
                pagenum: 1,
                pagesize: 8
            },
            tota: 0,
            rightHeader: [
                //行
                {
                    label: '能源站名称',
                    key: 'energy_station'
                },
                {
                    label: '发生时间',
                    key: 'occurrence_time'
                },
                {
                    label: '传感器名称',
                    key: 'sensor'
                },
                {
                    label: '类型',
                    key: 'type'
                },
                {
                    label: '位置',
                    key: 'position'
                },
                {
                    label: '参数名称',
                    key: 'parameter'
                },
                {
                    label: '报警值',
                    key: 'alarm_value'
                },
                {
                    label: '限定值',
                    key: 'limit_value'
                },
                {
                    label: '详情',
                    key: 'details'
                }
            ],
            rightsDate: [
                //列
                {
                    energy_station: '市民之家',
                    occurrence_time: '2020-05-19 08:11:56',
                    sensor: '门磁传感器',
                    type: '状态报警',
                    position: '门磁传感器',
                    parameter: '——',
                    alarm_value: '——',
                    limit_value: '——',
                    details: '1#门磁入侵'
                },
                {
                    energy_station: '市民之家',
                    occurrence_time: '2020-05-19 09:22:57',
                    sensor: '人感传感器',
                    type: '状态报警',
                    position: '人感传感器',
                    parameter: '——',
                    alarm_value: '——',
                    limit_value: '——',
                    details: '1#人感入侵'
                },
                {
                    energy_station: '市民之家',
                    occurrence_time: '2020-05-20 03:44:50',
                    sensor: '漏水传感器',
                    type: '状态报警',
                    position: '漏水传感器',
                    parameter: '——',
                    alarm_value: '——',
                    limit_value: '——',
                    details: '1#监测点漏水'
                },
                {
                    energy_station: '市民之家',
                    occurrence_time: '2020-05-20 03:44:51',
                    sensor: '温湿度传感器',
                    type: '上限报警',
                    position: '温湿度传感器',
                    parameter: '温度',
                    alarm_value: '40',
                    limit_value: '20-35',
                    details: '温度超限'
                },
                {
                    energy_station: '市民之家',
                    occurrence_time: '2020-05-20 03:44:52',
                    sensor: '烟雾传感器',
                    type: '状态报警',
                    position: '烟雾传感器',
                    parameter: '——',
                    alarm_value: '——',
                    limit_value: '——',
                    details: '1#烟雾报警'
                },
                {
                    energy_station: '市民之家',
                    occurrence_time: '2020-05-20 03:44:51',
                    sensor: '温湿度传感器',
                    type: '下限报警',
                    position: '温湿度传感器',
                    parameter: '湿度',
                    alarm_value: '35',
                    limit_value: '40-60',
                    details: '湿度超限'
                }
            ]
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
