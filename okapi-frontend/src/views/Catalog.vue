<template>
  <b-container fluid>
    <b-row></b-row>
    <b-row class="m-5"></b-row>
    <b-row align-v="start" align-h="center" class="m-5">
        <b-col cols="2" id="filters">
          <FilterCatalog :title="this.$route.params.gender.toUpperCase() + '\'S CATALOG'"/>
        </b-col>
        <b-col cols="10">
          <CatalogContent/> 
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import CatalogContent from '@/components/CatalogContent.vue';
import FilterCatalog from '@/components/FilterCatalog.vue';

export default {
  name: 'catalog',
  props: ['gender', 'type', 'color'],
  components: {
    CatalogContent,
    FilterCatalog,
  },
  data() {
      return {
      }
  },
  mounted() {
  },
};
</script>

<style lang="scss">
</style>
