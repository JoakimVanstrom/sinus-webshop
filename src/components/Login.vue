<template>
<div>
<div class="login-background"></div>
  <div class="container">
    <h4>Log in</h4>
    <form submit.prevent>
      <label>Email</label>
      <input type="email" />
      <label>Password</label>
      <input type="password" />
      <button>Log in / Create user</button>
    </form>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.login-background {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
}
.container {
  display: grid;
  z-index: 5;
  background-color: whitesmoke;
  h4 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 900;
  }
}
form {
  display: flex;
  flex-direction: column;

  label {
    margin: 0 1rem;
  }

  input {
    margin: 1rem;
    padding: 1rem 1.3rem;
  }

  button {
    padding: 1rem 1.3rem;
    background: rgb(138, 18, 18);
    margin: 1rem;
    border: none;
    border-radius: 0.4rem;
    color: white;
  }
}
</style>
