<template>
  <div id="app">
    <app-page-component></app-page-component>
  </div>
  
</template>

<script>


import { appMethod } from './mixins';

import AppPageComponent from './components/Page.vue';


export default {
  name: 'app',
  components: {
    AppPageComponent
  }
};
</script>

<style lang="scss">
  .btn {
    margin: 0;
  }
   
</style>
