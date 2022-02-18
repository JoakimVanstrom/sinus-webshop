<template>
  <main>
    <h1 class="h1">Mina Piravidsar</h1>

    <div class="checkout">
      <div class="top">
        <h1>Order Details</h1>
        <h2>subtotal</h2>
      </div>
      <div class="bottom">
          <h2>Total cost</h2>
          <p>1337 SEK</p>
          <button>Checkout</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.h1 {
  margin-right: 100rem;
}
.checkout {
   display: grid;
   height: 950px;
   width: 506px;
   background-color: gray;
   place-items: center;
   margin-left: 85rem;
}
button{
    background-color: #A10000;
    border-style: none;
    border-radius: 5px;
    color: #fff;
    /* font-size: 1rem; */
    font-weight: bold;
    padding: 1rem 2.5rem;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
</style>
