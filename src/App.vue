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
::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

#app {
  display: grid;
  place-items: center;
}
</style>
