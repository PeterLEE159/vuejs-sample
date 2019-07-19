<template>
  <app-todos-component></app-todos-component>
  
</template>

<script>
import Vue from 'vue';
import UUID from 'vue-uuid';
import VueLodash from 'vue-lodash'

import AppTodosComponent from './components/todos.vue';


Vue.use(VueLodash, { name: 'lodash' });
Vue.use(UUID);

export default {
  name: 'app',
  components: {
    AppTodosComponent
  }
};
</script>

<style lang="scss">
  * {
    outline-offset: 0;
  }

  ul {
    list-style-type: none;
  }
   


   
</style>
