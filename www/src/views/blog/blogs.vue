<template>
	<div>
		<div class="blog-list" v-for="blog in blogs" :key="blog._id">
			<div class="title-img">
				<img :src="blog.title_img"/>
			</div>
			<div class="blog-content">
				<h4 class="blog-title">{{blog.title}}</h4>
				<div class="blog-infor">
					<em class="tag">
						<span class="glyphicon glyphicon-briefcase"></span>
						<span>{{blog.category.name}}</span>
					</em>
					<em class="tag">
						<span class="glyphicon glyphicon-tag"></span>
						<span v-for='tag in blog.tag' class="tag-list">{{tag.name}}</span>
					</em>
					<em>
						<span class="glyphicon glyphicon-calendar"></span>
						<span>{{blog.create_at | dateFilter('yyyy-MM-dd')}}</span> 
					</em>
				</div>
				<p class="paragraph">
					{{blog.content | htmlFilter(90)}}
					<router-link :to="'/blogs/' + blog._id" class="show-all">查看原文</router-link>
				</p>
			</div>
		</div>
		<!--分页-->
		<zpagenav :page="page" :page-size="pageSize" :total="total" :page-handler="pageHandler" :key="page"><zpagenav>
		</div>
</template>

<script>
	import blogResource from '../../factories/blogs';
	import blogsHandler from '../../utils/blogsHandler';
	export default{
		name: 'blogs',
		data() {
			return {
				show: true,
				blogs: [],
				allBlogs: [],
				page: 1,
				pageSize: 4,
				total: 0
			}
		},
		methods: {
			paging: function() {
				var vm = this;
				vm.blogs = [];
				for(var i=(vm.page-1)*vm.pageSize, j=0; j<vm.pageSize && i<vm.total; i++, j++){
					vm.blogs[j] = vm.allBlogs[i];
				}
			},
			getBlogs: function() {
				var vm = this;
				blogResource.getBlogs().then(function(res){
					let route = vm.$parent.$route;
					vm.allBlogs = blogsHandler(res.data, route.path, route.params.code);
					vm.total = vm.allBlogs.length;
					vm.paging();
				})
			},
			pageHandler: function(page) {
      	this.page = page;
      	this.paging();
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

.tag-list:after {
	content: '、';
}
.tag-list:last-child:after {
	content: '';
}
.paragraph{
	margin-top: 10px;
	line-height: 1.6;
	overflow: hidden;
}

.zpagenav{
	float: right;
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