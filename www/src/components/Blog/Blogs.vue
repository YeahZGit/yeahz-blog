<template>
	<div>
		<div class="blog-list" v-for="blog in blogs">
			<div class="title-img">
				<img :src="blog.title_img"/>
			</div>
			<div class="blog-content">
			  <h4 class="blog-title">{{blog.title}}</h4>
				<div class="blog-infor">
				    <em class="tag">
				        <span class="glyphicon glyphicon-tag"></span>
				        <span>{{blog.category}}</span>
				    </em>
				    <em>
				        <span class="glyphicon glyphicon-calendar"></span>
				        <span>{{blog.update_at | timeFilter}}</span> 
				    </em>
				</div>
			    <p class="paragraph">
			    	{{blog.content | lengthFilter(90)}}
			    	<router-link :to="'/blogs/' + blog._id" class="show-all">查看原文</router-link>
			    </p>
			</div>
		</div>
		<!--分页-->
		<div class="paging">
			<ul class="pagination">
			    <li><a href="#">&laquo;</a></li>
			    <li><a href="#">1</a></li>
			    <li><a href="#">2</a></li>
			    <li><a href="#">3</a></li>
			    <li><a href="#">4</a></li>
			    <li><a href="#">5</a></li>
			    <li><a href="#">&raquo;</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import blogResource from '../../factories/blogs';
	import Filters from '../../utils/filters';
	export default{
		name: 'blogs',
		data() {
			return {
				blogs: []
			}
		},
		methods: {
			getBlogs: function() {
				var vm = this;
				blogResource.getBlogs().then(function(res){
					vm.blogs = res.data;
				}).catch(function(err){
					alert(err.message);
				});
			}
		},
		filters: {
			timeFilter: function(value){
				return Filters.timeFilter(value).substr(0, 10);
			},
			lengthFilter: function(value, length){
				return Filters.lengthFilter(value, length) + '... ';
			}
		},
		created() {
			return this.getBlogs();
		}
	}
</script>

<style>
	/*-------文章列表-------*/
.blog-list{
	width: 100%;
	overflow: hidden;
  border-bottom: 1px solid #bdc3c7;
  margin-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
}

.title-img{
	flex: 1;
	height: 120px;
	padding-right: 30px;
}

.title-img img{
	border-radius: 2px;
	width: 100%;
	height: 100%;
}

.blog-content{
	flex: 2;
}

.blog-title{
	margin: 0px auto 10px auto;
}

.blog-infor{
	display: flex;
}

.blog-infor em{
	display: flex;
	align-items: center;
}

.tag{
	margin-right: 10px;
}

.paragraph{
	margin-top: 10px;
	line-height: 1.6;
	overflow: hidden;
}

.paging{
	float: right;
}

.paging li{
	display: inline;
}

@media screen and (max-width: 600px){
	.blog-list{
		flex-direction: column;
	}
	.title-img{
		padding-right: 0px;
		margin-bottom: 20px;
		width: 90%;
		height: 160px;
	}
	.blog-content{
		width: 90%;
	}
	.paging{
		float: none;
		text-align: center;
	}
	.back-img{
		height: 200px;
	}
	.back{
		top: 200px;
	}
}
</style>