<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style lang="scss">
#app {
  font-family: 'Lato','Lato-int','Helvetica Neue',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.grey-text {
  color: #a1a1a1;
  font-size: 13px;
  margin-top: 20px;
}
</style>
