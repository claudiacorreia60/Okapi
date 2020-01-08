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
        <h4>Welcome!</h4>
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
              v-model="form.name"
              type="text"
              required
              placeholder="What's your name?"
              class="input-name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.email"
              type="email"
              required
              placeholder="Email"
              class="input-email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label-for="input-3">
            <b-form-input
              id="input-1"
              v-model="form.birthday"
              type="date"
              required
              placeholder="What's your birthday?"
              class="input-birthday"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Gender">
            <b-form-radio-group
                v-model="form.gender"
                :options="options"
                name="radio-inline"
            ></b-form-radio-group>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.password"
              required
              placeholder="Password"
              class="input-password"
              type="password"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-5"
            label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="form.confirmPassword"
              required
              placeholder="Confirm password"
              class="input-password"
              type="password"
            ></b-form-input>
          </b-form-group>

          <!-- Buttons -->
          <div>
            <b-button @click="register()" class="signin-button" type="submit">Sign up</b-button>
          </div>
        </b-form>

        <!-- Sign up -->
        <b-row align-h="center">
          <p class="grey-text">Already have an account?
            <router-link
              class="signup"
              to="/signin">Sign in!</router-link>
          </p>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        birthday: new Date(),
      },
      options: [
        { text: 'Male', value: 'm' },
        { text: 'Female', value: 'f' },
      ],
    };
  },
  methods: {
    register() {
        fetch("http://localhost:3333/users/", {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            method: "POST",
            body: JSON.stringify({
                name: this.form.name,
                username: this.form.email.slice(0,6),
                gender: this.form.gender,
                birthday: this.form.birthday,
                photo: " "
            })
        })
        .then(r => r.json())
        .then(r => {
                console.log(r);
                localStorage.setItem('user', JSON.stringify(r.data));
                this.$root.$emit('sign-in', '');
                this.$router.push('profiling');
            })
        .catch(err => console.log(err));
    },
    onSubmit() {
      // alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped lang="scss">
span {
  color: #999999;
  font-size: 13px;
  margin-top: 20px;
}

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

.input-name {
  background: url('../assets/user.svg') no-repeat scroll 10px 11px;
  background-size: 13px;
  padding-left:35px;
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
