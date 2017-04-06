<template>
	<div class="category">
		<div class="category-list" v-for="category in categoryList">
			<h3>{{category[0].category}}<span>({{category.length}}篇文章)</span></h3>
			<article v-for='(blog, index) in category'>
				<div class="order">{{index+1}}</div>
				<div class="release-date">{{blog.releaseDate | timeFilter}}</div>
				<h4 class="article-title"><router-link :to="'/blogs/' + blog._id"> {{blog.title}}</router-link></h4>
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
	color: rgb(58, 126, 129);
}

.category-list h3 span{
	margin-left: 20px;
	font-size: 14px;
}

.category-list h4{
	font-size: 16px;
	margin: 0px;
}

.category-list h4 a{
	color: rgb(58, 126, 129);
}

.category article{
	margin-top: 25px;
	padding-left: 30px;
	display: flex;
	flex-direction: row;
}	

.order{
	width: 20px;
	height: 20px;
	color: white;
	border-radius: 20px;
	text-align: center;
	margin-right: 30px;
	background: #9ed7da;
}

.release-date{
	margin-right: 10px;
}
</style>