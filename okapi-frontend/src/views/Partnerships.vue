<template>
  <div class="home">
    <UserNavBar v-if="loggedIn"/>
    <HomeNavBar v-else/>
    <b-jumbotron id="intro" fluid
        header="Bringing over more than 2 fashion brands."
        lead="And counting! Keep up to date with the most recent partnerships."
    />
    <b-jumbotron id="brands" fluid
        header="Find our top tier partners."
    >
    </b-jumbotron>
    <b-container fluid>
      <b-row align-v="center" class="text-center">
        <b-col sm="12" md="4" id="lionofporches" class="category" align-self="center">
              <img src="../assets/lionofporches.png" class="category"/>
        </b-col>
        <b-col sm="12" md="4" id="decenio" class="category ml-auto mr-auto" align-self="center">
              <img src="../assets/decenio.jpg" class="category"/>
        </b-col>
        <b-col sm="12" md="4" id="anasousa" class="category" align-self="center">
              <img src="../assets/anasousa.png" class="category"/>
        </b-col>
      </b-row>
      <b-row align-v="center" align-h="center" id="brand" class="mb-5 text-center">
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
        Contacts
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

.router:hover {
    text-decoration: none;
}

</style>
