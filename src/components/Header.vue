<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <router-link activeClass="active" to="/">Stock Trader</router-link>
    </li>
    <!-- -->
    <li class="nav-item">
      <router-link to="/portfolio" activeClass="active">Portfolio</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/stocks" activeClass="active">Stocks</router-link>
    </li>
    <p class="navbar-text navbar-right">Funds: {{ funds | currency }}</p>
    <li class="nav-item navbar-right">
      <router-link to="#">Save Data</router-link>
    </li>
    <li class="nav-item navbar-right">
      <router-link to="#">Load Data</router-link>
    </li>
    <li class="nav-item navbar-right">
      <button class="btn btn-primary" @click="endDay">End Day</button>
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    }
  }
};
</script>

<style scoped>
ul {
  margin: 1rem;
}
</style>