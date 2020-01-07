<template>
  <div class="home">
    <ChangeLanguage/>
  </div>
</template>

<script>
// @ is an alias to /src
import ChangeLanguage from '@/components/ChangeLanguage.vue';

export default {
  name: 'Language',
  components: {
    ChangeLanguage,
  },
};
</script>

<style lang="scss">
</style>
