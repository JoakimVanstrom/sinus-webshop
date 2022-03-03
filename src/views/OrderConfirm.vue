<template>
  <main>
    <div class="confirm">
      <h1>Thank you for your order!</h1>
      <router-link to="/">Return home</router-link>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.confirm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  box-shadow: 0ch 0ch 10px #c9c6c6;
  background: url("../assets/images/Piravid.png");
  background-size: cover;
  background-position: center;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
}
h1 {
  background: rgba(0, 0, 0, 0.705);
  color: rgb(255, 255, 255);
}
a {
  color: rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0.705);
}
</style>
