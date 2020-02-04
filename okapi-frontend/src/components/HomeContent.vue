<template>
  <div>
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
        <h2 class="ml-5 mb-3">3. Give feedback, and save items to your personal closer.</h2>
    </b-jumbotron>
    <b-container fluid>
      <b-row align-v="center" id="actions" class="text-center">
        <b-col sm="12" md="4" id="women" align-self="center">
            <router-link class="router ml-auto mr-auto mt-5" to="/catalog/woman">
              <h1 class="category">WOMEN</h1>
            </router-link>
        </b-col>
        <b-col sm="12" md="4" id="outfit" align-self="center">
            <router-link class="router ml-auto mr-auto mt-5" to="/adviser">
            <h1 class="category-o">OUTFITS</h1>
            </router-link>
        </b-col>
        <b-col sm="12" md="4" id="men" align-self="center">
            <router-link class="router ml-auto mr-auto mt-5" to="/catalog/man">
            <h1 class="category">MEN</h1>
            </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#intro {
  background-image: url('../assets/background.png');
  background-size: cover;
  background-position: center;
  color: white;
  margin-bottom: 0;
}

#brands {
  color: #2B1E02;
  margin-bottom: 0;
  background-color: white;
}

.router:hover {
    text-decoration: none;
}

@media screen and (min-width: 601px) {
.category {
    color: #2B1E02;
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
