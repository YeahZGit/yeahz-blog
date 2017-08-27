import Vue from 'vue';
import App from './App';
import router from './router';
import Pagenav from 'vue-pagenav';
import Tag from './components/Tag';
import Collapse from './components/Collapse';
import Select from './components/Select';
import Simditor from './components/Simditor';
import filters from './utils/filters';

Vue.use(Pagenav);
Vue.component('vmini-tag', Tag);
Vue.component('vmini-collapse', Collapse);
Vue.component('vmini-select', Select);
Vue.component('simditor', Simditor);

Vue.filter('lengthFilter', filters.lengthFilter);
Vue.filter('dateFilter', filters.dateFilter);

new Vue({
	router,
	el: '#app',
  render: h => h(App)
})