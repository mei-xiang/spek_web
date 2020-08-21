import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import rules from 'common/rules.js' // 引入自定义验证

import 'lib-flexible/flexible'

// 引入样式，字体，图标
import 'assets/css/normalize.css'
import 'assets/css/base.css'
import 'assets/css/index.css'

import 'assets/iconfont/iconfont.css'
import 'assets/fonts/font.css'

import storage from 'common/storage.js' // 本地存储
import GlobalDataUtils from 'common/utils.js' // 公共方法
import api from 'network/api' // axios请求

import jrHeader from 'components/jrHeader'
import myPage from 'components/myPage'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() // 挂载事件总线
Vue.prototype.$storage = storage // 本地存储
Vue.prototype.$GlobalDataUtils = GlobalDataUtils // 公共方法
Vue.prototype.$api = api // axios请求

Vue.use(rules)
  .use(jrHeader)
  .use(myPage)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
