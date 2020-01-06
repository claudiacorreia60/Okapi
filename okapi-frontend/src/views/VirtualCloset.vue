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
  props: ['gender', 'type', 'color'],
  components: {
    ClosetContent,
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
    fetch("http://localhost:3333/catalog/man?color=verde", {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    })
    .then(r => r.json())
    .then(r => {this.man_clothes.push(r[1]);
                this.man_clothes.push(r[2]);
                this.man_clothes.push(r[9]);
                this.man_clothes.push(r[17]);
                this.man_clothes.push(r[19]);
                this.man_clothes.push(r[4]);})
    .catch(err => console.log(err));

    fetch("http://localhost:3333/catalog/man?type=calçado", {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    })
    .then(r => r.json())
    .then(r => {this.man_clothes.push(r[1]);
                this.man_clothes.push(r[5]);})
    .catch(err => console.log(err));
  },
};
</script>

<style lang="scss">
</style>
