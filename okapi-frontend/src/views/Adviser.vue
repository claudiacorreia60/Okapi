<template>
  <div>
    <b-container fluid>
      <b-tabs v-model="step" justified>
        <b-tab id="tab2" active>
          <template v-slot:title>
            ① 
            <span style="padding-left: 10px;">Add clothes to your outfit</span>
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
                  v-if="closet_items_upper.length == 0"
                  class="mt-5 mb-5 img-center">
                  <img src="../assets/shirt.svg" alt="Shirt" class="img-item"/>
                </div>
                <b-card
                  v-else
                  :img-src="closet_items_upper[0].photo"
                  img-top
                  :alt="closet_items_upper[0].reference"
                  class="mb-2 no-border">
                  <div class="description">
                    {{closet_items_upper[0].brand.name.toUpperCase()}}
                  </div>
                  <div v-if="adviser_upper[0].price > 0" class="price">{{adviser_upper[0].price}}€</div>
                  <div v-else class="price">Price not defined</div>
                </b-card>
              <b-row align-h="center">
                <div class="advise-button" v-if="closet_items_upper.length == 0">
                  <b-button
                    @click="showModal('upper')"
                    class="mt-3 advise-btn">
                    Virtual Closet
                  </b-button>
                  <b-button
                    @click="showModal('upper_catalog')"
                    class="mt-3 advise-btn">
                    Catalog
                  </b-button>
                </div>
                <div class="advise-button" v-else>
                  <b-button
                    @click="clear('upper')"
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
                  COAT
                </div>
                <div
                  v-if="closet_items_coat.length == 0"
                  class="mt-5 mb-5 img-center">
                  <img src="../assets/coat.svg" alt="Coat" class="img-item"/>
                </div>
                <b-card
                  v-else
                  :img-src="closet_items_coat[0].photo"
                  img-top
                  :alt="closet_items_coat[0].reference"
                  class="mb-2 no-border">
                  <div class="description">
                    {{closet_items_coat[0].brand.name.toUpperCase()}}
                  </div>
                  <div v-if="adviser_upper[0].price > 0" class="price">{{adviser_upper[0].price}}€</div>
                  <div v-else class="price">Price not defined</div>
                </b-card>
              <b-row align-h="center">
                <div class="advise-button" v-if="closet_items_coat.length == 0">
                  <b-button
                    @click="showModal('coat')"
                    class="mt-3 advise-btn">
                    Virtual Closet
                  </b-button>
                  <b-button
                    @click="showModal('coat_catalog')"
                    class="mt-3 advise-btn">
                    Catalog
                  </b-button>
                </div>
                <div class="advise-button" v-else>
                  <b-button
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
                BOTTOM
              </div>
              <div
                v-if="closet_items_lower.length == 0"
                class="mt-5 mb-5 img-center">
                <img src="../assets/pants.svg" alt="Pants" class="img-item"/>
              </div>
              <b-card
                v-else
                :img-src="closet_items_lower[0].photo"
                img-top
                :alt="closet_items_lower[0].reference"
                class="mb-2 no-border">
                <div class="description">
                  {{closet_items_lower[0].brand.name.toUpperCase()}}
                </div>
                <div v-if="adviser_upper[0].price > 0" class="price">{{adviser_upper[0].price}}€</div>
                <div v-else class="price">Price not defined</div>
              </b-card>
              <b-row align-h="center">
                <div class="advise-button" v-if="closet_items_lower.length == 0">
                  <b-button
                    @click="showModal('lower')"
                    class="mt-3 advise-btn">
                    Virtual Closet
                  </b-button>
                  <b-button
                    @click="showModal('lower_catalog')"
                    class="mt-3 advise-btn">
                    Catalog
                  </b-button>
                </div>
                <div class="advise-button" v-else>
                  <b-button
                    @click="clear('lower')"
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
                SHOES
              </div>
              <div
                v-if="closet_items_shoes.length == 0"
                class="mt-5 mb-5 img-center">
                <img src="../assets/shoes.svg" alt="Shoes" class="img-shoes"/>
              </div>
              <b-card
              v-else
                :img-src="closet_items_shoes[0].photo"
                img-top
                :alt="closet_items_shoes[0].reference"
                class="mb-2 no-border">
                <div class="description">
                  {{closet_items_shoes[0].brand.name.toUpperCase()}}
                </div>
                <div v-if="adviser_upper[0].price > 0" class="price">{{adviser_upper[0].price}}€</div>
                <div v-else class="price">Price not defined</div>
              </b-card>
              <b-row align-h="center">
                <div class="advise-button" v-if="closet_items_shoes.length == 0">
                  <b-button
                    @click="showModal('shoes')"
                    class="mt-3 advise-btn">
                    Virtual Closet
                  </b-button>
                  <b-button
                    @click="showModal('shoes_catalog')"
                    class="mt-3 advise-btn">
                    Catalog
                  </b-button>
                </div>
                <div class="advise-button" v-else>
                  <b-button
                    @click="clear('shoes')"
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
              <span style="padding-left: 10px;">Ask for advice</span>
            </template>
            <b-row align-h="center" align-v="center" class="elements tab3">
              <b-card
                class="adviser separator"
                :id="adviser_upper[0].item_id"
              >
                <b-row align-h="center" align-v="center" class="advise-card">
                  <div class="body-part mb-3">UPPER BODY</div>
                  <a @click="seeDetails(adviser_upper[0])">
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
                        {{adviser_upper[0].brand.name.toUpperCase()}}
                      </div>
                      <div v-if="adviser_upper[0].price > 0" class="price">{{adviser_upper[0].price}}€</div>
                      <div v-else class="price">Price not defined</div>
                    </div>
                  </b-card>
                </a>
                <b-row>
                  <b-button
                    v-if="!lock_upper"
                    @click="lock('upper', adviser_upper[0])"
                    id="upperb"
                    class="mr-5 mt-3"
                    title="lock item">
                    <unicon name="unlock-alt" fill="#999999"></unicon>
                  </b-button>
                  <b-button
                    v-else
                    @click="lock('upper', adviser_upper[0])"
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
                  <div class="body-part mb-3">COAT</div>
                  <a @click="seeDetails(adviser_coat[0])">
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
                        {{adviser_coat[0].brand.name.toUpperCase()}}
                      </div>
                      <div v-if="adviser_coat[0].price > 0" class="price">{{adviser_coat[0].price}}€</div>
                      <div v-else class="price">Price not defined</div>
                    </div>
                  </b-card>
                </a>
                <b-row>
                  <b-button
                    v-if="!lock_coat"
                    @click="lock('coat', adviser_coat[0])"
                    id="coatb"
                    class="mr-5 mt-3"
                    title="lock item">
                    <unicon name="unlock-alt" fill="#999999"></unicon>
                  </b-button>
                  <b-button 
                    v-else
                    @click="lock('coat', adviser_coat[0])"
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
                <div class="body-part mb-3">BOTTOM</div>
                <a @click="seeDetails(adviser_lower[0])">
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
                        {{adviser_lower[0].brand.name.toUpperCase()}}
                      </div>
                      <div v-if="adviser_lower[0].price > 0" class="price">{{adviser_lower[0].price}}€</div>
                      <div v-else class="price">Price not defined</div>
                    </div>
                  </b-card>
                </a>
                <b-row>
                  <b-button
                    v-if="!lock_lower"
                    @click="lock('lower', adviser_lower[0])"
                    id="lowerb"
                    class="mr-5 mt-3"
                    title="lock item">
                    <unicon name="unlock-alt" fill="#999999"></unicon>
                  </b-button>
                  <b-button
                    v-else
                    @click="lock('lower', adviser_lower[0])"
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
                <a @click="seeDetails(adviser_shoes[0])">
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
                        {{adviser_shoes[0].brand.name.toUpperCase()}}
                      </div>
                      <div v-if="adviser_shoes[0].price > 0" class="price">{{adviser_shoes[0].price}}€</div>
                      <div v-else class="price">Price not defined</div>
                    </div>
                  </b-card>
                </a>
                <b-row>
                  <b-button
                    v-if="!lock_shoes"
                    @click="lock('shoes', adviser_shoes[0])"
                    id="shoesb"
                    class="mr-5 mt-3"
                    title="lock item">
                    <unicon name="unlock-alt" fill="#999999"></unicon>
                  </b-button>
                  <b-button
                    v-else
                    @click="lock('shoes', adviser_shoes[0])"
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
            <b-col cols="2" align-self="end">
              <div class="back-button">
                <b-button @click="step=0">
                  <unicon name="angle-double-left" class="back-icon" fill="#2B1E02"></unicon>
                  Back
                </b-button>
              </div>
            </b-col>
            <b-col cols="8" align-self="center">
              <div class="advise-button">
                <b-button class="ml-3 advise-btn" @click="advise()">Advise</b-button>
              </div>
            </b-col>
            <b-col cols="2">
              <span class="feature">
                <b-button
                  v-if="!savedOutfit"
                  @click="saveOutfit()">
                  <unicon name="star" fill="#2B1E02" style="margin-right: 10px;"></unicon>
                  Save outfit
                </b-button>
              </span>
              <span class="selected-feature">
                <b-button
                  v-if="savedOutfit"
                  @click="unsaveOutfit()">
                  <unicon name="uniFavoriteMonochrome" fill="#2B1E02" style="margin-right: 10px;"></unicon>
                  Unsave outfit
                </b-button>
              </span>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
    </b-container>

    <b-modal
      ref="upper-modal"
      hide-footer
      title="Virtual Closet - Upper body items"
      size="xl">
      <b-container fluid>
        <b-card-group>
          <div v-if="upper_closet_all.length == 0">
            There are no upper body items in your closet.
          </div>
          <b-col
            v-else
            v-for="item in upper_closet_all"
            v-bind:key="'upper' + item.item_id"
            md="4"
            sm="6"
            align-self="center">
            <b-card
              @click="selectUpper('upper', item)"
              :img-src="item.photo"
              img-top
              :alt="item.reference"
              class="mb-2 no-border closet-item">
              <div class="description">
                {{item.brand.name.toUpperCase()}} - {{item.type.body_part.toUpperCase()}}
              </div>
              <div v-if="adviser_upper[0].price > 0" class="price">{{adviser_upper[0].price}}€</div>
              <div v-else class="price">Price not defined</div>
            </b-card>
          </b-col>
        </b-card-group>
      </b-container>
      <b-row align-h="center" class="advise-button">
        <b-button class="mt-5 advise-btn" block @click="hideModal('upper')">Cancel</b-button>
      </b-row>
    </b-modal>

    <b-modal
      ref="coat-modal"
      hide-footer
      title="Virtual Closet - Coats"
      size="xl">
      <b-container fluid>
        <b-card-group>
          <div v-if="coat_closet_all.length == 0">
            There are no coats in your closet.
          </div>
          <b-col
            v-else
            v-for="item in coat_closet_all"
            v-bind:key="'coat' + item.item_id"
            md="4"
            sm="6"
            align-self="center">
            <b-card
              @click="selectCoat('coat', item)"
              :img-src="item.photo"
              img-top
              :alt="item.reference"
              class="mb-2 no-border closet-item">
              <div class="description">
                {{item.brand.name.toUpperCase()}} - {{item.type.body_part.toUpperCase()}}
              </div>
              <div v-if="adviser_upper[0].price > 0" class="price">{{adviser_upper[0].price}}€</div>
              <div v-else class="price">Price not defined</div>
            </b-card>
          </b-col>
        </b-card-group>
      </b-container>
      <b-row align-h="center" class="advise-button">
        <b-button class="mt-5 advise-btn" block @click="hideModal('coat')">Cancel</b-button>
      </b-row>
    </b-modal>

    <b-modal
      ref="lower-modal"
      hide-footer
      title="Virtual Closet - Bottom items"
      size="xl">
      <b-container fluid>
        <b-card-group>
          <div v-if="lower_closet_all.length == 0">
            There are no bottoms items in your closet.
          </div>
          <b-col
            v-else
            v-for="item in lower_closet_all"
            v-bind:key="'lower' + item.item_id"
            md="4"
            sm="6"
            align-self="center">
            <b-card
              @click="selectLower('lower', item)"
              :img-src="item.photo"
              img-top
              :alt="item.reference"
              class="mb-2 no-border closet-item">
              <div class="description">
                {{item.brand.name.toUpperCase()}} - {{item.type.body_part.toUpperCase()}}
              </div>
              <div v-if="adviser_upper[0].price > 0" class="price">{{adviser_upper[0].price}}€</div>
              <div v-else class="price">Price not defined</div>
            </b-card>
          </b-col>
        </b-card-group>
      </b-container>
      <b-row align-h="center" class="advise-button">
        <b-button class="mt-5 advise-btn" block @click="hideModal('lower')">Cancel</b-button>
      </b-row>
    </b-modal>

    <b-modal
      ref="shoes-modal"
      hide-footer
      title="Virtual Closet - Shoes"
      size="xl">
      <b-container fluid>
        <b-card-group>
          <div v-if="shoes_closet_all.length == 0">
            There are no shoes in your closet.
          </div>
          <b-col
            v-else
            v-for="item in shoes_closet_all"
            v-bind:key="'shoes' + item.item_id"
            md="4"
            sm="6"
            align-self="center">
            <b-card
              @click="selectShoes('shoes', item)"
              :img-src="item.photo"
              img-top
              :alt="item.reference"
              class="mb-2 no-border closet-item">
              <div class="description">
                {{item.brand.name.toUpperCase()}} - {{item.type.body_part.toUpperCase()}}
              </div>
              <div v-if="adviser_upper[0].price > 0" class="price">{{adviser_upper[0].price}}€</div>
              <div v-else class="price">Price not defined</div>
            </b-card>
          </b-col>
        </b-card-group>
      </b-container>
      <b-row align-h="center" class="advise-button">
        <b-button class="mt-5 advise-btn" block @click="hideModal('shoes')">Cancel</b-button>
      </b-row>
    </b-modal>

    <b-modal
      ref="upper-catalog-modal"
      hide-footer
      title="Catalog - Upper body items"
      size="xl">
      <b-container fluid>
        <b-row align-v="start" align-h="center" class="mt-5">
            <b-col cols="3" id="filters">
              <FilterCatalog :title="gender.toUpperCase() + '\'S CATALOG'" :type="['Camisas', 'Camisolas', 'Sweats', 'Túnicas e tops']"/>
            </b-col>
            <b-col cols="9">
              <AdviserCatalogContent :gender="gender" type="camisas" body_part="upper"/> 
            </b-col>
        </b-row>
      </b-container>
      <b-row align-h="center" class="advise-button">
        <b-button class="mt-5 advise-btn" block @click="hideModal('upper_catalog')">Cancel</b-button>
      </b-row>
    </b-modal>

    <b-modal
      ref="coat-catalog-modal"
      hide-footer
      title="Catalog - Coats"
      size="xl">
      <b-container fluid>
        <b-row align-v="start" align-h="center" class="mt-5">
            <b-col cols="3" id="filters">
              <FilterCatalog :title="gender.toUpperCase() + '\'S CATALOG'" :type="['Casacos', 'Blazers']"/>
            </b-col>
            <b-col cols="9">
              <AdviserCatalogContent :gender="gender" type="casacos" body_part="coat"/> 
            </b-col>
        </b-row>
      </b-container>
      <b-row align-h="center" class="advise-button">
        <b-button class="mt-5 advise-btn" block @click="hideModal('coat_catalog')">Cancel</b-button>
      </b-row>
    </b-modal>

    <b-modal
      ref="lower-catalog-modal"
      hide-footer
      title="Catalog - Bottom items"
      size="xl">
      <b-container fluid>
        <b-row align-v="start" align-h="center" class="mt-5">
            <b-col cols="3" id="filters">
              <FilterCatalog :title="gender.toUpperCase() + '\'S CATALOG'" :type="['Calças e calçoes', 'Saias']"/>
            </b-col>
            <b-col cols="9">
              <AdviserCatalogContent :gender="gender" type="calças e calçoes" body_part="lower"/> 
            </b-col>
        </b-row>
      </b-container>
      <b-row align-h="center" class="advise-button">
        <b-button class="mt-5 advise-btn" block @click="hideModal('lower_catalog')">Cancel</b-button>
      </b-row>
    </b-modal>

    <b-modal
      ref="shoes-catalog-modal"
      hide-footer
      title="Catalog - Shoes"
      size="xl">
      <b-container fluid>
        <b-row align-v="start" align-h="center" class="mt-5">
            <b-col cols="3" id="filters">
              <FilterCatalog :title="gender.toUpperCase() + '\'S CATALOG'" type="Calçado"/>
            </b-col>
            <b-col cols="9">
              <AdviserCatalogContent :gender="gender" type="calçado" body_part="shoes"/> 
            </b-col>
        </b-row>
      </b-container>
      <b-row align-h="center" class="advise-button">
        <b-button class="mt-5 advise-btn" block @click="hideModal('shoes_catalog')">Cancel</b-button>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import AdviserCatalogContent from '@/components/AdviserCatalogContent.vue';
