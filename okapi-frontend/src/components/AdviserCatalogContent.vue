<template>
  <b-container fluid>
    <b-row>
      <b-card-group>
        <b-col md="6" sm="12" align-self="center" v-for="item in clothes" v-bind:key="item.item_id">
          <a @click="selectItem(item)">
            <b-card
                :img-src="item.photo"
                img-top
                :alt="item.reference"
                class="mb-2"
                :id="item.item_id"
            >
              <div>
                <div class="description">{{item.brand.name.toUpperCase()}} - {{item.type.body_part.toUpperCase()}}</div>
              </div>
            </b-card>
          </a>
        </b-col>
      </b-card-group>
    </b-row>
    <b-row align-h="center" class="mt-5">
      <b-col cols="4" class="back">
        <div class="back-button" v-if="page != 1">
          <b-button @click="previousPage()">
            <unicon name="angle-double-left" class="back-icon" fill="#2B1E02"></unicon>
            Back
          </b-button>
        </div>
      </b-col>
      <b-col class="page" cols="4">
        Page {{ page }}
      </b-col>
      <b-col cols="4" class="next">
        <div class="back-button" v-if="is_next">
          <b-button @click="nextPage()">
            Next
            <unicon name="angle-double-right" class="back-icon" fill="#2B1E02"></unicon>
          </b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'adviserCatalogContent',
  props: [
    'gender',
    'body_part',
    'type',
  ],
  components: {
  },
  data() {
    return {
      hover: false,
      id_item: 0,
      page: 1,
      clothes: [],
      old_clothes: [],
      is_next: true,
      sort: '',
      types: [
      ],
      brands: [
      ],
      colors: [
      ],
      query: 'type[]=',
    };
  },
  mounted() {
    this.types = [this.type];
    this.query = this.query;

    this.$root.$on('filter-price', a => {
        if (a == "price_low") {
            this.sort = 'asc';
            this.fetchClothes();
        }
        if (a == "price_high") {
            this.sort = 'desc';
            this.fetchClothes();
        }
        });
    this.$root.$on('filter-type', a => {
        this.types = a;
        this.fetchClothes();
        });
    this.$root.$on('filter-brand', a => {
        this.brands = a;
        this.filter();
        });
    this.$root.$on('filter-color', a => {
        this.colors = a;
        this.fetchClothes();
        });

    this.fetchClothes();

  },
  methods: {
    fetchClothes() {
        let query = "";

        query = this.toString(this.query, this.page);

        fetch("http://localhost:3333/catalog/"+this.gender+query, {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
        })
        .then(r => r.json())
        .then(r => {this.clothes = r;
                    this.old_clothes = r;
                    this.filter();
                    this.checkNext();
                    this.$forceUpdate();
                    this.scrollToTop();
                    })
        .catch(err => console.log(err));
    },
    filter() {
        this.clothes = this.old_clothes.filter(x => {
            if (this.brands.length > 0) {
                return this.brands.includes(x.brand.name);
            } else {
                return true;
            }
        });
    },
    scrollToTop() {
        window.scrollTo(0,0);
    },
    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    },
    toString(obj, n_page) {
        let r = "?page=" + n_page + '&perpage=6&';
        if (this.sort.length > 0) r = r + "sort=" + this.sort + "&";
        
        r = r + obj + '&'; 
        if (this.isEmpty(this.$route.query)) {
          for(var i in this.types)
              r = r + "type[]=" + this.types[i] + "&"
          for(var i in this.colors)
              r = r + "color[]=" + this.colors[i] + "&"
        }

        return r;
    },
    checkNext() {
      let query = "";
      query = this.toString(this.query, (this.page + 1));
      fetch("http://localhost:3333/catalog/"+this.gender+query, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => {if(r.length == 0){
                    this.is_next = false;
                  }
                  else {
                    this.is_next = true;
                  }
                  this.$forceUpdate();})
      .catch(err => console.log(err));
    },
    nextPage() {
      this.page = this.page + 1;

      this.fetchClothes();
    },
    previousPage() {
      this.page = this.page - 1;

      let query = "";
      query = this.toString(this.query, this.page);

      fetch("http://localhost:3333/catalog/"+this.gender+query, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => {this.clothes = r;
                  this.old_clothes = r;
                  this.filter();
                  this.checkNext();
                  this.$forceUpdate();
                  this.scrollToTop();})
      .catch(err => console.log(err));
    },
    selectItem(item){
      this.$root.$emit('adviser-content-selected', { item: item, body_part: this.body_part });
    }
  },
};
</script>

<style scoped lang="scss">
.back {
  text-align: start;
}

.next {
  text-align: end;
}

.page {
  color: #2B1E02;
  text-align: center;
}

.back-icon {
  width: 35px;
  height: 35px;
}

.back-button .btn {
  border: none;
  background-color: white;
  color: #2B1E02;
}

.back-button .btn:hover {
  color: #6D3C1D;
}

.back-button .btn-secondary.disabled, .btn-secondary:disabled {
  color: #fff;
  background-color: white;
  border: none;
}

.back-button .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: white;
  border: none;
}

.back-button .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: none;
}

.back-button .btn-secondary:focus, .btn-secondary.focus {
  background-color: white;
  border: none;
  outline: none;
  box-shadow: none;
}

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
