<template>
  <b-jumbotron fluid>
    <h1> Your profile </h1>
    <b-row align-v="center" align-h="center">
        <b-col cols="6">
            <b-card
                title="Personal details"
                :img-src="user.photo"
                img-left
              >
                <b-card-text>
                    <div>
                    Name: {{ user.name }}
                    </div>
                    <div>
                    Username: {{ user.username }}
                    </div>
                    <div>
                    Gender: {{ user.gender }}
                    </div>
                    <div>
                    Birthday: {{ user.birthday }}
                    </div>
                </b-card-text>
                <b-button> Edit </b-button>
              </b-card>
        </b-col>
        <b-col cols="6">
            <b-card
                title="Body measurements"
              >
                <b-card-text>
                </b-card-text>
                <b-button> Edit </b-button>
              </b-card>
        </b-col>
        <b-col cols="6">
            <b-card
                title="Liked Items"
              >
                <b-card-text>
                </b-card-text>
                <b-button> Edit </b-button>
              </b-card>
        </b-col>
        <b-col cols="6">
            <b-card
                title="Saved Items"
              >
                <b-card-text>
                </b-card-text>
                <b-button> Edit </b-button>
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
        name: 'Rui',
        username: 'rc133',
        gender: 'M',
        birthday: '1990-06-15 00:00:00',
        photo: 'https://www.evolutionsociety.org/userdata/news_picupload/pic_sid189-0-norm.jpg',
      },
      likes: [],
    };
  },
  mounted() {
  },
};
</script>

<style lang="scss">
img {
    max-height: 15rem;
}

.card {
    min-height: 15rem;
    margin: 10px;
}
</style>
