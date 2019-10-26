import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes.js";
import store from "./store/store";

import App from "./App.vue";

Vue.use(VueRouter);

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
