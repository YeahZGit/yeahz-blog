<template>
	<div class="article-tag">
		<h4>{{tags.length}}个标签</h4>
		<div class="tag-box">
			<router-link v-for="tag in tags" to="" style="'font-size:' + Math.random()*20">{{tag}}</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'tag',
		data() {
			return {
				tags: ['svn', 'git', 'github','svn', 'git', 'github','svn', 'git', 'github','github','svn', 'git', 'github']
			}
		},
		methods: {

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
	/*font-size: 20px;*/
	color: #9ed7da;
	text-decoration: none;
}

.tag-box a:hover{
	font-size: 24px;
	color: red;
}
</style>