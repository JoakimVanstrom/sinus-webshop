<template>
  <div class="home">
    <router-link
      v-for="item in products"
      :key="item.id"
      :to="'/SingleProductView/' + item.id"
    >
      <Product :product="item" />
    </router-link>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
export default {
  components: { Product },
  computed: {
    products() {
      return this.$store.state.productsList;
    },
  },
  methods: {},
};
</script>
