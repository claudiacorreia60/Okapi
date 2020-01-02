<template>
  <b-container>
        <b-tabs v-model="step" content-class="mt-3" justified>
          <b-tab active>
             <template v-slot:title>
               <h4>1. Add some filters</h4>
             </template>
               <h3>TYPE</h3>
               <p>
                 <span class="box"><b-button variant="outline-secondary">T-Shirt</b-button></span>
                 <span class="box"><b-button variant="outline-secondary">Trousers</b-button></span>
                 <span class="box"><b-button variant="outline-secondary">Coats</b-button></span>
               </p>

               <h3>OCCASION</h3>
               <p>
                 <span class="box"><b-button variant="outline-secondary">Meetings</b-button></span>
               </p>
               <b-button @click="step=1">Next</b-button>
          </b-tab>
          <b-tab id="tab2" lazy>
             <template v-slot:title>
               <h4>2. Add clothes from your closet</h4>
             </template>
             <b-row align-h="center" align-v="center">
                <b-col cols="3">
                    <h3>UPPER BODDY</h3>
                </b-col>
                <b-col cols="9">
                  <b-row align-h="center" align-v="center">
                    <b-col v-on:click="selectUpper(item.item_id, item)" v-for="item in closet_items_upper" v-bind:key="item.item_id">
                        <b-card
                            overlay
                            :img-src="item.photo"
                            img-top
                            :alt="item.reference"
                            class="mb-2"
                            :id="item.item_id"
                        >
                        </b-card>
                    </b-col>
                  </b-row>
                </b-col>
             </b-row>
             <b-row class="mt-5 mb-5" align-h="center" align-v="center">
                <b-col cols="3">
                    <h3>LOWER BODDY</h3>
                </b-col>
                <b-col cols="9">
                  <b-row align-h="center" align-v="center">
                    <b-col v-on:click="selectLower(item.item_id, item)" v-for="item in closet_items_lower" v-bind:key="item.item_id">
                        <b-card
                            overlay
                            :img-src="item.photo"
                            img-top
                            :alt="item.reference"
                            class="mb-2"
                            :id="item.item_id"
                        >
                        </b-card>
                    </b-col>
                  </b-row>
                </b-col>
             </b-row>
             <b-row align-h="center" align-v="center">
                <b-col cols="3">
                    <h3>SHOES</h3>
                </b-col>
                <b-col cols="9">
                  <b-row align-h="center" align-v="center">
                    <b-col v-on:click="selectShoes(item.item_id, item)" v-for="item in closet_items_shoes" v-bind:key="item.item_id">
                        <b-card
                            overlay
                            :img-src="item.photo"
                            img-top
                            :alt="item.reference"
                            class="mb-2"
                            :id="item.item_id"
                        >
                        </b-card>
                    </b-col>
                  </b-row>
                </b-col>
             </b-row>
             <b-button @click="step=0">Back</b-button>
             <b-button @click="step=2">Next</b-button>
          </b-tab>
          <b-tab id="tab3" lazy>
             <template v-slot:title>
               <h4>3. Your outfit</h4>
             </template>
                <b-card
                    overlay
                    :img-src="adviser_shoes[0].photo"
                    img-top
                    :alt="adviser_shoes[0].reference"
                    class="mb-2"
                    :id="adviser_shoes[0].item_id"
                >
                </b-card>
             <b-button @click="step=1">Back</b-button>
          </b-tab>
        </b-tab>

        </b-tabs>
  </b-container>
</template>

<script>
// @ is an alias to /src
const cloths = require('../assets/cloths.json'); // with path

export default {
  name: 'adviser',
  components: {
  },
  data() {
    return {
        step: 0,
        slide: 0,
        slidiging: null,
        adviser_upper: [],
        adviser_lower: [],
        adviser_shoes: [],
        adviser_coat: [],
        closet_items_upper: [],
        adviser_upper_element: null,
        closet_items_lower: [],
        adviser_lower_element: null,
        closet_items_shoes: [],
        adviser_shoes_element: null,
    };
  },
  mounted() {
    this.closet_items = cloths.cloths.slice(0, 8);
    this.closet_items_upper = cloths.cloths.filter(x => x.type.body_part == "Upper body").slice(0, 8);
    this.closet_items_lower = cloths.cloths.filter(x => x.type.body_part == "Lower body").slice(0, 8);
    this.closet_items_shoes = cloths.cloths.filter(x => x.type.body_part == "Shoes").slice(0, 8);

    this.adviser_upper = cloths.cloths.filter(x => x.type.body_part == "Upper body").slice(0, 1);
    this.adviser_lower = cloths.cloths.filter(x => x.type.body_part == "Lower body").slice(0, 1);
    this.adviser_shoes = cloths.cloths.filter(x => x.type.body_part == "Shoes").slice(0, 1);
  },
  methods: {
      selectUpper(id, item) {
            const el = document.getElementById(id);
          if (this.adviser_upper_element == null) {
            el.setAttribute("style", "border-style: solid; border-width: medium;");
            this.adviser_upper = [item];
            this.adviser_upper_element = el;
          } else {
            this.adviser_upper = [item];
            this.adviser_upper_element.setAttribute("style", "");
            this.adviser_upper_element = el;
            el.setAttribute("style", "border-style: solid; border-width: medium;");
          }
      },
      selectLower(id, item) {
            const el = document.getElementById(id);
          if (this.adviser_lower_element == null) {
            el.setAttribute("style", "border-style: solid; border-width: medium;");
            this.adviser_lower = [item];
            this.adviser_lower_element = el;
          } else {
            this.adviser_lower = [item];
            this.adviser_lower_element.setAttribute("style", "");
            this.adviser_lower_element = el;
            el.setAttribute("style", "border-style: solid; border-width: medium;");
          }
      },
      selectShoes(id, item) {
            const el = document.getElementById(id);
          if (this.adviser_shoes_element == null) {
            el.setAttribute("style", "border-style: solid; border-width: medium;");
            this.adviser_shoes = [item];
            this.adviser_shoes_element = el;
          } else {
            this.adviser_shoes = [item];
            this.adviser_shoes_element.setAttribute("style", "");
            this.adviser_shoes_element = el;
            el.setAttribute("style", "border-style: solid; border-width: medium;");
          }
      }
  },
};
</script>

<style lang="scss">

.carousel-control-next {
    color: #ababab
}

.box {
    margin: 20px;
    padding: 10px;
}

</style>
