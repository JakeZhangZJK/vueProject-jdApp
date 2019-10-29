import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import Catgory from '../components/catgory/Catgory'
import Find from '../components/find/Find'
import Cart from '../components/cart/Cart'
import Mine from '../components/mine/Mine'
import GoodsDetail from '../components/detail/GoodsDetail'
import SearchMain from '../components/search/SearchMain'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: SearchMain
    },
    {
      path: '/detail/:id',
      component: GoodsDetail
    },
    {
      path: '/catgory',
      component: Catgory
    },
    {
      path: '/catgory/:id',
      component: Catgory
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/*',
      redirect: '/home'
    }

  ]
})
