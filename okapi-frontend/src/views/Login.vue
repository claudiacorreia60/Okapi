<template>
  <div>
    <UserNavBar v-if="loggedIn"/>
    <GeneralNavBar v-else/>
    <LoginForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import GeneralNavBar from '@/components/GeneralNavBar.vue';
import UserNavBar from '@/components/UserNavBar.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'login',
  components: {
    LoginForm,
    GeneralNavBar,
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

<!--
body {
  background-image: url('../assets/background.png');
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
-->
