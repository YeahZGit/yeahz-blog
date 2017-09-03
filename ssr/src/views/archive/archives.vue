<template>
	<div class="archives">
		<div class="archives-list" v-for="archive in archivesList">
			<h3>
				<router-link :to="'/archives/' + archive.year" class="cate-header">{{ archive.year }}</router-link>
				<span>( {{ archive.blogs.length }}篇文章 )</span>
			</h3>
			<article v-for='(blog, index) in archive.blogs' class="archive">
				<ul>
					<li class="order">{{ index + 1 }}</li>
					<li class="release-date">{{ blog.create_at | dateFilter }}</li>
					<li class="article-title">
						<router-link :to="'/blogs/' + blog._id"> {{ blog.title }}</router-link>
					</li>
				</ul>
				<div class="decorate"></div>
			</article>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'archives',

		computed: {
			archivesList() {
				return this.$store.state.archivesList;
			}
		},

		asyncData({ store }) {
			return store.dispatch('GET_ARCHIVES');
		},

		title() {
			return '博客归档';
		}
	}
</script>

<style>
.cate-header {
	color: rgb(58, 126, 129);
}

.cate-header:hover {
	text-decoration: none;
}

.archives{
	margin-left: 30px;
}

.archive ul {
    margin-left: -1px;
}

.archives-list{
	margin-top: 30px;
	margin-bottom: 50px;
}

.archives-list h3{
	font-size: 20px;
	margin-bottom: 20px;
	color: rgb(58, 126, 129);
}

.archives-list h3 span{
	margin-left: 20px;
	font-size: 14px;
}

.archives article{
	padding-left: 30px;
}	

.archives-list ul{
	padding: 0px;
	margin: 0px;
}

.archives-list ul li{
	display: inline-block;
	text-decoration: none;
}

.archives-list ul a{
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
	margin: 0 10px;
}

.decorate{
	background: #9ed7da;
	height: 25px;
	width: 2px;
	margin: 1px 0px 1px 8px;
}

.archive:last-child .decorate {
	display: none;
}
</style>