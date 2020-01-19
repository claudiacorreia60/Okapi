<template>
  <b-container>
    <b-row align-v="center" align-h="center" id="brand" class="mt-5 mb-5 text-center">
      <router-link to="/">
        <img alt="Okapi logo" src="../assets/logo.svg" title="go to home page" class="logo-image">
      </router-link>
    </b-row>
    <b-row align-v="center" align-h="center" id="social1" class="text-center about-title">
      <h3> Follow us </h3>
    </b-row>
    <b-row align-v="center" align-h="center" id="social2" class="text-center">
      <unicon name="facebook-f" fill="#2B1E02"></unicon>
      <unicon class="ml-3 mr-3" name="instagram" fill="#2B1E02"></unicon>
      <unicon name="twitter" fill="#2B1E02"></unicon>
    </b-row>
    <b-row align-v="center" align-h="center" id="other" class="mt-5 text-center about-title">
      <h3> About Okapi </h3>
    </b-row>
    <b-row align-v="center" align-h="center" class="text-center">
      <router-link class="about-r" to="/about">
      About us
      </router-link>
    </b-row>
    <b-row align-v="center" align-h="center" class="text-center">
      <router-link class="about-r" to="/partnerships">
      Partnerships
      </router-link>
    </b-row>
    <b-row align-v="center" align-h="center" class="text-center">
      <span class="about-r">
      Insights
      </span>
    </b-row>
    <b-row align-v="center" align-h="center" class="text-center">
      <span class="about-r">
    Terms of use
      </span>
    </b-row>
    <b-row align-v="center" align-h="center" class="text-center">
      <span class="about-r">
    Privacy policy of use
      </span>
    </b-row>
    <b-row align-v="center" align-h="center" class="text-center mb-5">
      <router-link class="about-r" to="/contacts">
      Contacts
      </router-link>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'PageFooter',
};
</script>

<style scoped lang="scss">
.logo-image {
  width: 150px;
  height: 70px;
}

.about-title {
    color: #2B1E02;
}

.about-r {
    color: #2B1E02;
}

.about-r:hover {
    color: #6D3C1D;
    text-decoration: none;
}
</style>
