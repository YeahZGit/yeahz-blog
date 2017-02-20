<template>
	<div class="blog-list">
		<table class="table table-hover">
			<tr>
				<td><b>文章名</b></td>
				<td><b>标签</b></td>
				<td><b>发布时间</b></td>
				<td><b>最近跟新时间</b></td>
				<td><b>操作</b></td>
			</tr>
			<tbody>
				<tr v-for="blog in blogs">
					<td>{{ blog.title }}</td>
					<td>{{ blog.category }}</td>
					<td>{{ blog.create_at | timeFilter}}</td>
					<td>{{ blog.update_at | timeFilter}}</td>
					<td>
						<a @click="deleteBlog(blog._id)">删除</a>
						<router-link :to="{path: '/edit/' + blog._id}">编辑</router-link>
					</td>
				</tr>	
			</tbody>
		</table>
		<nav aria-label="Page navigation">
			<ul class="pagination">
				<li>
					<a href="#" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li><a href="#">1</a></li>
				<li><a href="#">2</a></li>
				<li><a href="#">3</a></li>
				<li><a href="#">4</a></li>
				<li><a href="#">5</a></li>
				<li>
					<a href="#" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	import blogResource from '../../factories/blogs'
	import filters from '../../utils/filters'
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
			},
			deleteBlog: function(id){
				var vm = this;
				blogResource.deleteBlog(id).then(function(res){
					vm.getBlogs();
				}).catch(function(err){
					alert(err.message);
				});
			}
		},
		filters: {
			timeFilter: function(value){
				return filters.timeFilter(value);
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
</style>