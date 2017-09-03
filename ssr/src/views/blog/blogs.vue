<template>
	<div>
		<div class="blog-list" v-for="blog in blogs" :key="blog._id">
			<div class="title-img">
				<img :src="blog.title_img"/>
			</div>
			<div class="blog-content">
				<h4 class="blog-title">{{ blog.title }}</h4>
				<div class="blog-infor">
					<span class="tag">
						<span class="glyphicon glyphicon-briefcase"></span>
						<span> {{ blog.category.name }}</span>
					</span>
					<span class="tag">
						<span class="glyphicon glyphicon-tag"></span>
						<span v-for='tag in blog.tag' :key="tag._id" class="tag-list">{{ tag.name }}</span>
					</span>
					<span>
						<span class="glyphicon glyphicon-calendar"></span>
						<span> {{ blog.create_at | dateFilter }}</span> 
					</span>
				</div>
				<p class="paragraph">
					{{ blog.content | htmlFilter(90) }}
					<router-link :to="'/blogs/' + blog._id" class="show-all">查看原文</router-link>
				</p>
			</div>
		</div>
		<zpagenav :page="page" :page-size="pageSize" :total="total" :page-handler="pageHandler" :key="page"></zpagenav>
		</div>
</template>

<script>
	export default{
		name: 'blogs',
		data() {
			return {
				pageSize: this.$store.state.pageSize,
			}
		},

		computed: {
			blogs() {
				return this.$store.getters.getCurPageBlogs;
			},
			page() {
				return this.$store.state.currentPage;
			},
			total() {
				return this.$store.state.currentBlogs.length;
			}
		},

		asyncData({ store }) {
			return store.dispatch('GET_BLOGS');
		},

		methods: {
			pageHandler(page) {
      	this.$store.commit('PAGE_CHANGE', { page });
    	}
		},

		title() {
			let url = this.$route.path;
			let blog = this.blogs[0];

			if(url.search(/(categories)[\S*]/) != -1) {
				return '分类' + '「' + blog.category.name + '」';
			}
			else if(url.search(/(tags)[\S*]/) != -1) {
				let code = this.$route.params.code;
				let tagName;
				blog.tag.forEach(val => {
					if(val.code == code) {
						tagName = val.name;
					}
				})
				return '标签' + '「' + tagName + '」';
			}
			else if(url.search(/(archives)[\S*]/) != -1) {
				return '归档' + '「' + this.$route.params.code + '年」';
			}
			else {
				return '首页';
			}
		}
	}
</script>

<style>
	/*-------文章列表-------*/
.blog-list{
	width: 100%;
	overflow: hidden;
  border-bottom: 1px solid #bdc3c7;
  margin-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
}

.title-img{
	flex: 1;
	height: 120px;
	padding-right: 30px;
}

.title-img img{
	border-radius: 2px;
	width: 100%;
	height: 100%;
}

.blog-content{
	flex: 2;
}

.blog-title{
	margin: 0px auto 10px auto;
}

.blog-infor{
	display: flex;
}

.blog-infor em{
	display: flex;
	align-items: center;
}

.tag{
	margin-right: 10px;
}

.tag-list:after {
	content: '、';
}

.tag-list:last-child:after {
	content: '';
}
.paragraph{
	margin-top: 10px;
	line-height: 1.6;
	overflow: hidden;
}

.zpagenav{
	float: right;
}

@media screen and (max-width: 600px){
	.blog-list{
		flex-direction: column;
	}
	.title-img{
		padding-right: 0px;
		margin-bottom: 20px;
		width: 90%;
		height: 160px;
	}
	.blog-content{
		width: 90%;
	}
	.paging{
		float: none;
		text-align: center;
	}
	.back-img{
		height: 200px;
	}
	.back{
		top: 200px;
	}
}
</style>