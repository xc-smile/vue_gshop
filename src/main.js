// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from "mint-ui"
import VueLazyload from 'vue-lazyload'

import App from './App'
import router from './router'
import store from "./store/index"
import Split from "./components/Split/Split"

import "./mock/mockServer"
import './filters'
import loading from './common/images/loading.gif'

// 声明使用vue插件
Vue.use(VueLazyload, { // 内部会定义一个全局的指令lazy
  loading
})

Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component("Split", Split)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
