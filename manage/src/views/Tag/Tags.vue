<template>
		<section class="category">
		<h5>所有标签</h5>
		<section class="cate-list">
			<vmini-tag :tagObj="tag" :canClose="true" tagType='更新' @setTag="updateTag" @close="removeTag" v-for='tag in tags'>
			</vmini-tag>
		</section>
		<h5>添加标签</h5>
		<vmini-tag class="add-category" :tagObj="{name: 'tag', code: 'code'}" tagType='添加' @setTag="createTag"></vmini-tag>
	</section>
</template>

<script>
	import tagResource from '../../factories/tag';
	import utils from '../../utils';
	export default {
		name: 'tags',
		data() {
			return {
				tags: []
			}
		},
		methods: {
			createTag(tag) {
				let vm = this;
				tagResource.createTag(tag).then(res => {
					vm.tags.push(res.data);
				})
			},
			getAllTags() {
				let vm = this;
				tagResource.getAllTags().then(res => {
					vm.tags = res.data;
				})
			},
			updateTag(tag) {
				let vm = this;
				tagResource.updateTag(tag._id, tag).then(res => {
					utils.updateKeyValue(vm.tags, '_id', tag);
				})
			},
			removeTag(tag) {
				let vm = this;
				tagResource.deleteTag(tag._id).then(res => {
					utils.removeKeyValue(vm.tags, '_id', tag._id);
				})
			}
		},
		created() {
			this.getAllTags();
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