<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {Header}
}
</script>

<style lang="scss">
html, body{
  margin: 0;
  padding: 0;
}

#app{
  display: grid;
  place-items: center;
}
</style>
