<template>
  <b-container fluid>
    <b-row align-h="center" align-v="center" class="elements tab3">
      <b-col col cols="12" sm="12" md="6" lg="3" align-self="center">
      <b-card class="adviser separator" :id="adviser_upper[0].item_id">
          <b-row align-h="center">
          <div class="body-part mb-3">UPPER BODY</div>
          </b-row>
          <b-row align-h="center" class="advise-card">
          <a @click="goToStore(adviser_upper[0].url)">
            <b-card
              :img-src="adviser_upper[0].photo"
              img-top
              :alt="adviser_upper[0].reference"
              class="mb-2 no-border"
              @mouseover="
                hover = true;
                id_item = adviser_upper[0].item_id;
              "
              @mouseleave="hover = false"
            >
              <div class="description">
                  {{ adviser_upper[0].brand.name.toUpperCase() }}
              </div>
            </b-card>
          </a>
          </b-row>
          <b-row align-h="center">
            <b-button
              v-if="!lock_upper"
              @click="lock('upper', adviser_upper[0])"
              id="upperb"
              class="mr-5 mt-3"
              title="lock item"
            >
              <unicon name="unlock-alt" fill="#999999"></unicon>
            </b-button>
            <b-button
              v-else
              @click="lock('upper', adviser_upper[0])"
              id="upperb"
              class="mr-5 mt-3"
              title="unlock item"
            >
              <unicon name="lock-alt" fill="#2B1E02"></unicon>
            </b-button>
            <b-button
              @click="refresh('upper')"
              class="ml-5 mt-3"
              title="refresh item"
            >
              <unicon name="sync" fill="#999999"></unicon>
            </b-button>
          </b-row>
      </b-card>
      </b-col>
      <b-col col cols="12" sm="12" md="6" lg="3" align-self="center">
      <b-card class="adviser separator" :id="adviser_coat[0].item_id">
          <b-row align-h="center">
          <div class="body-part mb-3">COAT</div>
          </b-row>
          <b-row align-h="center" class="advise-card">
          <a @click="goToStore(adviser_coat[0].url)">
            <b-card
              :img-src="adviser_coat[0].photo"
              img-top
              :alt="adviser_coat[0].reference"
              class="mb-2 no-border"
              @mouseover="
                hover = true;
                id_item = adviser_coat[0].item_id;
              "
              @mouseleave="hover = false"
            >
                <div class="description">
                  {{ adviser_coat[0].brand.name.toUpperCase() }}
                </div>
            </b-card>
          </a>
          </b-row>
          <b-row align-h="center">
            <b-button
              v-if="!lock_coat"
              @click="lock('coat', adviser_coat[0])"
              id="coatb"
              class="mr-5 mt-3"
              title="lock item"
            >
              <unicon name="unlock-alt" fill="#999999"></unicon>
            </b-button>
            <b-button
              v-else
              @click="lock('coat', adviser_coat[0])"
              id="coatb"
              class="mr-5 mt-3"
              title="unlock item"
            >
              <unicon name="lock-alt" fill="#2B1E02"></unicon>
            </b-button>
            <b-button
              @click="refresh('coat')"
              class="ml-5 mt-3"
              title="refresh item"
            >
              <unicon name="sync" class="" fill="#999999"></unicon>
            </b-button>
          </b-row>
      </b-card>
      </b-col>
      <b-col col cols="12" sm="12" md="6" lg="3" align-self="center">
      <b-card class="adviser separator" :id="adviser_lower[0].item_id">
          <b-row align-h="center">
          <div class="body-part mb-3">BOTTOM</div>
          </b-row>
          <b-row align-h="center" class="advise-card">
          <a @click="goToStore(adviser_lower[0].url)">
            <b-card
              :img-src="adviser_lower[0].photo"
              img-top
              :alt="adviser_lower[0].reference"
              class="mb-2 no-border"
              @mouseover="
                hover = true;
                id_item = adviser_lower[0].item_id;
              "
              @mouseleave="hover = false"
            >
                <div class="description">
                  {{ adviser_lower[0].brand.name.toUpperCase() }}
                </div>
            </b-card>
          </a>
          </b-row>
          <b-row align-h="center">
            <b-button
              v-if="!lock_lower"
              @click="lock('lower', adviser_lower[0])"
              id="lowerb"
              class="mr-5 mt-3"
              title="lock item"
            >
              <unicon name="unlock-alt" fill="#999999"></unicon>
            </b-button>
            <b-button
              v-else
              @click="lock('lower', adviser_lower[0])"
              id="lower"
              class="mr-5 mt-3"
              title="unlock item"
            >
              <unicon name="lock-alt" fill="#2B1E02"></unicon>
            </b-button>
            <b-button
              @click="refresh('lower')"
              class="ml-5 mt-3"
              title="refresh item"
            >
              <unicon name="sync" class="" fill="#999999"></unicon>
            </b-button>
          </b-row>
      </b-card>
      </b-col>
      <b-col col cols="12" sm="12" md="6" lg="3" align-self="center">
      <b-card class="adviser separator" :id="adviser_shoes[0].item_id">
          <b-row align-h="center">
          <div class="body-part mb-3">FEET</div>
          </b-row>
          <b-row align-h="center" class="advise-card">
          <a @click="goToStore(adviser_shoes[0].url)">
            <b-card
              :img-src="adviser_shoes[0].photo"
              img-top
              :alt="adviser_shoes[0].reference"
              class="mb-2 no-border"
              @mouseover="
                hover = true;
                id_item = adviser_shoes[0].item_id;
              "
              @mouseleave="hover = false"
            >
                <div class="description">
                  {{ adviser_shoes[0].brand.name.toUpperCase() }}
                </div>
            </b-card>
          </a>
          </b-row>
          <b-row align-h="center">
            <b-button
              v-if="!lock_shoes"
              @click="lock('shoes', adviser_shoes[0])"
              id="shoesb"
              class="mr-5 mt-3"
              title="lock item"
            >
              <unicon name="unlock-alt" fill="#999999"></unicon>
            </b-button>
            <b-button
              v-else
              @click="lock('shoes', adviser_shoes[0])"
              id="shoes"
              class="mr-5 mt-3"
              title="unlock item"
            >
              <unicon name="lock-alt" fill="#2B1E02"></unicon>
            </b-button>
            <b-button
              @click="refresh('shoes')"
              class="ml-5 mt-3"
              title="refresh item"
            >
              <unicon name="sync" fill="#999999"></unicon>
            </b-button>
          </b-row>
      </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-5 mb-4" align-h="center">
    <div v-if="!reviewed && advised" @click="review()">
    <VueFeedbackReaction
      v-model="feedback"
      :labels="Array.from(['Eww!', 'Nope!', 'Meh..', 'Nice!', 'Okapi!'])"
    />
    </div>
    <h4 v-else>
      {{ feedbackMessage() }}
    </h4>
    </b-row>
    <b-row class="buttons mb-3" align-h="center">
     <div v-if="!loading" class="advise-button">
       <b-button class="ml-3 advise-btn" @click="advise(-1)">For men <i class="fa fa-mars"></i></b-button>
       <b-button class="ml-3 advise-btn" @click="advise(0)">For women <i class="fa fa-venus"></i></b-button>
     </div>
     <div v-else class="loading-button">
       <b-button class="ml-3 loading-btn" >
           <b-spinner small></b-spinner>
           Advising...
       </b-button>
     </div>
    </b-row>
  </b-container>
