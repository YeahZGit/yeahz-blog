import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export function createStore() {
	return new Vuex.Store({
		state: {
			blogs: {},
			currentPage: 1,
			pageSize: 4,
			currentBlogs: [],
			blogList:[],
			about: {},
			tags: [],
			archivesList: [],
			comments: []
		},
		actions,
		mutations,
		getters
	})
}