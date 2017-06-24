import Vue from 'vue'
import App from './App'
import router from './router'
import Pagenav from 'vue-pagenav'
import Tag from './components/Tag';
import Simditor from './components/Simditor';

Vue.use(Pagenav)
Vue.component('vmini-tag', Tag)
Vue.component('simditor', Simditor)

new Vue({
	router,
	el: '#app',
    render: h => h(App)
})