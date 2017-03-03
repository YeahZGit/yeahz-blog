import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Pagenav from 'vue-pagenav'

import Blogs from './components/Blog/Blogs'
import Detial from './components/Blog/Detial'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'

Vue.use(VueRouter)
Vue.use(Pagenav)

const routes = [
	{ path: '/', redirect: '/home' },
	{ path: '/home', component: Blogs},
	{ path: '/blogs/:blogId', component: Detial },
	{ path: '/about', component: About },
	{ path: '/*', component: NotFound }
]

const router = new VueRouter({
  routes 
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
