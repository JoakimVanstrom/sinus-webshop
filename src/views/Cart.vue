<template>
  <main>
    <div class="return-arrow">
      <img src="@/assets/icons/arrow-return-left.svg" height="50px" />
    </div>

    <div class="info">
      <h1>Mina Piravidsar</h1>
      <h2>Quantity</h2>
      <h2>Price</h2>
    </div>

    <section v-for="item in cartGetter" :key="item.id" class="products">
      <img :src="path + item.imgFile" alt="" width="10%" />
      <h3>Piravid {{ item.title }} {{ item.category }}</h3>
      <button @click="decrementBtn(item)">-</button>
      <button @click="incrementBtn(item)">+</button>
      <h1>{{ item.amount }}</h1>
      <h3>{{ item.price }} SEK</h3>
      <button @click="removeFromCart()">d</button>
    </section>

    <div class="checkout">
      <h1>Order Details</h1>
      <h2>Total cost</h2>
      <p>{{ cartTotal }} kr</p>
      <button><router-link to="/Checkout">Checkout</router-link></button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      path: "http://localhost:5000/images/",
    };
  },
  methods: {
    decrementBtn(item) {
      this.$store.dispatch("updateCartItem", {
        id: item.id,
        amount: item.amount - 1,
      });
    },
    incrementBtn(item) {
      this.$store.dispatch("updateCartItem", {
        id: item.id,
        amount: item.amount + 1,
      });
    },
    removeFromCart(item) {
      this.$store.dispatch("removeFromCart", item);
    },
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartGetter() {
      return this.$store.getters.cart;
    },
    cartTotal() {
      return this.$store.getters.totalPrice;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
}
.return-arrow {
  display: grid;
  place-items: left;
}
.info {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  border-bottom: 1px solid #000;
}

.checkout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 35rem;
}

button {
  background: rgba(161, 0, 0, 0.7);
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
a {
  text-decoration: none;
  color: #fff;
}

.products {
  border-bottom: rgb(224, 216, 216) 1px solid;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  width: 60%;
  padding: 5px;
  img {
    width: 30%;
    height: 100px;
    object-fit: contain;
    background: rgb(214, 209, 209);
  }
  button {
    background-color: #e83f57;
    color: white;
    border: none;
    margin: 5px;
    padding: 5px;
    width: 20px;
    border-radius: 1px;
    cursor: pointer;
  }
  h3 {
    margin-left: 25px;
    font-size: 1.1rem;
  }
}
</style>
