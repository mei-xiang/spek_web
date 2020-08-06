import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import rules from 'common/rules.js' // 引入自定义验证

// 引入样式，字体，图标
import 'assets/css/normalize.css'
import 'assets/css/base.css'
import 'assets/css/index.css'
import 'assets/iconfont/iconfont.css'

import storage from 'common/storage.js'
import GlobalDataUtils from 'common/utils.js'
import api from 'network/api'

import jrHeader from 'components/jrHeader'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() // 挂载事件总线
Vue.prototype.$storage = storage // 本地存储
Vue.prototype.$GlobalDataUtils = GlobalDataUtils // 公共方法
Vue.prototype.$api = api // axios请求

Vue.use(rules).use(jrHeader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
