import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import ViewResource from 'vue-resource'
import VueLodash from 'vue-lodash'
import UUID from 'vue-uuid';
import Vuex from 'vuex';
import { routes } from './router';
import { store } from './stores/store';

Vue.use(ViewResource);
Vue.use(VueLodash, { name: 'lodash' });
Vue.use(UUID);




Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {

    if(to.hash) return { selector: to.hash };
    if(savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  }
});

Vue.http.options.root = 'https://vue-test-896f7.firebaseio.com/';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
