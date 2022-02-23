<template>
  <div class="home">
    <div class="head">
      <div class="headContent">
        <div class="hero">
          <img src="@/assets/images/hero.png" alt="" />
        </div>
        <div class="rightside">
          <div class="headtop">
            <h1>Vi firar David Weekend!</h1>
            <h2>Spara upp till 70% på Davidtals deals!</h2>
          </div>
          <div class="headbot">
            <p>Var vill du börja?</p>
            <div class="buttons">
              <button>Kvinna</button>
              <button>Man</button>
              <button>Barn</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <h1>Havets Bästa Deals!</h1>
      <div class="productLibrary">
        <Product v-for="item in products" :key="item.id" :product="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
export default {
  components: { Product },
  computed: {
    products() {
      return this.$store.state.productsList;
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  font-family: Open, sans-serif;
}
.head {
  display: flex;
  height: 400px;
  width: 100%;
  background-color: rgba(161, 0, 0, 0.7);
  margin-left: auto;
  margin-right: auto;
  .headContent {
    display: flex;
    width: 55%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    .hero {
      width: 50%;
      height: 350px;
      margin-top: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .rightside {
      width: 50%;
      .headtop {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        margin-top: 3%;
        width: 100%;
        h1 {
          font-size: 2rem;
          color: white;
          margin: 0;
        }
        h2 {
          font-size: 1rem;
          color: white;
          margin: 0;
        }
      }
      .headbot {
        display: flex;
        flex-direction: column;
        margin-top: 25%;
        margin-bottom: 0;
        width: 100%;
        p {
          font-size: 1rem;
          color: white;
          margin-bottom: 10px;
          margin-left: 2rem;
        }
        .buttons {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          button {
            width: 150px;
            height: 50px;
            margin-left: 2rem;
            background: #ffffff;
            border-radius: 5px;
            border: none;
            font-weight: bold;
            font-size: 1.2rem;
            line-height: 25px;
            cursor: url('~@/assets/icons/David.svg'), auto;
            transition: background-color 0.5s;
            &:hover {
              background-color: rgb(255, 97, 97);
            }
          }
        }
      }
    }
  }
}

.main {
  background-color: #cacaca;
  height: 100%;
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  padding: 0;

  h1 {
    text-align: center;
    padding-top: 5%;
    margin-top: 0;
    font-family: Pirata One, sans-serif;
    font-size: 3rem;
    font-weight: 300;
    color: black;
  }

  .productLibrary {
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
}
</style>
