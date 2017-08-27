<template>
	<div class="about">
		<h5>关于</h5>
		<simditor @setContent='getContent' :value="about.content"></simditor>
		<button @click="updateAbout(about._id)" class="btn btn-default">更新</button>
	</div>
</template>

<script>
	import aboutResource from '../../factories/about';
	export default {
		name: 'about',
		data() {
			return {
				about: {}
			}
		},
		methods: {
			getAbout() {
				let vm = this;
				aboutResource.getAbout('593fa3dcd16db1196e9ecfc2').then(res => {
					vm.about = res.data;
				})
			},
			updateAbout(id) {
				let vm = this;
				aboutResource.updateAbout(id, vm.about).then(res => {
					vm.about = res.data;
				})
			},
			getContent(content) {
				this.about.content = content;
			}
		},	
		created() {
			this.getAbout();
		}
	}
</script>

<style>
	.about > h5 {
		text-align: center;
	}
	.about {
		width: 660px;
		margin: 0 auto;
	}
	.about .btn-default {
		float: right;
	}
</style>