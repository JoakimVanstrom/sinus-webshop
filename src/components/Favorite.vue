<template>
  <section id="overlay">
    <h1>Favorite Products</h1>
    <section v-for="item in favoriteProduct" :key="item.id">
      <div class="productImg">
        <img :src="path + item.imgFile" />
      </div>
      <div class="productDesc">
        <h2>{{ item.title }} {{ item.category }}</h2>
        <p>{{ item.price }} kr</p>

        <router-link :to="'/SingleProductView/' + item.id">
          <button>Go to page</button>
        </router-link>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      path: "http://localhost:5000/images/",
    };
  },
  computed: {
    favoriteProduct() {
      return this.$store.state.favoriteProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
#overlay {
  font-family: Open, sans-serif;
  height: 100%;
  width: 350px;
  background-color: whitesmoke;
  z-index: 10;
  position: fixed;
  margin-left: 0;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  h1 {
    text-align: center;
  }
  section {
    height: 100px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    background-color: whitesmoke;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 100px 1fr;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

    .productImg {
      height: 100px;
      width: 100px;
      margin-left: 0;
      background-color: gray;
      display: flex;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        justify-self: flex-end;
        align-self: flex-end;
      }
    }
    .productDesc {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      height: 100px;
      margin-left: 10px;

      h2 {
        grid-row: 1/1;
        padding: 0;
        margin: 0;
        margin-top: 10px;
      }
      p {
        grid-row: 2/2;
        margin: 0;
        padding: 0;
        margin-top: auto;
        margin-bottom: auto;
      }
      button {
        grid-row: 3/4;
        margin: 5px;
        outline: none;
        border: none;
        background: rgba(161, 0, 0, 0.7);
      }
    }
  }
}
</style>
