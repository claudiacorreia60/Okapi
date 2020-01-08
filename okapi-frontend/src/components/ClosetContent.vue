<template>
  <b-container fluid>
    <b-card-group>
      <b-col md="4" sm="6" align-self="center" v-for="item in old_clothes" v-bind:key="item.item_id">
        <a @click="seeDetails(item)">
          <b-card
              :img-src="item.photo"
              img-top
              :alt="item.reference"
              class="mb-2"
              :id="item.item_id"
              @mouseover="hover = true; id_item = item.item_id"
              @mouseleave="hover = false"
          >
            <div class="details" v-if="hover & id_item === item.item_id">SEE DETAILS</div>
            <div v-else>
              <div class="description">{{item.brand.name.toUpperCase()}} - {{item.type.body_part.toUpperCase()}}</div>
              <div v-if="item.price > 0" class="price">{{item.price}}€</div>
              <div v-else class="price">Price not defined</div>
            </div>
          </b-card>
        </a>
      </b-col>
    </b-card-group>
  </b-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'closetContent',
  props: ['clothes'],
  components: {
  },
  data() {
    return {
      old_clothes: this.clothes,
      hover: false,
      id_item: 0,
      sort: '',
      types: [
        'Casacos',
        'Fatos',
        'Blazers',
        'Calças e calçoes',
        'Vestidos',
        'Saias',
        'Camisolas',
        'Sweats',
        'Camisas',
        'Túnicas e tops',
        'Calçado',
      ],
      brands: [
        'Ana Sousa',
        'Decenio',
        'Lion of Porches',
        'Minga London',
      ],
      colors: [
        'Azul',
        'Castanho',
        'Amarelo',
        'Vermelho',
        'Verde',
        'Bordeaux',
        'Rosa',
        'Beje',
        'Branco',
        'Cinza',
        'Telha',
        'Camel',
        'Preto',
        'Salmão',
        'Laranja',
        'Pessego',
        'Kaki',
      ],
    };
  },
  mounted() {
    this.old_clothes = this.clothes;
    setTimeout(() => { 
        this.old_clothes = this.clothes; 
        this.$forceUpdate();
    }, 500);

    this.$root.$on('filter-price', a => {
        if (a == "price_low") {
            this.sort = 'asc';
            this.filter();
        }
        if (a == "price_high") {
            this.sort = 'desc';
            this.filter();
        }
    });
    this.$root.$on('filter-type', a => {
        this.types = a;
        this.filter();
        });
    this.$root.$on('filter-brand', a => {
        this.brands = a;
        this.filter();
        });
    this.$root.$on('filter-color', a => {
        this.colors = a;
        this.filter();
        });
  },
  computed: {
    productsOrdered: function() {
      
    },
  },
  methods: {
    filter() {
        this.old_clothes = this.clothes.filter(x => {
            let a = true;
            let b = true;
            let c = true;
            if (this.brands.length > 0) {
                a = this.brands.includes(x.brand.name);
            } else if (this.types.length > 0) {
                b = this.types.includes(x.type.name);
            } else if (this.colors.length > 0) {
                c = this.colors.includes(x.color.name);
            }         
            return a && b && c;
        });

        if (this.sort == 'asc') {
            this.old_clothes = this.clothes.sort((a, b) => {
                    return a.price - b.price
            });
        } else if (this.sort == 'desc') {
            this.old_clothes = this.clothes.sort((a, b) => {
                    return b.price - a.price
            });
        } else {
        }

        this.$forceUpdate();
    },
    seeDetails(item){
      this.$router.push({name: "details", params: {item: item}})
    },
  }
};
</script>

<style scoped lang="scss">
.card {
  border: none;
  cursor: pointer;
}

a {
  color: #2B1E02;
  text-decoration: none;
}

.price {
  color: #2B1E02;
  margin-left: 0;
}

.details {
  color: #999999;
  margin-top: 10px;
  text-align: center;
  margin-bottom: 14px;
}

a:hover img {
  opacity: 0.5;
}

.description {
  margin-left: 0;
}
</style>
