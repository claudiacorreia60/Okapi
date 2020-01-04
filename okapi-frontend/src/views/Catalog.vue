<template>
  <b-container fluid>
    <b-row></b-row>
    <b-row class="m-5"></b-row>
    <b-row align-v="start" align-h="center" class="m-5">
        <b-col cols="2" id="filters">
          <FilterCatalog/>
        </b-col>
        <b-col cols="10">
          <CatalogContent :clothes="man_clothes"/> 
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
        man_clothes: [],
      }
  },
  mounted() {
    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    function toString(obj) {
        let r = "?"
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
               r = r + key + "=" + obj[key] + "&" 
        }
        return r;
    }

    let query = "";
    if (!isEmpty(this.$route.query)) query = toString(this.$route.query);
    fetch("http://localhost:3333/catalog/"+this.$route.params.gender+query, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    })
    .then(r => r.json())
    .then(r => this.man_clothes = r)
    .catch(err => console.log(err));
  },
};
</script>

<style lang="scss">
</style>
