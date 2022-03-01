<template>
<div>
  <div class="container">
    <h4>Log in</h4>
    <form @submit.prevent="login">
      <label>Email</label>
      <input type="text" v-model="email" placeholder="Email"/>
      <label>Password</label>
      <input type="password" v-model="password" placeholder="Password"/>
      <button>Log in</button>
    </form>
    <h3>Or <router-link to="/createuser">Create an account</router-link></h3>
  </div>
  </div>
</template>

<script>
export default {
  data(){return{
    email: "admin@example.com",
    password: "password",
  }},
  computed: {
      userEmail(){
      return this.$store.state.email
    },
  },
  methods: {
      login(){
      this.$store.dispatch('authenticate',
      {email: this.email, password: this.password}
      )
    }
  }
};
</script>

<style scoped lang="scss">

.container {
  display: grid;
  background-color: whitesmoke;
  h4 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 900;
  }
}
form {
  display: flex;
  flex-direction: column;

  label {
    margin: 0 1rem;
  }

  input {
    margin: 1rem;
    padding: 1rem 1.3rem;
  }

  button {
    padding: 1rem 1.3rem;
    background: rgb(138, 18, 18);
    margin: 1rem;
    border: none;
    border-radius: 0.4rem;
    color: white;
  }
}
</style>
