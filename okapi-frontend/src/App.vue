<template>
  <div id="app">
    <UserNavBar v-if="loggedIn"/>
    <HomeNavBar v-else/>
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
      loggedIn: false,
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
</style>
