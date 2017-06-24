<template>
	<section class="category">
		<h5>所有分类</h5>
		<section class="cate-list">
			<vmini-tag :tagObj="category" tagType='更新' @setTag="updateCategory" v-for='category in categories'>
			</vmini-tag>
		</section>
		<vmini-tag :tagObj="{name: 'name', code: 'code'}" tagType='添加' @setTag="createCategory"></vmini-tag>
	</section>
</template>

<script>
	import categoryResource from '../../factories/category';
	export default {
		name: 'categories',
		data() {
			return {
				categories: [],
				cateObj: {}
			}
		},
		methods: {
			createCategory(category) {
				let vm = this;
				categoryResource.createCategory(category).then(res => {
					vm.categories.push(res.data)
				})
			},
			getAllCategories() {
				let vm = this;
				categoryResource.getAllCategories().then(res => {
					vm.categories = res.data;
				})
			},
			updateCategory() {

			}
		},
		created() {
			this.getAllCategories();
		}
	}
</script>

<style>
	.category h5 {
		color: #337ab7;
	}
	.cate-list > span {
		margin: 8px 10px; 
	}
</style>