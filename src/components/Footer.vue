<template>
  <div class="footer">
    <div class="left">
      <img class="logo" src="@/assets/icons/pirateship.png" alt="" />
    </div>
    <div class="middle">
      <h2>Hjälp & Kontakt</h2>
      <div class="content">
        <div class="contact">
          <p>08-550 102 74</p>
          <p>Birger Jarlsgatan 58</p>
          <p>114 29 Stockholm</p>
        </div>
        <div class="actions">
          <p>Returnera en vara</p>
          <p>Leverans- och returkostnade</p>
          <p>Ändra användaruppgifter</p>
        </div>
      </div>
    </div>
    <div class="right">
      <h2>Paymnet methods</h2>
      <div class="content2">
        <span
          class="dc_payment_icons_flat_54 dc_mastercard_flat"
          title="MasterCard"
        ></span>
        <span
          class="dc_payment_icons_flat_54 dc_american_express_flat"
          title="American Express"
        ></span>
        <span
          class="dc_payment_icons_flat_54 dc_paypal_flat"
          title="PayPal"
        ></span>
        <span
          class="dc_payment_icons_flat_54 dc_maestro_flat"
          title="Maestro"
        ></span>
        <span
          class="dc_payment_icons_flat_54 dc_visa_electron_flat"
          title="Visa"
        ></span>
        <span
          class="dc_payment_icons_flat_54 dc_cirrus_flat"
          title="Cirrus"
        ></span>
        <span
          class="dc_payment_icons_flat_54 dc_delta_flat"
          title="Delta"
        ></span>
        <span
          class="dc_payment_icons_flat_54 dc_direct_debit_flat"
          title="Direct Debit"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 350px;
  width: 100%;
  background: #131313;
  color: white;
  font-family: Open, sans-serif;
  .left {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: auto;
    margin-bottom: auto;
    .logo {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      padding: 1rem 0;
    }
  }
  .middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-top: auto;
    margin-bottom: auto;
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .contact {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        p {
          margin-top: 0;
          font-size: 1.1rem;
        }
      }
      .actions {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        p {
          margin-top: 0;
          font-size: 1.1rem;
        }
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    .content2{
        width: 400px;
    }
  }
}
</style>
