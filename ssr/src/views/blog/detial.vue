<template>
	<div class="detial">
		<div class="detial-blog-list" :key="blog.title_img">
			<div class="detial-title-img">
				<img :src="blog.title_img"/>
			</div>
			<div class="detial-blog-content" :key="blog.title">
				<h4 class="detial-blog-title">{{blog.title}}</h4>
				<div class="detial-blog-infor">
					<em class="detial-tag">
						<span class="glyphicon glyphicon-briefcase"></span>
						<span>{{blog.category.name}}</span>
					</em>
					<em class="detial-tag">
						<span class="glyphicon glyphicon-tags"></span>
						<span v-for='tag in blog.tag'>{{tag.name}}</span>
					</em>
					<em>
						<span class="glyphicon glyphicon-calendar"></span>
						<span>{{blog.create_at | dateFilter}}</span> 
					</em>
				</div>
				<p class="detial-paragraph" v-html="blog.content"></p>
				<router-link to='/home' class="detial-back-home">
					<span class="glyphicon glyphicon-share-alt"></span>
					<span>返回首页</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import blogResource from '../../factories/blogs';

	export default{
		name: 'detial',
		data() {
			return {
				blog: {}
			}
		},
		methods: {
			getBlogById: function() {
				var vm = this;
				var blogId = vm.$parent.$route.params.blogId;
				blogResource.getBlogById(blogId).then(function(res){
					vm.blog = res.data;
				})
			}
		},
		created() {
			return this.getBlogById();
		}
	}
</script>

<style>
.detial-blog-list{
	width: 100%;
	overflow: hidden;
  margin-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.detial-title-img{
	flex: 1;
}

.detial-title-img img{
	border-radius: 2px;
	width: 100%;
	height: 100%;
}

.detial-blog-content{
	margin-top: 30px;
	flex: 1;
}

.detial-blog-content img{
	height: auto;
	border-radius: 2px;
}

.detial-blog-title{
	margin: 0px auto 10px auto;
}

.detial-blog-infor{
	display: flex;
}

.detial-blog-infor em{
	display: flex;
	align-items: center;
}

.detial-tag{
	margin-right: 10px;
}

.detial-paragraph{
	margin-top: 10px;
	line-height: 1.6;
	overflow: hidden;
}

.glyphicon-share-alt{
	transform: rotate(-180deg);
}

a.detial-back-home{
	margin-top: 30px;
	display: flex;
	flex-direction: row-reverse;
	align-items: baseline;
	text-decoration: none;
}

@media screen and (max-width: 600px){
	.detial-blog-content img{
		width: 100%;
	}
}
</style>