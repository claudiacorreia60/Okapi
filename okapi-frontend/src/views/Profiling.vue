<template>
  <b-container fluid>
    <b-row align-v="center" align-h="center" class="margin-side">
        <div class="title mb-5 mt-3">TELL US WHAT YOU LIKE!</div>
        <b-card-group>
        <b-col md="2" sm="6" align-self="center" class="mt-5" v-for="item in items"
        v-bind:key="item.item_id">
          <b-card
            v-if="items_like[item.item_id]"
            :img-src="item.photo"
            img-top
            :alt="item.reference"
            class="text-center mb-2 like"
            :id="item.item_id"
            @click="dislike(item.item_id)"
          >
            <div class="middle">
              <unicon name="heart" class="like-icon" fill="white"></unicon>
              LIKED
            </div>
          </b-card>
          <b-card
            v-else
            class="text-center mb-2 dislike"
            :id="item.item_id"
            @click="like(item.item_id)"
          >
            <b-card-img :src="item.photo" :alt="item.reference"></b-card-img>
            <div class="middle">
              <unicon name="heart" class="like-icon" fill="white"></unicon>
              LIKE
            </div>
          </b-card>
        </b-col>
        </b-card-group>
    </b-row>
    <b-row align-v="center" align-h="center" class="mt-5">
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
      items_like: {},
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
    .then(r => { this.items = r.slice(0,6);
                  this.$forceUpdate();
                  this.fetch2();})
    .catch(err => console.log(err));
  },
  methods: {
    like(id) {
      this.items_like[id] = true;
      console.log('like');
    },
    dislike(id) {
      this.items_like[id] = false;
      console.log('dislike');
    },
    fetch2() {
      fetch("http://localhost:3333/catalog/man?color[]=Amarelo", {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => { this.items = this.items.concat(r.slice(0,6));
                   this.$forceUpdate();
                   this.fetch3();})
      .catch(err => console.log(err));
    },
    fetch3() {
      fetch("http://localhost:3333/catalog/man?color[]=Vermelho&type[]=calças e calçoes", {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => { this.items = this.items.concat(r.slice(0,6));
                   this.$forceUpdate();
                   this.fetch4();})
      .catch(err => console.log(err));
    },
    fetch4() {
      fetch("http://localhost:3333/catalog/man?color[]=Castanho&type[]=calçado", {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => { this.items = this.items.concat(r.slice(0,6));
                    this.$forceUpdate();
                    this.items_like = this.items.reduce((acc, cur) => {
                    acc[cur.item_id] = false;
                    return acc;
                  }, {});})
      .catch(err => console.log(err));
    }
  },
};
</script>

<style lang="scss">
.like-icon {
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 20px;
}

.card:hover img {
  filter: brightness(0.70);
}

.card:hover .middle {
  opacity: 1;
}

.like img {
  filter: brightness(0.70);
}

.like .middle {
  opacity: 1;
}

.card {
  border: none;
  cursor: pointer;
}

.title {
  color: #2B1E02;
  font-size: 20px;
}

.margin-side {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
}

.signin-button {
  margin-top: 20px;
  margin-bottom: 60px;
  background-color: #2B1E02;
  width: 170px;
}

.signin-button:hover {
  background-color: #6D3C1D;
}
</style>
