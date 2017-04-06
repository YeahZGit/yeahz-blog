import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Pagenav from 'vue-pagenav'

import Blogs from './components/blog/blogs'
import Detial from './components/blog/detial'
import Category from './components/category/category'
import Tag from './components/tag/tag'
import Pigeonhole from './components/pigeonhole/pigeonhole'
import About from './components/about/about'
import NotFound from './components/notFound/notFound'

Vue.use(VueRouter)
Vue.use(Pagenav)

const routes = [
	{ path: '/', component: Blogs},
	{ path: '/home', component: Blogs},
	{ path: '/blogs/:blogId', component: Detial },
	{ path: '/about', component: About },
	{ path: '/category', component: Category },
	{ path: '/tag', component: Tag },
	{ path: '/pigeonhole', component: Pigeonhole },
	{ path: '/*', component: NotFound }
]

const router = new VueRouter({
	mode: 'history',
  routes 
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
