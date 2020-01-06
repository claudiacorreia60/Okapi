<template>
  <b-container fluid>
    <b-row>
      <b-card-group>
        <b-col md="4" sm="6" align-self="center" v-for="item in clothes" v-bind:key="item.item_id">
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
  name: 'catalogContent',
  components: {
  },
  data() {
    return {
      hover: false,
      id_item: 0,
      page: 1,
      clothes: [],
      is_next: true,
    };
  },
  mounted() {
    let query = "";
    if (!this.isEmpty(this.$route.query)) {
      query = this.toString(this.$route.query, this.page);
    } else {
      query = "?page=" + this.page + '&perpage=18';
    }
    fetch("http://localhost:3333/catalog/"+this.$route.params.gender+query, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    })
    .then(r => r.json())
    .then(r => {this.clothes = r;
                this.checkNext();
                this.$forceUpdate();
                this.scrollToTop();
                })
    .catch(err => console.log(err));
  },
  methods: {
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
        let r = "?page=" + n_page + '&perpage=18&';
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
               r = r + key + "=" + obj[key] + "&" 
        }
        return r;
    },
    checkNext() {
      let query = "";
      if (!this.isEmpty(this.$route.query)) {
        query = this.toString(this.$route.query, (this.page + 1));
      } else {
        query = "?page=" + (this.page + 1) + '&perpage=18';
      }
      fetch("http://localhost:3333/catalog/"+this.$route.params.gender+query, {
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

      let query = "";
      if (!this.isEmpty(this.$route.query)) {
        query = this.toString(this.$route.query, this.page);
      } else {
        query = "?page=" + this.page + '&perpage=18';
      }
      fetch("http://localhost:3333/catalog/"+this.$route.params.gender+query, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => {this.clothes = r;
                  this.checkNext();
                  this.$forceUpdate();
                  this.scrollToTop();})
      .catch(err => console.log(err));
    },
    previousPage() {
      this.page = this.page - 1;

      let query = "";
      if (!this.isEmpty(this.$route.query)) {
        query = this.toString(this.$route.query, this.page);
      } else {
        query = "?page=" + this.page + '&perpage=18';
      }
      fetch("http://localhost:3333/catalog/"+this.$route.params.gender+query, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
      })
      .then(r => r.json())
      .then(r => {this.clothes = r;
                  this.checkNext();
                  this.$forceUpdate();
                  this.scrollToTop();})
      .catch(err => console.log(err));
    },
    seeDetails(item){
      this.$router.push({name: "details", params: {item: item}})
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
