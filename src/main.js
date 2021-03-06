// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import store from './store'
import iView from 'iview'
import Element from 'element-ui'
import echarts from 'echarts'

import  '../static/font/iconfont.css'
import 'iview/dist/styles/iview.css'    // 使用 CSS
 import 'element-ui/lib/theme-default/index.css'
 import './assets/js/jquery-1.8.2.min.js'
//  import './assets/js/jquery.ba-resize.js'
 Vue.use(Element)
Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}