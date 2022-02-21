<template>
  <main class="pay">
    
    <div class="sign-in">
      <button>SIGN IN</button>  
      <p>sign in for faster checkout</p>
      <p>Or CREATE ACCOUNT</p>
    </div>



  </main>
</template>

<script>
export default {

};
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
</style>
