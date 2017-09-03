<template>
	<article class="detail">
		<section class="detail-title-img"><img :src='blog.title_img'></section>
		<section class="title-infor">
			<h3>{{ blog.title }}</h3>
			<section>
				<span>
					<span class="glyphicon glyphicon-book"></span>
					<span>{{ blog.category.name }}</span>
				</span>
				<span>
					<span class="glyphicon glyphicon-tags"></span>
					<span v-for="tag in blog.tag" class="tag-list">{{ tag.name }}</span>
				</span>
				<span>
					<span class="glyphicon glyphicon-calendar"></span>
					<span>{{ blog.create_at }}</span>
					<span>{{ blog.update_at }}</span>
				</span>
			</section>
		</section>
		<section class="blog-content" v-html='blog.content'></section>
		<section class="comment-infor">
			<h3>评论区</h3>
			<hr/>
			<section class="comment-content">
				<section class="comment-detail" v-for='comment in comments'>
					<section>
						<span>{{ comment.username }} ({{ comment.email }})：</span>
						<span class="comment-at">{{ comment.create_at }}</span>
						<p>{{ comment.content }}</p>
					</section>
					<section class="reply-detail" v-for='reply in comment.replies'>
						<span>{{ reply.username }} &nbsp 回复给： {{ reply.reply_to_name }}</span>
						<span class="comment-at">{{ reply.create_at }}</span>
						<p>{{ reply.content }}</p>
					</section>
					<hr class="part-line"/>
				</section>
			</section>
		</section>
	</article>
</template>

<script>
	import blogResource from '../../factories/blogs';
	import commentResource from '../../factories/comment';
	import matchReply from '../../utils/matchReply';
	export default {
		name: 'detail',
		data() {
			return {
				blog: {},
				comments: []
			}
		},
		methods: {
			getBlogById() {
				let vm = this;
				let blogId = vm.$parent.$route.params.blogId;
				blogResource.getBlogById(blogId).then(function(res) {
					vm.blog = res.data;
					return commentResource.getCommentByBlogId(blogId);
				}).then(function(res) {
					vm.comments = matchReply(res.data);
				})
			}
		},
		created() {
			this.getBlogById();
		}
	}
</script>

<style>
	.detail{
		width: 660px;
		margin: 0 auto;
	}
	.detail-title-img img{
		width: 100%;
	}
	.comment-at{
		float: right;
	}
	.reply-detail{
		padding-left: 30px;
	}
	.comment-detail:last-child hr{
		display: none;
	}
	.comment-content{
/*		margin-bottom: 100px;*/
	}
	.comment-content p{
		margin-top: 5px;
		word-break: break-all;
	}
	.tag-list:after {
		content: '、';
	}
	.tag-list:last-chils:after {
		content: '';
	}
</style>