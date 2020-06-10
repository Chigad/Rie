import http from '../http'

const user = {
    /**
     *
     * @param {model} 登录表单
     */
    login(model) {
        return http.post('/user/login.action', model)
    },
    cs(model) {
        return http.post('/gk/hrzgk.action ', model)
    }
}

export default user
