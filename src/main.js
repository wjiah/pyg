// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from './http'
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false
Vue.use(ElementUI, {size: 'small'})
// 将axios挂载到vue实例上
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
