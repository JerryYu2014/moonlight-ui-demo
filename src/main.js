// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 项目中引入
// import Vzer from 'vzer-ui'
// import 'vzer-ui/lib/vzer.css'
// Vue.use(Vzer)

import mlui from 'moonlight-ui-x'
import 'moonlight-ui-x/lib/mlui.css'
Vue.use(mlui)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
