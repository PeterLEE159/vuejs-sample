import Vue from 'vue';
import Vuex, { mapGetters } from 'vuex';

Vue.use(Vuex);

const vuex = new Vuex.Store({
  state: {
    todos: [],
    users: []
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getUsers(state) {
      return state.users;
    }
  },
  mutations: {

  },
  actions: {

  }
});

export default vuex;

const getters = [];
for(let key in vuex.getters) getters.push(key);

export const mapGet = { ...mapGetters(getters) };
