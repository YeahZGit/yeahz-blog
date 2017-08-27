<template>
	<section>
		<header class="comment-header">
			<span>评论文章</span>
			<span>评论时间</span>
		</header>
		<section>
			<vmini-collapse v-for='comment in comments' class="collapse-item" :comment='comment'></vmini-collapse>	
		</section>
	</section>
</template>

<script>
	import commentResource from '../../factories/comment';
	import matchReply from '../../utils/matchReply';
	export default {
		name: 'comments',
		data() {
			return {
				comments: []
			}
		},
		methods: {
			getAllComments() {
				let vm = this;
				commentResource.getAllComments().then(res => {
					vm.comments = matchReply(res.data);
				})
			}
		},
		created() {
			this.getAllComments();
		}
	}
</script>

<style>
	.table {
		text-align: center;
	}
	.collapse-item {
		margin-bottom: 1px;
	} 
	.comment-header {
		width: 100%;
		padding-left: 10px;
		margin-bottom: 5px;
	}
	.comment-header span {
		display: inline-block;
		width: 100px;
	}
</style>