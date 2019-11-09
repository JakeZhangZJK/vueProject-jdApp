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
  showNav ({commit}) {
    commit('SHOWNAV')
  },
  hideNav ({commit}) {
    commit('HIDENAV')
  }
}

// 导出
export default actions;
