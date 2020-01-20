<template>
  <b-jumbotron fluid>
    <div class="title">YOUR PROFILE</div>
    <b-row align-v="center" align-h="center" class="mt-3">
        <b-col cols="2" class="mt-4">
          <img class="user-img" src="../assets/user.jpg"/>
        </b-col>
        <b-col cols="8" class="mt-4">
          <h4>
          <unicon name="user-circle" fill="#2B1E02" class="icon"></unicon>
            PERSONAL DETAILS
          </h4>
            <b-row align-h="start">
              <b-col cols="2">
              <div class="profile-elem">
                Name
              </div>
              <div class="profile-elem">
                Username
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
                {{ user.username }}
              </div>
              <div class="profile-elem-val">
                {{ user.gender.toUpperCase() }}
              </div>
              <div class="profile-elem-val">
                {{ (new Date(user.birthday)).toLocaleDateString() }}
              </div>
              </b-col>
            </b-row>
        </b-col>
    </b-row>
    <b-row align-v="center" align-h="center" class="mt-3 bottom">
      <div class="edit-button">
        <b-button class="edit-btn mb-4 mt-3">Edit</b-button>
      </div>
    </b-row>
    <b-row align-v="center" align-h="center" class="bottom">
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
        photo: 'https://www.didomenico.ch/wp-content/uploads/2019/03/user.jpg',
      },
      likes: [],
      saved: [],
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user.photo =
    'https://www.didomenico.ch/wp-content/uploads/2019/03/user.jpg'

    fetch("http://localhost:3333/likes/" + this.user.user_id, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    })
    .then(r => r.json())
    .then(r => { 
        this.likes = r.slice(0, 3);
        this.$forceUpdate();
    })
    .catch(err => console.log(err));

    fetch("http://localhost:3333/saved/" + this.user.user_id, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    })
    .then(r => r.json())
    .then(r => { 
        this.saved = r.slice(0, 3);
        this.$forceUpdate();
    })
    .catch(err => console.log(err));
  },
};
</script>

<style lang="scss">
.align-center {
  align-content: center;
}

.user-img {
  width: 90%;
  height: 90%;
}

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

h4 {
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
