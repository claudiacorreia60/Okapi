<template>
  <b-container fluid>
    <b-row align-v="center" align-h="center" class="margin-side">
        <div class="title mb-5 mt-3">TELL US WHAT YOU LIKE!</div>
        <b-card-group>
        <div v-for="key in this.keys" :key="key">
          <div class="key">
            {{ key.toUpperCase() }}
          </div>
          <b-row>
          <b-col md="3" sm="6" align-self="center" class="mt-5" v-for="item in items_men[key]"
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
          </b-row>
        </div>
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
      items_men: {
        'casacos': [],
        'fatos': [],
        'blazers': [],
        'camisolas': [],
        'sweats': [],
        'camisas': [],
        'calças e calçoes': [],
        'calçado': [],
      },
      items_women: [],
      user_id: null,
      items_like: {},
      items: [],
      keys: [],
    };
  },
  mounted() {
    this.user_id = JSON.parse(localStorage.getItem('user')).user_id;

    this.fetch_men_1();
  },
  methods: {
    like(id) {
      fetch("http://localhost:3333/likes/" + this.user_id + "/" + id, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          method: "POST"
      })
      .then(r => r.json())
      .then(r => { 
              this.items_like[id] = true;
           })
      .catch(err => console.log(err));
    },
    dislike(id) {
      fetch("http://localhost:3333/likes/" + this.user_id + "/" + id, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          method: "DELETE"
      })
      .then(r => r.json())
      .then(r => { 
              this.items_like[id] = false;
           })
      .catch(err => console.log(err));
    },
    fetch_men_1() {
      fetch("http://localhost:3333/catalog/man?perpage=300&type[]=casacos", {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => {let n = 0;

                  while(n < 4){
                    let elem = r[Math.floor(Math.random() * r.length)];
                    if(!this.items_men['casacos'].includes(elem)){
                      this.items_men['casacos'].push(elem);
                      this.items.push(elem);
                      n = n + 1;
                    }                   
                  }
                  this.$forceUpdate();
                  this.fetch_men_2();})
      .catch(err => console.log(err));
    },
    fetch_men_2() {
      fetch("http://localhost:3333/catalog/man?perpage=300&type[]=fatos", {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => { let n = 0;

                    while(n < 4){
                      let elem = r[Math.floor(Math.random() * r.length)];
                      if(!this.items_men['fatos'].includes(elem)){
                        this.items_men['fatos'].push(elem);
                        this.items.push(elem);
                        n = n + 1;
                      }                   
                    }
                   this.$forceUpdate();
                   this.fetch_men_3();})
      .catch(err => console.log(err));
    },
    fetch_men_3() {
      fetch("http://localhost:3333/catalog/man?perpage=300&type[]=blazers", {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => { let n = 0;

                  while(n < 4){
                    let elem = r[Math.floor(Math.random() * r.length)];
                    if(!this.items_men['blazers'].includes(elem)){
                      this.items_men['blazers'].push(elem);
                      this.items.push(elem);
                      n = n + 1;
                    }                   
                  }
                   this.$forceUpdate();
                   this.fetch_men_4();})
      .catch(err => console.log(err));
    },
    fetch_men_4() {
      fetch("http://localhost:3333/catalog/man?perpage=300&type[]=camisolas", {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => { let n = 0;

                  while(n < 4){
                    let elem = r[Math.floor(Math.random() * r.length)];
                    if(!this.items_men['camisolas'].includes(elem)){
                      this.items_men['camisolas'].push(elem);
                      this.items.push(elem);
                      n = n + 1;
                    }                   
                  }
                   this.$forceUpdate();
                   this.fetch_men_5();})
      .catch(err => console.log(err));
    },
    fetch_men_5() {
      fetch("http://localhost:3333/catalog/man?perpage=300&type[]=sweats", {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => { let n = 0;

                  while(n < 4){
                    let elem = r[Math.floor(Math.random() * r.length)];
                    if(!this.items_men['sweats'].includes(elem)){
                      this.items_men['sweats'].push(elem);
                      this.items.push(elem);
                      n = n + 1;
                    }                   
                  }
                   this.$forceUpdate();
                   this.fetch_men_6();})
      .catch(err => console.log(err));
    },
    fetch_men_6() {
      fetch("http://localhost:3333/catalog/man?perpage=300&type[]=camisas", {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => { let n = 0;

                  while(n < 4){
                    let elem = r[Math.floor(Math.random() * r.length)];
                    if(!this.items_men['camisas'].includes(elem)){
                      this.items_men['camisas'].push(elem);
                      this.items.push(elem);
                      n = n + 1;
                    }                   
                  }
                   this.$forceUpdate();
                   this.fetch_men_7();})
      .catch(err => console.log(err));
    },
    fetch_men_7() {
      fetch("http://localhost:3333/catalog/man?perpage=300&type[]=calças e calçoes", {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => { let n = 0;

                  while(n < 4){
                    let elem = r[Math.floor(Math.random() * r.length)];
                    if(!this.items_men['calças e calçoes'].includes(elem)){
                      this.items_men['calças e calçoes'].push(elem);
                      this.items.push(elem);
                      n = n + 1;
                    }                   
                  }
                   this.$forceUpdate();
                   this.fetch_men_8();})
      .catch(err => console.log(err));
    },
    fetch_men_8() {
      fetch("http://localhost:3333/catalog/man?perpage=300&type[]=calçado", {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => { let n = 0;

                  while(n < 4){
                    let elem = r[Math.floor(Math.random() * r.length)];
                    if(!this.items_men['calçado'].includes(elem)){
                      this.items_men['calçado'].push(elem);
                      this.items.push(elem);
                      n = n + 1;
                    }
                  }
                   this.$forceUpdate();

                  this.keys = [
                    'camisas',
                    'sweats',
                    'camisolas',
                    'blazers',
                    'casacos',
                    'fatos',
                    'calças e calçoes',
                    'calçado',
                  ]

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
.key {
  color: #2B1E02;
  font-size: 18px;
  border-bottom: solid 2px #6D3C1D;
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
