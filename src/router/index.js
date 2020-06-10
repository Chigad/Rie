import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
// import { getToken, getBrn } from '@/utils/cookies'
Vue.use(VueRouter)

import routes from './route'

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// roter守卫
// router.beforeEach((to, from, next) => {
//     // token 验证
//     const token = store.getters.token ? store.getters.token : getToken()
//     if (!to.meta.isPublic && !token) {
//         return next('/login')
//     } else {
//         next()
//     }

//     // 验证通过后 记录面包屑
//     const brn = store.getters.brn ? store.getters.brn : getBrn()
//     console.log(brn)
//     console.log(to.meta.title, to.path)
// })

export default router
