import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Unicon from 'vue-unicons';
import {
  uniSearch,
  uniFacebook,
  uniInstagram,
  uniTwitter,
} from 'vue-unicons/src/icons';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Use BooststrapVue
Vue.use(BootstrapVue);

Unicon.add([uniSearch, uniFacebook, uniInstagram, uniTwitter]);
Vue.use(Unicon);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
