<template>
  <div>
    <LoginForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'login',
  components: {
    LoginForm,
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
