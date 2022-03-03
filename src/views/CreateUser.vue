<template>
  <div class="container">
    <h4>Create account</h4>
    <form @submit.prevent="createUser">
      <label for="email">Email</label>
      <input type="text" name="email" v-model="email" />
      <label for="password">Password</label>
      <input type="password" name="password" v-model="password" />
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" />
      <label for="city">City</label>
      <input type="text" name="city" v-model="city" />
      <label for="street">Street</label>
      <input type="text" name="street" v-model="street" />
      <label for="zip">Zip</label>
      <input type="text" name="zip" v-model="zip" />
     <button>Create Account</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      city: "",
      street: "",
      zip: "",
    };
  },
  methods: {
    createUser() {
      this.$store.dispatch("registerUser", {
        email: this.email,
        password: this.password,
        name: this.name,
        city: this.city,
        street: this.street,
        zip: this.zip,
      });
      return this.$router.go(-1)
    },
  },
  computed: {
      user() {
      return this.$store.state.userRole;
    },
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
