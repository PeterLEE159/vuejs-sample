<template>
  <div id="app">
    <router-view></router-view>

    <!-- <app-todos-component></app-todos-component> -->
    <!-- <app-page-component></app-page-component>
    <div class="p-loading" ref="pLoading">
      <div></div>
      <img src="./assets/imgs/implant.gif">
    </div>
    <button @click="pLoading(true)">qqq</button>
    -->
  </div>
  
</template>

<script>


import { appMethod } from './mixins';
import { refBus } from './ref-bus';

// import AppTodosComponent from './components/todos.vue';
// import AppPageComponent from './components/page.vue';




// export const pLoadingBus = new Vue({
//   methods: {
//     isLoading(isShow = false) {
//       AppComponent.isShow = isShow;
//     }
//   }
// })


export default {
  name: 'app',
  mixins: [ appMethod ],
  created() {
    
    console.log(this.$router);
    console.log(this.$route);
  },
  mounted() {
    
  },
  data() {
    return {

    }
  },
  components: {
    // AppTodosComponent,
    // AppPageComponent
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
   
    .p-loading {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999999;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      width: 100%;
      height: 100%;
    }
    img {
      width: 84px;
      height: 84px;
      z-index: 1;
    }
  }

   
</style>
