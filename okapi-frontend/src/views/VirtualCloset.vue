<template>
  <b-container fluid>
    <b-row></b-row>
    <b-row class="m-5"></b-row>
    <b-row align-v="start" align-h="center" class="m-5">
        <b-col cols="2" id="filters">
          <FilterCatalog title="VIRTUAL CLOSET"/>
        </b-col>
        <b-col cols="10">
          <ClosetContent :clothes="man_clothes"/> 
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import ClosetContent from '@/components/ClosetContent.vue';
import FilterCatalog from '@/components/FilterCatalog.vue';

export default {
  name: 'catalog',
  components: {
    ClosetContent,
    FilterCatalog,
  },
  data() {
      return {
        user_id: null,
        man_clothes: [],
      }
  },
  mounted() {
    this.user_id = JSON.parse(localStorage.getItem('user')).user_id;

    fetch("http://localhost:3333/closet/" + this.user_id, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    })
    .then(r => r.json())
    .then(r => {this.man_clothes = r;
                this.$forceUpdate();
               })
    .catch(err => console.log(err));
  },
};
</script>

<style lang="scss">
</style>
