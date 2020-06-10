import http from '../http'

const weather = {
    /**
     *
     * @param {model} 
     */
    get() {
        return http.get('http://www.tianqiapi.com/free/week?appid=47415487&appsecret=1sqyPZKS')
    }
}

export default weather
