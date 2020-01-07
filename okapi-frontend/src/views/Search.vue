<template>
  <div class="home">
    <SearchPanel/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchPanel from '@/components/SearchPanel.vue';

export default {
  name: 'Search',
  components: {
    SearchPanel,
  },
};
</script>

<style lang="scss">
</style>
