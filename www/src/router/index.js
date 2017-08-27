import Vue from 'vue'
import VueRouter from 'vue-router'

import Blogs from '../views/blog/blogs'
import Detial from '../views/blog/detial'
import Category from '../views/category/category'
import Tag from '../views/tag/tag'
import Archives from '../views/archive/archives'
import About from '../views/about/about'
import NotFound from '../views/notFound/notFound'

Vue.use(VueRouter)

const routes = [
	{ 
		path: '/', 
		component: Blogs, 
		meta: { title: 'YeahZ博客' } 
	},
	{ 
		path: '/home', 
		component: Blogs, 
		meta: { title: '首页' } 
	},
	{ 
		path: '/blogs/:blogId', 
		component: Detial, 
		meta: { title: '文章详情' } 
	},
	{ 
		path: '/about', 
		component: About, 
		meta: { title: '关于' } 
	},
	{ 
		path: '/categories', 
		component: Category, 
		meta: { title: '分类' } 
	},
	{
		path: '/categories/:code',
		component: Blogs,
		meta: { title: '分类 ' }
	},
	{ 
		path: '/tags', 
		component: Tag, 
		meta: { title: '标签' } 
	},
	{
		path: '/tags/:code',
		component: Blogs,
		meta: { title: '标签 ' }
	},
	{ 
		path: '/archives', 
		component: Archives, 
		meta: { title: '归档' } 
	},
	{
		path: '/archives/:code',
		component: Blogs,
		meta: { title: '归档 ' }
	},
	{ 
		path: '/*', 
		component: NotFound, 
		meta: { title: 'Error 404' } 
	}
]

const router = new VueRouter({
	mode: 'history',
  routes 
})

router.beforeEach((to, from, next) => {
	let path = to.path;
	let code = '';
	if(path.search(/(categories|tags|archives)[\S*]/) != -1) {
		code = to.params.code;
		document.title = to.meta.title + code;
	}
	else {
		document.title = to.meta.title;
	}
  next()
})

module.exports = router;