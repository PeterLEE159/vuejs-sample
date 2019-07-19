<template>
  <app-page-component></app-page-component>
  
</template>

<script>
import Vue from 'vue';
import UUID from 'vue-uuid';
import VueLodash from 'vue-lodash'

import AppPageComponent from './components/page.vue';


Vue.use(VueLodash, { name: 'lodash' });
Vue.use(UUID);

export default {
  name: 'app',
  components: {
    AppPageComponent
  }
};
</script>

<style lang="scss">
   .spinner {
     font-size: 16px;
   }
   
</style>
