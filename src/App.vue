<template>
  <div id="app">
    <app-todos-component></app-todos-component>
  </div>
  
</template>

<script>


import { appMethod } from './mixins';
import { refBus } from './ref-bus';

import AppTodosComponent from './components/todos.vue';


export default {
  name: 'app',
  components: {
    AppTodosComponent
  }
};
</script>

<style lang="scss">

   
</style>
