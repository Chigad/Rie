import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/cookies'
import conf from '@/config'

const http = axios.create({
    baseURL: conf.http.baseURL,
    withCredentials: conf.http.voucher,
    timeout: conf.http.timeout
})

// 请求拦截
http.interceptors.request.use(
    config => {
        const token = store.getters.token ? store.getters.token : getToken()
        if (token) {
            config.headers[conf.token.key] = token
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

// 响应拦截
// 需根据后台返回数据的格式修改
http.interceptors.response.use(
    response => {
        const res = response.data
        console.log(res)

        if (res.code !== '200') {
            Message({
                message: res.msg || 'Error',
                type: 'error',
                duration: 5 * 1000
            })

            // token: 非法/过期
            if (res.meta.status === 50008 || res.meta.status === 50012) {
                // 清空token 刷新页面->跳转到登录页
                store.dispatch('user/resetToken').then(() => {
                    location.reload()
                })
            }
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default http
