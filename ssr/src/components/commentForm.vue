<template>
	<section class="comment" v-if="show">
		<div class="comment-infor">
			<section>
				<div class="lab">用户名</div>
				<input type="text" v-model="newComment.username" placeholder="">
				<div class="prompt">(必填)</div>
			</section>
			<div class="errorPrompt">{{ usernamePrompt }}</div>
			<section>
				<div class="lab">电子邮箱</div>
				<input type="email" v-model="newComment.email" placeholder="">
				<div class="prompt">(必填)</div>
			</section>
			<div class="errorPrompt">{{ emailPrompt }}</div>
			<section>
				<div class="lab">评论内容</div>
				<textarea :placeholder="placeholder" v-model="newComment.content"></textarea>
			</section>
			<div class="errorPrompt">{{ contentPrompt }}</div>
			<section class="com-sub">
				<span class="cancel-form" @click="cancelComment">取消</span>
				<button class="btn btn-default" @click="submitComment">发表评论</button>
			</section>
		</div>
	</section>
</template>

<script>
import commentResource from '../factories/comment';
import formPrompt from '../utils/formPrompt';
export default {
	name: 'comment-form',

	props: {
		commentId: '',
		activeId: '',
		placeholder: '',
		showForm: false,
		comment: {}//待回复的comment
	},

	data() {
		return {
			show: this.showForm,
			newComment: {
				username: '',
				email: '',
				content: ''
			},
			usernamePrompt: '',
			emailPrompt: '',
			contentPrompt: ''
		}
	},

	watch: {
		activeId(newVal, oldVal) {
			if(this.commentId && newVal && this.commentId == newVal) {
				this.show = true;
			}
			else {
				this.show = false;
			}
		}
	},

	methods: {
		cancelComment() {
			this.$emit('hideForm');
			this.newComment = {};
		},
		submitComment() {
			let vm = this;
			let { error, usernamePrompt, emailPrompt, contentPrompt } = formPrompt(vm.newComment.username, vm.newComment.email, vm.newComment.content);
			vm.usernamePrompt = usernamePrompt;
			vm.emailPrompt = emailPrompt;
			vm.contentPrompt = contentPrompt;
			if(error) {
				return;
			}
			vm.newComment.root_id = vm.comment.root_id;
			vm.newComment.reply_to = vm.comment._id;
			vm.newComment.blog = vm.comment.blog;
			commentResource.createComment(vm.newComment).then(res => {
				vm.newComment = res.data;	
				vm.$emit('addComment', vm.newComment);
			})
		}
	}
}
</script>

<style>
.comment {
	margin-bottom: 40px;
}

.comment-infor section {
	max-width: 320px;
	margin: 0 auto;
	display: flex;
	align-items: center;
}

.lab {
	width: 80px;
}

.comment-infor section input {
	flex: 1;
	height: 30px;
}

.comment-infor section textarea {
	flex: 1;
	height: 80px;
}

.prompt {
	width: 40px;
	font-size: 12px;
	text-align: right;
}

.com-sub {
	justify-content: center;
}

.cancel-form {
	display: inline-block;
	width: 100px;
	text-align: center;
}

.com-sub button {
	width: 160px;
	border-radius: 0px;
	color: #95a5a6;
}

.errorPrompt {
	color: red;
	height: 25px;
	max-width: 160px;
  margin: 0 auto;
  font-size: 12px;
  line-height: 25px;
}
</style>
