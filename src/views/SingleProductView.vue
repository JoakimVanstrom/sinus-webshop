<template>
  <div class="SingleProductView">
    <div class="MainHead">
      <div class="HeadContent">
        <div class="ProductImg">
          <!--<img :src="product.image" alt="">-->
        </div>
        <div class="ProductHeadInfo">
          <h1 class="ProductTitle">Placeholder Title</h1>
          <p class="PiravidQuote">
            The perfect fit for a pirate like yourself! - David "Piravid"
            Lundholm
          </p>
          <div class="ProductPrice">
            <button class="BuyButton">Röva den!</button>
            <h2>1337 kr</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="ProductMain">
      <div class="ProductDesc">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dicta
          at quos magni eveniet, odio eos nesciunt, consectetur dignissimos
          dolor vero quis quisquam eius. Accusamus suscipit atque harum magnam
          autem assumenda non inventore voluptatum? Tenetur voluptas perferendis
          dolorum qui numquam aliquam quos obcaecati rem veniam, esse placeat
          reprehenderit corporis odit!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.SingleProductView {
  width: 100%;
}
.MainHead {
  display: flex;
  height: 400px;
  width: 100%;
  background-color: rgba(161, 0, 0, 0.7);
  margin-left: auto;
  margin-right: auto;

  .HeadContent {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    display: flex;
    flex-direction: row;

    .ProductImg {
      width: 350px;
      height: 500px;
      background-color: black;
      transform: translateY(30%);
    }

    .ProductHeadInfo {
      width: 50%;
      display: flex;
      flex-direction: column;
      margin-top: auto;
      margin-bottom: 40px;
      margin-left: 20px;

      .ProductTitle {
        font-size: 3rem;
        color: #ffffff;
      }
      .PiravidQuote {
        margin-top: 0;
        width: 58%;
        color: #ffffff;
        text-align: right;
      }

      .ProductPrice {
        display: flex;
        flex-direction: row;
        width: 50%;
        height: 50px;
        justify-content: space-between;

        .BuyButton {
          background-color: #ffffff;
          color: #000000;
          width: 150px;
          height: 40px;
          font-size: 20px;
          font-weight: bold;
          padding: 10px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          margin-top: auto;
          margin-bottom: auto;
        }
        h2 {
          font-size: 1.2rem;
          color: black;
        }
      }
    }
  }
}
.ProductMain {
  background-color: #cacaca;
  height: 50vh;
  width: 100%;
  margin-top: 0;
  padding: 0;

  .ProductDesc {
    margin-top: 10px;
    width: 30%;
    margin-left: auto;
    margin-right: 25.5%;
    margin-top: 0;

    p {
      padding: 2rem 0rem 0rem 0rem;
      margin: 0;
      font-size: 1.5rem;
    }
  }
}
</style>
