<template>
  <b-navbar toggleable="lg">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <!-- Brand -->
      <b-navbar-brand class="ml-sm-2">
        <router-link to="/">
          <img alt="Okapi logo" src="../assets/logo.png">
        </router-link>
      </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Left aligned nav items -->
      <b-navbar-nav>
        <b-nav-item>
          <router-link class="link" to="/women">WOMEN</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="link" to="/men">MEN</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="link" to="/createOutfit">CREATE OUTFIT</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Search bar -->
      <b-navbar-nav class="ml-auto mr-auto" >
        <b-nav-form>
            <b-form-input class="search-bar" placeholder="Search for inspiration">
            </b-form-input>
            <b-input-group-append class="ml-2">
              <unicon name="search" fill="#844006"></unicon>
            </b-input-group-append>
        </b-nav-form>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item>
          <router-link to="/login">
            <b-button variant="outline-secondary">Sign in</b-button>
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'GeneralNavBar',
  components: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.link {
  color: rgb(53, 22, 2);
}

.search-bar {
    border: 1px solid #844006;
}
.search-bar:focus {
    box-shadow: 0 0 0 0.2rem rgba(132, 64, 0, 0.32);
}
</style>
