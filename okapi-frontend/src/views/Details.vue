  <template>
    <b-card
      :img-src="item.photo"
      img-left
    >
    <b-card-title>
      {{ this.item.brand.name.toUpperCase() }}
    </b-card-title>
    <b-card-text>
      {{ this.item.type.body_part.charAt(0).toUpperCase() + this.item.type.body_part.slice(1) }}
    </b-card-text>
    <b-card-text class="like">
      <span class="feature">
        <b-button
          v-if="!liked"
          @click="like()">
          <unicon name="heart" fill="#999999"></unicon>
        </b-button>
      </span>
      <span class="selected-feature">
        <b-button
          v-if="liked"
          @click="dislike()">
          <unicon name="heart" fill="#2B1E02"></unicon>
        </b-button>
      </span>
      <span class="feature-value">Like</span>
    </b-card-text>
    <b-card-text class="save">
      <span class="feature">
        <b-button
          v-if="!saved"
          @click="save()">
          <unicon name="bookmark" fill="#999999"></unicon>
        </b-button>
      </span>
      <span class="selected-feature">
        <b-button
          v-if="saved"
          @click="unsave()">
          <unicon name="bookmark" fill="#2B1E02"></unicon>
        </b-button>
      </span>
      <span class="feature-value">Save</span>
    </b-card-text>
    <b-card-text class="closet">
      <span class="feature">
        <b-button
          v-if="!closet"
          @click="add_closet()">
          <unicon name="tag-alt" fill="#999999"></unicon>
        </b-button>
      </span>
      <span class="selected-feature">
        <b-button
          v-if="closet"
          @click="remove_closet()">
          <unicon name="tag-alt" fill="#2B1E02"></unicon>
        </b-button>
      </span>
      <span class="feature-value">Add to closet</span>
    </b-card-text>
    <b-card-text>
      <div class="description">DESCRIPTION</div>
      <div class="value">{{ item.description }}</div>
    </b-card-text>
    <b-card-text class="mb-4">
      <div class="description">PRICE</div>
      <div v-if="item.price > 0" class="value">{{item.price}}€</div>
      <div v-else class="value">Price not defined</div>
    </b-card-text>
    <div class="buy-button">
      <a @click="openTab(item)" class="btn buy-btn">Buy item</a>
    </div>
  </b-card>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'details',
  components: {
  },
  data() {
    return {
      item: this.$route.params.item,
      liked: false,
      saved: false,
      closet: false,
    };
  },
  mounted() {
  },
  methods: {
    like() {
      this.liked = true;
    },
    dislike() {
      this.liked = false;
    },
    save() {
      this.saved = true;
    },
    unsave() {
      this.saved = false;
    },
    add_closet() {
      this.closet = true;
    },
    remove_closet() {
      this.closet = false;
    },
    openTab(item) {
      window.open(item.url, '_blank');
    }
  }
};
</script>

<style lang="scss">
.feature-value {
  margin-left: 10px;
}

.selected-feature .btn {
  background-color: white;
  border-left: solid 2px #2B1E02;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border-radius: 0;
  padding-top: 10px;
  padding-bottom: 10px;
}

.selected-feature .btn:hover {
  background-color: rgb(226, 226, 226);
  border: none;
  border-radius: 7%;
}

.feature .btn {
  background-color: white;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: -2%;
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

.buy-btn {
  width: 170px;
}

.buy-button {
  text-align: center;
}

.buy-button .btn {
  border: none;
  background-color: #2B1E02;
  color: white;
}

.buy-button .btn:hover {
  background-color: #6D3C1D;
}

.value {
  margin-top: 8px;
  font-size: 15px;
}

.description {
  color: #999999;
}

.like {
  margin-top: 6%;
  margin-bottom: 0;
}

.save {
  margin-bottom: 0;
}

.closet {
  margin-bottom: 6%;
}

.card img {
  width: 40%;
  height: 40%;
}

.card {
  margin-right: 20%;
  margin-left: 20%;
  margin-top: 8%;
  border: none;
}

.card-body {
  padding-left: 8%;
}
</style>
