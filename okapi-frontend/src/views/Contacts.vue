<template>
  <div class="contacts">
    <UserNavBar v-if="loggedIn"/>
    <HomeNavBar v-else/>
    <b-jumbotron id="contacts" fluid>
        <h1 style="text-align:center;color:white" >Contacts</h1>
    </b-jumbotron>
    <b-jumbotron id="text" fluid>
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

#contacts{
  background: linear-gradient(to top, #521706 0%, #c44409 100%);
  background-size: cover;
  background-position: center;
  background-color: white;
  margin-bottom: 0px;
  border: 1px solid rgb(211, 124, 11);
  margin: auto;
  padding: 25px
}

</style>
