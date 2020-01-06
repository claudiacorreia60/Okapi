<template>
  <b-container>
    <b-row align-h="center" align-v="center" class="margin">
      <b-form-input
        v-model="search"
        placeholder="Search for inspiration"
        class="search-bar"
        @keydown.enter.native="searchCatalog()"
        >
      </b-form-input>
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
          'saias', 'camisolas', 'sweats', 'camisas', 'túnicas e tops', 'calçado'];

          const words = this.search.split(" ");
          const gender = this.getGender(words);
          this.search = words.filter(x => x != "homem" && x != "mulher").join(' ');
          if (colors.indexOf(this.search.toLowerCase()) >= 0){
            this.$router.push("catalog/" + gender + "?perpage=18&color="+this.search);
          } else if (types.indexOf(this.search.toLowerCase()) >= 0){
            this.$router.push("catalog/" + gender + "?perpage=18&type="+this.search);
          } else {
            this.$router.push("catalog/man?perpage=18");
          }
      },
      getGender(words) {
          let r = "man";
          if (words.filter(x => x == "mulher").length > 0) r = "woman";
          return r;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.margin {
  margin-top: 20%;
}

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
  color: #cecece;
  font-size: 30px;
}
</style>
