import Vue from 'vue';
import VueRouter from 'vue-router';

const Blogs = () => import('../views/blog/blogs.vue');
const Detail = () => import('../views/blog/detail.vue');
const Category = () => import('../views/category/category.vue');
const Tag = () => import('../views/tag/tag.vue');
const Archives = () => import('../views/archive/archives.vue');
const About = () => import('../views/about/about.vue');
const NotFound = () => import('../views/notFound/notFound.vue');

Vue.use(VueRouter)

const routes = [
	{ 
		path: '/', 
		component: Blogs
	},
	{ 
		path: '/home', 
		component: Blogs
	},
	{ 
		path: '/blogs/:id', 
		component: Detail
	},
	{ 
		path: '/about', 
		component: About
	},
	{ 
		path: '/categories', 
		component: Category
	},
	{
		path: '/categories/:code',
		component: Blogs
	},
	{ 
		path: '/tags', 
		component: Tag
	},
	{
		path: '/tags/:code',
		component: Blogs
	},
	{ 
		path: '/archives', 
		component: Archives
	},
	{
		path: '/archives/:code',
		component: Blogs
	},
	{ 
		path: '/*', 
		component: NotFound 
	}
]

export function createRouter() {
	return new VueRouter({
		mode: 'history',
	  routes 
	})
}