<template>
	<div class="blog-list">
		<table class="table table-hover">
			<tr>
				<td><b>文章名</b></td>
				<td><b>分类</b></td>
				<td><b>标签</b></td>
				<td><b>发布时间</b></td>
				<td><b>最近更新时间</b></td>
				<td><b>操作</b></td>
			</tr>
			<tbody>
				<tr v-for="blog in blogs">
					<td>
						<router-link :to="{path: '/blogs/' + blog._id}">{{ blog.title }}</router-link>
					</td>
					<td>{{ blog.category.name }}</td>
					<td><span v-for="tag in blog.tag" class="tag-list">{{ tag.name }}</span></td>
					<td>{{ blog.create_at | dateFilter}}</td>
					<td>{{ blog.update_at | dateFilter}}</td>
					<td>
						<a @click="deleteBlog(blog._id)">删除</a>
						<router-link :to="{path: '/edit/' + blog._id}">编辑</router-link>
					</td>
				</tr>	
			</tbody>
		</table>
		<zpagenav 
		:page="page" 
		:page-size="pageSize" 
		:total="total" 
		:page-handler="pageHandler">
		</zpagenav>
	</div>
</template>

<script>
	import blogResource from '../../factories/blogs'
	export default{
		name: 'blogs',
		data() {
			return {
				blogs: [],
				allBlogs: [],
				page: 1,
				pageSize: 10,
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
					vm.allBlogs = res.data;
					vm.total = res.data.length;
					vm.paging();
				})
			},
			deleteBlog: function(id){
				var vm = this;
				blogResource.deleteBlog(id).then(function(res){
					vm.getBlogs();
				})
			},
			pageHandler(page) {
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
	.blog-list{
		flex: 1;
		text-align: center;
	}

	.table-hover a{
		cursor: pointer;
	}

	.tag-list:after {
		content: '、';
	}
	
	.tag-list:last-child:after {
		content: '';
	}
</style>