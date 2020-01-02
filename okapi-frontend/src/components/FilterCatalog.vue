<template>
  <div>
    <b-form-group label="Sort by">
      <b-form-radio-group
        v-model="sort"
        :options="sort_options"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Color">
      <b-form-radio-group
        v-model="color"
        :options="color_options"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Product type">
      <b-form-radio-group
        v-model="product_type"
        :options="product_type_options"
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'FilterCatalog',
  data() {
    return {
      sex: 'male',
      sort_by: 'price_low',
      product_type: 'clothing_all',
      color: 'any',
      sort_options: [
        { text: 'Price low to high', value: 'price_low' },
        { text: 'Price high to low', value: 'price_high' },
      ],
      color_options: [
        { text: 'Any', value: 'any' },
        { text: 'Black', value: 'black' },
        { text: 'Grey', value: 'grey' },
        { text: 'White', value: 'white' },
        { text: 'Brown', value: 'brown' },
        { text: 'Beige', value: 'beige' },
        { text: 'Green', value: 'green' },
        { text: 'Blue', value: 'blue' },
        { text: 'Red', value: 'red' },
        { text: 'Pink', value: 'pink' },
        { text: 'Yellow', value: 'yellow' },
        { text: 'Orange', value: 'orange' },
        { text: 'Purple', value: 'purple' },
        { text: 'Multicolor', value: 'multicolor' },
      ],
      clothing_type_options: [
        { text: 'All', value: 'clothing_all' },
        { text: 'Jackets & Coats', value: 'jackets_coats' },
        { text: 'Sweatshirts', value: 'sweatshirts' },
        { text: 'Dresses', value: 'dresses' },
        { text: 'Tops', value: 'tops' },
        { text: 'Trousers', value: 'trousers' },
        { text: 'Polo Shirts', value: 'polo_shirts' },
        { text: 'Jeans', value: 'jeans' },
        { text: 'Shirts', value: 'shirts' },
        { text: 'T-Shirts', value: 't-shirts' },
        { text: 'Shorts', value: 'shorts' },
        { text: 'Skirts', value: 'skirts' },
        { text: 'Suits', value: 'suits' },
        { text: 'Swimwear', value: 'suits' },
        { text: 'Sport Clothing', value: 'sport_clothing' },
      ],
      shoes_type_options: [
        { text: 'All', value: 'shoes_all' },
        { text: 'Trainers', value: 'trainers' },
        { text: 'Boots', value: 'Boots' },
        { text: 'Sandals', value: 'dresses' },
        { text: 'Heels', value: 'heels' },
        { text: 'Flip flops', value: 'flip_flops' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
