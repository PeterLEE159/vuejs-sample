import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRx from 'vue-rx';
import axios from 'axios';
import UUID from 'vue-uuid';
import VueLodash from 'vue-lodash'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router';


Vue.use(VueRx);
Vue.use(VueAxios, axios);
Vue.use(VueLodash, { name: 'lodash' });
Vue.use(VueRouter);
Vue.use(UUID);

Vue.config.productionTip = false;



require('./http.conf');



new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
