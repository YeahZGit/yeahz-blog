<template>
	<div class="editor"> 
		<div class="title-img">
			<span class="glyphicon glyphicon-picture"></span>
			<span class="text-prompt">添加题图</span>
			<input type="file" class="img-upload" id="img-upload" @change="upload">
			<img v-bind:src="blog.title_img">
		</div>
		<div class="blog-title">
			<input class="title" type="text" placeholder="请输入文章标题" v-model.trim="blog.title">
			<div class="tag-select">
				<vmini-select 
					:tagList='categories' 
					:selectedList='selectedCategory' 
					@updateTag='updateCategory'>
				</vmini-select>
				<vmini-select 
					:tagList='tags' 
					:selectedList='selectedTag' 
					@updateTag='updateTag'>
				</vmini-select>
			</div>
		</div>
		<div class="blog-content">
			<simditor @setContent='getContent' :value="blog.content"></simditor>
		</div>
		<div class="submit">
			<a class="btn btn-default" @click="submit()">提交</a>
		</div>
	</div>
</template>

<script>
	import blogResource from '../../factories/blogs';
	import categoryResource from '../../factories/category';
	import tagResource from '../../factories/tag';
	import uploadResource from '../../factories/upload';
	export default {
		name: 'edit',
		data() {
			return {
				blog: { 
					title_img: ''
				},
				categories: [],
				tags: [],
				selectedCategory: [],
				selectedTag: []
			}
		},
		methods: {
			updateCategory(category) {
				this.blog.category = category[0]._id;
			},
			updateTag(tagList) {
				let vm = this;
				vm.blog.tag = [];
				tagList.forEach(function(val) {
					vm.blog.tag.push(val._id);
				})
			},
			getContent: function(content){
				var vm = this;
				vm.blog.content = content;
			},
			addBlog: function(){
				var vm = this;
				blogResource.addBlog(vm.blog).then(function(res){
					alert('添加成功');
				})
			},
			updateBlog: function(){
				var vm = this;
				var blogId = vm.$parent.$route.params.blogId;
				blogResource.updateBlog(blogId, vm.blog).then(function(res){
					console.log(vm.blog)
					alert('更新成功');
				})
			},
			getBlogById: function(){
				var vm = this;
				var blogId = vm.$parent.$route.params.blogId;
				blogResource.getBlogById(blogId).then(function(res){
					vm.blog =  res.data;
				})
			},
			getCatAndTag: function() {
				let vm = this;
				categoryResource.getAllCategories().then(res => {
					vm.categories = res.data;
				})
				tagResource.getAllTags().then(res => {
					vm.tags = res.data;
				})
			},
			upload: function(e){
				var vm = this;
				var file = e.target.files[0] || e.dataTransfer.files;
				var data = new FormData();
				data.append('picture', file);
				uploadResource.uploadImg(data).then(function(res){
					vm.blog.title_img = '/api' + res.data.url;
				})
			},
			submit: function(){
				var vm = this;
				if(vm.$parent.$route.params.blogId){
					vm.updateBlog();
				}
				else{
					vm.addBlog();
				}
			}
		},
		created() {
			var vm = this;
			if(vm.$parent.$route.params.blogId){
				vm.getBlogById();
			}
			vm.getCatAndTag();
		}		
	}
</script>

<style>
.editor{
	width: 660px;
	margin: 0 auto;
}

.title-img{
	width: 100%;
	height: 200px;
	background: #ecf0f1;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background 0.2s;
}

.title-img:hover{
	background: #d8dcde;
	cursor: pointer;
}

.title-img:hover > .text-prompt{
	opacity: 1;
	margin-top: 30px;
}

.title-img span{
	font-size: 24px;
	color: #95a5a6;
}

.title-img .text-prompt{
	position: absolute;
	font-size: 14px;
	opacity: 0;
	margin-top: 20px;
	-webkit-transition: opacity 0.2s, margin-top 0.2s;
	transition: opacity 0.2s, margin-top 0.2s;
}

.img-upload{
	z-index: 8;
	position: absolute;
	width: 660px;
	height: 200px;
	opacity: 0;
	cursor: pointer;
}

.title-img img{
	width: 660px;
	height: 200px;
	position: absolute;
	z-index: 7;
}

.blog-title{
	width: 100%;
	height: 50px;
	margin-top: 20px;
}

.blog-title > .title {
	height: 100%;
	font-weight: 500;
	border: none;
	outline: none;
	border-bottom: 1px solid #bdc3c7;
	width: 100%;
	font-size: 30px;
}

.tag-select {
	display: flex;
	justify-content: space-between;
	margin-top: 5px;
}

.blog-content{
	width: 100%;
	margin-top: 50px;
	margin-bottom: 10px;
}

.blog-content textarea{
	width: 100%;
	height: 100%;
}

.submit{
	margin-bottom: 30px;
	overflow: hidden;
}

.submit a{
	float: right;
}

</style>	