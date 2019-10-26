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
    <p class="navbar-text navbar-right">Funds: {{ funds }}</p>
    <li class="nav-item navbar-right">
      <router-link to="#" activeClass="active">Save Data</router-link>
    </li>
    <li class="nav-item navbar-right">
      <router-link to="#" activeClass="active">Load Data</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>