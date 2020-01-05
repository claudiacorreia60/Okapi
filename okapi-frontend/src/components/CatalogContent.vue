<template>
  <b-container fluid>
    <b-card-group>
      <b-col md="4" sm="6" align-self="center" v-for="item in items" v-bind:key="item.item_id">
        <a :href="item.url">
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
              <div class="description">{{item.brand.name.toUpperCase()}} - {{item.type.body_part}}</div>
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
const cloths = require('../assets/cloths.json'); // with path

export default {
  name: 'catalogContent',
  components: {
  },
  data() {
    return {
      hover: false,
      id_item: 0,
      items: [],
    };
  },
  mounted() {
    this.items = cloths.cloths.slice(0, 9);
  },
  computed: {
    productsOrdered: function() {
      
    },
  }
};
</script>

<style scoped lang="scss">
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