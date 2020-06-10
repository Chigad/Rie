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
                <div class="font-14" slot="rwlx-title">用户名：</div>
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
            name: '操作日志',
            pageModel: {
                pagenum: 1,
                pagesize: 8
            },
            tota: 0,
            rightHeader: [
                //行
                {
                    label: '用户名',
                    key: 'username'
                },
                {
                    label: '能源站名称',
                    key: 'distribution'
                },
                {
                    label: '用户IP',
                    key: 'userip'
                },
                {
                    label: '时间',
                    key: 'time'
                },
                {
                    label: '用户地址',
                    key: 'address'
                },
                {
                    label: '操作内容',
                    key: 'parameter'
                }
            ],
            rightsDate: [
                //列
                {
                    username: 'test',
                    distribution: '安科瑞电器股份有限公司E楼变电所',
                    userip: '116.236.149.165',
                    time: '2020-05-19 15:14:44',
                    address: '上海市长宁区',
                    parameter: '电力数据'
                },
                {
                    username: 'test',
                    distribution: '安科瑞电器股份有限公司E楼变电所',
                    userip: '116.236.149.165',
                    time: '2020-05-19 15:14:44',
                    address: '上海市长宁区',
                    parameter: '电力数据'
                },
                {
                    username: 'test',
                    distribution: '安科瑞电器股份有限公司E楼变电所',
                    userip: '116.236.149.165',
                    time: '2020-05-19 15:14:44',
                    address: '上海市长宁区',
                    parameter: '电力数据'
                },
                {
                    username: 'test',
                    distribution: '安科瑞电器股份有限公司E楼变电所',
                    userip: '116.236.149.165',
                    time: '2020-05-19 15:14:44',
                    address: '上海市长宁区',
                    parameter: '电力数据'
                },
                {
                    username: 'test',
                    distribution: '安科瑞电器股份有限公司E楼变电所',
                    userip: '116.236.149.165',
                    time: '2020-05-19 15:14:44',
                    address: '上海市长宁区',
                    parameter: '电力数据'
                }
            ],
            rwlxTitle: '请选择用户名',
            rwlxOption: [
                {
                    value: 'test',
                    label: 'test'
                },
                {
                    value: 'admin',
                    label: 'admin'
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
