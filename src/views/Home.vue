<template>
  <div class="home">
    <ProductItems v-for="item in products" :key="item.id" :product="item" />
  </div>
</template>

<script>
import ProductItems from '@/components/ProductItems.vue'
export default {
  components: {ProductItems},
  computed: {
    products(){
      return this.$store.state.productsList
    }
  },
  methods: {
  },

}
</script>
