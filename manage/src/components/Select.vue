<template>
	<div class="vmini vmini-select">
		<section class="vmini-selected">
			<span class="vmini-selected-tag" v-for='tag in selectedList'>
				<span>{{ tag.name }} | {{ tag.code }}</span>
				<span @click='removeTag(tag.code)' class="selected-remove">×</span>
			</span>
			<span class="vmini-select-btn" tabindex='0' @focus='toggleList' @blur='toggleList'></span>
		</section>
		<section class="vmini-select-list" v-if='showList'>
			<div @click='pushTag(tag.code)' v-for='tag in tagList'>{{ tag.name }} | {{ tag.code }}</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'select',
		props: {
			tagList: {},
			selectedList: {}
		},
		data() {
			return {
				showList: false
			}
		},
		methods: {
			toggleList() {
				let vm = this;
				setTimeout(function() {
					vm.showList = !vm.showList;
				}, 200)
			},
			removeTag(code) {
				for(let i = 0; i < this.selectedList.length; i ++) {
					if(this.selectedList[i].code == code) {
						this.selectedList.splice(i, 1);
						this.$emit('updateTag', this.selectedList);
						break;
					}
				}
			},
			pushTag(code) {
				for(let i = 0; i < this.tagList.length; i ++) {
					if(this.tagList[i].code == code) {
						let selected = false;
						for(let j = 0; j < this.selectedList.length; j ++) {
							if(this.tagList[i].code == this.selectedList[j].code) {
								selected = true;
								break;
							}
						}
						if(!selected) {
							this.selectedList.push(this.tagList[i]);
							this.$emit('updateTag', this.selectedList);
							break;
						}
					}
				}
			}
		}
	}
</script>

<style>
	.vmini-selected {
		border: 1px solid #eaeaea;
		padding: 8px;
		border-radius: 5px;
		width: 300px;
		height: 37px;
	}
	.vmini-selected-tag {
		border: 1px solid #ecf0f1;
		border-radius: 5px;
		padding: 1px 5px;  
		background-color: #95a5a6;
		margin-right: 2px;
		color: white;
	}
	.selected-remove:hover {
		cursor: pointer;
		border-radius: 100%;
		background-color: #e74c3c;
	}
	.vmini-select-btn {
		display: inline-block;
		width: 16px;
		border-top: 8px solid;
		border-left: 8px solid;
		border-right: 8px solid;
		border-color: #95a5a6 transparent transparent transparent;
		border-radius: 5px;
		float: right;
		margin-top: 7px;
		outline: none;
	}
	.vmini-select-btn:hover {
		cursor: pointer;
		border-top-color: #2980b9;
	}
	.vmini-select-list {
		border: 1px solid #eaeaea;
		border-radius: 5px;
		margin-top: 1px;
		z-index: 10;
		position: sticky;
	}
	.vmini-select-list:last-child {
		border-bottom: none;
	}
	.vmini-select-list>div {
		height: 40px;
		line-height: 40px;
		padding: 0 8px;
		border-bottom: 1px solid #eaeaea;
		background-color: white;
	}
	.vmini-select-list>div:hover {
		background-color: #ecf0f1;
		cursor: pointer;
	}
</style>

