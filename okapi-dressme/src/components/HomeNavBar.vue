<template>
  <div>
    <b-navbar class="top-bar white-background">
      <!-- Brand -->
      <b-navbar-brand class="ml-5" title="go to home page"> </b-navbar-brand>

      <!-- Centered nav items -->
      <b-navbar-nav class="ml-auto mr-auto">
        <a @click="goToOkapi()" href="">
          <img alt="Okapi logo" src="../assets/logo.svg" class="logo-image" />
        </a>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="mr-5"> </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HomeNavBar",
  methods: {
    goToOkapi() {
      window.location = "http://localhost:8080/";
    },
    goToOkapiSignIn() {
      window.location = "http://localhost:8080/signIn";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.animate-top {
  position: relative;
  animation: animatetop 0.3s;
}
@keyframes animatetop {
  from {
    top: -200px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.main-content {
  color: #6d3c1d;
  margin-top: 20px;
  margin-bottom: 20px;
}

/* Dropdown Button */
.dropbtn {
  background-color: white;
  color: white;
  padding: 16px;
  font-size: 15px;
  border: none;
  color: #2b1e02;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  width: 100vw;
  left: 0;
  z-index: 10;
  padding-top: 20px;
  padding-left: 400px;
  padding-right: 20px;
  padding-bottom: 40px;
  -webkit-box-shadow: 0px 7px 40px -8px rgba(43, 30, 2, 1);
  -moz-box-shadow: 0px 7px 40px -8px rgba(43, 30, 2, 1);
  box-shadow: 0px 7px 40px -8px rgba(43, 30, 2, 1);
}

/* Links inside the dropdown */
.dropdown-content a {
  color: #2b1e02;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  color: #6d3c1d;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: flex;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  padding-bottom: 10px;
  border-bottom: solid 2px #6d3c1d;
  text-decoration: none;
}

.logo-image {
  width: 130px;
  height: 50px;
}

.white-background {
  background-color: #ffffff;
}

.nav-right {
  color: #2b1e02;
  font-size: 15px;
}

.nav-right:hover {
  padding-bottom: 10px;
  border-bottom: solid 2px #6d3c1d;
  text-decoration: none;
}
</style>
