import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Unicon from "vue-unicons";
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
  uniTagAlt
} from "vue-unicons/src/icons";

import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

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
  uniTimes
]);
Vue.use(Unicon);

new Vue({
  render: h => h(App)
}).$mount("#app");
