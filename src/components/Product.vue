<template>
  <div class="CardComponent">
    <div class="favorite-product">
      <img src="@/assets/icons/favorite-heart.svg" @click="addToFavorite()" />
    </div>

    <div class="CardHolder">
      <img :src="path + product.imgFile" alt="" />
    </div>
    <div class="CardBottom">
      <div class="left">
        <div class="content">
          <router-link :to="'/SingleProductView/' + product.id">
            <h2>{{ product.title }} {{ product.category }}</h2>
            <p>{{ product.price }}kr</p>
          </router-link>
        </div>
      </div>
      <div class="right">
        <button @click="addToCart()">
          <img src="@/assets/icons/risk-skull-2.png" alt="" />
          Pirate It!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      path: "http://localhost:5000/images/",
    };
  },
  methods: {
    addToFavorite() {
      this.$store.dispatch("addFavoriteProduct", this.product);
      console.log(this.product.title + "Added to favorite");
    },
    addToCart() {
      this.$store.dispatch("addToCart", this.product);
    },
  },
};
</script>

<style scoped lang="scss">
.favorite-product {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background: rgb(214, 53, 53);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: url("~@/assets/icons/David.svg"), auto;
  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.9);
    background-color: peachpuff;
  }
}
.CardComponent {
  background: white;
  font-family: sans-serif;
  max-width: 250px;
  height: 400px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  cursor: url("~@/assets/icons/David.svg"), auto;
  /*  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  } */
  .CardHolder {
    width: 100%;
    height: 80%;
    background: whitesmoke;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .CardBottom {
    height: 20%;
    width: 100%;
    display: flex;
    .left {
      width: 70%;
      .content {
        padding: 10px;
        h2 {
          font-size: 1.1rem;
          padding: 0;
          margin: 0;
          margin-top: 10px;
        }
        p {
          margin-top: 0px;
          font-size: 1.1rem;
        }
      }
    }
    .right {
      width: 30%;
      margin-left: auto;
      button {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        border-left: 1px solid gray;
        cursor: pointer;
        &:hover {
          background: rgb(255, 97, 97);
        }
      }
      img {
        transform: scale(0.8);
      }
    }
  }
}
a {
  text-decoration: none;
  color: black;
}

@media only screen and (min-width: 600px) {
  .CardComponent {
    overflow: hidden;
  }
}
</style>
