<template>
  <b-container fluid>
    <b-tabs v-model="step" justified>
      <!--<b-tab active>
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
      <b-tab id="tab2" active>
        <template v-slot:title>
          ① 
          <span style="padding-left: 10px;">Add clothes from your closet</span>
        </template>
        <b-row align-h="center" align-v="center">
          <b-col cols="3">
              <h3>UPPER BODDY</h3>
          </b-col>
          <b-col cols="9">
            <b-row align-h="center" align-v="center">
              <b-col class="closet" v-on:click="selectUpper(item.item_id, item)" v-for="item in closet_items_upper" v-bind:key="item.item_id">
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
              <b-col class="closet" v-on:click="selectLower(item.item_id, item)" v-for="item in closet_items_lower" v-bind:key="item.item_id">
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
              <h3>FEET</h3>
          </b-col>
          <b-col cols="9">
            <b-row align-h="center" align-v="center">
              <b-col class="closet" v-on:click="selectShoes(item.item_id, item)" v-for="item in closet_items_shoes" v-bind:key="item.item_id">
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
      </b-tab> -->
      <b-tab id="tab2" active>
        <template v-slot:title>
          ① 
          <span style="padding-left: 10px;">Add clothes from your closet</span>
        </template>
          <b-row align-h="center" align-v="center" class="elements">
            <b-card
              class="adviser separator advise-card"
            >
              <div
                class="body-part mb-3"
                align-h="center">
                UPPER BODY
              </div>
              <div
                v-if="closet_items_upper=[]"
                class="mt-5 mb-5 question">
                ?
              </div>
              <b-card
                v-else
                :img-src="closet_items_upper[0].photo"
                img-top
                :alt="closet_items_upper[0].reference"
                class="mb-2 no-border">
                <div class="description">
                  {{closet_items_upper[0].brand.name.toUpperCase()}} - {{closet_items_upper[0].type.body_part}}
                </div>
              </b-card>
            <b-row align-h="center">
              <div class="advise-button">
                <b-button
                  v-if="closet_items_upper=[]"
                  class="mt-3 advise-btn">
                  Select item
                </b-button>
                <b-button
                  v-else
                  @click="clear('coat')"
                  class="mt-3 advise-btn">
                  Clear
                </b-button>
              </div>
            </b-row>
          </b-card>
            <b-card
                class="adviser ml-5 separator advise-card"
            >
              <div
                class="body-part mb-3"
                align-h="center">
                COVER
              </div>
              <div
                v-if="closet_items_coat=[]"
                class="mt-5 mb-5 question">
                ?
              </div>
              <b-card
                v-else
                :img-src="closet_items_coat[0].photo"
                img-top
                :alt="closet_items_coat[0].reference"
                class="mb-2 no-border">
                <div class="description">
                  {{closet_items_coat[0].brand.name.toUpperCase()}} - {{closet_items_coat[0].type.body_part}}
                </div>
              </b-card>
            <b-row align-h="center">
              <div class="advise-button">
                <b-button
                  v-if="closet_items_coat=[]"
                  class="mt-3 advise-btn">
                  Select item
                </b-button>
                <b-button
                  v-else
                  @click="clear('coat')"
                  class="mt-3 advise-btn">
                  Clear
                </b-button>
              </div>
            </b-row>
          </b-card>
          <b-card
            class="adviser ml-5 separator advise-card"
          >
            <div
              class="body-part mb-3"
              align-h="center">
              LOWER BODDY
            </div>
            <div
              v-if="closet_items_lower=[]"
              class="mt-5 mb-5 question">
              ?
            </div>
            <b-card
              v-else
              :img-src="closet_items_lower[0].photo"
              img-top
              :alt="closet_items_lower[0].reference"
              class="mb-2 no-border">
              <div class="description">
                {{closet_items_lower[0].brand.name.toUpperCase()}} - {{closet_items_lower[0].type.body_part}}
              </div>
            </b-card>
            <b-row align-h="center">
              <div class="advise-button">
                <b-button
                  v-if="closet_items_lower=[]"
                  class="mt-3 advise-btn">
                  Select item
                </b-button>
                <b-button
                  v-else
                  @click="clear('coat')"
                  class="mt-3 advise-btn">
                  Clear
                </b-button>
              </div>
            </b-row>
          </b-card>
          <b-card
              class="adviser ml-5 separator advise-card"
          >
            <div
              class="body-part mb-3"
              align-h="center">
              FEET
            </div>
            <div
              v-if="closet_items_shoes=[]"
              class="mt-5 mb-5 question">
              ?
            </div>
            <b-card
            v-else
              :img-src="closet_items_shoes[0].photo"
              img-top
              :alt="closet_items_shoes[0].reference"
              class="mb-2 no-border">
              <div class="description">
                {{closet_items_shoes[0].brand.name.toUpperCase()}} - {{closet_items_shoes[0].type.body_part}}
              </div>
            </b-card>
            <b-row align-h="center">
              <div class="advise-button">
                <b-button
                  v-if="closet_items_shoes=[]"
                  class="mt-3 advise-btn">
                  Select item
                </b-button>
                <b-button
                  v-else
                  @click="clear('coat')"
                  class="mt-3 advise-btn">
                  Clear
                </b-button>
              </div>
            </b-row>
          </b-card>
        </b-row>
        <b-row class="buttons mt-5" align-h="end">
          <div class="back-button">
            <b-button @click="step=1">
              Next
              <unicon name="angle-double-right" class="back-icon" fill="#2B1E02"></unicon>
            </b-button>
          </div>
        </b-row>
      </b-tab>
      <b-tab id="tab3" lazy>
          <template v-slot:title>
            ② 
            <span style="padding-left: 10px;">Choose your outfit</span>
          </template>
          <b-row align-h="center" align-v="center" class="elements tab3">
            <b-card
              class="adviser separator"
              :id="adviser_upper[0].item_id"
            >
              <b-row align-h="center" align-v="center" class="advise-card">
                <div class="body-part mb-3">UPPER BODY</div>
                <a :href="adviser_upper[0].url">
                <b-card
                  :img-src="adviser_upper[0].photo"
                  img-top
                  :alt="adviser_upper[0].reference"
                  class="mb-2 no-border"
                  @mouseover="hover = true; id_item = adviser_upper[0].item_id"
                  @mouseleave="hover = false">
                  <div class="details" v-if="hover & id_item === adviser_upper[0].item_id">SEE DETAILS</div>
                  <div v-else>
                    <div class="description">
                      {{adviser_upper[0].brand.name.toUpperCase()}} - {{adviser_upper[0].type.body_part}}
                    </div>
                    <div v-if="adviser_upper[0].price > 0" class="price">{{adviser_upper[0].price}}€</div>
                    <div v-else class="price">Price not defined</div>
                  </div>
                </b-card>
              </a>
              <b-row>
                <b-button
                  v-if="!lock_upper"
                  @click="lock('upper')"
                  id="upperb"
                  class="mr-5 mt-3"
                  title="lock item">
                  <unicon name="unlock-alt" fill="#999999"></unicon>
                </b-button>
                <b-button
                  v-else
                  @click="lock('upper')"
                  id="upperb"
                  class="mr-5 mt-3"
                  title="unlock item">
                  <unicon name="lock-alt" fill="#2B1E02"></unicon>
                </b-button>
                <b-button
                  @click="refresh('upper')"
                  class="ml-5 mt-3"
                  title="refresh item">
                  <unicon name="sync" fill="#999999"></unicon>
                </b-button>
              </b-row>
            </b-row>
          </b-card>
            <b-card
                class="adviser ml-5 separator"
                :id="adviser_coat[0].item_id"
            >
              <b-row align-h="center" align-v="center" class="advise-card">
                <div class="body-part mb-3">COVER</div>
                <a :href="adviser_coat[0].url">
                <b-card
                  :img-src="adviser_coat[0].photo"
                  img-top
                  :alt="adviser_coat[0].reference"
                  class="mb-2 no-border"
                  @mouseover="hover = true; id_item = adviser_coat[0].item_id"
                  @mouseleave="hover = false">
                  <div class="details" v-if="hover & id_item === adviser_coat[0].item_id">SEE DETAILS</div>
                  <div v-else>
                    <div class="description">
                      {{adviser_coat[0].brand.name.toUpperCase()}} - {{adviser_coat[0].type.body_part}}
                    </div>
                    <div v-if="adviser_coat[0].price > 0" class="price">{{adviser_coat[0].price}}€</div>
                    <div v-else class="price">Price not defined</div>
                  </div>
                </b-card>
              </a>
              <b-row>
                <b-button
                  v-if="!lock_coat"
                  @click="lock('coat')"
                  id="coatb"
                  class="mr-5 mt-3"
                  title="lock item">
                  <unicon name="unlock-alt" fill="#999999"></unicon>
                </b-button>
                <b-button 
                  v-else
                  @click="lock('coat')"
                  id="coatb"
                  class="mr-5 mt-3"
                  title="unlock item">
                  <unicon name="lock-alt" fill="#2B1E02"></unicon>
                </b-button>
                <b-button
                  @click="refresh('coat')"
                  class="ml-5 mt-3"
                  title="refresh item">
                  <unicon name="sync" class="" fill="#999999"></unicon>
                </b-button>
              </b-row>
            </b-row>
          </b-card>
          <b-card
            class="adviser ml-5 separator"
            :id="adviser_lower[0].item_id"
          >
            <b-row align-h="center" align-v="center" class="advise-card">
              <div class="body-part mb-3">LOWER BODDY</div>
              <a :href="adviser_lower[0].url">
                <b-card
                  :img-src="adviser_lower[0].photo"
                  img-top
                  :alt="adviser_lower[0].reference"
                  class="mb-2 no-border"
                  @mouseover="hover = true; id_item = adviser_lower[0].item_id"
                  @mouseleave="hover = false">
                  <div class="details" v-if="hover & id_item === adviser_lower[0].item_id">SEE DETAILS</div>
                  <div v-else>
                    <div class="description">
                      {{adviser_lower[0].brand.name.toUpperCase()}} - {{adviser_lower[0].type.body_part}}
                    </div>
                    <div v-if="adviser_lower[0].price > 0" class="price">{{adviser_lower[0].price}}€</div>
                    <div v-else class="price">Price not defined</div>
                  </div>
                </b-card>
              </a>
              <b-row>
                <b-button
                  v-if="!lock_lower"
                  @click="lock('lower')"
                  id="lowerb"
                  class="mr-5 mt-3"
                  title="lock item">
                  <unicon name="unlock-alt" fill="#999999"></unicon>
                </b-button>
                <b-button
                  v-else
                  @click="lock('lower')"
                  id="lower"
                  class="mr-5 mt-3"
                  title="unlock item">
                  <unicon name="lock-alt" fill="#2B1E02"></unicon>
                </b-button>
                <b-button
                  @click="refresh('lower')"
                  class="ml-5 mt-3"
                  title="refresh item">
                  <unicon name="sync" class="" fill="#999999"></unicon>
                </b-button>
              </b-row>
            </b-row>
          </b-card>
          <b-card
              class="adviser ml-5 separator"
              :id="adviser_shoes[0].item_id"
          >
            <b-row align-h="center" align-v="center" class="advise-card">
              <div class="body-part mb-3">FEET</div>
              <a :href="adviser_shoes[0].url">
                <b-card
                  :img-src="adviser_shoes[0].photo"
                  img-top
                  :alt="adviser_shoes[0].reference"
                  class="mb-2 no-border"
                  @mouseover="hover = true; id_item = adviser_shoes[0].item_id"
                  @mouseleave="hover = false">
                  <div class="details" v-if="hover & id_item === adviser_shoes[0].item_id">SEE DETAILS</div>
                  <div v-else>
                    <div class="description">
                      {{adviser_shoes[0].brand.name.toUpperCase()}} - {{adviser_shoes[0].type.body_part}}
                    </div>
                    <div v-if="adviser_shoes[0].price > 0" class="price">{{adviser_shoes[0].price}}€</div>
                    <div v-else class="price">Price not defined</div>
                  </div>
                </b-card>
              </a>
              <b-row>
                <b-button
                  v-if="!lock_shoes"
                  @click="lock('shoes')"
                  id="shoesb"
                  class="mr-5 mt-3"
                  title="lock item">
                  <unicon name="unlock-alt" fill="#999999"></unicon>
                </b-button>
                <b-button
                  v-else
                  @click="lock('shoes')"
                  id="shoes"
                  class="mr-5 mt-3"
                  title="unlock item">
                  <unicon name="lock-alt" fill="#2B1E02"></unicon>
                </b-button>
                <b-button
                  @click="refresh('shoes')"
                  class="ml-5 mt-3"
                  title="refresh item">
                  <unicon name="sync" fill="#999999"></unicon>
                </b-button>
              </b-row>
            </b-row>
          </b-card>
        </b-row>
        <b-row class="buttons mt-5">
          <b-col cols="5" align-self="end">
            <div class="back-button">
              <b-button @click="step=0">
                <unicon name="angle-double-left" class="back-icon" fill="#2B1E02"></unicon>
                Back
              </b-button>
            </div>
          </b-col>
          <b-col cols="2" align-self="center">
            <div class="advise-button">
              <b-button class="ml-3 advise-btn" @click="advise()">Advise</b-button>
            </div>
          </b-col>
          <b-col cols="5" align-self="start">
          </b-col>
        </b-row>
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
      hover: false,
      id_item: 0,
      step: 0,
      slide: 0,
      slidiging: null,
      adviser_upper: [],
      adviser_lower: [],
      adviser_shoes: [],
      adviser_coat: [],
      closet_items_upper: [],
      closet_items_coat: [],
      adviser_upper_element: null,
      closet_items_lower: [],
      adviser_lower_element: null,
      closet_items_shoes: [],
      adviser_shoes_element: null,
      lock_upper: false,
      lock_coat: false,
      lock_lower: false,
      lock_shoes: false,
    };
  },
  mounted() {
    this.closet_items = cloths.cloths.slice(0, 8);
    this.closet_items_upper = cloths.cloths.filter(x => x.type.body_part == "Upper body").slice(0, 8);
    this.closet_items_lower = cloths.cloths.filter(x => x.type.body_part == "Lower body").slice(0, 8);
    this.closet_items_shoes = cloths.cloths.filter(x => x.type.body_part == "Shoes").slice(0, 8);

    this.adviser_upper = cloths.cloths.filter(x => x.type.body_part == "Upper body").slice(0, 1);
    this.adviser_coat = cloths.cloths.filter(x => x.type.body_part == "Upper body").slice(0, 1);
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
      },
      refresh(type) {
          if (type == "upper") {
             const upper_clothes = cloths.cloths.filter(x => x.type.body_part == "Upper body");
             this.adviser_upper =
             [upper_clothes[Math.floor(Math.random()*upper_clothes.length)]]
          }
          if (type == "coat") {
             const coat_clothes = cloths.cloths.filter(x => x.type.body_part == "Upper body");
             this.adviser_coat =
             [coat_clothes[Math.floor(Math.random()*coat_clothes.length)]]
          }
          if (type == "lower") {
             const lower_clothes = cloths.cloths.filter(x => x.type.body_part == "Lower body");
             this.adviser_lower =
             [lower_clothes[Math.floor(Math.random()*lower_clothes.length)]]
          }
          if (type == "shoes") {
             const shoes_clothes = cloths.cloths.filter(x => x.type.body_part == "Shoes");
             this.adviser_shoes =
             [shoes_clothes[Math.floor(Math.random()*shoes_clothes.length)]]
          }
      },
      lock(type) {
          const el = document.getElementById(type);
          if (type == "upper") {
              this.lock_upper = !this.lock_upper
          }
          if (type == "coat") {
              this.lock_coat = !this.lock_coat
          }
          if (type == "lower") {
              this.lock_lower = !this.lock_lower
          }
          if (type == "shoes") {
              this.lock_shoes = !this.lock_shoes
          }
      },
      clear(type) {
          if (type == "upper") {
              this.closet_items_upper = []
          }
          if (type == "coat") {
              this.closet_items_coat = []
          }
          if (type == "lower") {
              this.closet_items_lower = []
          }
          if (type == "shoes") {
              this.closet_items_shoes = []
          }
      },
      advise() {
          if (!this.lock_upper) {
            this.refresh("upper");
          }
          if (!this.lock_coat) {
            this.refresh("coat");
          }
          if (!this.lock_lower) {
            this.refresh("lower");
          }
          if (!this.lock_shoes) {
            this.refresh("shoes");
          }
      }
  },
};
</script>

