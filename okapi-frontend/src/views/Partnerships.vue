<template>
  <div class="partnerships">
    <PartnershipsContent/>
    <PageFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import PartnershipsContent from '@/components/PartnershipsContent.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: 'Partnerships',
  components: {
    PartnershipsContent,
    PageFooter,
  },
};
</script>

<style lang="scss">
</style>
