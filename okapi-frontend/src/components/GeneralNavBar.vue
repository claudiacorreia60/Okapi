<template>
  <b-navbar toggleable="lg">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Left aligned nav items -->
      <b-navbar-nav>
        <b-nav-item>
          <router-link class="link" to="/women">WOMEN</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="link" to="/men">MEN</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Okapi Logo -->
        <b-navbar-brand class="ml-auto">
        <router-link to="/">
          <img alt="Okapi logo" src="../assets/logo.png">
        </router-link>
      </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.link {
  color: rgb(53, 22, 2);
}
</style>
