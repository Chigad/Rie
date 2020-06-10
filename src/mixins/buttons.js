// zyFuncBtns组件
import zyFuncBtn from '@/components/Buttons'

export default {
    data() {
        return {
            zxjgTitle: '请选择执行结果',
            zxjgOption: [
                {
                    value: 'qb',
                    label: '全部'
                },
                {
                    value: 'as',
                    label: '按时完成'
                },
                {
                    value: 'cs',
                    label: '超时完成'
                }
            ],
            fzrTitle: '请选择负责人',
            fzrOption: [
                {
                    value: 'test',
                    label: 'test'
                },
                {
                    value: 'admin',
                    label: 'admin'
                }
            ],
            zxrTitle: '请选择执行人',
            zxrOption: [
                {
                    value: 'test',
                    label: 'test'
                },
                {
                    value: 'admin',
                    label: 'admin'
                }
            ],
            rwztTitle: '请选择任务状态',
            rwztOption: [
                {
                    value: 'db',
                    label: '待办'
                },
                {
                    value: 'zb',
                    label: '在办'
                },
                {
                    value: 'bb',
                    label: '办毕'
                }
            ],
            sendTitle:'发送日期'
        }
    },
    methods: {
        btnClick() {
            console.log('btnClick')
        }
    },
    components: {
        zyFuncBtn
    }
}
