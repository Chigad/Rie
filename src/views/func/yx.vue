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
            name: '设备报警',
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
                    label: '开始时间',
                    key: 'start_time'
                },
                {
                    label: '结束时间',
                    key: 'end_time'
                },
                {
                    label: '报警类型',
                    key: 'alarm_type'
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
                    energy_station: '政府站',
                    start_time: '2020-05-19 08:11:56',
                    end_time: '2020-05-19 08:12:15',
                    alarm_type: '上限报警',
                    position: '热源测',
                    parameter: '回水温度',
                    alarm_value: '56',
                    limit_value: '40-55',
                    details: '热源测回水温度上限报警'
                },
                {
                    energy_station: '市民之家',
                    start_time: '2020-05-19 09:22:57',
                    end_time: '2020-05-19 10:40:10',
                    alarm_type: '过低报警',
                    position: '热源测',
                    parameter: '回水压力',
                    alarm_value: '2.1',
                    limit_value: '3-11',
                    details: '热源测回水压力过低报警'
                },
                {
                    energy_station: '市民之家',
                    start_time: '2020-05-20 03:44:50',
                    end_time: '2020-05-20 03:45:11',
                    alarm_type: '状态报警',
                    position: '循环泵',
                    parameter: '——',
                    alarm_value: '——',
                    limit_value: '——',
                    details: '3#循环泵故障'
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
