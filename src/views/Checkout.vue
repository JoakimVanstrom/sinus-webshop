<template>
  <main>
    <div class="sign-in">
      <button>SIGN IN</button>
      <p>sign in for faster checkout</p>
      <p>Or CREATE ACCOUNT</p>
    </div>

    <div class="form-group">
      <h1>DELIVERY ADDRESS</h1>
      <input
        type="street"
        class="form-control"
        placeholder="Street"
      />

      <input
        type="city"
        class="form-control"
        id="inputCity"
        placeholder="City"
      />

      <input
        type="state"
        class="form-control"
        id="inputState"
        placeholder="State"
      />

      <input type="zip" class="form-control" id="inputZip" placeholder="Zip" />

      <input
        type="county"
        class="form-control"
        id="inputCounty"
        placeholder="County"
      />

      <input
        type="country"
        class="form-control"
        id="inputCountry"
        placeholder="Country"
      />

      <div class="payment-group">
        <h1>PAYMENT</h1>

        <label for="cardnumber" class="card-number">
          <input type="numbers" placeholder="Card Number" />
        </label>

        <label for="cardvalid" class="card-valid">
          <input type="text" placeholder="valid until" />
        </label>
        <label for="cardcc" class="card-ccv">
          <input type="numbers" placeholder="ccv" />
        </label>
      </div>
    </div>

  </main>
</template>

<script>
export default {};
</script>

<style>
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
  margin: 5px 5px;
}

.form-group {
  /*  margin: 20px auto; */
  width: 450px;
}

.form-control {
  float: left;
}

#inputStreet {
  width: 100%;
}

#inputCity {
  width: 50%;
}

#inputState {
  width: 15%;
}

#inputZip {
  width: 28%;
}

#inputCounty {
  width: 45%;
}

#inputCountry {
  width: 50%;
}

.payment-group {
  display: grid;
  place-items: left;
  margin: 150px auto;
  gap: -2px;
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
