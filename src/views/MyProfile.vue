<template>
  <main>
    <h1>My Account</h1>

    <div class="orders" v-for="item in orderHistory" :key="item.id">
      <p>{{ item.id }}</p>
      <p>{{ item.amount }}</p>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    orderHistory() {
      return this.$store.state.orderHistory;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
