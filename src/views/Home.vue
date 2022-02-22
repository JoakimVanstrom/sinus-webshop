<template>
  <div class="home">
    <CardComponent class="kollakorten" v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue'
export default {
  components: {CardComponent},
  computed: {
    products(){
      return this.$store.state.productsList
    }
  },
  methods: {
  },

}
</script>


<style scoped lang="scss">
.home{
  display: flex;
  flex-direction: row;
}
</style>
