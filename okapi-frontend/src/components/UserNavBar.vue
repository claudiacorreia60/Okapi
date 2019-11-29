<template>
  <b-navbar toggleable="lg">

    <!-- Okapi Logo -->
    <b-navbar-brand>
      <router-link to="/">
        <img alt="Okapi logo" src="../assets/logo.png">
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Left aligned nav items -->
      <b-navbar-nav>
        <b-nav-item>
          <router-link class="link" to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="link" to="/catalog">Catalog</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="link" to="/catalog">Advisor</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="link" to="/catalog">Virtual Closet</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'UserNavBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.link {
  color: gray;
}
</style>
