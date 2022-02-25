<template>
  <main>

<div class="confirm">
  <h1>Thank you for your order!</h1>
  <router-link to="/">Return home</router-link>
</div>

  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.confirm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  box-shadow: 0ch 0ch 10px #c9c6c6;
}
</style>