</template>

<script>
import { VueFeedbackReaction } from "vue-feedback-reaction";
// @ is an alias to /src
export default {
  name: "adviser",
  components: {
    VueFeedbackReaction
  },
  data() {
    return {
      advised: false,
      reviewed: false,
      loading: false,
      feedback: '',
      user_id: null,
      hover: false,
      id_item: 0,
      dummy_item_coat: {
        url: "dummy_url",
        brand: {
          name: ''
        },
        photo:
          require("../assets/coat.svg"),
      },
      dummy_item_shirt: {
        url: "dummy_url",
        brand: {
          name: ''
        },
        photo:
          require("../assets/shirt.svg"),
      },
      dummy_item_pants: {
        url: "dummy_url",
        brand: {
          name: ''
        },
        photo:
          require("../assets/pants.svg"),
      },
      dummy_item_shoes: {
        url: "dummy_url",
        brand: {
          name: ''
        },
        photo:
          require("../assets/shoes.svg"),
      },
      adviser_upper: [],
      adviser_lower: [],
      adviser_shoes: [],
      adviser_coat: [],
      closet_items_upper: [],
      closet_items_coat: [],
      closet_items_lower: [],
      closet_items_shoes: [],
      lock_upper: false,
      lock_upper_item: false,
      lock_coat: false,
      lock_coat_item: false,
      lock_lower: false,
      lock_lower_item: false,
      lock_shoes: false,
      lock_shoes_item: false,
      upper_closet_all: [],
      coat_closet_all: [],
      lower_closet_all: [],
      shoes_closet_all: [],
      closet: [],
      gender: "man"
    };
  },
  mounted() {
    this.adviser_upper = [this.dummy_item_shirt];
    this.adviser_lower = [this.dummy_item_pants];
    this.adviser_coat = [this.dummy_item_coat];
    this.adviser_shoes = [this.dummy_item_shoes];
  },
  methods: {
    review() {
      this.reviewed = false;
      fetch("http://localhost:3333/adviser/rate_outfit", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        method: 'POST',
        body: JSON.stringify({
          rating: parseInt(this.feedback/5),
          items: [this.adviser_upper[0], this.adviser_lower[0], this.adviser_coat[0],
          this.adviser_shoes[0]]
        })
      })
      .catch(err => {
        this.feedback = "";
        console.log(err);
        });
    },
    goToStore(url) {
      window.location = url;
    },
    feedbackMessage() {
      let msg = ""
      switch (this.feedback) {
        case "":
          msg = "Please ask for a suggestion!"
          break;
        case "1":
          msg = "Give me another chance!"
          break;
        case "2":
          msg = "Oopsi.. maybe try another one!"
          break;
        case "3":
          msg = "I'll do better next time!"
          break;
        case "4":
          msg = "I liked this one too!"
          break;
        case "5":
          msg = "Okapi approves! Thank you for your feedback!"
          break;
      }
      return msg
    },
    toString(obj, id) {
      let r = "?user_id=" + id + "&";
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (key == "upper") {
            r = r + "upper=" + this.lock_upper_item + "&";
          }
          if (key == "coat") {
            r = r + "cover=" + this.lock_coat_item + "&";
          }
          if (key == "lower") {
            r = r + "bottom=" + this.lock_lower_item + "&";
          }
          if (key == "shoes") {
            r = r + "feet=" + this.lock_shoes_item + "&";
          }
        }
      }
      r = r.slice(0, -1);
      return r;
    },
    refresh(obj, id) {
      this.loading = true;
      let query = "";

      query = this.toString(obj, id);

      fetch("http://localhost:3333/adviser/suggest_outfit" + query, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
        .then(r => r.json())
        .then(r => {
          console.log(r);
          r.forEach(item => {
            if (item.type.body_part == "upper") {
              this.adviser_upper = [item];
            } else if (item.type.body_part == "bottom") {
              this.adviser_lower = [item];
            } else if (item.type.body_part == "cover") {
              this.adviser_coat = [item];
            } else if (item.type.body_part == "feet") {
              this.adviser_shoes = [item];
            }
          });
          this.reviewed = false;
          this.loading = false;
          this.advised = true;
        })
        .catch(err => console.log(err));
    },
    lock(type, item) {
      if (type == "upper") {
        this.lock_upper = !this.lock_upper;
        this.lock_upper_item = item.item_id;
      }
      if (type == "coat") {
        this.lock_coat = !this.lock_coat;
        this.lock_coat_item = item.item_id;
      }
      if (type == "lower") {
        this.lock_lower = !this.lock_lower;
        this.lock_lower_item = item.item_id;
      }
      if (type == "shoes") {
        this.lock_shoes = !this.lock_shoes;
        this.lock_shoes_item = item.item_id;
      }
    },
    clear(type) {
      if (type == "upper") {
        this.closet_items_upper = [];
        this.lock_upper = false;
      }
      if (type == "coat") {
        this.closet_items_coat = [];
        this.lock_coat = false;
      }
      if (type == "lower") {
        this.closet_items_lower = [];
        this.lock_lower = false;
      }
      if (type == "shoes") {
        this.closet_items_shoes = [];
        this.lock_shoes = false;
      }
    },
    advise(id) {
      let obj = {};
      if (this.lock_upper) {
        obj.upper = this.lock_upper_item;
      }
      if (this.lock_coat) {
        obj.coat = this.lock_coat_item;
      }
      if (this.lock_lower) {
        obj.lower = this.lock_lower_item;
      }
      if (this.lock_shoes) {
        obj.shoes = this.lock_shoes_item;
      }
      this.refresh(obj, id);
    }
  }
};
</script>