<style lang="scss">
.question {
  font-size: 100px;
  color: #2B1E02;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 15px;
  border: solid 2px #2B1E02;
  border-radius: 50%;
}

.nav-tabs .nav-link {
  color: #999999;
  border: none;
  font-size: 16px;
  margin-top: 4%;
  margin-left: 30%;
  margin-right: 30%;
}

.nav-tabs .nav-link.active {
  color: #2B1E02;
  font-size: 23px;
  text-decoration: none;
  cursor: text;
}

.nav-link:hover {
  color:#6D3C1D;
}

.nav-tabs {
  border: none;
}

.back-icon {
  width: 35px;
  height: 35px;
}

.advise-btn {
  width: 170px;
}

.buttons {
  margin-left: 16%;
  margin-right: 16%;
}

.advise-button .btn {
  border: none;
  background-color: #2B1E02;
}

.advise-button .btn:hover {
  background-color: #6D3C1D;
}

.back-button .btn {
  border: none;
  background-color: white;
  color: #2B1E02;
}

.back-button .btn:hover {
  color: #6D3C1D;
}

.tab3 .btn {
  background-color: white;
  border: none;
}

.tab3 .btn:hover {
  background-color: rgb(226, 226, 226);
}

.tab3 .btn-secondary.disabled, .btn-secondary:disabled {
  color: #fff;
  background-color: rgb(226, 226, 226);;
  border: none;
}

.tab3 .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: rgb(226, 226, 226);;
  border: none;
}

.tab3 .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: none;
}

.tab3 .btn-secondary:focus, .btn-secondary.focus {
  background-color: rgb(255, 255, 255);
  border: none;
  outline: none;
  box-shadow: none;
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

.separator {
  border-top: solid 2px #2B1E02;
  border-bottom: solid 2px #2B1E02;
  border-right: none;
  border-left: none;
  border-radius: 0;
}

.no-border {
  border: none;
}

.advise-card a {
  color: #2B1E02;
  text-decoration: none;
}

.advise-card a:hover {
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

.body-part {
  text-align: center;
  font-size: 17px;
  color: #2B1E02;
}

.elements {
  margin-top: 4%;
}

.carousel-control-next {
    color: #ababab
}

.box {
    margin: 20px;
    padding: 10px;
}

.closet {
    max-width: 100px;
}

.adviser {
    max-width: 15%;
    max-height: 15%;
}

</style>
