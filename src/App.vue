<template>
  <div id="app">
    <router-view></router-view>
    <!-- <app-page-component></app-page-component> -->
  </div>
  
</template>

<script>


import { appMethod } from './mixins';


export default {
  name: 'app',
  methods: {

  },
  created() {
    this.$store.state.todos = [
      { content: 'sql', id: 1 },
      { content: 'ddl', id: 2 }
    ];
  }

};
</script>

<style lang="scss">
  .btn {
    margin: 0;
  }
   
</style>
