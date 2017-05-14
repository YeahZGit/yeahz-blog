import Vue from 'vue'
import App from './App'
import router from './router'
import Pagenav from 'vue-pagenav'

Vue.use(Pagenav)


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})