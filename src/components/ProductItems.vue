<template>
  <div class="CardComponent">
    <div class="CardHolder">
      <img :src="getImage" alt="Product Card" />
    </div>
    <div class="CardBottom">
      <div class="left">
        <div class="content">
          <h2>{{product.title}} {{product.category}}</h2>
          <p>{{product.price}}kr</p>
        </div>
      </div>
      <div class="right">
        <button>
          <img src="@/assets/icons/risk-skull-2.png" alt="" />Pirate It!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['product'],
    computed: {
        getImage(){
            return require(`@/assets/images/${this.product.imgFile}`)
        }
    }
};
</script>

<style scoped lang="scss">
.CardComponent {
  background: white;
  font-family: sans-serif;
  max-width: 250px;
  height: 400px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }
  .CardHolder {
    width: 100%;
    height: 80%;
    background: whitesmoke;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .CardBottom {
    height: 20%;
    width: 100%;
    display: flex;
    .left {
      width: 70%;
      .content {
        padding: 10px;
        h2 {
          font-size: 1.1rem;
          padding: 0;
          margin: 0;
          margin-top: 10px
        }
        p {
          margin-top: 0px;
          font-size: 1.1rem;
        }
      }
    }
    .right {
      width: 30%;
      margin-left: auto;
      button {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        border-left: 1px solid gray;
        cursor: pointer;
        &:hover {
          background: rgb(255, 97, 97);
        }
      }
      img {
        transform: scale(0.8);
      }
    }
  }
}

@media only screen and (min-width: 600px) {
  .CardComponent {
    overflow: hidden;
  }
}
</style>
