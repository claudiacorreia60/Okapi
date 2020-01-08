<template>
  <b-jumbotron fluid>
    <div class="title">YOUR PROFILE</div>
    <b-row align-v="center" align-h="center" class="mt-3 bottom">
        <b-col cols="12" class="personal">
            <b-card
                :img-src="user.photo"
                img-left
                class="mb-4"
              >
                <b-card-title>
                  <unicon name="user-circle" fill="#2B1E02" class="icon"></unicon>
                  PERSONAL DETAILS
                </b-card-title>
                <b-container>
                  <b-card-text>
                    <b-row align-h="start">
                      <b-col cols="2">
                      <div class="profile-elem">
                        Name
                      </div>
                      <div class="profile-elem">
                        Email
                      </div>
                      <div class="profile-elem">
                        Gender
                      </div>
                      <div class="profile-elem">
                        Birthday
                      </div>
                      </b-col>
                      <b-col cols="10">
                        <div class="profile-elem-val">
                        {{ user.name }}
                      </div>
                      <div class="profile-elem-val">
                        {{ user.email }}
                      </div>
                      <div class="profile-elem-val">
                        {{ user.gender }}
                      </div>
                      <div class="profile-elem-val">
                        {{ user.birthday }}
                      </div>
                      </b-col>
                    </b-row>
                  </b-card-text>
                  <b-row align-h="center" align-v="end" class="mt-4">
                    <div class="edit-button">
                      <b-button class="edit-btn">Edit</b-button>
                    </div>
                  </b-row>
                </b-container>
              </b-card>
        </b-col>
        <b-col cols="6" class="liked-its">
            <b-card>
              <b-container>
                <b-card-title>
                  <unicon name="heart" fill="#2B1E02" class="icon"></unicon>
                  LIKED ITEMS
                </b-card-title>
                <b-row align-h="center" align-v="center" class="mt-5">
                  <b-col
                    v-for="item in likes"
                    v-bind:key="item.item_id"
                    style="text-align: center;">
                    <div
                      class="mb-2 no-border">
                      <img class="item-img" :src="item.photo" :alt="item.reference"/>
                    </div>
                  </b-col>
                </b-row>
                <b-row align-h="center" align-v="end">
                  <div class="edit-button mt-5">
                    <b-button class="edit-btn">See more</b-button>
                  </div>
                </b-row>
              </b-container>
            </b-card>
        </b-col>
        <b-col cols="6" class="saved-its">
            <b-card>
              <b-container>
                <b-card-title>
                  <unicon name="heart" fill="#2B1E02" class="icon"></unicon>
                  SAVED ITEMS
                </b-card-title>
                <b-row align-h="center" align-v="center" class="mt-5">
                  <b-col
                    v-for="item in saved"
                    v-bind:key="item.item_id"
                    style="text-align: center;">
                    <div
                      class="mb-2 no-border">
                      <img class="item-img" :src="item.photo" :alt="item.reference"/>
                    </div>
                  </b-col>
                </b-row>
                <b-row align-h="center" align-v="end">
                  <div class="edit-button mt-5">
                    <b-button class="edit-btn">See more</b-button>
                  </div>
                </b-row>
              </b-container>
            </b-card>
        </b-col>
    </b-row>
  </b-jumbotron>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'profile',
  components: {
  },
  data() {
    return {
      user: {
        user_id: 1,
        name: 'Rui Fernandes',
        email: 'rui_fernandes@email.pt',
        gender: 'Male',
        birthday: '1990-06-15',
        photo: 'https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg',
      },
      likes: [],
      saved: [],
    };
  },
  mounted() {
    fetch("http://localhost:3333/catalog/man", {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    })
    .then(r => r.json())
    .then(r => {this.saved.push(r[5]);
                this.saved.push(r[10]);
                this.saved.push(r[15]);
                this.likes.push(r[14]);
                this.likes.push(r[17]);
                this.likes.push(r[7]);})
    .catch(err => console.log(err));
  },
};
</script>

<style lang="scss">
.bottom {
  border-bottom: solid 2px #6D3C1D;
  border-left: none;
  border-right: none;
  border-top: none;
}

.personal {
  border-bottom: solid 2px #6D3C1D;
  border-left: none;
  border-right: none;
  border-top: none;
}

.liked-its {
  border-right: solid 2px #6D3C1D;
  border-left: none;
  border-bottom: none;
  border-top: none;
}

.item-img {
  width: 100%;
  height: 100%;
}

.profile-elem {
  padding-left: 11%;
  color: #2B1E02;
  border-right: solid 1px #6D3C1D;
}

.edit-btn {
  width: 170px;
}

.edit-button .btn {
  border: none;
  background-color: #2B1E02;
  color: white;
}

.edit-button .btn:hover {
  background-color: #6D3C1D;
}

.icon {
  margin-bottom: 5px;
}

.card-title {
  color: #2B1E02;
  font-size: 17px;
}

.card {
  border-radius: 0;
  border: none;
}

.title {
  color: #2B1E02;
  font-size: 18px;
  border-bottom: solid 2px #6D3C1D;
}

.jumbotron {
  background-color: white;
  margin-top: -1%;
}

img {
    max-height: 15rem;
}

.card {
    min-height: 15rem;
    margin: 10px;
}
</style>
