<template>
  <b-container>
    <b-row class="centered-height" align-v="center" align-h="center">
      <div class="login">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/">
            <img
              alt="Okapi small logo"
              src="../assets/small-logo.svg"
              class="small-logo-image"
              title="go to home page">
          </router-link>
        </div>

        <!-- Title -->
        <h4>Welcome back!</h4>
        <p class="details">Please enter your details below</p>

        <!-- Form -->
        <b-form
          @submit.prevent="onSubmit"
          @reset.prevent="onReset">
          <b-form-group
            id="input-group-1"
            label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Email"
              class="input-email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              required
              placeholder="Password"
              class="input-password"
              type="password"
            ></b-form-input>
          </b-form-group>

          <b-row>
            <!-- Remember me -->
            <b-col>
              <b-form-checkbox
                v-model="form.remember"
                class="grey-text"
                size="sm">
                  Remember me
                </b-form-checkbox>
            </b-col>

            <!-- Forgot password -->
            <b-col>
              <router-link
                class="forgot-password"
                to="/password_recovery">Forgot your password?</router-link>
            </b-col>
          </b-row>

          <!-- Buttons -->
          <div>
            <b-button class="signin-button" type="submit">Sign in</b-button>
          </div>
        </b-form>

        <!-- Sign up -->
        <b-row align-h="center">
          <p class="grey-text">Don't have an account?
            <router-link
              class="signup"
              to="/signup">Sign up!</router-link>
          </p>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false,
      },
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
.small-logo-image {
  width: 170px;
  height: 170px;
}

h4 {
  text-align: center;
  color: #2B1E02;
  margin-bottom: 3px;
}

.forgot-password {
  color: #999999;
  font-size: 13px;
  margin-top: 20px;
}

.forgot-password:hover {
  color: #3a3a3a;
  text-decoration: none;
}

.grey-text {
  color: #999999;
  font-size: 13px;
  margin-top: 20px;
}

.signin-button {
  margin-top: 20px;
  margin-bottom: 60px;
  background-color: #2B1E02;
  width: 100%;
}

.signin-button:hover {
  background-color: #6D3C1D;
}

.signup {
  color: #2B1E02;
  font-size: 16px;
}

.signup:hover {
  color: #6D3C1D;
  text-decoration: none;
}

.details {
  text-align: center;
  color: #999999;
  font-size: 11px;
  margin-bottom: 30px
}

.input-password {
  background: url('../assets/lock.svg') no-repeat scroll 10px 11px;
  background-size: 13px;
  padding-left:35px;
}

.input-email {
  background: url('../assets/email.svg') no-repeat scroll 10px 12px;
  background-size: 13px;
  padding-left:35px;
}

.text-align-center{
  text-align: center;
}

.centered-height {
  height: calc(100vh - 110px);
}

.logo {
  text-align: center;
  margin-bottom: 20px;
}

.login {
  width: 26%;
  display: inline-block;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #999999;
  font-size: 13px;
}
</style>
