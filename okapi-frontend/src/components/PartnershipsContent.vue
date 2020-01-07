<template>
  <div>
    <b-jumbotron id="intro" fluid
        header="Bringing over more than 2 fashion brands."
        lead="And counting! Keep up to date with the most recent partnerships."
    />
    <b-jumbotron id="brands" fluid
        header="Find our top tier partners."
    >
    </b-jumbotron>
    <b-container>
      <b-row align-v="center" class="text-center">
        <b-col sm="12" md="6" id="lionofporches" class="category" align-self="center">
          <a href="https://www.lionofporches.pt/">
            <img src="../assets/lionofporches.png" class="category"/>
          </a>
        </b-col>
        <b-col sm="12" md="6" id="decenio" class="category ml-auto mr-auto" align-self="center">
          <a href="https://www.decenio.com/">
            <img src="../assets/decenio.jpg" class="category"/>
          </a>
        </b-col>
        <b-col sm="12" md="6" id="anasousa" class="category" align-self="center">
          <a href="https://www.temperaturaanasousa.com/">
            <img src="../assets/anasousa.png" class="category"/>
          </a>
        </b-col>
        <b-col sm="12" md="6" id="mingalondon" class="category mb-5" align-self="center">
          <a href="https://www.mingalondon.com/">
            <img src="../assets/mingalondon.png" class="category"/>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'PartnershipsContent',
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
  color: #2B1E02;
  margin-bottom: 0;
  background-color: white;
}
</style>
