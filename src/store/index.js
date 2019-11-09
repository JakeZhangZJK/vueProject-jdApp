import Vue from 'vue'
import Vuex from 'vuex'
import state from './store/state'
import mutations from './store/mutations'
import getters from './store/getters'
import actions from './store/actions'
Vue.use(Vuex) // 全局引用

// 创建store对象
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
// 导出
export default store;
