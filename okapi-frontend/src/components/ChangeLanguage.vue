<template>
  <b-container>
    <b-row class="centered-height" align-v="center" align-h="center">
      <div class="lang">
        <!-- Title -->
        <div class="mb-5">
          <h4>Select idiom</h4>
        </div>

        <!-- Form -->
        <div class="align-center">
          <b-form-checkbox
            v-model="lang"
            value="en"
            button
            button-variant="outline-light"
            class="m-5 box">
            <img src="../assets/en.svg" class="m-5 lang-icon"/>
            <p class="lang-legend">EN</p>
          </b-form-checkbox>
          <b-form-checkbox
            v-model="lang"
            value="pt"
            button
            button-variant="outline-light"
            class="m-5 box">
            <img src="../assets/pt.svg" class="m-5 lang-icon"/>
            <p class="lang-legend">PT</p>
          </b-form-checkbox>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'ChangeLanguage',
  data() {
    return {
      lang: 'en',
    };
  },
  methods: {
    onSubmit() {
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  border-bottom: solid 2px #2B1E02;
  border-top: solid 2px #2B1E02;
  border-left: solid 2px white;
  border-right: none;
}

.align-center {
  text-align: center;
}

.centered-height {
  height: calc(100vh - 110px);
}

.lang {
  width: 70%;
  display: inline-block;
}

h4 {
  text-align: center;
  font-size: 30px;
  color: #2B1E02;
}

.lang-legend {
  font-size: 20px;
  color: #2B1E02;
}

.lang-icon {
  width: 40%;
  height: 40%;
}
</style>
