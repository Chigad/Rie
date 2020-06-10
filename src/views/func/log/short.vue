<template>
    <div>
        <!-- 按钮 -->
        <div class="skip-content">
            <zy-func-btns
                nyz
                send
                :name="name"
                :btnClick="btnClick"
                sarchbtn
                excelbtn
            >
                <div class="font-14" slot="nyz-title">能源站名称：</div>
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
            name: '短信日志',
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
                    label: '发送时间',
                    key: 'send_time'
                },
                {
                    label: '手机号',
                    key: 'phone'
                },
                {
                    label: '发送结果',
                    key: 'sending'
                },
                {
                    label: '发送内容',
                    key: 'send_content'
                },
                {
                    label: '回复信息',
                    key: 'reply'
                }
            ],
            rightsDate: [
                //列
            ],
            options: [
                {
                    value: 'test',
                    label: 'test'
                },
                {
                    value: 'admin',
                    label: 'admin'
                }
            ],
            options_text: '用户名：'
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
