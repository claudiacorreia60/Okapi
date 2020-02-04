<template>
  <div id="app">
    <HomeNavBar />
    <Adviser />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HomeNavBar from "./components/HomeNavBar.vue";
import Adviser from "./components/Adviser.vue";

export default {
  name: "app",
  components: {
    HomeNavBar,
    Adviser
  },
  data() {
    return {
      feedback: ""
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
