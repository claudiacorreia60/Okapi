<template>
  <b-navbar toggleable="lg" class="sticky-top white-background">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <!-- Brand -->
      <b-navbar-brand class="ml-5" title="go to home page">
        <router-link to="/">
          <img alt="Okapi logo" src="../assets/logo.svg" class="logo-image">
        </router-link>
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
      <!-- Centered nav items -->
      <b-navbar-nav class="ml-auto mr-auto">
        <b-nav-item>
          <router-link class="link m-2" to="/women">WOMEN</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="link m-2" to="/men">MEN</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="link m-2" to="/createOutfit">CREATE OUTFIT</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="link m-2" to="/virtualCloset">VIRTUAL CLOSET</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="mr-5">
        <b-nav-item title="go to search panel">
          <router-link to="/search" class="nav-right ml-2">
            <unicon name="search" fill="#2B1E02"></unicon>
            <span class="ml-2">Search</span>
          </router-link>
        </b-nav-item>
        <b-nav-item title="change idiom">
          <router-link to="/lang" class="nav-right ml-2">
            <unicon name="globe" fill="#2B1E02"></unicon>
            <span class="ml-2">Idiom</span>
          </router-link>
        </b-nav-item>
        <b-nav-item title="go to my account">
          <router-link to="/myaccount" class="nav-right ml-2">
            <unicon name="user" fill="#2B1E02"></unicon>
            <span class="ml-2">My Account</span>
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'HomeNavBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo-image {
  width: 150px;
  height: 70px;
}

.white-background {
  background-color: #ffffff;
}

.link {
  color: #2B1E02;
  font-size: 17px;
}

.link:hover {
  padding-bottom: 10px;
  border-bottom: solid 2px #6D3C1D;
  text-decoration: none;
}

.nav-right {
  color: #2B1E02;
  font-size: 16px;
}

.nav-right:hover {
  padding-bottom: 10px;
  border-bottom: solid 2px #6D3C1D;
  text-decoration: none;
}
</style>
