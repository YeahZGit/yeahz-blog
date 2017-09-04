<template>
	<section class="comment-content">
		<section class="comment-detail" v-for='comment in comments'>
			<hr class="part-line"/>
			<section class="comment-box">
				<div>
					<span :title="comment.username">{{ comment.username | lengthFilter(8) }}：</span>
					<span class="comment-at">{{ comment.create_at | dateFilter('yyyy/MM/dd') }}</span>
				</div>
				<div class="com-text">
					<div class="com-content">{{ comment.content }}</div>
					<div class="add-reply" @click='showForm(comment._id)'>
						<span class="glyphicon glyphicon-share-alt"></span> 回复
					</div>
				</div>
				<comment-form 
				:commentId="comment._id" 
				:activeId="activeId"
				:placeholder="'回复给：' + comment.username"
				:comment="comment"
				@hideForm="hideForm"
				@addComment="addReply">
				</comment-form>
			</section>
			<section class="reply-detail comment-box" v-for='reply in comment.replies'>
				<div>
					<span>
						<span :title="reply.username">{{ reply.username | lengthFilter(8) }}</span>
						 &nbsp 回复给： 
						<span :title="reply.reply_to_name">{{ reply.reply_to_name | lengthFilter(8) }}</span>
					</span>
					<span class="comment-at">{{ reply.create_at | dateFilter('yyyy/MM/dd') }}</span>
				</div>
				<div class="com-text">
					<div class="com-content">{{ reply.content }}</div>
					<div class="add-reply" @click='showForm(reply._id)'>
						<span class="glyphicon glyphicon-share-alt"></span> 回复
					</div>
				</div>
				<comment-form 
				:commentId="reply._id" 
				:activeId="activeId"
				:placeholder="'回复给：' + reply.username"
				:comment="reply"
				@hideForm="hideForm"
				@addComment="addReply">
				</comment-form>
			</section>
		</section>
	</section>
</template>

<script>
import commentResource from '../factories/comment';
import commentForm from './commentForm';

export default {
	name: 'comment',
	data() {
		return {
			activeId: ''
		}
	},

	components: {
		commentForm
	},

	computed: {
		comments() {
			return this.$store.getters.getComments;
		}
	},

	methods: {
		getAllComments() {
			let blogId = this.$route.params.id;
			commentResource.getCommentByBlogId(blogId).then(res => {
				this.$store.commit('SET_COMMENTS', { comments: res.data });
			})
		},
		addReply(comment) {
			console.log(comment)
			this.$store.commit('ADD_REPLY', { comment });
			this.hideForm();
		},
		showForm(id) {
			this.activeId = id;
		},
		hideForm() {
			this.activeId = '';
		}
	},

	beforeMount() {
		this.getAllComments();
	}
}
</script>

<style>
.comment-content {
	padding: 0px 0 20px 0;
}

.comment-box {
	margin: 15px 0;
}

.comment-at{
	float: right;
}

.reply-detail{
	padding-left: 25px;
}

.com-text {
	display: flex;
	margin: 15px 0 5px 0;
}

.com-content {
	flex: 1;
	margin: 0 10px;
	word-break: break-word;
}

.comment-box:hover{
	cursor: pointer;
}

.add-reply {
	visibility: hidden;
	width: 50px;
}

.add-reply:hover {
	color: #3498db;
}

.comment-box:hover .add-reply{
	visibility: visible;
}

.glyphicon-pencil {
	font-size: 12px;
}

@media screen and (max-width: 480px){
	.reply-detail {
		padding-left: 0px;
	}
}
</style>