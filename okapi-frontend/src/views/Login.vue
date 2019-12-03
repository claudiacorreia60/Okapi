<template>
  <div>
    <UserNavBar v-if="loggedIn"/>
    <HomeNavBar v-else/>
    <LoginForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNavBar from '@/components/HomeNavBar.vue';
import UserNavBar from '@/components/UserNavBar.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'login',
  components: {
    LoginForm,
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
</style>
