<template>

  <div id="app-page">
    <div style="background: white; border-bottom: 1px solid black">header</div>
    <router-view></router-view>
  </div>


</template>

<script>  
import { mapGetters } from 'vuex';
import { mapGet } from '@/store';

export default {
  
  
  name: 'app-page',
  
  data() {
    return {

    }
  },
  mounted() {
    
  },
  computed: {
    ...mapGet
  }
}
</script>


<style scoped lang="scss">
  
</style>
