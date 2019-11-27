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
  },
  showNav ({commit}) { // 显示底部导航栏
    commit('SHOWNAV')
  },
  hideNav ({commit}) { // 隐藏底部导航栏
    commit('HIDENAV')
  },
  addCard ({commit}, data) { // 添加商品到购物车
    commit('ADDCART', data)
  },
  incrementData ({commit, state}, data) {
    commit('INCRMENTDATA', data)
  },
  decrementDate ({commit, state}, data) {
    commit('DECRMENTDATA', data)
  },
  delCartDatas ({commit, state}, data) {
    commit('DELCARTDATAS', data)
  },
  checkAllChange ({commit, state}) {
    commit('CHECKALLCHANGE')
  },
  curCheckChange ({commit, state}) { // 当前状态
    commit('CURCHECKCHANGE')
  }
}

// 导出
export default actions;
