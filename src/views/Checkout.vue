<template>
  <main>
    <form action="">
      <div class="address-group">
        <h1>ADDRESS</h1>

        <label for="name" class="name">
          <input type="text" placeholder="your name" v-model="order.name" />
        </label>

        <label for="street" class="street">
          <input type="text" placeholder="street" v-model="order.street" />
        </label>
        <label for="Zip" class="zip">
          <input type="text" placeholder="zip code" v-model="order.zip" />
        </label>
        <label for="City" class="city">
          <input type="text" placeholder="city" v-model="order.city" />
        </label>
      </div>

      <div class="payment-group">
        <h1>PAYMENT</h1>

        <label for="cardnumber" class="card-number">
          <input type="numbers" placeholder="Card Number" v-model="order.cardnumber" />
        </label>

        <label for="cardvalid" class="card-valid">
          <input type="text" placeholder="valid until" v-model="order.cardvalid"/>
        </label>
        <label for="cardcc" class="card-ccv">
          <input type="numbers" placeholder="ccv" v-model="order.ccv"/>
        </label>
      </div>
    </form>
    <button @click="emptyCart() + $router.push('/OrderConfirm')" class="confirm-order-btn">Confirm order</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      order: {
        name: '',
        street: '',
        zip: '',
        city: '',
        cardnumber: '',
        cardvalid: '',
        ccv: ''
      }
    }
  },
  methods: {
    emptyCart() {
      this.$store.dispatch("emptyCart");
    },
  }
};
</script>

<style scoped>
.confirm-order-btn {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  margin-top: 20px;
}
form {
  display: flex;
  justify-content: flex-start;
}
.submit-order {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: #c9c6c6 0px 0px 10px;
  margin: 30px;
  padding: 30px;
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
