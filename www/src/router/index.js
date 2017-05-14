import Vue from 'vue'
import VueRouter from 'vue-router'

import Blogs from '../components/blog/blogs'
import Detial from '../components/blog/detial'
import Category from '../components/category/category'
import Tag from '../components/tag/tag'
import Pigeonhole from '../components/pigeonhole/pigeonhole'
import About from '../components/about/about'
import NotFound from '../components/notFound/notFound'

Vue.use(VueRouter)

const routes = [
	{ 
		path: '/', 
		component: Blogs, 
		meta: {title: 'YeahZ博客'} 
	},
	{ 
		path: '/home', 
		component: Blogs, 
		meta: {title: '首页'} 
	},
	{ 
		path: '/blogs/:blogId', 
		component: Detial, 
		meta: {title: '文章详情'} 
	},
	{ 
		path: '/about', 
		component: About, 
		meta: {title: '关于'} 
	},
	{ 
		path: '/category', 
		component: Category, 
		meta: {title: '分类'} 
	},
	{ 
		path: '/tag', 
		component: Tag, 
		meta: {title: '标签'} 
	},
	{ 
		path: '/pigeonhole', 
		component: Pigeonhole, 
		meta: {title: '归档'} 
	},
	{ 
		path: '/*', 
		component: NotFound, 
		meta: {title: 'Error 404'} 
	}
]

const router = new VueRouter({
	mode: 'history',
  routes 
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
  next()
})

module.exports = router;