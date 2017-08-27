import Vue from 'vue'
import App from './App'
import router from './router'
import Pagenav from 'vue-pagenav'

import filters from './utils/filters';

Vue.use(Pagenav)
Vue.filter('lengthFilter', filters.lengthFilter);
Vue.filter('dateFilter', filters.dateFilter);
Vue.filter('htmlFilter', filters.htmlFilter);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})