<template>
	<div>
		<div class="header-box">
			<div class="header">
				<nav class="nav">
					<ul>
						<li><router-link to='/blogs'>文章</router-link></li>
						<li><router-link to='/edit'>写文章</router-link></li>
						<li><router-link to='/comments'>评论</router-link></li>
						<li><router-link to='/about'>关于</router-link></li>
					</ul>
				</nav>
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
    created() {
    	if(!window.sessionStorage.getItem('token')){
    		window.location.href = '#/login';
    	}
    }
  }
</script>
	
<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
body{
	font-family: '微软雅黑';
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
