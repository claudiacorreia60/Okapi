<template>
  <div class="about">
    <UserNavBar v-if="loggedIn"/>
    <HomeNavBar v-else/>
    <b-jumbotron id="about" fluid>
        <h1 style="text-align:center;color:white" >About Us!</h1>
    </b-jumbotron>
    <b-jumbotron id="text" fluid>
        <h4 style="color:black;" >Okapi is an intelligent fashion adviser that helps you getting
          ready and fashionable for every occasion of your day. </h4>
        <h4 style="color:black;" > With Okapi you can search for any piece of clothing that you
          like and try to combine it with others in order to complete your dream outfit.
          You can also resort to our AI advisor to try to fill in the gaps of your outfit
          or to create an entire new one from scratch. You can also give feedback about an item or
          save it in your personal closet for further outfit combining usage.</h4>
    </b-jumbotron>
    <b-jumbotron id="team1" fluid>
      <h3 style="text-align:center;color:black">Meet our Team</h3>
      <b-row class="image" align-h="center" align-v="center">
        <img class="icon" alt="Okapi team" src="../assets/logoteam.png">
        <img class="team" src="../assets/team.png" style="center">
      </b-row>
       </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNavBar from '@/components/HomeNavBar.vue';
import UserNavBar from '@/components/UserNavBar.vue';

export default {
  name: 'about',
  components: {
    HomeNavBar,
    UserNavBar,
  },
  data() {
    return {
      data: null,
    };
  },
};
</script>

<style lang="scss">
#about {
  background: linear-gradient(to top, #521706 0%, #c44409 100%);
  background-size: cover;
  background-position: center;
  background-color: white;
  margin-bottom: 0px;
  border: 1px solid rgb(211, 124, 11);
  margin: auto;
  padding: 25px
}

#text {
  margin-bottom: 0;
  background-color: white;


}

#team1{
  background-color: white;
}

.image:hover .team{
  display: inline;
}

.icon{
  width: 7cm;
  height: 6cm
}

.image .team{
        display: none;
        position: absolute;
        top: 0;
        left: 10;
        z-index:99;
    }

.image{
  margin-left: auto;
  margin-right: auto;
  width: 15%;
  height: 150px;
}

</style>
