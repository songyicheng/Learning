import Vuex from 'vuex'
import Vue from "vue"
Vue.use(Vuex)

// 响应组件中的动作
const actions = {}
// 进行数据操作（state）
const mutations = {}
// 存储数据
const state = {}

// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state
})