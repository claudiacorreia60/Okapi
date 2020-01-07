<template>
  <div id="app">
    <UserNavBar v-if="loggedIn"/>
    <HomeNavBar v-else/>
    <div class="margin"></div>
    <router-view/>
  </div>
</template>

<script>
import HomeNavBar from '@/components/HomeNavBar.vue';
import UserNavBar from '@/components/UserNavBar.vue';

export default {
  name: 'app',
  components: {
    HomeNavBar,
    UserNavBar,
  },
  data() {
    return {
      loggedIn: true,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Lato';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*:focus,
*:active {
    outline: 0 !important;
}

.margin {
  margin-bottom: 100px;
}
</style>
