import Cookies from 'js-cookie'
import config from '../config'

// 从cookie中获取token
export function getToken() {
    return Cookies.get(config.token.name)
}

// set-token
export function setToken(token) {
    return Cookies.set(config.token.name, token)
}

// remove-token
export function removeToken() {
    return Cookies.remove(config.token.name)
}

// 面包屑相关
export function getBrn() {
    return Cookies.get('brn')
}

export function setBrn(brn) {
    return Cookies.set('brn', brn)
}
