import Vue from 'vue';
import VueRouter from 'vue-router';
import configs from '../constants/configs';

import Login from '../views/Login/Login';
import Blogs from '../views/Blog/Blogs';
import Edit from '../views/Blog/Edit';
import Detail from '../views/Blog/Detail';
import Comments from '../views/Comment/Comments';
import Categories from '../views/Category/Categories';
import Tags from '../views/Tag/Tags';
import About from '../views/About/About';
import NotFound from '../views/NotFound/NotFound';

Vue.use(VueRouter);

const routes = [
	{ 
		path: '/login', 
		component: Login, 
		meta: { title: '管理员登录' } 
	},
	{ 
		path: '/', 
		redirect: '/login', 
		meta: { title: '后台管理首页' } 
	},
	{ 
		path: '/blogs', 
		component: Blogs, 
		meta: { title: '文章列表' } 
	},
	{ 
		path: '/blogs/:blogId', 
		component: Detail, 
		meta: { title: '文章详情' } 
	},
	{ 
		path: '/edit', 
		component: Edit, 
		meta: { title: '文章编辑' } 
	},
	{ 
		path: '/edit/:blogId', 
		component: Edit, 
		meta: { title: '文章更新' } 
	},
	{ 
		path: '/comments', 
		component: Comments, 
		meta: { title: '评论列表' } 
	},
	{ 
		path: '/categories', 
		component: Categories, 
		meta: { title: '分类列表' } 
	},
	{ 
		path: '/tags', 
		component: Tags,
		meta: { title: '标签列表' } 
	},
	{
		path: '/about',
		component: About,
		meta: { title: '关于' }
	},
	{ 
		path: '*',
		component: NotFound, 
		meta: { title: 'Error 404' } 
	}
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

export default router;