<template>
  <main>
    <div class="return-arrow">
      <img src="@/assets/icons/arrow-return-left.svg" height="50px" />
    </div>
    <h1 v-if="!cart.length">No items in cart.</h1>

    <div v-if="cart.length" class="info">
      <h1>Mina Piravidsar</h1>
      <h2>Quantity</h2>
      <h2>Price</h2>
    </div>

    <section v-for="item in cartGetter" :key="item.id" class="products">
      <img :src="path + item.imgFile" alt="" />
      <p>Piravid {{ item.title }} {{ item.category }}</p>

      <section class="amount-btns">
        <button class="remove-btn" @click="removeFromCart()">
          <img src="@/assets/icons/delete.svg" />
        </button>
        <button @click="decrementBtn(item)">-</button>
        <button @click="incrementBtn(item)">+</button>
        <h1>{{ item.amount }}</h1>
    
      </section>

      
      <section class="price">
        <p>{{ item.price }} SEK</p>
      </section>
    </section>

    <div class="total-cost">
      <h1>Total cost</h1>
      <p>{{ cartTotal }} kr</p>
    </div>

    <button class="checkout-btn">
      <router-link to="/Checkout">Checkout</router-link>
    </button>
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

.amount-btns {  
  display: flex;
  align-items: center;
  margin: 5px;
}
.return-arrow {
  display: grid;
  place-items: left;
}
.info {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid #000;
}

button {
  background: rgba(161, 0, 0, 0.7);
  border: none;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
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
  width: 70%;
  padding: 10px;
  img {
    width: 40%;
    height: 100px;
    object-fit: contain;
  
  }
  .remove-btn {
    background-color: white;
    width: 120px;
    cursor: pointer;
    img {
      background: none;
      width: 25px;
    }
  }
}
.price {
  padding-left: 5rem;
}
.checkout-btn {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  margin-top: 20px;
}
</style>
