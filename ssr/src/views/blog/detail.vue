<template>
	<div class="detial">
		<section class="detial-blog-list">
			<div class="detial-title-img">
				<img :src="blog.title_img"/>
			</div>
			<div class="detial-blog-content">
				<h4 class="detial-blog-title">{{ blog.title }}</h4>
				<div class="detial-blog-infor">
					<span class="detial-tag">
						<span class="glyphicon glyphicon-briefcase"></span>
						<span> {{ blog.category.name }}</span>
					</span>
					<span class="detial-tag">
						<span class="glyphicon glyphicon-tags"></span>
						<span v-for='tag in blog.tag' class="tag-list"> {{ tag.name }}</span>
					</span>
					<span>
						<span class="glyphicon glyphicon-calendar"></span>
						<span> {{ blog.create_at | dateFilter }}</span> 
					</span>
				</div>
				<div class="detial-paragraph" v-html="blog.content"></div>
			</div>
		</section>
		<h4>评论区</h4>
		<hr>
		<comment-form placeholder="您的评论..." class="main-form" 
		:showForm="true"
		:comment="comment"
		@addComment="addComment">
		</comment-form>
		<comment></comment>
	</div>
</template>

<script>
	import comment from '../../components/comment';
	import commentForm from '../../components/commentForm';

	export default{
		name: 'detail',
		
		data() {
			return {
				comment: {
					blog: this.$route.params.id
				} 
			}
		},

		components: {
			comment,
			commentForm
		},

		computed: {
			blog() {
				return this.$store.state.blogs[this.$route.params.id];
			}
		},

		methods: {
			addComment(comment) {
				this.$store.commit('ADD_COMMENT', { comment });
			}
		},

		asyncData({ store, route: { params: { id }}}) {
			return store.dispatch('GET_BLOG_BY_ID', { id });
		},

		title() {
			return this.blog.title;
		}
	}
</script>

<style>
@import '../../../node_modules/simditor/styles/simditor.css';
.detial-blog-list{
	width: 100%;
	overflow: hidden;
  margin-top: 20px;
  padding-bottom: 20px;
}

.detial-title-img {
	max-height: 400px;
	overflow: hidden; 
}

.detial-title-img img{
	border-radius: 2px;
	width: 100%;
}

.detial-blog-content{
	margin-top: 30px;
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

.tag-list:after {
	content: '、';
}

.tag-list:last-child:after {
	content: '';
}

@media screen and (max-width: 600px){
	.detial-blog-content img{
		width: 100%;
	}
}

.main-form .cancel-form {
	display: none;
}
</style>