<template>
  <div class="SingleProductView">
    <Product :product="product"/>
    </div>
</template>

<script>
import Product from '@/components/Product.vue'
export default {
  components: {Product},
  computed: {
    product() {
       return this.$store.state.productsList.find(
        (product) => product.id == this.$route.params.id
      );
    },
  },
};
</script>

<style lang="scss">
.SingleProductView {
  width: 100%;
}
.MainHead {
  display: flex;
  height: 400px;
  width: 100%;
  background-color: rgba(161, 0, 0, 0.7);
  margin-left: auto;
  margin-right: auto;

  .HeadContent {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    display: flex;
    flex-direction: row;

    .ProductImg {
      width: 350px;
      height: 500px;
      background-color: black;
      transform: translateY(30%);
    }

    .ProductHeadInfo {
      width: 50%;
      display: flex;
      flex-direction: column;
      margin-top: auto;
      margin-bottom: 40px;
      margin-left: 20px;

      .ProductTitle {
        font-size: 3rem;
        color: #ffffff;
      }
      .PiravidQuote {
        margin-top: 0;
        width: 58%;
        color: #ffffff;
        text-align: right;
      }

      .ProductPrice {
        display: flex;
        flex-direction: row;
        width: 50%;
        height: 50px;
        justify-content: space-between;

        .BuyButton {
          background-color: #ffffff;
          color: #000000;
          width: 150px;
          height: 40px;
          font-size: 20px;
          font-weight: bold;
          padding: 10px;
          border-radius: 5px;
          border: none;
          cursor: url('~@/assets/icons/David.svg'), auto;
          margin-top: auto;
          margin-bottom: auto;
        }
        h2 {
          font-size: 1.2rem;
          color: black;
        }
      }
    }
  }
}
.ProductMain {
  background-color: #cacaca;
  height: 100vh;
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  padding: 0;

  .ProductDesc {
    margin-top: 10px;
    width: 50%;
    margin-left: auto;
    margin-right: 10%;
    margin-top: 0;

    p {
      padding: 2rem 0rem 0rem 0rem;
      margin: 0;
      font-size: 1.5rem;
    }
  }
}
</style>
