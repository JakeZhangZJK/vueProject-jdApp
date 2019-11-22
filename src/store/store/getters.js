// store中的计算属性
var getters = {
  shownav (state) {
    return state.shownav
  },
  cartDatas (state) {
    return state.cartDatas;
  },
  total (state) {
    return state.cartDatas.reduce(function (total, cur) {
      return total + cur.product_uprice * cur.goods_num
    }, 0)
  }
}

// 导出
export default getters;
