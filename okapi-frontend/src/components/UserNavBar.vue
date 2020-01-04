<template>
  <div>
    <b-navbar toggleable="lg" class="top-bar white-background">
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
            <div class="dropdown">
              <router-link to="/catalog/woman">
                <button
                  class="dropbtn link m-2">WOMEN</button>
              </router-link>
              <!--<button
                @mouseover="showWomenTab"
                class="dropbtn link m-2">WOMEN</button>-->
            </div>
          </b-nav-item>
          <b-nav-item>
            <div class="dropdown">
              <router-link to="/catalog/man">
                <button
                class="dropbtn link m-2">MEN</button>
              </router-link>
              <!--<button
                @mouseover="showMenTab"
                class="dropbtn link m-2">MEN</button>-->
            </div>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/adviser" class="link ml-2">
              <div class="dropdown">
                <button class="dropbtn link m-2">CREATE OUTFIT</button>
              </div>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/virtualCloset" class="link ml-2">
              <div class="dropdown">
                <button class="dropbtn link m-2">VIRTUAL CLOSET</button>
              </div>
            </router-link>
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
          <b-nav-item title="go to sign in page">
            <router-link to="/signin" class="nav-right ml-2">
              <unicon name="user" fill="#2B1E02"></unicon>
              <span class="ml-2">My Account</span>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container>
      <b-row
        id="womenTab"
        class="dropdown-content animate-top"
        align-h="start"
        @mouseleave="hideTabs">
        <b-col cols="3">
          <a class="main-content" href="#">CLOTHING</a>
          <a class="content" href="#">Dresses</a>
          <a class="content" href="#">Tops</a>
          <a class="content" href="#">Skirts</a>
          <a class="content" href="#">Jackets and Coats</a>
          <a class="content" href="#">Sweatshirts</a>
          <a class="content" href="#">Trousers</a>
          <a class="content" href="#">Polo Shirts</a>
          <a class="content" href="#">Jeans</a>
          <a class="content" href="#">Shirts</a>
          <a class="content" href="#">T-Shirts</a>
          <a class="content" href="#">Shorts</a>
          <a class="content" href="#">Swimwear</a>
          <a class="content" href="#">Sport Clothing</a>
        </b-col>
        <b-col cols="3">
          <a class="main-content" href="#">SHOES</a>
          <a class="content" href="#">Trainers</a>
          <a class="content" href="#">Boots</a>
          <a class="content" href="#">Sandals</a>
          <a class="content" href="#">Flip flops</a>
          <a class="content" href="#">Heels</a>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row
        id="menTab"
        class="dropdown-content animate-top"
        align-h="start"
        @mouseleave="hideTabs">
        <b-col cols="3">
          <a class="main-content" href="#">CLOTHING</a>
          <a class="content" href="#">Jackets and Coats</a>
          <a class="content" href="#">Sweatshirts</a>
          <a class="content" href="#">Trousers</a>
          <a class="content" href="#">Polo Shirts</a>
          <a class="content" href="#">Jeans</a>
          <a class="content" href="#">Shirts</a>
          <a class="content" href="#">T-Shirts</a>
          <a class="content" href="#">Shorts</a>
          <a class="content" href="#">Suits</a>
          <a class="content" href="#">Swimwear</a>
          <a class="content" href="#">Sport Clothing</a>
        </b-col>
        <b-col cols="3">
          <a class="main-content" href="#">SHOES</a>
          <a class="content" href="#">Trainers</a>
          <a class="content" href="#">Boots</a>
          <a class="content" href="#">Sandals</a>
          <a class="content" href="#">Flip flops</a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HomeNavBar',
  data () {
      return {
      }
  },
  methods: {
    /*showWomenTab() {
      document.getElementById('womenTab').style.display = 'none';
      document.getElementById('menTab').style.display = 'none';
      document.getElementById('womenTab').style.display = 'flex';
    },
    showMenTab() {
      document.getElementById('womenTab').style.display = 'none';
      document.getElementById('menTab').style.display = 'none';
      document.getElementById('menTab').style.display = 'flex';
    },
    hideTabs() {
      document.getElementById('womenTab').style.display = 'none';
      document.getElementById('menTab').style.display = 'none';
    },*/
  },
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
  position:relative;
  animation:animatetop 0.3s
}
@keyframes animatetop{
  from{
    top:-200px;
    opacity:0
  }
  to{
    top:0;
    opacity:1
  }
}

.main-content {
  color: #6D3C1D;
  margin-top: 20px;
  margin-bottom: 20px;
}

/* Dropdown Button */
.dropbtn {
  background-color: white;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
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
  -webkit-box-shadow: 0px 7px 40px -8px rgba(43,30,2,1);
  -moz-box-shadow: 0px 7px 40px -8px rgba(43,30,2,1);
  box-shadow: 0px 7px 40px -8px rgba(43,30,2,1);
}

/* Links inside the dropdown */
.dropdown-content a {
  color: #2B1E02;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  color: #6D3C1D;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: flex;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  padding-bottom: 10px;
  border-bottom: solid 2px #6D3C1D;
  text-decoration: none;
}

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
