<template>
  <section id="overlay">
    <h2>Favorite Products</h2>
    <Product  :product="favoriteProduct"/>
  </section>
</template>

<script>
import Product from "./Product.vue"
export default {
  components: {Product},
  methods: {
    addFavoriteProduct() {
      this.$store.dispatch("addFavoriteProduct");
    },
  },
  computed: {
    favoriteProduct() {
      return this.$store.state.favoriteProducts[0];
    },
  },
};
</script>

<style lang="scss" scoped>
#overlay {
  border-radius: 5px;
  opacity: 0.9;
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 333;
  width: 50vh;
  height: 60vh;
  padding: 1rem;
  box-sizing: border-box;
  background-color: rgb(255, 252, 252);
  top: 5%;
  left: 60%;
}
</style>