import FilterCatalog from '@/components/FilterCatalog.vue';

// @ is an alias to /src
const cloths = require('../assets/cloths.json'); // with path

export default {
  name: 'adviser',
  components: {
    AdviserCatalogContent,
    FilterCatalog,
  },
  data() {
    return {
      user_id: null,
      hover: false,
      id_item: 0,
      step: 0,
      slide: 0,
      slidiging: null,
      saveOutfit: false,
      this.outfit_id: -1,
      dummy_item: {
        "item_id": 393,
        "title": "Camisola com carcela ",
        "brand_id": 1,
        "color_id": 1,
        "type_id": 7,
        "price": 0,
        "gender": "M",
        "description": "Camisola de inspiração náutica, com carcela e riscas na zona do abdómen. Logótipo da marca ao peito.",
        "url": "dummy_url",
        "reference": "5604205796734",
        "photo": "https://www.publicdomainpictures.net/pictures/30000/nahled/plain-white-background.jpg",
        "composition": "100%ALGODÃO",
        "catalog": 1,
        "color": {
            "color_id": 1,
            "name": "Azul",
            "rgb_red": 0,
            "rgb_green": 0,
            "rgb_blue": 255,
            "hexadecimal": "#0000FF"
        },
        "type": {
            "type_id": 7,
            "name": "Camisolas",
            "body_part": "upper"
        },
        "brand": {
            "brand_id": 1,
            "name": "Lion of Porches",
            "website": "https://www.lionofporches.pt/"
        }
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
      gender: "man",
    };
  },
  mounted() {
    this.adviser_upper = [this.dummy_item]
    this.adviser_lower = [this.dummy_item]
    this.adviser_coat = [this.dummy_item]
    this.adviser_shoes = [this.dummy_item]
    this.$root.$on('adviser-content-selected', this.catalog_selection)

    const user = JSON.parse(localStorage.getItem('user'));

    this.user_id = user.user_id;
    if (user.gender == "W") {
        this.gender = "woman";
    }

    //this.advise();

    fetch("http://localhost:3333/closet/" + this.user_id, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    })
    .then(r => r.json())
    .then(r => {this.closet = r;
                this.upper_closet_all = this.closet.filter(x => x.type.body_part === 'upper');
                this.coat_closet_all = this.closet.filter(x => x.type.body_part === 'cover');
                this.lower_closet_all = this.closet.filter(x => x.type.body_part === 'bottom');
                this.shoes_closet_all = this.closet.filter(x => x.type.body_part === 'feet');
                this.$forceUpdate();
                })
    .catch(err => console.log(err));

  },
  methods: {
      catalog_selection(x) {
        if (x.body_part == "upper") {
            this.selectUpper('upper_catalog', x.item);
        }
        if (x.body_part == "coat") {
            this.selectCoat('coat_catalog', x.item);
        }
        if (x.body_part == "lower") {
            this.selectLower('lower_catalog', x.item);
        }
        if (x.body_part == "shoes") {
            this.selectShoes('shoes_catalog', x.item);
        }
      },
      showModal(type) {
        if (type == "upper") {
            this.$refs['upper-modal'].show()
        }
        if (type == "coat") {
            this.$refs['coat-modal'].show()
        }
        if (type == "lower") {
            this.$refs['lower-modal'].show()
        }
        if (type == "shoes") {
            this.$refs['shoes-modal'].show()
        }
        if (type == "upper_catalog") {
            this.$refs['upper-catalog-modal'].show()
        }
        if (type == "coat_catalog") {
            this.$refs['coat-catalog-modal'].show()
        }
        if (type == "lower_catalog") {
            this.$refs['lower-catalog-modal'].show()
        }
        if (type == "shoes_catalog") {
            this.$refs['shoes-catalog-modal'].show()
        }
      },
      hideModal(type) {
        if (type == "upper") {
            this.$refs['upper-modal'].hide()
        }
        if (type == "coat") {
            this.$refs['coat-modal'].hide()
        }
        if (type == "lower") {
            this.$refs['lower-modal'].hide()
        }
        if (type == "shoes") {
            this.$refs['shoes-modal'].hide()
        }
        if (type == "upper_catalog") {
            this.$refs['upper-catalog-modal'].hide()
        }
        if (type == "coat_catalog") {
            this.$refs['coat-catalog-modal'].hide()
        }
        if (type == "lower_catalog") {
            this.$refs['lower-catalog-modal'].hide()
        }
        if (type == "shoes_catalog") {
            this.$refs['shoes-catalog-modal'].hide()
        }
      },
      selectUpper(id_modal, item) {
        this.adviser_upper = [item];
        this.closet_items_upper = [item];
        this.lock_upper = true;
        this.lock_upper_item = item.item_id;
        this.hideModal(id_modal);
      },
      selectLower(id_modal, item) {
        this.adviser_lower = [item];
        this.closet_items_lower = [item];
        this.lock_lower = true;
        this.lock_lower_item = item.item_id;
        this.hideModal(id_modal);
      },
      selectShoes(id_modal, item) {
        this.adviser_shoes = [item];
        this.closet_items_shoes = [item];
        this.lock_shoes = true;
        this.lock_shoes_item = item.item_id;
        this.hideModal(id_modal);
      },
      selectCoat(id_modal, item) {
        this.adviser_coat = [item];
        this.closet_items_coat = [item];
        this.lock_coat = true;
        this.lock_coat_item = item.item_id;
        this.hideModal(id_modal);
      },
      toString(obj) {
          let r = "?user_id=" + this.user_id + "&"
          for(var key in obj) {
              if(obj.hasOwnProperty(key)) {
                console.log(key)
                console.log(this.lock_upper_item)
                 if (key == "upper") {
                     r = r + "upper=" + this.lock_upper_item + "&"
                 }
                 if (key == "coat") {
                     r = r + "cover=" + this.lock_coat_item + "&"
                 }
                 if (key == "lower") {
                     r = r + "bottom=" + this.lock_lower_item + "&"
                 }
                 if (key == "shoes") {
                     r = r + "feet=" + this.lock_shoes_item + "&"
                 }
              }
          }
          r = r.slice(0, -1)
          return r;
      },
      saveOutfit() {
        this.savedOutfit = true;
        fetch("http://localhost:3333/outfit/" + this.user_id, {
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              method: "POST",
              body: JSON.stringify({
                items: [this.adviser_coat[0], this.adviser_upper[0],
                this.adviser_lower[0], this.adviser_shoes[0]]
              })
          })
          .then(r => r.json())
          .then(r => {
            this.outfit_id = r.outfit_id
          })
          .catch(err => {
            console.log(err)
            this.savedOutfit = false;
          });
      },
      unsaveOutfit() {
        this.savedOutfit = false;
        fetch("http://localhost:3333/outfit/" + this.user_id + "/" + this.outfit_id, {
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              method: "DELETE"
          })
          .then(r => r.json())
          .then(r => {
          }) 
          .catch(err => {
            console.log(err)
            this.savedOutfit = true;
          });
      },
      refresh(obj) {
        let query = ""

        query = this.toString(obj)
        console.log(query)

        fetch("http://localhost:3333/adviser/suggest_outfit" + query, {
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              }
          })
          .then(r => r.json())
          .then(r => {
            console.log(r)
            r.forEach((item) => {
              if (item.type.body_part == "upper") {
                this.adviser_upper = [item]
              } else if (item.type.body_part == "bottom") {
                this.adviser_lower = [item]
              } else if (item.type.body_part == "cover") {
                this.adviser_coat = [item]
              } else if (item.type.body_part == "feet") {
                this.adviser_shoes = [item]
              }
              //this.$forceUpdate()
            }) 
          })
          .catch(err => console.log(err));

      },
      lock(type, item) {
          const el = document.getElementById(type);
          if (type == "upper") {
              this.lock_upper = !this.lock_upper
              this.lock_upper_item = item.item_id
          }
          if (type == "coat") {
              this.lock_coat = !this.lock_coat
              this.lock_coat_item = item.item_id;
          }
          if (type == "lower") {
              this.lock_lower = !this.lock_lower
              this.lock_lower_item = item.item_id
          }
          if (type == "shoes") {
              this.lock_shoes = !this.lock_shoes
              this.lock_shoes_item = item.item_id
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
      advise() {
        let obj = {}
          if (this.lock_upper) {
            obj.upper = this.lock_upper_item;
          }
          if (this.lock_coat) {
            obj.coat = this.lock_coat_item
          }
          if (this.lock_lower) {
            obj.lower = this.lock_lower_item
          }
          if (this.lock_shoes) {
            obj.shoes = this.lock_shoes_item
          }
          this.refresh(obj)
      },
      seeDetails(item){
        this.$router.push({name: "details", params: {item: item}})
      },
    // TODO: Save e unsave outfit
    save() {
      fetch("http://localhost:3333/saved/" + this.user_id + "/" + this.item.item_id, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          method: "POST"
      })
      .then(r => r.json())
      .then(r => { 
              this.saved = true;
           })
      .catch(err => console.log(err));
    },
    unsave() {
      fetch("http://localhost:3333/saved/" + this.user_id + "/" + this.item.item_id, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          method: "DELETE"
      })
      .then(r => r.json())
      .then(r => { 
              this.saved = false;
           })
      .catch(err => console.log(err));
    },
  }
};
</script>

<style lang="scss">
.feature-value {
  margin-left: 10px;
  font-size: 17px;
  color: #2B1E02;
}

.selected-feature .btn {
  background-color: white;
  border-left: solid 2px #2B1E02;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border-radius: 0;
  color: #2B1E02;
}

.selected-feature .btn:hover {
  background-color: rgb(226, 226, 226);
  border: none;
  border-radius: 7%;
}

.selected-feature:hover {
  color: #6D3C1D;
}

.feature .btn {
  background-color: white;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: -2%;
  color: #2B1E02;
}

.feature .btn:hover {
  background-color: rgb(226, 226, 226);
}

.feature .btn-secondary.disabled, .btn-secondary:disabled {
  color: #fff;
  background-color: rgb(226, 226, 226);;
  border: none;
}

.feature .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: rgb(226, 226, 226);;
  border: none;
}

.feature .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: none;
}

.feature .btn-secondary:focus, .btn-secondary.focus {
  background-color: rgb(255, 255, 255);
  border: none;
  outline: none;
  box-shadow: none;
}

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
  color: #2B1E02;
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

.advise-button {
  text-align: center;
}

.advise-button .btn {
  border: none;
  background-color: #2B1E02;
  color: white;
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
