// 改变状态，通过commit触发
var mutations = {
  add (state, data) {
    state.count++ // data表示传过来的参数5
  },
  dec (state, data) {
    state.count--
  },
  HIDENAV (state) {
    state.shownav = false;
  },
  SHOWNAV (state) {
    state.shownav = true
  },
  ADDCART (state, data) { // 将详情页的数据存到store中
    if (state.cartDatas.length > 0) {
      let item = state.cartDatas.filter(function (v) {
        return v.product_id === data.product_id;
      });
      if (item.length > 0) {
        item[0].goods_num++
      } else {
        state.cartDatas.push(data);
      }
    } else {
      state.cartDatas.push(data);
    }
  },
  INCRMENTDATA (state, data) { // +
    let item = state.cartDatas.filter(function (v) {
      return v.product_id === data;
    })[0];
    item.goods_num++;
  },
  DECRMENTDATA (state, data) { // -
    let item = state.cartDatas.filter(function (v) {
      return v.product_id === data;
    })[0];
    if (item && item.goods_num > 1) {
      item.goods_num--
    }
  },
  DELCARTDATAS (state, data) {
    for (let i = 0; i < state.cartDatas.length; i++) {
      if (state.cartDatas[i].product_id === data) {
        state.cartDatas.splice(i, 1);
        break;
      }
    }
  },
  CHECKALLCHANGE (state) {
    state.checkAllState = !state.checkAllState;
    state.cartDatas.forEach((item) => {
      item.check = state.checkAllState;
    })
  },
  CURCHECKCHANGE (state) {
    var select = state.cartDatas.filter(function (v) {
      return v.check === true;
    });
    // 匹配选中状态与lists的长度
    select.length === state.cartDatas.length ? state.checkAllState = true : state.checkAllState = false;
  }
}

// 导出
export default mutations;
