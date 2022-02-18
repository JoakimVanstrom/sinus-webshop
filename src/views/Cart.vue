<template>
  <main>

    <div class="return-arrow">
      <img src="@/assets/icons/arrow-return-left.svg" height="50px"/>
    </div>

    <h1 class="h1">Mina Piravidsar</h1>

    <section class="products">
      <div>product 1</div>
      <div>product 2</div>
    </section>

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
*{
  margin: 0;
}
.return-arrow{
 display: grid;
  place-items: left;
}
.h1 {
  margin-right: 16rem;
}

.checkout {
 position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: grid;
  height: 950px;
  width: 506px;
  background-color: rgba(128, 128, 128, 0.493);
  place-items: center;
  margin-left: 85rem;
}
.top {
  margin-bottom: 500px;
}
button {
  background-color: #a10000;
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
