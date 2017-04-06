<template>
	<div class="pigeonhole">
		<div class="pigeonhole-list" v-for="year in pigeonholeList">
			<h3>{{year[0].year}}<span>({{year.length}}篇文章)</span></h3>
			<article v-for='(blog, index) in year'>
				<div class="order">{{index+1}}</div>
				<div class="release-date">{{blog.releaseDate}}</div>
				<h4 class="article-title"><router-link :to="'/blogs/'"> {{blog.blogTitle}}</router-link></h4>
			</article>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'pigeonhole',
		data() {
			return {
				pigeonholeList: [[{year: '2017', releaseDate: '2017-04-06', blogTitle: '关于flex布局'},
							  {year: '2017', releaseDate: '2017-04-06', blogTitle: '关于flex布局'}],
							 [{year: '2017', releaseDate: '2017-04-06', blogTitle: '关于flex布局'},
							  {year: '2017', releaseDate: '2017-04-06', blogTitle: '关于flex布局'}]
							]
			}
		}
	}
</script>

<style>
.pigeonhole{
	margin-left: 30px;
}

.pigeonhole-list{
	margin-top: 30px;
	margin-bottom: 50px;
}

.pigeonhole-list h3{
	font-size: 20px;
	color: rgb(58, 126, 129);
}

.pigeonhole-list h3 span{
	margin-left: 20px;
	font-size: 14px;
}

.pigeonhole-list h4{
	font-size: 16px;
	margin: 0px;
}

.pigeonhole-list h4 a{
	color: rgb(58, 126, 129);
}

.pigeonhole article{
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