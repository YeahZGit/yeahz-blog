<template>
	<div>
		<div class="header-box">
			<div class="header">
				<nav class="nav">
					<ul>
						<li><router-link to='/blogs'>文章</router-link></li>
						<li><router-link to='/comments'>评论</router-link></li>
						<li><router-link to='/categories'>分类</router-link></li>
						<li><router-link to='/tags'>标签</router-link></li>
						<li><router-link to='/about'>关于</router-link></li>
					</ul>
				</nav>
				<aside>
					<router-link class="btn btn-default" to='/edit' v-if="showEditorBtn">写文章</router-link>
				</aside>
				<div class="manager">博客管理系统</div>
			</div>
		</div>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
  export default{
    name: 'app',
    computed: {
    	showEditorBtn() {
    		return !(/edit/.test(this.$route.fullPath));
    	}
    }
  }
</script>
	
<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/simditor/styles/simditor.css';
body{
	font-family: 'Microsoft YaHei';
}

.header-box{
	border: 1px solid #bdc3c7;
	z-index: 9;
	overflow: hidden;
	position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
	align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.9);
}

.header{
	width: 800px;
	display: flex;
	font-size: 15px;
	align-items: center;
}

.nav{
	flex: 5;
}

.nav ul{
	margin: 0px;
	padding: 0px;
}

.nav li{
	display: inline;
	margin: 10px;
	text-align: center;
}

.nav li a{
	text-decoration: none;
}

.btn-default {
  background-color: rgba(255,255,255,0.5);
  border-color: #bdc3c7;
}

.manager{
	flex: 1;
	text-align: center;
	color: #7f8c8d;
}

.main{
	padding-top: 80px;
	width: 800px;
	margin: 0 auto;
}
</style>
