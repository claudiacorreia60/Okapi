<template>
  <div class="home">
    <UserNavBar v-if="loggedIn"/>
    <HomeNavBar v-else/>
    <b-jumbotron id="intro" fluid
        header="Okapi, your intelligent fashion adviser."
        lead="Inspiration made easy."
    />
    <b-jumbotron id="brands" fluid
        header="Find out how it works."
    >
        <h2 class="ml-5 mb-3">1. Search for your dream item;</h2>
        <h2 class="ml-5 mb-3">2. Build an outfit around it;</h2>
        <h2 class="ml-5 mb-3">3. Ask your AI adivser to fill in the blanks;</h2>
        <h2 class="ml-5 mb-3">3. Give feedback, and save it to your personal closer.</h2>
    </b-jumbotron>
    <b-container fluid>
      <b-row align-v="center" id="actions" class="text-center">
        <b-col sm="12" md="4" id="women" align-self="center">
            <router-link class="router ml-auto mr-auto mt-5" to="/createOutfit">
              <h1 class="category">WOMEN</h1>
            </router-link>
        </b-col>
        <b-col sm="12" md="4" id="outfit" align-self="center">
            <router-link class="router ml-auto mr-auto mt-5" to="/createOutfit">
            <h1 class="category-o">OUTFITS</h1>
            </router-link>
        </b-col>
        <b-col sm="12" md="4" id="men" align-self="center">
            <router-link class="router ml-auto mr-auto mt-5" to="/men">
            <h1 class="category">MEN</h1>
            </router-link>
        </b-col>
      </b-row>
      <b-row align-v="center" align-h="center" id="brand" class="mt-5 mb-5 text-center">
        <router-link to="/">
          <img alt="Okapi logo" src="../assets/logo.png">
        </router-link>
      </b-row>
      <b-row align-v="center" align-h="center" id="social1" class="text-center">
        <h3> Follow us </h3>
      </b-row>
      <b-row align-v="center" align-h="center" id="social2" class="text-center">
        <unicon name="facebook" fill="#844006"></unicon>
        <unicon class="ml-3 mr-3" name="instagram" fill="#844006"></unicon>
        <unicon name="twitter" fill="#844006"></unicon>
      </b-row>
      <b-row align-v="center" align-h="center" id="other" class="mt-5 text-center">
        <h3> About Okapi </h3>
      </b-row>
      <b-row align-v="center" align-h="center" class="text-center">
        <router-link class="about-r" to="/aboutUs">
        About us
        </router-link>
      </b-row>
      <b-row align-v="center" align-h="center" class="text-center">
        <router-link class="about-r" to="/partnerships">
        Partnerships
        </router-link>
      </b-row>
      <b-row align-v="center" align-h="center" class="text-center">
        <router-link class="about-r" to="/insights">
        Insights
        </router-link>
      </b-row>
      <b-row align-v="center" align-h="center" class="text-center">
        <router-link class="about-r" to="/termsOfUse">
      Terms of use
        </router-link>
      </b-row>
      <b-row align-v="center" align-h="center" class="text-center">
        <router-link class="about-r" to="/privacyPolice">
      Privacy policy of use
        </router-link>
      </b-row>
      <b-row align-v="center" align-h="center" class="text-center">
        <router-link class="about-r" to="/contacts">
        Constacts
        </router-link>
        </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNavBar from '@/components/HomeNavBar.vue';
import UserNavBar from '@/components/UserNavBar.vue';

export default {
  name: 'home',
  components: {
    HomeNavBar,
    UserNavBar,
  },
  data() {
    return {
      data: null,
    };
  },
};
</script>

<style lang="scss">
#intro {
  background-image: url('../assets/background.png');
  background-size: cover;
  background-position: center;
  color: white;
  margin-bottom: 0;
}

#brands {
  margin-bottom: 0;
  background-color: white;
}

.about-r {
    color: rgb(132, 64, 0);
}

.about-r:hover {
    color: rgb(162, 104, 20);
    text-decoration: none;
}

.router:hover {
    text-decoration: none;
}

@media screen and (min-width: 601px) {
.category {
    color: rgb(132, 64, 0);
    line-height: 30vh;
}

.category-o {
    color: white;
    line-height: 30vh;
}

#women {
  height: 100%;
}

#women:hover {
  background-color: rgba(0,0,0,0.3);
  transition: background-color 1000ms cubic-bezier(.23,1,.32,1);
}

#outfit {
  height: 100%;
}

#outfit:hover {
  background-color: rgba(0,0,0,.2);
  transition: background-color 1000ms cubic-bezier(.23,1,.32,1);
}

#men {
  height: 100%;
}

#men:hover {
  background-color: rgba(0,0,0,.2);
  transition: background-color 1000ms cubic-bezier(.23,1,.32,1);
}

#actions {
    background-image: url('../assets/outfit.jpg');
    background-size: cover;
    background-position: center;
    height: 30vh;
}
}

@media screen and (max-width: 600px) {
.category {
    color: white;
    line-height: 30vh;
}

.category-o {
    color:white;
    line-height: 30vh;
}

#women {
  background-image: url('../assets/women.jpg');
  background-size: cover;
  background-position: center;
}

#outfit {
  background-image: url('../assets/outfit.jpg');
  background-size: cover;
  background-position: center;
}

#men {
  background-image: url('../assets/men.jpg');
  background-size: cover;
  background-position: center;
}
}

</style>
