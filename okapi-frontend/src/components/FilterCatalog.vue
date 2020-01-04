<template>
  <b-container fluid class="filter-tab">
    <div class="catalog-gender">
      {{gender.toUpperCase()}}'S CATALOG
    </div>
    <div class="title">SORT BY</div>
    <b-row align-v="start" align-h="start" class="filter-first">
      <b-form-group class="radio-margin">
        <b-form-radio-group
          v-model="sort_by"
          :options="sort_options"
        ></b-form-radio-group>
      </b-form-group>
    </b-row>

    <div class="catalog-gender"></div>
    <div class="title">FILTERS</div>
    <b-row align-v="center" align-h="start" class="filter">
      <a
        :class="type_visible ? null : 'collapsed'"
        :aria-expanded="type_visible ? 'true' : 'false'"
        aria-controls="collapse-type"
        @click="type_visible = !type_visible"
        class="m-1">
        <b-row>
          <span v-if="type_visible"><unicon name="angle-down" fill="#2B1E02"></unicon></span>
          <span v-else><unicon name="angle-right" fill="#2B1E02"></unicon></span>
          <span class="filter-type">PRODUCT</span>
        </b-row>
      </a>

      <b-col cols="12">
        <b-collapse
        id="collapse-type"
        v-model="type_visible">
          <b-form-group>
            <p>CLOTHING</p>
            <b-form-checkbox
              v-model="all_clothing"
              aria-describedby="clothing"
              aria-controls="clothing"
              @change="toggleAllClothing"
            >
              All clothing
            </b-form-checkbox>
            <b-form-checkbox-group
              id="clothing"
              v-model="clothing_types"
              :options="clothing_type_options"
              name="clothing"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>
        </b-collapse>
      </b-col>
    </b-row>

    <b-row align-v="center" align-h="start" class="filter">
      <a
        :class="brand_visible ? null : 'collapsed'"
        :aria-expanded="brand_visible ? 'true' : 'false'"
        aria-controls="collapse-brand"
        @click="brand_visible = !brand_visible"
        class="m-1">
        <b-row>
          <span v-if="brand_visible"><unicon name="angle-down" fill="#2B1E02"></unicon></span>
          <span v-else><unicon name="angle-right" fill="#2B1E02"></unicon></span>
          <span class="filter-type">BRAND</span>
        </b-row>
      </a>

      <b-col cols="12">
        <b-collapse
        id="collapse-brand"
        v-model="brand_visible">
          <b-form-group style="margin-top: 15px;">
            <b-form-checkbox
              v-model="all_brands"
              aria-describedby="brands"
              aria-controls="brands"
              @change="toggleAllBrands"
            >
              All brands
            </b-form-checkbox>
            <b-form-checkbox-group
              id="brands"
              v-model="brands"
              :options="brand_options"
              name="brands"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>
        </b-collapse>
      </b-col>
    </b-row>

    <b-row align-v="center" align-h="start" class="filter">
      <a
        :class="color_visible ? null : 'collapsed'"
        :aria-expanded="color_visible ? 'true' : 'false'"
        aria-controls="collapse-color"
        @click="color_visible = !color_visible"
        class="m-1">
        <b-row>
          <span v-if="color_visible"><unicon name="angle-down" fill="#2B1E02"></unicon></span>
          <span v-else><unicon name="angle-right" fill="#2B1E02"></unicon></span>
          <span class="filter-type">COLOR</span>
        </b-row>
      </a>

      <b-col cols="12">
        <b-collapse
          id="collapse-color"
          v-model="color_visible">
          <b-form-group style="margin-top: 15px;">
            <b-form-checkbox
                v-model="all_colors"
                aria-describedby="colors"
                aria-controls="colors"
                @change="toggleAllColors"
              >
                All colors
            </b-form-checkbox>
            <b-form-checkbox-group
              id="colors"
              v-model="colors"
              :options="color_options"
              name="colors"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>
        </b-collapse>
      </b-col>
    </b-row>

    <b-row align-v="center" align-h="start" class="filter">
      <a
        :class="price_visible ? null : 'collapsed'"
        :aria-expanded="price_visible ? 'true' : 'false'"
        aria-controls="collapse-price"
        @click="price_visible = !price_visible"
        class="m-1">
        <b-row>
          <span v-if="price_visible"><unicon name="angle-down" fill="#2B1E02"></unicon></span>
          <span v-else><unicon name="angle-right" fill="#2B1E02"></unicon></span>
          <span class="filter-type">PRICE</span>
        </b-row>
      </a>

      <b-col cols="12">
        <b-collapse
        id="collapse-price"
        v-model="price_visible">
          <vue-slider
            v-model="price"
            :min="0"
            :max="500"
            :interval="50"
            :order="false"
          ></vue-slider>
          <b-row>
            <b-col>{{ price[0] }}€</b-col>
            <b-col class="ml-auto mr-auto"></b-col>
            <b-col>{{ price[1] }}€</b-col>
          </b-row>
        </b-collapse>
      </b-col>
    </b-row>
    <div class="catalog-gender"></div>
  </b-container>
