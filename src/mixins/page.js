// page组件
import zyPage from '../components/zy-page.vue'

// 需要外部定义一个getPageList方法并返回一个func
// func中执行后续操作
export default {
    data() {
        return {
            pageModel: {
                query: '',
                pagenum: 1,
                pagesize: 10
            },
            total: 0
        }
    },
    methods: {
        // 当改变每页条数的时候触发
        handleSizeChange(newSize) {
            // 参数为新的条数
            console.log(newSize)
            this.pageModel.pagesize = newSize
            this.getPageList()
        },
        //页数改变时触发
        handleCurrentChange(newPage) {
            // 参数为新的页数
            console.log(newPage)
            this.pageModel.pagenum = newPage
            this.getPageList()
        }
    },
    components: {
        zyPage
    }
}
