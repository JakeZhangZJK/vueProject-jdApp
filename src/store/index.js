import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) // 全局引用
// 定义状态属性
var state = {
  count: 1
}
// store中的计算属性
var getters = {
  count (state) {
    return state.count
  }
}
// 管理 mutations
var actions = {
  add ({commit, state}) {
    if (state.count >= 1) {
      commit('add')
    }
  },
  dec ({commit, state}) {
    if (state.count > 6) {
      commit('dec')
    }
  }
}
// 改变状态，通过commit触发
var mutations = {
  add (state, data) {
    state.count++; // data表示传过来的参数5
  },
  dec (state, data) {
    state.count--;
  }
}

// 创建store对象
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
// 导出
export default store;
