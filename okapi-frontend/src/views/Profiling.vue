<template>
  <b-container>
    <b-row align-v="center" align-h="center">
        <h2> Tell us what's your style </h2>
        <b-card-group>
        <b-col md="2" sm="6" align-self="center" v-for="item in items"
        v-bind:key="item.item_id">
                <b-card
                    :img-src="item.photo"
                    img-top
                    :alt="item.reference"
                    class="text-center mb-2"
                    :id="item.item_id"
                >
                    <a id="like-blue"
                    v-if="(!clickedLike[item.item_id])"
                    href=""
                    v-on:click="clickLikeBlue($event, item.item_id)"
                    >
                        <unicon name="thumbs-up" class="mr-2" fill="#999999" />
                    </a>
                    <a id="like-green" v-else>
                        <unicon name="thumbs-up" class="mr-2" fill="#6D3C1D" />
                    </a>
                    <a id="dislike-blue"
                    v-if="(!clickedDislike[item.item_id])"
                    href=""
                    v-on:click="clickDislikeBlue($event, item.item_id)"
                    >
                        <unicon name="thumbs-down" class="ml-2" fill="#999999" />
                    </a>
                    <a id="dislike-red" v-else>
                        <unicon name="thumbs-down" class="ml-2" fill="#6D3C1D" />
                    </a>
                </b-card>
        </b-col>
        </b-card-group>
    </b-row>
    <b-row align-v="center" align-h="center" class="mt-2">
        <b-button @click="$router.push('catalog/man')" class="signin-button" type="submit">Proceed</b-button>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
const cloths = require('../assets/cloths.json'); // with path

export default {
  name: 'profiling',
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

    fetch("http://localhost:3333/catalog/man", {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    })
    .then(r => r.json())
    .then(r => this.items = r.slice(0,6))
    .catch(err => console.log(err));

    fetch("http://localhost:3333/catalog/man?color=Amarelo", {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    })
    .then(r => r.json())
    .then(r => this.items = this.items.concat(r.slice(0,6)))
    .catch(err => console.log(err));

    fetch("http://localhost:3333/catalog/man?color=Vermelho&type=calças e calçoes", {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    })
    .then(r => r.json())
    .then(r => this.items = this.items.concat(r.slice(0,6)))
    .catch(err => console.log(err));

    fetch("http://localhost:3333/catalog/man?color=Castanho&type=calçado", {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    })
    .then(r => r.json())
    .then(r => this.items = this.items.concat(r.slice(0,6)))
    .catch(err => console.log(err));

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

.signin-button {
  margin-top: 20px;
  margin-bottom: 60px;
  background-color: #2B1E02;
  width: 100%;
}

.signin-button:hover {
  background-color: #6D3C1D;
}
</style>
