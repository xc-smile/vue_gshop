import Vue from 'vue'
import Router from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login'
import Shop from "../pages/Shop/Shop"
/*import ShopGoods from "../pages/Shop/ShopGoods/ShopGoods"
import ShopRatings from "../pages/Shop/ShopRatings/ShopRatings"
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo"*/
const ShopGoods = () => import('../pages/Shop/ShopGoods/ShopGoods')
const ShopRatings = () => import('../pages/Shop/ShopRatings/ShopRatings')
const ShopInfo = () => import('../pages/Shop/ShopInfo/ShopInfo')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path: '/',
      redirect: '/msite'
    },
  ]
})
