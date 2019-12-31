<template>
  <b-container>
    <b-row align-v="center" align-h="center">
        <b-col cols="2" align-self="start" id="filters">
              <b-row align-v="center" align-h="center">
              <b-button v-b-toggle.collapse-type class="m-1">Type</b-button>

              <b-col cols="12">
              <b-collapse id="collapse-type">
                <b-card v-on:click="">T-shirts</b-card>
                <b-card v-on:click="">Pants</b-card>
              </b-collapse>
              </b-col>
              </b-row>

              <b-row align-v="center" align-h="center">
              <b-button v-b-toggle.collapse-brand class="m-1">Brand</b-button>

              <b-col cols="12">
              <b-collapse id="collapse-brand">
                <b-card>Ana Sousa</b-card>
                <b-card>Lion of porches</b-card>
                <b-card>Decenio</b-card>
                <b-card>Minga London</b-card>
              </b-collapse>
              </b-col>
              </b-row>

              <b-row align-v="center" align-h="center">
              <b-button v-b-toggle.collapse-price class="m-1">Price</b-button>

              <b-col cols="12">
              <b-collapse id="collapse-price">
                <b-card>Between 0€ and 50€</b-card>
                <b-card>Greater then 50€</b-card>
              </b-collapse>
              </b-col>
              </b-row>

        </b-col>
        <b-col>
        <b-card-group>
        <b-col md="3" sm="6" align-self="center" v-for="item in items" v-bind:key="item.item_id">
                <b-card
                    :img-src="item.photo"
                    img-top
                    :alt="item.reference"
                    class="mb-2"
                    :id="item.item_id"
                >
                {{item.brand.name}} - {{item.type.body_part}}
                <hr/>
                <a :href="item.url">{{item.price}}€</a>
                </b-card>
        </b-col>
        </b-card-group>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
const cloths = require('../assets/cloths.json'); // with path

export default {
  name: 'catalog',
  components: {
  },
  data() {
    return {
      items: [],
      clickedLike: {},
      clickedDislike: {},
    };
  },
  mounted() {
    this.items = cloths.cloths.slice(0, 8);

    this.clickedLike = cloths.cloths.reduce((acc, cur) => {
      acc[cur.item_id] = false;
      return acc;
    }, {});

    this.clickedDislike = cloths.cloths.reduce((acc, cur) => {
      acc[cur.item_id] = false;
      return acc;
    }, {});
  },
  methods: {
    clickLikeBlue(e, id) {
      e.preventDefault();
      this.clickedLike[id] = true;
      // Chamada a API

      this.clickedDislike[id] = false;
    },
    clickDislikeBlue(e, id) {
      e.preventDefault();
      this.clickedDislike[id] = true;
      // Chamada a API

      this.clickedLike[id] = false;
    },
  },
};
</script>

<style lang="scss">

#collapse-type {
    cursor: pointer;
}

</style>
