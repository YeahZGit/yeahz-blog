<template>
	<section class="vmini vmini-collapse">
		<section class="vmini vmini-collapse-bar">
			<span :title="comment.blog.title">{{ comment.blog.title | lengthFilter(10) }}</span>
			<span class="com-time">{{ comment.create_at | dateFilter }}</span>
			<span class="vmini-collapse-btn collapse-open" v-if='!open' @click='openToggle'>+</span>
			<span class="vmini-collapse-btn collapse-close" v-if='open' @click='openToggle'>-</span>
		</section>
		<section class="vmini-collapse-content">
			<div v-if='open'>
				<section class="comment-content">
				<section class="comment-detail">
					<section>
						<span>{{ comment.username }}：</span>
						<span class="comment-at">{{ comment.create_at | dateFilter}}</span>
						<p>{{ comment.content }}</p>
					</section>
					<section class="reply-detail" v-for='reply in comment.replies'>
						<span>{{ reply.username }} &nbsp 回复给： {{ reply.reply_to_name }}</span>
						<span class="comment-at">{{ reply.create_at | dateFilter }}</span>
						<p>{{ reply.content }}</p>
					</section>
					<hr class="part-line"/>
				</section>
			</section>
			</div>
		</section>		
	</section>
</template>

<script>
	export default {
		name: 'collapse',
		props: {
			comment: {}
		},
		data() {
			return {
				open: false
			}
		},
		methods: {
			openToggle() {
				this.open = !this.open;
			}
		}
	}
</script>

<style>
	.vmini-collapse {
		border: 1px solid #eaeaea;
		border-radius: 5px;
	}
	.vmini-collapse-content {
		padding: 0 8px;
	}
	.vmini-collapse-bar {
		width: 100%;
		height: 32px;
		border-bottom: 1px solid #eaeaea;
		overflow: hidden;
		padding: 0 8px;
	}
	.vmini-collapse-bar > span {
		display: inline-block;
		line-height: 30px;
		height: 30px;
	}
	.com-time {
		margin-left: 10px;
	}
	.vmini-collapse-btn {		
		font-size: 25px;
		font-weight: 700;
		float: right;
		color: #95a5a6;
		cursor: pointer;
		width: 20px;
		text-align: center;
	}
	.vmini-collapse-btn:hover {
		color: #2980b9;
	}
</style>