<template>
	<div class="pigeonhole">
		<div class="pigeonhole-list" v-for="year in pigeonholeList">
			<h3>{{year[0].year}}<span>( {{year.length}}篇文章 )</span></h3>
			<article v-for='(blog, index) in year'>
				<ul>
					<li class="order">{{index+1}}</li>
					<li class="release-date">{{blog.releaseDate | timeFilter}}</li>
					<li class="article-title"><router-link :to="'/blogs/' + blog._id"> {{blog.title}}</router-link></li>
				</ul>
				<div class="decorate" v-if="!((index+1) === year.length)"></div>
			</article>
		</div>
	</div>
</template>

<script>
	import pigeonholeResource from '../../factories/pigeonhole';
	import Filters from '../../utils/filters';
	export default{
		name: 'pigeonhole',
		data() {
			return {
				pigeonholeList: []
			}
		},
		methods: {
			dateSort() {
				var vm = this;
				pigeonholeResource.getPigeonhole().then(res => {
					res.data.sort((a, b) => {
						return new Date(b.releaseDate) - new Date(a.releaseDate)
					})
					res.data.forEach(val => {
						var mask = false;
						var pigeonholeInfor = {};

						pigeonholeInfor.year = new Date(val.releaseDate).getFullYear();
						pigeonholeInfor.releaseDate = val.releaseDate;
						pigeonholeInfor.title = val.title;
						pigeonholeInfor._id = val._id;

						for(var i = 0; i < vm.pigeonholeList.length; i++){
							if(pigeonholeInfor.year === vm.pigeonholeList[i][0].year){
								vm.pigeonholeList[i].push(pigeonholeInfor);
								mask = true;
								break;
							}
						}
						if(mask === false){
							vm.pigeonholeList.push([pigeonholeInfor]);
						}
					});
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
			return this.dateSort();
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
	margin-bottom: 20px;
	color: rgb(58, 126, 129);
}

.pigeonhole-list h3 span{
	margin-left: 20px;
	font-size: 14px;
}

.pigeonhole article{
	padding-left: 30px;
}	

.pigeonhole-list ul{
	padding: 0px;
	margin: 0px;
}

.pigeonhole-list ul li{
	display: inline-block;
	text-decoration: none;
}

.pigeonhole-list ul a{
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
	margin-right: 10px;
}

.decorate{
	background: #9ed7da;
	height: 25px;
	width: 2px;
	margin: 1px 0px 1px 8px;
}
</style>