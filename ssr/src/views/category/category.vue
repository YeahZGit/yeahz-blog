<template>
	<div class="category">
		<div class="category-list" v-for="category in categoryList">
			<h3>
				<router-link :to="'/categories/' + category.code"  class="cate-header">{{ category.name }}</router-link>
				<span>( {{ category.blogs.length }}篇文章 )</span>
			</h3>
			<article v-for='(blog, index) in category.blogs' class="cate">
				<ul>
					<li class="order">{{ index + 1 }}</li>
					<li class="release-date">{{ blog.create_at | dateFilter }}</li>
					<li class="article-title"><router-link :to="'/blogs/' + blog._id"> {{ blog.title }}</router-link></li>
				</ul>
				<div class="decorate"></div>
			</article>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'category',

		computed: {
			categoryList() {
				return this.$store.getters.getCateList;
			}
		},

		asyncData({ store }) {
			return store.dispatch('GET_BLOGS');
		},

		title() {
			return '博客分类';
		}
	}
</script>

<style>
.cate-header {
	color: rgb(58, 126, 129);
}

.cate-header:hover {
	text-decoration: none;
}

.category{
	margin-left: 30px;
}

.category-list{
	margin-top: 30px;
	margin-bottom: 50px;
}

.category-list h3{
	font-size: 20px;
	margin-bottom: 20px;
	color: rgb(58, 126, 129);
}

.category-list h3 span{
	margin-left: 20px;
	font-size: 14px;
}

.category article{
	padding-left: 30px;
}	

.category-list ul{
	padding: 0px;
	margin: 0px;
}

.category-list ul li{
	display: inline-block;
	text-decoration: none;
}

.category-list ul a{
	color: rgb(58, 126, 129);
}

.order{
	width: 20px;
	height: 20px;
	color: white;
	border-radius: 20px;
	text-align: center;
	background: #9ed7da;
}

.release-date{
	margin: 0px 10px;
}

.decorate{
	background: #9ed7da;
	height: 25px;
	width: 2px;
	margin: 1px 0px 1px 8px;
}

.cate:last-child .decorate {
	display: none;
}

.cate ul {
	margin-left: -1px;
}
</style>