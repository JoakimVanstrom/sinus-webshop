<template>
  <div class="wrapper">
    <div
      class="orders"
      v-for="item in orderHistory"
      :key="item.id"
      :class="{
        'order-history-item-inProcess': item.status === 'inProcess',
        'order-history-item-canceled': item.status === 'canceled',
        'order-history-item-shipped': item.status === 'shipped',
      }"
    >
      <p>Status: {{ item.status }}</p>
      <p>Order ID: {{ item.id }}</p>
      <div class="info" v-for="items in item.items" :key="items.id">
        <p>Product ID: {{ items.ProductId }}</p>
        <p>Price: {{ items.price }} kr</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    orderHistory() {
      return this.$store.state.orderHistory;
    },
  },
  created() {
    this.$store.dispatch("getOrders");
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 400px;
  background: whitesmoke;

  .orders {
    padding: 10px;
    border: 1px solid black;
    margin: 10px;

    .info {
      padding: 10px;
      border: 1px solid black;
      margin: 10px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.order-history-item-inProcess {
  background: yellow;
  .info {
      background: whitesmoke;
  }
}
.order-history-item-canceled {
  background: red;
  .info {
      background: whitesmoke;
  }
}
.order-history-item-shipped {
  background: green;
  .info {
      background: whitesmoke;
  }
}
</style>
