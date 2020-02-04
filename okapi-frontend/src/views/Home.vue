<template>
  <div class="home">
    <HomeContent/>
    <PageFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import PageFooter from '@/components/PageFooter.vue';
import HomeContent from '@/components/HomeContent.vue';

export default {
  name: 'Home',
  components: {
    PageFooter,
    HomeContent,
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    scrollToTop() {
        window.scrollTo(0,0);
    },
  },
  mounted() {
    this.scrollToTop();
  }
};
</script>

<style lang="scss">
</style>