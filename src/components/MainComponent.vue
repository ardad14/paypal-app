<template>
  <h2>Some text at component</h2>
  <div id="paypal-buttons"></div>
</template>

<script>
import { loadScript } from "@paypal/paypal-js";

export default {
  name: "MainComponent",
  beforeMount() {
    loadScript({
      "client-id":
        "AVbAx9Pund6uKaZK2WTNcEv150PNfaV73BH2NFqNC2hMS6fM-wwtDcnNaWaH_Gd4IdjSuO4iJbNTvhSh",
    })
      .then((paypal) => {
        paypal
          .Buttons()
          .render("#paypal-buttons")
          .catch((error) => {
            console.error("failed to render the PayPal Buttons", error);
          });
      })
      .catch((error) => {
        console.error("failed to load the PayPal JS SDK script", error);
      });
  },
  /*computed: {
    createOrder: function () {
      return (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "10",
              },
            },
          ],
        });
      };
    },
    onApprove: function () {
      return (data, actions) => {
        return actions.order.capture();
      }
    },
  },*/
};
</script>

<style scoped></style>
