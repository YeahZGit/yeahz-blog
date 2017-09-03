<template>
	<div class="article-tag">
		<h4>共{{tags.length}}个标签</h4>
		<div class="tag-box">
			<router-link v-for="tag in tags" :key="tag._id" :to="'/tags/' + tag.code">{{tag.name}}</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'tag',
		computed: {
			tags() {
				return this.$store.state.tags;
			}
		},

		asyncData({ store }) {
			return store.dispatch('GET_TAGS');
		},

		title() {
			return '博客标签';
		}
	}
</script>

<style>
.article-tag h4{
	margin-top: 30px;
	margin-left: 30px;
	color: rgb(58, 126, 129);
}

.tag-box{
	width: 80%;
	margin: 30px auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

.tag-box a{
	margin: 10px;
	color: #9ed7da;
	text-decoration: none;
}

.tag-box a:hover {
	color: #2980b9;
}
</style>