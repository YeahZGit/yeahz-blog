<template>
	<div class="login-box">
		<div class="login">
			<form @submit.prevent="login()">
				<div>
					<h5>username:</h5>
					<input type="text" class="form-control" v-model.trim="master.username">
				</div>
				<div>
					<h5>password:</h5>
					<input type="password" class="form-control" v-model.trim="master.password">	
				</div>
				<input type="submit" class="btn btn-info" @click="login()" value="登录">
			</form>
		</div>
	</div>
</template>

<script>
	import configs from '../../constants/configs'
	import axios from 'axios'; 
	export default{
		name: 'login',
		data() {
			return {
				master: {}
			}
		},
		methods: {
			login: function(){
				var vm = this;
				if(!vm.master.username || !vm.master.password){
					alert("未提供用户名或密码");
				}
				else{
					axios.post(configs.API_BASE + '/authorization', vm.master).then(function (res) {
						window.sessionStorage.setItem('token', res.data.token);
						window.location.href = configs.MANAGE_BASE + '/blogs';
					}).catch(err) {
						alert(err.message);
					}  
				}
			}
		}
	}
</script>

<style>
	.login-box{
		margin: 60px auto;
		width: 400px;
		height: 240px;
		border: 1px solid #95a5a6;
	}

	.login{
		width: 80%;
    	margin: 10px auto;
    	display: flex;
    	flex-wrap: wrap;
    	flex-direction: column;
    }

    .login .btn{
    	width: 100%;
    	margin: 30px auto;
    }
</style>