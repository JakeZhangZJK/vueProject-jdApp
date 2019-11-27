// store中的计算属性
var getters = {
  shownav (state) {
    return state.shownav
  },
  cartDatas (state) {
    return state.cartDatas;
  },
  total (state) {
    var select = state.cartDatas.filter(function (v) {
      return v.check === true;
    });
    if (select.length > 0) {
      return select.reduce(function (total, cur) { // total 计算结束后的返回值   cur当前元素
        return total + cur.product_uprice * cur.goods_num;
      }, 0)
    } else {
      return 0
    }
  },
  checkAllState (state) { // 全选的状态
    return state.checkAllState
  }
}

// 导出
export default getters;
