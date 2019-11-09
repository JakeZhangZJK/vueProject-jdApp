// 改变状态，通过commit触发
var mutations = {
  add (state, data) {
    state.count++; // data表示传过来的参数5
  },
  dec (state, data) {
    state.count--;
  },
  HIDENAV (state) {
    state.shownav = false;
  },
  SHOWNAV (state) {
    state.shownav = true;
  }
}

// 导出
export default mutations;
