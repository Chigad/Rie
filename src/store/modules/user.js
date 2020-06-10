import { getToken, setToken, removeToken } from '@/utils/cookies'
import api from '@/axios'

const state = {
    token: getToken()
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    }
}

const actions = {
    // 登录
    login: ({ commit }, model) => {
        return new Promise((resolve, reject) => {
            api.user
                .login(model)
                .then(res => {
                    console.log('res', res)
                    commit('SET_TOKEN', res.token)
                    setToken(res.token)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    // 退出
    logout: ({ commit, state }) => {
        console.log(state)
        commit('SET_TOKEN', '')
        removeToken()
    },

    // 清空token
    clearToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
        })
    }
}

export default {
    state,
    mutations,
    actions
}
