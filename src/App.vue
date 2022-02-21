<template>
  <div id="app">
    <Header />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/Cart">Cart</router-link>
    </nav>
    <Login />
    <router-view />
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Header from "@/components/Header.vue";
export default {
  components: { Header, Login },
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
