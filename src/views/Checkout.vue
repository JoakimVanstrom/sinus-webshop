<template>
  <main>
    <form action="" @submit.prevent="sendOrder">
      <div class="address-group">
        <h1>ADDRESS</h1>
        <!-- <label for="name" class="name">
          <input type="text" placeholder="your name" v-model="order.name" />
        </label> -->
        <label v-if="!address" for="street" class="street">
          <input type="text" placeholder="street" v-model="order.shippingAdress.street" />
        </label>
        <label v-if="address" for="street" class="street">
          <input type="text" placeholder="street" v-model="address.street" />
        </label>
        <label v-if="!address" for="Zip" class="zip">
          <input type="text" placeholder="zip code" v-model="order.shippingAdress.zip" />
        </label>
        <label v-if="address" for="Zip" class="zip">
          <input type="text" placeholder="zip code" v-model="address.zip"/>
        </label>
        <label v-if="!address" for="City" class="city">
          <input type="text" placeholder="city" v-model="order.shippingAdress.city" />
        </label>
        <label v-if="address" for="City" class="city">
          <input type="text" placeholder="city" v-model="address.city" />
        </label>
      </div>

      <div class="payment-group">
        <h1>PAYMENT</h1>
        <label for="cardnumber" class="card-number">
          <input
            type="numbers"
            placeholder="Card Number"
            v-model="order.payment.cardnumber"
          />
        </label>
        <label for="cardvalid" class="card-valid">
          <input
            type="text"
            placeholder="valid until"
            v-model="order.payment.cardvalid"
          />
        </label>
        <label for="cardcc" class="card-ccv">
          <input type="numbers" placeholder="ccv" v-model="order.payment.ccv" />
        </label>
      </div>
      <button class="confirm-order-btn">
        Confirm order
      </button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      order: {
        "shippingAdress": {  
          "street": "",
          "zip": "",
          "city": "",
        },
        payment: {
          cardnumber: "",
          cardvalid: "",
          ccv: "",
        },
        items: this.$store.state.cart,
      },
    };
  },
  methods: {
    sendOrder() {
      this.order.items = this.$store.state.cart;
      this.$store.dispatch("sendOrder", this.order);
      this.$store.dispatch("emptyCart");
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    address() {
      return this.$store.state.address;
    },
  },
};
</script>

<style scoped>
.confirm-order-btn {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(255, 255, 255);
}
form {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
}
.sign-in {
  display: grid;
  place-items: left;
  margin-right: 100rem;
}
.sign-in p {
  margin-top: 0;
  margin-bottom: 0;
  color: #0f0f0f;
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
input,
label {
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 5px;
}

.card-number {
  height: 20px;
}
.card-ccv {
  font-size: 12px;
  height: 20px;
}
.card-valid {
  font-size: 12px;
  height: 20px;
}
</style>
