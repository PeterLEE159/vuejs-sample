<template>
  <app-todos-component></app-todos-component>
  
</template>

<script>



import AppTodosComponent from './components/todos.vue';




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
