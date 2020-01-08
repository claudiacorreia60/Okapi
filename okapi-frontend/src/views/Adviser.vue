<template>
  <div>
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
                    {{closet_items_upper[0].brand.name.toUpperCase()}} - {{closet_items_upper[0].type.body_part.toUpperCase()}}
                  </div>
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
                    {{closet_items_coat[0].brand.name.toUpperCase()}} - {{closet_items_coat[0].type.body_part.toUpperCase()}}
                  </div>
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
                  {{closet_items_lower[0].brand.name.toUpperCase()}} - {{closet_items_lower[0].type.body_part.toUpperCase()}}
                </div>
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
                  {{closet_items_shoes[0].brand.name.toUpperCase()}} - {{closet_items_shoes[0].type.body_part.toUpperCase()}}
                </div>
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
                  <a @click="seeDetails(item)">
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
                        {{adviser_upper[0].brand.name.toUpperCase()}} - {{adviser_upper[0].type.body_part.toUpperCase()}}
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
                  <div class="body-part mb-3">COAT</div>
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
                        {{adviser_coat[0].brand.name.toUpperCase()}} - {{adviser_coat[0].type.body_part.toUpperCase()}}
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
                <div class="body-part mb-3">BOTTOM</div>
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
                        {{adviser_lower[0].brand.name.toUpperCase()}} - {{adviser_lower[0].type.body_part.toUpperCase()}}
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
                        {{adviser_shoes[0].brand.name.toUpperCase()}} - {{adviser_shoes[0].type.body_part.toUpperCase()}}
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
              <FilterCatalog :title="gender.toUpperCase() + '\'S CATALOG'"/>
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
              <FilterCatalog :title="gender.toUpperCase() + '\'S CATALOG'"/>
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
              <FilterCatalog :title="gender.toUpperCase() + '\'S CATALOG'"/>
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
              <FilterCatalog :title="gender.toUpperCase() + '\'S CATALOG'"/>
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
      adviser_upper: [],
      adviser_lower: [],
      adviser_shoes: [],
      adviser_coat: [],
      closet_items_upper: [],
      closet_items_coat: [],
      closet_items_lower: [],
      closet_items_shoes: [],
      lock_upper: false,
      lock_coat: false,
      lock_lower: false,
      lock_shoes: false,
      upper_closet_all: [],
      coat_closet_all: [],
      lower_closet_all: [],
      shoes_closet_all: [],
      closet: [],
      gender: "man",
    };
  },
  mounted() {
    this.$root.$on('adviser-content-selected', this.catalog_selection)

    this.advise();

    this.user_id = JSON.parse(localStorage.getItem('user')).user_id;

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
        this.hideModal(id_modal);
      },
      selectLower(id_modal, item) {
        this.adviser_lower = [item];
        this.closet_items_lower = [item];
        this.lock_lower = true;
        this.hideModal(id_modal);
      },
      selectShoes(id_modal, item) {
        this.adviser_shoes = [item];
        this.closet_items_shoes = [item];
        this.lock_shoes = true;
        this.hideModal(id_modal);
      },
      selectCoat(id_modal, item) {
        this.adviser_coat = [item];
        this.closet_items_coat = [item];
        this.lock_coat = true;
        this.hideModal(id_modal);
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
      },
      seeDetails(item){
        this.$router.push({name: "details", params: {item: item}})
      }
  },
};
</script>

<style lang="scss">
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
