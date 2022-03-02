<template>
  <main>
    <h1>My Account</h1>
    <OrderHistory class="orders" />
    
  </main>
</template>

<script>
import OrderHistory from "@/components/OrderHistory.vue";
export default {
  components: { OrderHistory },
};
</script>

<style lang="scss" scoped>

</style>
