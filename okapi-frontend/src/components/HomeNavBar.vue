<template>
  <b-navbar toggleable="lg" class="fixed-top white">
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
      <b-navbar-nav class="ml-auto mr-auto">
        <b-form-group>
          <b-form-input
            v-model="search"
            placeholder="Search for inspiration"
            class="search-bar"
          ></b-form-input>
        </b-form-group>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-item>
          <b-form-select v-model="lang" class="lang-icon">
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </b-form-select>
        </b-nav-item>

        <b-nav-item>
          <router-link to="/login">
            <b-button>Sign in</b-button>
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'HomeNavBar',
  data() {
    return {
      search: '',
      lang: 'en',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  background-color: #6D3C1D;
}

.white {
  background-color: #ffffff;
}

.lang-icon {
  background: url('../assets/globe.svg') no-repeat scroll 10px 11px;
  background-size: 18px;
  padding-left:35px;
  border-top: solid 1px #6D3C1D;
  border-bottom: solid 1px #6D3C1D;
  border-left: solid 1px #6D3C1D;
  border-right: solid 1px #6D3C1D;
  color: #6D3C1D;
  padding-right: 10px;
}

.link {
  color: #6D3C1D;
}

.search-bar {
  background: url('../assets/search.svg') no-repeat scroll 13px 11px;
  background-size: 17px;
  padding-left:45px;
  border-bottom: 1px solid #6D3C1D;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
}
.search-bar:focus {
  border: 1px solid #6D3C1D;
  border-radius: 0.25rem;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a1a1a1;
  font-size: 14px;
}
</style>
