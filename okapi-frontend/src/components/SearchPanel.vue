<template>
  <b-container>
    <b-row class="mt-5">
      <b-col>
        <b-form-input
          v-model="search"
          placeholder="Search for inspiration"
          class="search-bar"
          @keydown.enter.native="searchCatalog()"
          >
        </b-form-input>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'SearchPanel',
  data() {
    return {
      search: '',
    };
  },
  methods: {
      searchCatalog() {
          const colors = ['azul', 'castanho', 'amarelo', 'vermelho', 'verde', 'bordeax',
          'rosa', 'beje', 'branco', 'cinza', 'telha', 'camel', 'preto', 'salmão',
          'laranja', 'pessego', 'kaki'];
          const types = ['casacos', 'fatos', 'blazers', 'calças e calçoes', 'vestidos',
          'saias', 'camisolas', 'sweats', 'camisas', 'Túnicas e tops', 'calçado'];

          const words = this.search.split(" ");
          const gender = this.getGender(words);
          this.search = words.filter(x => x != "man" || x != "woman").concat()[0];
          console.log(this.search);

          if (colors.indexOf(this.search.toLowerCase()) >= 0){
            this.$router.push("catalog/" + gender + "?color="+this.search);
          } else if (types.indexOf(this.search.toLowerCase()) >= 0){
            this.$router.push("catalog/" + gender + "?type="+this.search);
          } else {
            this.$router.push("catalog/man");
          }
      },
      getGender(words) {
          let r = "man";
          if (words.filter(x => x == "woman").length > 0) r = "woman";
          return r;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-bar {
  background: url('../assets/search.svg') no-repeat scroll 10px 11px;
  background-size: 30px;
  padding-left:60px;
  border: none;
  font-size: 30px;
  border-bottom: solid 2px #2B1E02;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0rem;
}
.search-bar:focus {
  box-shadow: none;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #999999;
  font-size: 30px;
}
</style>
