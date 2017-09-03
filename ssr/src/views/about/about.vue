<template>
	<div class="about">
		<h3 class="about-title">关于</h3>
		<div v-html="about.content"></div>	
	</div>
</template>

<script>
	export default{
		name: 'about',

		computed: {
			about() {
				return this.$store.state.about;
			}
		},

		asyncData({ store }) {
			return store.dispatch('GET_ABOUT', { id: '593fa3dcd16db1196e9ecfc2' });
		},

		title() {
			return '关于';
		}
	}
</script>

<style>
	.about{
		margin-bottom: 50px; 
	}
	
	.about p{
		line-height: 2;
	}
</style>