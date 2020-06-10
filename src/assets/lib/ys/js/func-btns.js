// zyFuncBtns组件
import zyFuncBtns from '@/components/zy-func-btns'

export default {
    data() {
        return {
            rwlxTitle: '请选择任务类型',
            rwlxOption: [
                {
                    value: 'sx',
                    label: '上限报警'
                },
                {
                    value: 'gd',
                    label: '过低报警'
                },
                {
                    value: 'zt',
                    label: '状态报警'
                }
            ],
            pxzdOption: [
                {
                    value: 'ydzl',
                    label: '用电总量'
                },
                {
                    value: 'dzmc',
                    label: '电站名称'
                },
                {
                    value: 'dzbh',
                    label: '电站编号'
                }
            ]
        }
    },
    methods: {
        btnClick() {
            console.log('btnClick')
        }
    },
    components: {
        zyFuncBtns
    }
}