<style scoped lang="scss">
a {
  cursor: pointer;
}

.closet-item {
  cursor: pointer;
}

.closet-item:hover img {
  opacity: 0.5;
}

.question {
  font-size: 100px;
  color: #2b1e02;
  //  border: solid 2px #2B1E02;
  border-radius: 50%;
  text-align: center;
}

.img-center {
  text-align: center;
}

.img-item {
  width: 80%;
}

.img-shoes {
  width: 60%;
  margin-top: 8%;
  margin-bottom: 7%;
}

.nav-tabs .nav-link {
  color: #999999;
  border: none;
  font-size: 16px;
  margin-top: 4%;
  margin-left: 20%;
  margin-right: 20%;
}

.nav-tabs .nav-link.active {
  color: #2b1e02;
  font-size: 23px;
  text-decoration: none;
  cursor: text;
}

.nav-link:hover {
  color: #6d3c1d;
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

.advise-button {
  text-align: center;
}

.loading-button {
  text-align: center;
}

.advise-button .btn {
  border: none;
  background-color: #2b1e02;
  color: white;
}

.loading-button .btn {
  border: none;
  background-color: #2b1e02;
  color: white;
}

.advise-button .btn:hover {
  background-color: #6d3c1d;
}

.back-button .btn {
  border: none;
  background-color: white;
  color: #2b1e02;
}

.back-button .btn:hover {
  color: #6d3c1d;
}

.tab3 .btn {
  background-color: white;
  border: none;
}

.tab3 .btn:hover {
  background-color: rgb(226, 226, 226);
}

.tab3 .btn-secondary.disabled,
.btn-secondary:disabled {
  color: #fff;
  background-color: rgb(226, 226, 226);
  border: none;
}

.tab3 .btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: rgb(226, 226, 226);
  border: none;
}

