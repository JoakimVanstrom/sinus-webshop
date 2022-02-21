<template>
  <div class="home">
    <div class="header-home">
      <img
        src="../assets/images/PiravidHome.png"
        alt="Piravid Logo"
        width="400px"
      />
      <div class="text-top">
        <h2>Vi firar David Friday!</h2>
        <h4>Spara upp till 70% på Davidtals deals!</h4>

        <h4>Var vill du börja?</h4>
        <div class="button-bot">
          <button>Kvinna</button>
          <button>Man</button>
          <button>Barn</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // products(){
    //   return this.$store.state.productsList
    // }
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  background: rgba(161, 0, 0, 0.7);
  color: white;
}
.header-home {
  display: flex;
  justify-content: center;
  margin: 3rem;
}
.text-top {
  margin: 4rem;
}

button {
  color: black;
  background: white;
  margin: 1rem;
}
</style>
