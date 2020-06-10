import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'

// 全局配置
import config from './config'
Vue.prototype.$config = config
import Tables from './components/table/Tables.vue'
Vue.component('Tables', Tables)
import zySearchDz from './components/zy-search-dz'
Vue.component('zySearchDz', zySearchDz)

// style
import '@/assets/css/style.scss'

//表格宽度自适应
import AFTableColumn from 'af-table-column'
Vue.use(AFTableColumn)

// 字体图标
import '@/assets/font/iconfont.css'

// element
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

// axios
import api from './axios'
Vue.prototype.$api = api
import axios from './axios'
Vue.prototype.$axios = axios

//百度地图
Vue.use(BaiduMap, {
    ak: 'HE5BlZinsvqCISbVv2ABE1DdDWPKgtGW'
})

// echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
