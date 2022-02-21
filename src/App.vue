<template>
  <div id="app">
    <Header />

    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, Footer },
  mounted() {
    return this.$store.dispatch("fetchProducts");
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  display: grid;
  place-items: center;
}
</style>
