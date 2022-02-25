<template>
  <header class="header">
    <img src="@/assets/icons/pirateship.png" alt="" />
    <router-link class="head-title" to="/"><h1>Piravid</h1></router-link>

    <Favorite v-if="overlay" />
    <div>
      <img src="@/assets/icons/shopping-cart.svg" alt="" @click="Cart" />

      <img
        @click="toggleOverlay"
        src="@/assets/icons/favorite-heart.svg"
        alt=""
      />
      <router-link to="/login"
        ><img src="@/assets/icons/identity.svg" alt=""
      /></router-link>
    </div>
  </header>
</template>

<script>
import Favorite from "@/components/Favorite.vue";
export default {
  components: { Favorite },
  methods: {
    toggleOverlay() {
      this.$store.dispatch("toggleOverlay");
    },
    toggleLoginPage() {
      this.$store.dispatch("toggleLoginPage");
    },
    Cart() {
      this.$router.push("/Cart");
    },
    addFavoriteProduct() {
      this.$store.dispatch("addFavoriteProduct");
    },
  },
  computed: {
    overlay() {
      return this.$store.state.overlay;
    },
    showLoginPage() {
      return this.$store.state.showLogin;
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Pirata+One&display=swap");
header {
  background-color: #131313;
  width: 100%;
  height: 76;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: auto;
  z-index: 0;
  img {
    grid-row: 1/3;
    grid-column: 5/5;
    width: 5rem;
    border-radius: 50%;
    padding: 1rem 0;
    justify-self: center;
  }

  div {
    grid-column: 9/11;
    grid-row: 1;
    justify-self: end;
    align-self: center;
    img {
      width: 2rem;
      padding: 0.5rem;
    }
  }
  input {
    grid-column: 9/11;
    grid-row: 2;
    padding-bottom: 0;
    align-self: end;
    border: none;
    outline: none;
  }
}
.login-page {
  display: grid;
  z-index: 3;
  position: absolute;
  top: 60px;
  left: 1500px;
}

.head-title {
  grid-row: 1/3;
  grid-column: 7/10;
  align-self: center;
  margin-left: 50%;
  font-family: "Pirata One", cursive;
  color: white;
  font-size: 40px;
  margin: 0;
  text-decoration: none;
  h1 {
    margin: 0;
  }
}
</style>
