import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 全局配置
import config from '../config'
Vue.prototype.$config = config

//flex
import './assets/js/flexible'

import './assets/css/style.scss'

// element
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

// echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// api
import api from '../axios'
Vue.prototype.$api = api

// axios
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
