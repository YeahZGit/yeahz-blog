<template>
	<section class="category">
		<h5>所有分类</h5>
		<section class="cate-list">
			<vmini-tag :tagObj="category" :canClose="true" tagType='更新' @setTag="updateCategory(category, category._id)" @close="removeCategory" v-for='category in categories'>
			</vmini-tag>
		</section>
		<h5>添加分类</h5>
		<vmini-tag class="add-category" :tagObj="{name: 'category', code: 'code'}" tagType='添加' @setTag="createCategory" ></vmini-tag>
	</section>
</template>

<script>
	import categoryResource from '../../factories/category';
	import utils from '../../utils';
	export default {
		name: 'categories',
		data() {
			return {
				categories: []
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
			updateCategory(category) {
				var vm = this;
				categoryResource.updateCategory(category._id, category).then(res => {
					utils.updateKeyValue(vm.categories, '_id', res.data);
				})
			},
			removeCategory(category) {
				let vm = this;
				categoryResource.deleteCategory(category._id).then(res => {
					utils.removeKeyValue(vm.categories, '_id', category._id);
				})
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
	.add-category {
		margin-left: 10px;
	}
</style>