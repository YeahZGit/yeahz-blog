<template>
	<span class="vmini vmini-tag">
		<span class="vmini vmini-tag-item">
			<span v-if="!showNameEditor" @click="editName">{{ tagObj.name }}</span>
			<input placeholder="name" v-if="showNameEditor" @blur="editName" v-model='tagObj.name'>
		</span>
		<span class="vmini vmini-tag-item" >
			<span v-if="!showCodeEditor" @click="editCode">{{ tagObj.code }}</span>
			<input placeholder="code" v-if="showCodeEditor" @blur="editCode" v-model='tagObj.code'>
		</span>
		<span class='vmini-tag-update' @click='emitTag'>{{ tagType }}</span>
		<span class='vmini-tag-close' v-if="canClose" @click='close'>×</span>
	</span>
</template>

<script>
	export default {
		name: 'tag',
		props: {
			tagObj: {},
			tagType: '',
			canClose: false
		},
		data() {
			return {
				showNameEditor: false,
				showCodeEditor: false
			}
		},
		methods: {
			editName() {
				this.showNameEditor = !this.showNameEditor;
			},
			editCode() {
				this.showCodeEditor = !this.showCodeEditor;
			},
			emitTag() {
				this.$emit('setTag', this.tagObj);
			},
			close() {
				this.$emit('close', this.tagObj);
			}
		}
	}
</script>

<style>
	.vmini-tag {
		min-width: 70px;
		height: 26px;
		background-color: rgba(32,160,255,.1);
		border-color: rgba(32,160,255,.2);
		border-radius: 4px;
		display: inline-flex;
		color: #20a0ff;
		align-items: center;
		padding: 0 6px;
	}
	.vmini-tag-item input {
		border: none;
		outline: none;
		border-radius: 2px;
		width: 40px;
		margin-right: 5px;
	}
	.vmini-tag-item {
		margin-right: 5px;
	}
	.vmini-tag-item:hover {
		cursor: pointer;
	}
	.vmini-tag-update:before, .vmini-tag-close:before {
		content: ' | ';
	}
	.vmini-tag-update:hover, .vmini-tag-close:hover {
		cursor: pointer;
	} 
</style>