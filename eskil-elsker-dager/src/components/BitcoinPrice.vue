<template>
  <div>
    <img width="auto" height="50" src="/static/img/bitcoin.png" alt="Bitcoin Price">
    <div v-for="currency in info" class="currency">
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span>
        {{ currency.rate_float | currencydecimal }}
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BitcoinPrice",
  data() {
    return {
      info: null
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    }
  },
  methods: {
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response.data.bpi));
  }
};
</script>

<style scoped>

</style>
