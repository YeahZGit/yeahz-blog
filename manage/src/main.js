import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Pagenav from 'vue-pagenav'
import configs from './constants/configs'

import Login from './components/Login/Login'
import Blogs from './components/Blog/Blogs'
import Edit from './components/Blog/Edit'
import NotFound from './components/NotFound/NotFound'


Vue.use(VueRouter)
Vue.use(Pagenav)
const routes = [
	{ path: '/login', component: Login, meta: {title: '管理员登录'} },
	{ path: '/', redirect: '/login', meta: {title: '后台管理首页'} },
	{ path: '/blogs', component: Blogs, meta: {title: '文章列表'} },
	{ path: '/edit', component: Edit, meta: {title: '文章编辑'} },
	{ path: '/edit/:blogId', component: Edit, meta: {title: '文章更新'} },
	{ path: '*', component: NotFound, meta: {title: 'Error 404'} }
]

const router = new VueRouter({
	mode: 'history',
	base: configs.MANAGE_BASE,
	routes
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	if(!window.sessionStorage.getItem('token') && to.path !== '/login'){
		return next({path: '/login'})
	}
  next()
})

new Vue({
	router,
	el: '#app',
    render: h => h(App)
})