.tab3 .btn-secondary:not(:disabled):not(.disabled):active:focus,
.btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: none;
}

.tab3 .btn-secondary:focus,
.btn-secondary.focus {
  background-color: rgb(255, 255, 255);
  border: none;
  outline: none;
  box-shadow: none;
}

.back-button .btn-secondary.disabled,
.btn-secondary:disabled {
  color: #fff;
  background-color: white;
  border: none;
}

.back-button .btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: white;
  border: none;
}

.back-button .btn-secondary:not(:disabled):not(.disabled):active:focus,
.btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: none;
}

.back-button .btn-secondary:focus,
.btn-secondary.focus {
  background-color: white;
  border: none;
  outline: none;
  box-shadow: none;
}

.separator {
  border-top: solid 2px #2b1e02;
  border-bottom: solid 2px #2b1e02;
  border-right: none;
  border-left: none;
  border-radius: 0;
}

.no-border {
  border: none;
}

.advise-card a {
  color: #2b1e02;
  text-decoration: none;
}

.advise-card a:hover {
  text-decoration: none;
}

.price {
  color: #2b1e02;
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
  color: #2b1e02;
}

.elements {
  margin-top: 120px;
}

.carousel-control-next {
  color: #ababab;
}

.box {
  margin: 20px;
  padding: 10px;
}

.closet {
  max-width: 100px;
}

.card{
  min-width: 100%;
}

.adviser {
  max-width: 15%;
  max-height: 15%;
}
</style>
