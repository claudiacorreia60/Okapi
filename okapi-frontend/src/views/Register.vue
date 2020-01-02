<template>
  <div>
    <RegisterForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  name: 'register',
  components: {
    RegisterForm,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
</style>