</template>


<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  name: 'FilterCatalog',
  components: {
    VueSlider
  },
  data() {
    return {
      sort_by: 'price_low',
      gender: 'men',
      price: [0, 200],
      sort_visible: false,
      type_visible: false,
      brand_visible: false,
      color_visible: false,
      price_visible: false,
      clothing_types: [
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
      all_clothing: true,
      brands: [
        'Ana Sousa',
        'Decenio',
        'Lion of porches',
        'Minga London',
      ],
      all_brands: true,
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
      all_colors: true,
      sort_options: [
        { text: 'Price low to high', value: 'price_low' },
        { text: 'Price high to low', value: 'price_high' },
      ],
      color_options: [
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
      brand_options: [
        'Ana Sousa',
        'Decenio',
        'Lion of porches',
        'Minga London',
      ],
      clothing_type_options: [
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
    };
  },
  methods: {
    toggleAllClothing(checked) {
      this.clothing_types = checked ? this.clothing_type_options.slice() : []
    },
    toggleAllShoes(checked) {
      this.shoes_types = checked ? this.shoes_type_options.slice() : []
    },
    toggleAllColors(checked) {
      this.colors = checked ? this.color_options.slice() : []
    },
    toggleAllBrands(checked) {
      this.brands = checked ? this.brand_options.slice() : []
    },
  },
  watch: {
    clothing_types(newVal, oldVal) {
      // Handle changes in individual flavour checkboxes
      if (newVal.length === 0) {
        this.all_clothing = false
      } else if (newVal.length === this.clothing_type_options.length) {
        this.all_clothing = true
      } else {
        this.all_clothing = false
      }
    },
    shoes_types(newVal, oldVal) {
      // Handle changes in individual flavour checkboxes
      if (newVal.length === 0) {
        this.all_shoes = false
      } else if (newVal.length === this.shoes_type_options.length) {
        this.all_shoes = true
      } else {
        this.all_shoes = false
      }
    },
    colors(newVal, oldVal) {
      // Handle changes in individual flavour checkboxes
      if (newVal.length === 0) {
        this.all_colors = false
      } else if (newVal.length === this.color_options.length) {
        this.all_colors = true
      } else {
        this.all_colors = false
      }
    },
    brands(newVal, oldVal) {
      // Handle changes in individual flavour checkboxes
      if (newVal.length === 0) {
        this.all_brands = false
      } else if (newVal.length === this.brand_options.length) {
        this.all_brands = true
      } else {
        this.all_brands = false
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.checkbox-margin {
  margin-left: 10px;
}

.radio-margin {
  margin-left: 15px;
}

.catalog-gender {
  color: #2B1E02;
  font-size: 18px;
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: solid 2px #6D3C1D;
}

.filter-type {
  padding-left: 20px;
}

.title {
  color: #2B1E02;
}

.shoes {
  margin-top: 20px;
}

.filter-first {
  margin-top: 30px;
  margin-bottom: 20px;
}

.filter {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 4px;
}

a {
  cursor: pointer;
}

a:hover {
  color: #6D3C1D;
}

p {
  margin-top: 15px;
  margin-bottom: 5px;
}

#collapse-price {
  margin-top: 20px;
}
</style>