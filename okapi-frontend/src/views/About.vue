<template>
  <b-container class="about">
    <div>
      <br><br>
      <h4>About Us!</h4>
      </div>
      <br><br>
    <div id="text">
        <h5>Okapi is an intelligent fashion adviser that helps you getting
          ready and fashionable for every occasion of your day. </h5>
        <h5> With Okapi you can search for any piece of clothing that you
          like and try to combine it with others in order to complete your dream outfit.
          You can also resort to our AI advisor to try to fill in the gaps of your outfit
          or to create an entire new one from scratch. You can also give feedback about an item or
          save it in your personal closet for further outfit combining usage.</h5>
    </div>
    <br><br>
    <div class="row mb-5">
      <div class="column">
    <img src="../assets/paulinha_1.jpg" style="width:100%">
    <img src="../assets/pollard.jpg" style="width:100%">
  </div>
  <div class="column">
    <img src="../assets/saiyan.jpg" style="width:100%">
    <img src="../assets/tippler.png" style="width:100%">
  </div>
  <div class="column">
    <img src="../assets/skits.jpg" style="width:100%">
    <img src="../assets/bolt.jpg" style="width:100%">
  </div>
  <div class="column">
    <img src="../assets/slav.jpg" style="width:100%">
    <img src="../assets/sabatico.jpg" style="width:100%">
  </div>
</div>
  </b-container>
</template>

<script></script>
<style lang="scss">

h4 {
  text-align: center;
  color: #2B1E02;
}

h5 {
  color: #2B1E02;
}

.about{
  background-color: white;
  margin-top: -20px;
}

#text {
  background-color: white;
  margin-top: -20px;
}

#team1{
  background-color: white;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
  margin-top: -13px;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each
other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}

* {
  box-sizing: border-box;
}


</style>
