<template>
	<div class="category">
		<div class="category-list" v-for="category in categoryList">
			<h3>{{category[0].category}}<span>( {{category.length}}篇文章 )</span></h3>
			<article v-for='(blog, index) in category'>
				<ul>
					<li class="order">{{index+1}}</li>
					<li class="release-date">{{blog.releaseDate | timeFilter}}</li>
					<li class="article-title"><router-link :to="'/blogs/' + blog._id"> {{blog.title}}</router-link></li>
				</ul>
				<div class="decorate" v-if="!((index+1) === category.length)"></div>
			</article>
		</div>
	</div>
</template>

<script>
	import categoryResource from '../../factories/category';
	import Filters from '../../utils/filters';
	export default{
		name: 'category',
		data() {
			return {
				categoryList: []
			}
		},
		methods: {
			getCategory() {
				var vm = this;
				categoryResource.getCategory().then(res => {
					vm.categoryList = res.data;
				}).catch(err => {
					alert(err.message);
				})
			}
		},
		filters: {
			timeFilter: function(value){
				return Filters.timeFilter(value).substr(0, 10);
			}
		},
		created() {
			return this.getCategory();
		}
	}
</script>

<style>
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
</style>