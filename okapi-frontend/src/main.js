import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Unicon from 'vue-unicons';
import {
  uniSearch,
  uniFacebookF,
  uniInstagram,
  uniTwitter,
  uniGlobe,
  uniUser,
  uniTimes,
  uniThumbsUp,
  uniThumbsDown,
  uniUnlockAlt,
  uniLockAlt,
  uniSync,
  uniAngleRight,
  uniAngleDown,
  uniAngleDoubleLeft,
  uniAngleDoubleRight,
  uniQuestionCircle,
  uniTrashAlt,
  uniUserCircle,
  uniHeart,
  uniBookmark,
  uniTagAlt,
  uniStar
} from 'vue-unicons/src/icons';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Use BooststrapVue
Vue.use(BootstrapVue);

Unicon.add([
  uniSearch,
  uniFacebookF,
  uniInstagram,
  uniTwitter,
  uniGlobe,
  uniUser,
  uniTimes,
  uniThumbsUp,
  uniThumbsDown,
  uniUnlockAlt,
  uniLockAlt,
  uniSync,
  uniAngleRight,
  uniAngleDown,
  uniAngleDoubleLeft,
  uniAngleDoubleRight,
  uniQuestionCircle,
  uniTrashAlt,
  uniUserCircle,
  uniHeart,
  uniBookmark,
  uniTagAlt,
  uniUser,
  uniTimes,
  uniStar
]);
Vue.use(Unicon);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
