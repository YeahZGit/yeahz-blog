import Vue from 'vue';
import VueRouter from 'vue-router';

const Blogs = () => import('../views/blog/blogs.vue');
const Detial = () => import('../views/blog/detial.vue');
const Category = () => import('../views/category/category.vue');
const Tag = () => import('../views/tag/tag.vue');
const Archives = () => import('../views/archive/archives.vue');
const About = () => import('../views/about/about.vue');
const NotFound = () => import('../views/notFound/notFound.vue');

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

export function createRouter() {
	return new VueRouter({
		mode: 'history',
	  routes 
	})
}